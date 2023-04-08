const precoCombustivel = 5.79;
const KmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / KmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto);
