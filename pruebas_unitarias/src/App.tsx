import React, { useState } from "react";
import PasswordValidator from "./components/PasswordValidator";

function App() {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handlePasswordChange = (newPassword: string, valid: boolean) => {
    setPassword(newPassword);
    setIsValid(valid);
  };
 
  return (
    <div style={{ padding: "2rem", textAlign: "center", fontFamily: "Arial" }}>
      <h1>🔐 Validador de Contraseñas</h1>

      <PasswordValidator onPasswordChange={handlePasswordChange} />

      {isValid !== null && (
        <p
          style={{
            marginTop: "1rem",
            color: isValid ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {isValid
            ? "✅ Contraseña válida. ¡Buen trabajo!"
            : "❌ Contraseña inválida. Revisa los requisitos."}
        </p>
      )}
    </div>
  );
}

export default App;
