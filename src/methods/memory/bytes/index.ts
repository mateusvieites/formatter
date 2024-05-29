const bytesToGb = (bytes: number, isDecimal: boolean = false) : number => {
  const gb: number = (isDecimal ? 1000 : 1024) ^ 3;
  const result = bytes / gb;

  if (bytes % gb === 0) throw 'Valor não é um booleano';

  return result;
};
