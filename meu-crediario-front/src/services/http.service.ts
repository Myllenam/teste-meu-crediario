import axios, { type InternalAxiosRequestConfig, type AxiosError, type AxiosInstance } from "axios";

import { AuthService } from "./auth.service";
import { type IRefreshTokenResponse } from "src/models";
import { setUnauthorizedError } from "src/utils";

export class HttpService {
  private readonly authService: AuthService;
  http: AxiosInstance;

  constructor(authService: AuthService) {
    this.authService = authService;
    this.http = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
    });

    this.http.interceptors.request.use((config) => {
      const token = this.authService.getTokenIfExists();
      if (token && config.headers) {
        config.headers.setAuthorization(`Bearer ${token}`);
      }
      return config;
    });

    this.http.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        return await this.handleError(error);
      },
    );
  }

  private async refreshToken(refreshToken: string): Promise<boolean> {
    try {
      const { data } = await this.http.post<IRefreshTokenResponse>("/auth/refresh", {
        refreshToken,
      });
      this.authService.saveToken(data.token);
      return true;
    } catch (error) {
      return false;
    }
  }

  private async retryRequest(
    request: InternalAxiosRequestConfig<any>,
  ): Promise<AxiosInstance | null> {
    try {
      return await this.http(request);
    } catch (error) {
      return null;
    }
  }

  private async handleError(error: AxiosError): Promise<AxiosError | AxiosInstance> {
    const url = error?.config?.url || "";
    const isRefreshError = url.includes("refresh");
    const isAuthError = url.includes("auth");
    const isUnauthorizedError = error?.response?.status === 401 && !isRefreshError && !isAuthError;

    if (isUnauthorizedError) {
      const originalRequest = error.config;
      const refreshToken = this.authService.getRefreshTokenIfExists();

      let successOnRefreshToken = false;
      if (refreshToken) {
        successOnRefreshToken = await this.refreshToken(refreshToken);
      }

      if (successOnRefreshToken && originalRequest) {
        const axiosInstance = await this.retryRequest(originalRequest);

        if (axiosInstance) {
          return axiosInstance;
        } else {
          this.logout();
        }
      } else {
        this.logout();
      }
    }

    return await Promise.reject(error);
  }

  private logout(): void {
    this.authService.logout();
    setUnauthorizedError(true);
    window.location.reload();
  }
}

export const httpService = new HttpService(new AuthService());
