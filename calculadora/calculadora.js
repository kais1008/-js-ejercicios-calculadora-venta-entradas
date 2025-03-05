let visor = document.querySelector("#visor");
let operador = null;
let valorAnterior = null;

function preencher(num) {
  visor.value += num;
}

function operacao(op) {
  if (visor.value === "") return;
  operador = op;
  valorAnterior = parseFloat(visor.value);
  visor.value = "";
}

function calcular() {
  if (operador === null || visor.value === "") return;
  const valorAtual = parseFloat(visor.value);
  let resultado;

  switch (operador) {
    case "+":
      resultado = valorAnterior + valorAtual;
      break;
    case "-":
      resultado = valorAnterior - valorAtual;
      break;
    case "*":
      resultado = valorAnterior * valorAtual;
      break;
    case "/":
      resultado = valorAtual !== 0 ? valorAnterior / valorAtual : "Error";
      break;
  }
  visor.value = resultado;
  operador = null;
  valorAnterior = null;
}

function zerar() {
  visor.value = "";
  operador = null;
  valorAnterior = null;
}

function backspace() {
  visor.value = visor.value.slice(0, -1);
}

function maisMenos() {
  if (visor.value !== "") {
    visor.value = parseFloat(visor.value) * -1;
  }
}

function porcentagem() {
  if (visor.value !== "") {
    visor.value = parseFloat(visor.value) / 100;
  }
}

function ponto() {
  if (!visor.value.includes(".")) {
    visor.value += ".";
  }
}
