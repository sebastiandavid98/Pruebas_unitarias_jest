import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PasswordValidator from "./PasswordValidator";

describe("PasswordValidator", () => {
  test("muestra mensaje de contraseña inválida por defecto", () => {
    render(<PasswordValidator />);
    expect(screen.getByText("❌ Contraseña inválida")).toBeInTheDocument();
  });

  test("muestra mensaje de contraseña válida cuando cumple los requisitos", () => {
    render(<PasswordValidator />);
    const input = screen.getByPlaceholderText("Ingresa una contraseña");
    fireEvent.change(input, { target: { value: "Hola1234" } });
    expect(screen.getByText("✅ Contraseña válida")).toBeInTheDocument();
  });

  test("vuelve a mostrar mensaje inválido cuando la contraseña no cumple", () => {
    render(<PasswordValidator />);
    const input = screen.getByPlaceholderText("Ingresa una contraseña");
    fireEvent.change(input, { target: { value: "abc" } });
    expect(screen.getByText("❌ Contraseña inválida")).toBeInTheDocument();
  });
});
