function Total({ array }) {
  const valorInicial = 0;
  const valoresPositivos = array.filter((obj) => {
    return obj.type === "Entradas";
  });
  const valoresNegativos = array.filter((obj) => {
    return obj.type === "Despesas";
  });

  const somaPositivos = valoresPositivos.reduce((acumulador, atual) => {
    return acumulador + atual.value;
  }, valorInicial);
  const somaNegativos = valoresNegativos.reduce((acumulador, atual) => {
    return acumulador + atual.value;
  }, valorInicial);
  const saldo = somaPositivos - somaNegativos;

  return (
    <div className="div-total-container">
      <div className="total-text">
        <p className="p-card-bold">Valor total:</p>
        <p className="p-card-light">O valor se refere ao saldo</p>
      </div>
      <p className="total-money"> ${saldo}</p>
    </div>
  );
}
export default Total;
