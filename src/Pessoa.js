const Endereco = require("./Endereco");

class Pessoa {
  #nome;
  #endereco;

  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
  }

  get nome() {
    return this.#nome;
  }

  set nome(valor) {
    if (typeof valor !== "string" || valor.trim().length < 3) {
      throw new Error("O nome deve ter ao menos 3 caracteres.");
    }
    this.#nome = valor.trim();
  }

  get endereco() {
    return this.#endereco;
  }

  set endereco(valor) {
    if (!(valor instanceof Endereco)) {
      throw new Error("O endereço deve ser uma instância da classe Endereco.");
    }
    this.#endereco = valor;
  }

  exibirDados() {
    return `Nome: ${this.nome}\nEndereço: ${this.endereco}`;
  }
}

module.exports = Pessoa;
