import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ClickCounter from "./ClickCounter";

test("incrementa el contador al hacer clic", () => {
  render(<ClickCounter />);
  const button = screen.getByText("Incrementar");
  fireEvent.click(button);
  expect(screen.getByText("Contador: 1")).toBeInTheDocument();
});
