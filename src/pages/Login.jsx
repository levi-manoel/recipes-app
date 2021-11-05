import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(true);

  const MINIMUM_CHARACTERS = 6;

  // Código abaixo de validar email visualizado em Stack Overflow
  // URL: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  function validateEmail(emailInput) {
    const re = /\S+@\S+\.\S+/;
    return re.test(emailInput);
  }

  function inputEmail(value) {
    setEmail(value);
    const isEmailValid = validateEmail(value);
    if (isEmailValid) setEmailInvalid(false);
    if (!isEmailValid) setEmailInvalid(true);
  }

  function buttonDisabled() {
    if (emailInvalid === false && password.length > MINIMUM_CHARACTERS) {
      return false;
    }
    return true;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <input
        data-testid="email-input"
        type="email"
        placeholder="Email"
        value={ email }
        onChange={ ({ target }) => inputEmail(target.value) }
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="Senha"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        data-testid="login-submit-btn"
        type="button"
        disabled={ buttonDisabled() }
      >
        {' '}
        Entrar

      </button>
    </div>
  );
}
