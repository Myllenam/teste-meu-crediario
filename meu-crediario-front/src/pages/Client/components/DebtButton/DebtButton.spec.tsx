import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DebtButton } from ".";
import { TestAppThemeProvider } from "src/tests";

describe("DebtButton", () => {
  let mockOnClick = vi.fn();

  const setup = (): void => {
    mockOnClick = vi.fn();
    render(
      <TestAppThemeProvider>
        <DebtButton onOpenDialog={mockOnClick} />
      </TestAppThemeProvider>,
    );
  };

  test("should render the component", () => {
    setup();
    expect(screen.getByTestId("debt-button")).toBeInTheDocument();
  });

  test("should call the click function", async () => {
    setup();
    const user = userEvent.setup();
    const btn = screen.getByTestId("debt-button");
    await user.click(btn);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
