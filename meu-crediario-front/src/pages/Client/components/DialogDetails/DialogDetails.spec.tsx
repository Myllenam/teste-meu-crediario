import { vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { DialogDetails } from ".";
import { TestAppThemeProvider } from "src/tests";

describe("DialogDetails", () => {
  const onMock = vi.fn();
  const setup = (): void => {
    render(
      <TestAppThemeProvider>
        <DialogDetails
          onClose={onMock}
          open={true}
          quotaData={[
            {
              valorvencimento: 12,
              datavencimento: "2017-06-23",
              dataultimopagamento: "2017-06-08",
              totalpago: 17,
              capitalaberto: 0,
            },
          ]}
        />
      </TestAppThemeProvider>,
    );
  };

  test("should render the component", () => {
    setup();
    expect(screen.getByTestId("dialog-details")).toBeInTheDocument();
  });

  test("should show formatted value", () => {
    setup();
    expect(screen.getByText("R$ 12,00")).toBeInTheDocument();
  });

  test("should show formatted date", () => {
    setup();
    expect(screen.getByText("08/06/2017")).toBeInTheDocument();
  });
});
