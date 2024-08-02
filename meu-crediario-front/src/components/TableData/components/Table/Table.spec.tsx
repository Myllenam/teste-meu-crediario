import { render, screen } from "@testing-library/react";

import { Table } from ".";
import { TestAppThemeProvider } from "src/tests";
import { type IDataTableColumns } from "src/models";

describe("Table", () => {
  const setup = (): void => {
    const columns: IDataTableColumns[] = [
      { headerName: "Column one" },
      { headerName: "Column two" },
    ];

    render(
      <TestAppThemeProvider>
        <Table columns={columns}>
          <tr data-testid="table-row"></tr>
        </Table>
      </TestAppThemeProvider>,
    );
  };

  test("should render the component", () => {
    setup();
    expect(screen.getByTestId("table-component")).toBeInTheDocument();
  });

  test("should render columns", () => {
    setup();
    expect(screen.getByText("Column one")).toBeInTheDocument();
  });

  test("should render children", () => {
    setup();
    expect(screen.getByTestId("table-row")).toBeInTheDocument();
  });
});
