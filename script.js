class Calculadora {
    constructor() {
      this.visor = document.querySelector(".visor");
      this.botoes = document.querySelectorAll("button");
      this.operacao = "";
      this.num1 = 0;
      this.num2 = 0;
      this.displayLimit = 8;
    }
  
    iniciar() {
      this.botoes.forEach(botao => {
        botao.addEventListener("click", e => {
          this.atualizarVisor(e.target.innerHTML);
        });
      });
    }
  
    atualizarVisor(valor) {
      if (valor === "C") {
        this.operacao = "";
        this.num1 = 0;
        this.num2 = 0;
        this.visor.innerHTML = "0";
      } else if (valor === "+" || valor === "-" || valor === "x" || valor === "/") {
        this.operacao = valor;
        this.num1 = parseFloat(this.visor.innerHTML);
        this.visor.innerHTML = "0";
      } else if (valor === "=") {
        this.num2 = parseFloat(this.visor.innerHTML);
        this.executarOperacao();
      } else {
        if (this.visor.innerHTML === "0") {
          this.visor.innerHTML = valor;
        } else if (this.visor.innerHTML.length < this.displayLimit) {
          this.visor.innerHTML += valor;
        }
      }
    }
  
    executarOperacao() {
      switch (this.operacao) {
        case "+":
          this.visor.innerHTML = this.num1 + this.num2;
          break;
        case "-":
          this.visor.innerHTML = this.num1 - this.num2;
          break;
        case "x":
          this.visor.innerHTML = this.num1 * this.num2;
          break;
        case "/":
          this.visor.innerHTML = this.num1 / this.num2;
          break;
      }
    }
  }
  
  const calculadora = new Calculadora();
  calculadora.iniciar();