export const phoneNumberMask = [
  "(",
  /[1-9]/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const cpfMask = [
  /[1-9]/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

export const cnpjMask = [
  /[1-9]/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

export const cepMask = [/[1-9]/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];

export function cep(e) {
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  // value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4");
  e.currentTarget.value = value;

  return e;
}

export function currancy(e) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

  e.currentTarget.value = value;
  return e;
}

export function money(value = "") {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

  return value;
}

export function formatCPF(e) {
  e.currentTarget.maxLength = 14;
  let value = e.currentTarget.value;
  if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
    e.currentTarget.value = value;
  }
  return e;
}

export function phone(str) {
  let value = str;
  if (!value.match(/^(\d{2}) (\d{9})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  }

  return value;
}

export function formatCellPhone(e) {
  e.currentTarget.maxLength = 15;
  let value = e.currentTarget.value;
  if (!value.match(/^(\d{2}) (\d{9})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    e.currentTarget.value = value;
  }
  return e;
}

export function cnpj(e) {
  e.currentTarget.maxLength = 18;
  let value = e.currentTarget.value;
  if (!value.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1/$2");
    value = value.replace(/(\d{4})(\d{2})$/, "$1-$2");
    e.currentTarget.value = value;
  }
  return e;
}

export function document(e) {
  e.currentTarget.maxLength = 18;
  let value = e.currentTarget.value;
  if (value.length <= 14 && !value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
    e.currentTarget.value = value;
  } else if (
    value.length > 14 &&
    !value.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)
  ) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1/$2");
    value = value.replace(/(\d{4})(\d{2})$/, "$1-$2");
    e.currentTarget.value = value;
  }

  return e;
}

export function percentage(e) {
  e.currentTarget.maxLength = 18;
  let value = e.currentTarget.value;
  if (!value.match(/^\d{1}\.\d{17}$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{1})(\d)/, "$1.$2");
    e.currentTarget.value = value;
  }
  return e;
}

export function dd(e) {
  e.currentTarget.maxLength = 2;
  let value = e.currentTarget.value;
  if (!value.match(/^\d{1}\d{2}$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{1})(\d)/, "$1$2");
    e.currentTarget.value = value;
  }
  return e;
}

export function phoneNumber(e) {
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value;
  if (!value.match(/^\d{1}\d{8}$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{1})(\d)/, "$1$2");
    e.currentTarget.value = value;
  }
  return e;
}
