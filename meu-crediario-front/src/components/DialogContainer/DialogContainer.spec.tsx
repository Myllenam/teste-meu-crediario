import { render, screen } from "@testing-library/react";

import { DialogContainer } from ".";
import { TestAppThemeProvider } from "src/tests";
import { vi } from "vitest";

describe("CommonLayout", () => {
  const setup = (): void => {
    const onMock = vi.fn();
    render(
      <TestAppThemeProvider>
        <DialogContainer
          dialogHeaderDetails={{ icon: <p></p>, text: "teste" }}
          open={true}
          onClose={onMock}
        >
          <p>teste</p>
        </DialogContainer>
      </TestAppThemeProvider>,
    );
  };

  test("should render the component", () => {
    setup();
    expect(screen.getByTestId("table-dialog-container")).toBeInTheDocument();
  });
});
