export const formatMoneyValue = (valor: number): string => {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
};
