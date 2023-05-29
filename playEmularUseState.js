function useState(valorInicial) {
  const estadoInicial = valorInicial;

  const functionParaActualizarElEstado = (nuevoEstado) =>
    console.log("ACtualizo el valor del estado a " + nuevoEstado);

  return [estadoInicial, functionParaActualizarElEstado];
}

const [emailFormulario, setEmailFormulario] = useState("hola");

console.log(emailFormulario);
console.log(setEmailFormulario);
