import React from 'react';
import { Button } from './Button';
import { Input } from './Input';

const Form = () => {
  return (
    <div>
      <Input id="email" label="E-mail" required />
      <Input id="senha" type="password" label="Senha" />
      <Button />
    </div>
  );
};

export default Form;
