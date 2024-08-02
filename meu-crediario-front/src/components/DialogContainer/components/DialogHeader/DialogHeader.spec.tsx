import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DialogHeader } from ".";
import { TestAppThemeProvider } from "src/tests";

const mockOnClose = vi.fn();

describe("DialogHeader", () => {
  const setup = (): void => {
    render(
      <TestAppThemeProvider>
        <DialogHeader onClose={mockOnClose} details={{ text: "Test", icon: <p></p> }} />
      </TestAppThemeProvider>,
    );
  };

  test("should render the component", () => {
    setup();
    expect(screen.getByTestId("dialog-header")).toBeInTheDocument();
  });

  test("should render title", () => {
    setup();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("should close the dialog", async () => {
    setup();
    const user = userEvent.setup();
    const button = screen.getByTestId("close-dialog-button");
    await user.click(button);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
