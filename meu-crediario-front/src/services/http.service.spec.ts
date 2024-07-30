import { vi } from "vitest";
import { HttpService } from "./http.service";
import { AuthService } from "./auth.service";
import { type AxiosError } from "axios";

let mockLogout = vi.fn();
let mockRefreshToken = vi.fn(async (token: string) => true);
let mockRetryRequest = vi.fn(async (request: any): Promise<any> => ({}));
const mockTokens = {
  refreshToken: "123",
};

describe("HttpService", () => {
  let httpService: HttpService;

  const execute = async (error: Partial<AxiosError>, refreshToken = "123"): Promise<any> => {
    mockTokens.refreshToken = refreshToken;
    try {
      return await httpService["handleError"](error as any); // eslint-disable-line
    } catch (error: any) {
      return error;
    }
  };

  beforeEach(() => {
    mockLogout = vi.fn();
    mockRefreshToken = vi.fn(async (token: string): Promise<boolean> => true);
    mockRetryRequest = vi.fn(async (request: any) => ({ test: "123" }));

    const authService = new AuthService();
    authService.getRefreshTokenIfExists = () => mockTokens.refreshToken;

    httpService = new HttpService(authService);
    httpService["refreshToken"] = mockRefreshToken; // eslint-disable-line
    httpService["retryRequest"] = mockRetryRequest; // eslint-disable-line
    httpService["logout"] = mockLogout; // eslint-disable-line
  });

  test("should refresh token", async () => {
    const mockError: Partial<AxiosError> = {
      config: {
        url: "payments",
      } as any,
      response: {
        status: 401,
      } as any,
    };

    const axiosInstance = await execute(mockError);

    expect(mockRefreshToken).toHaveBeenCalled();
    expect(mockRetryRequest).toHaveBeenCalled();
    expect(mockLogout).not.toHaveBeenCalled();
    expect(axiosInstance).toBeTruthy();
  });

  test("should not refresh token when is login error", async () => {
    const mockError: Partial<AxiosError> = {
      config: {
        url: "auth",
      } as any,
      response: {
        status: 401,
      } as any,
    };

    const error = await execute(mockError);

    expect(mockRefreshToken).not.toHaveBeenCalled();
    expect(mockRetryRequest).not.toHaveBeenCalled();
    expect(mockLogout).not.toHaveBeenCalled();
    expect(error).toBeDefined();
  });

  test("should not refresh token when is refresh error", async () => {
    const mockError: Partial<AxiosError> = {
      config: {
        url: "refresh",
      } as any,
      response: {
        status: 401,
      } as any,
    };

    const error = await execute(mockError);

    expect(mockRefreshToken).not.toHaveBeenCalled();
    expect(mockRetryRequest).not.toHaveBeenCalled();
    expect(mockLogout).not.toHaveBeenCalled();
    expect(error).toBeDefined();
  });

  test("should not refresh token when not is 401 status code", async () => {
    const mockError: Partial<AxiosError> = {
      config: {
        url: "payments",
      } as any,
      response: {
        status: 500,
      } as any,
    };

    const error = await execute(mockError);

    expect(mockRefreshToken).not.toHaveBeenCalled();
    expect(mockRetryRequest).not.toHaveBeenCalled();
    expect(mockLogout).not.toHaveBeenCalled();
    expect(error).toBeDefined();
  });

  test("should make logout when failed on refreshToken", async () => {
    const mockError: Partial<AxiosError> = {
      config: {
        url: "payments",
      } as any,
      response: {
        status: 401,
      } as any,
    };

    mockRefreshToken = vi.fn(async (token: string): Promise<boolean> => false);
    httpService["refreshToken"] = mockRefreshToken; // eslint-disable-line
    const error = await execute(mockError);

    expect(mockRefreshToken).toHaveBeenCalled();
    expect(mockRetryRequest).not.toHaveBeenCalled();
    expect(mockLogout).toHaveBeenCalled();
    expect(error).toBeDefined();
  });

  test("should make logout when failed on retryRequest after refreshToken", async () => {
    const mockError: Partial<AxiosError> = {
      config: {
        url: "payments",
      } as any,
      response: {
        status: 401,
      } as any,
    };

    mockRetryRequest = vi.fn(async (request: any) => null);
    httpService["retryRequest"] = mockRetryRequest; // eslint-disable-line
    const error = await execute(mockError);

    expect(mockRefreshToken).toHaveBeenCalled();
    expect(mockRetryRequest).toHaveBeenCalled();
    expect(mockLogout).toHaveBeenCalled();
    expect(error).toBeDefined();
  });

  test("should make logout when failed on get refreshToken", async () => {
    const mockError: Partial<AxiosError> = {
      config: {
        url: "payments",
      } as any,
      response: {
        status: 401,
      } as any,
    };

    const error = await execute(mockError, "");

    expect(mockRefreshToken).not.toHaveBeenCalled();
    expect(mockRetryRequest).not.toHaveBeenCalled();
    expect(mockLogout).toHaveBeenCalled();
    expect(error).toBeDefined();
  });
});
