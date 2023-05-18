function imcMarcos({ peso, altura, tallaZapato }) {
  // peso * altura * talla del zapato
  return peso * altura * tallaZapato;
}

let medidas = {
  peso: 67, // kg
  altura: 173, // cm
  tallaZapato: 42,
};

console.log(imcMarcos(medidas));
