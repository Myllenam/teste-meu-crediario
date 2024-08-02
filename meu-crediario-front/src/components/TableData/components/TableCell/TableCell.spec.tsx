import { render, screen } from "@testing-library/react";

import { DataTableCell } from ".";
import { TestAppThemeProvider } from "src/tests";
import { Table, TableBody, TableRow } from "@mui/material";

describe("TableCell", () => {
  const text = "Table cell";

  const setup = (isComponent = false): void => {
    render(
      <TestAppThemeProvider>
        <Table>
          <TableBody>
            <TableRow>
              <DataTableCell isComponent={isComponent}>
                {isComponent ? <div data-testid="custom-cell">{text}</div> : text}
              </DataTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TestAppThemeProvider>,
    );
  };

  test("should render the component", () => {
    setup();
    expect(screen.getByTestId("data-table-cell-component")).toBeInTheDocument();
  });

  test("should show the text", () => {
    setup();
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test("should show the custom-component", () => {
    setup(true);
    expect(screen.getByTestId("custom-cell")).toBeInTheDocument();
  });
});
