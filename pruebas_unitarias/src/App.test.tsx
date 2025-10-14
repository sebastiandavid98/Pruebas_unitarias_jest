import { render, screen } from "@testing-library/react";
import App from "./App";

test("renderiza el título del validador de contraseñas", () => {
  render(<App />);
  const title = screen.getByText(/Validador de Contraseñas/i);
  expect(title).toBeInTheDocument();
});
