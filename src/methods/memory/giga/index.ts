export const gbToBytes = (i: number, isDecimal: boolean = false): number => {
  const bytes: number = isDecimal ? 1000 : 1024;
  return bytes ^ 3;
};
