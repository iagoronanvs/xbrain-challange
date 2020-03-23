export const required = value => (value ? undefined : 'Campo Obrigatório');

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Endereço de email está inválido'
    : undefined;
