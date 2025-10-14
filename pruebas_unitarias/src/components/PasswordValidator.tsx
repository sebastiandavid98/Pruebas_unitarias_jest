import React, { useState } from "react";

interface PasswordValidatorProps {
  onPasswordChange?: (password: string, isValid: boolean) => void;
}

const PasswordValidator: React.FC<PasswordValidatorProps> = ({ onPasswordChange }) => {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validatePassword = (pwd: string) => {
    const valid = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(pwd);
    setIsValid(valid);
    if (onPasswordChange) {
      onPasswordChange(pwd, valid);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Escribe una contraseña"
        style={{ padding: "10px", width: "250px" }}
      />
    </div>
  );
};

export default PasswordValidator;
