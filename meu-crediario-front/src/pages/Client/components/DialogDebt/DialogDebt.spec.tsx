import { vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { DialogDebt } from ".";
import { TestAppThemeProvider } from "src/tests";

describe("DialogDebt", () => {
  const onMock = vi.fn();
  const setup = (): void => {
    render(
      <TestAppThemeProvider>
        <DialogDebt
          debtData={{ mes: "09/2017", total_aberto: 22.22 }}
          onClose={onMock}
          open={true}
        />
      </TestAppThemeProvider>,
    );
  };

  test("should render the component", () => {
    setup();
    expect(screen.getByTestId("dialog-debt")).toBeInTheDocument();
  });

  test("should show formatted value", () => {
    setup();
    expect(screen.getByText("R$ 22,22")).toBeInTheDocument();
  });
});
