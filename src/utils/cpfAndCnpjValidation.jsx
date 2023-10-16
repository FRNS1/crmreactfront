export const checkCpf = (strCPF) => {
  let data = strCPF.replace(".","");
  data = data.replace(".","");
  data = data.replace("-","");

  let Soma;
  let Resto;
  let i;
  Soma = 0;
  if (data === "00000000000") return false;

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(data.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(data.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(data.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(data.substring(10, 11))) return false;
  return true;
};


//Verifca se o CNPJ é válido
export const verifyCNPJ = (cnpj) => {
  let data = cnpj.replace(".","");
  data = data.replace(".","");
  data = data.replace("/","");
  data = data.replace("-","");

  let soma;
  let resultado;
  let i;
  let tamanho;
  let numeros;
  let digitos;
  let pos;

  data = data.replace(/[^\d]+/g, "");

  if (data.length !== 14) return false;

  // Elimina CNPJs invalidos conhecidos
  if (
    data === "00000000000000" ||
    data === "11111111111111" ||
    data === "22222222222222" ||
    data === "33333333333333" ||
    data === "44444444444444" ||
    data === "55555555555555" ||
    data === "66666666666666" ||
    data === "77777777777777" ||
    data === "88888888888888" ||
    data === "99999999999999"
  )
    return false;

  // Valida DVs
  tamanho = data.length - 2;
  numeros = data.substring(0, tamanho);
  digitos = data.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== digitos.charAt(0)) return false;

  tamanho = tamanho + 1;
  numeros = data.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== digitos.charAt(1)) return false;

  return true;
};
