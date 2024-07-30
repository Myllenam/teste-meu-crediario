import { type IFilterDashboardPageForm, type IDashboardResponse } from "src/models";
import { httpService } from "./http.service";
import { ParameterBuilder } from "src/utils";

export class DashboardService {
  async dashboardCharts(
    params: IFilterDashboardPageForm,
    showError: (error: number) => void,
  ): Promise<IDashboardResponse | null> {
    const parameterBuilder = new ParameterBuilder().addRangeDate(
      params.startDate,
      params.endDate,
      "startDate",
      "endDate",
    );
    try {
      const { data } = await httpService.http.get<IDashboardResponse>("/dashboard", {
        params: parameterBuilder.toJson(),
      });
      return data;
    } catch (error: any) {
      console.error(error);
      showError(error);
    }

    return null;
  }
}

export const dashboardService = new DashboardService();
