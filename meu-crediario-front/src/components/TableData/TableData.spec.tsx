import { render, screen } from "@testing-library/react";

import { TableData } from ".";
import { TestAppThemeProvider } from "src/tests";
import { type IDataTableColumns } from "src/models";

describe("DataTable", () => {
  const columns: IDataTableColumns[] = [
    {
      headerName: "Column one",
    },
    {
      headerName: "Column two",
    },
  ];

  const setup = (): void => {
    render(
      <TestAppThemeProvider>
        <TableData columns={columns}>
          <tr data-testid="table-row"></tr>
        </TableData>
      </TestAppThemeProvider>,
    );
  };

  test("should render the component", () => {
    setup();
    expect(screen.getByTestId("data-table-component")).toBeInTheDocument();
  });

  test("should render children", () => {
    setup();
    expect(screen.getByTestId("table-row")).toBeInTheDocument();
  });
});
