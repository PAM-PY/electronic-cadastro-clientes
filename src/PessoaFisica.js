const Pessoa = require("./Pessoa");

class PessoaFisica extends Pessoa {
  #cpf;
  #dataNascimento;

  constructor(nome, cpf, dataNascimento, endereco) {
    super(nome, endereco);
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
  }

  get cpf() {
    return this.#cpf;
  }

  set cpf(valor) {
    const apenasDigitos = String(valor ?? "").replace(/[.\-/\s]/g, "");
    if (!/^\d{11}$/.test(apenasDigitos)) {
      throw new Error("O CPF deve conter exatamente 11 dígitos.");
    }
    this.#cpf = apenasDigitos;
  }

  get dataNascimento() {
    return this.#dataNascimento;
  }

  set dataNascimento(valor) {
    if (typeof valor !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
      throw new Error("A data de nascimento deve estar no formato AAAA-MM-DD.");
    }

    const [ano, mes, dia] = valor.split("-").map(Number);
    const data = new Date(ano, mes - 1, dia);
    const dataValida = data.getFullYear() === ano &&
      data.getMonth() === mes - 1 &&
      data.getDate() === dia;

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (!dataValida) {
      throw new Error("A data de nascimento informada não é válida.");
    }
    if (data > hoje) {
      throw new Error("A data de nascimento não pode estar no futuro.");
    }

    this.#dataNascimento = valor;
  }

  exibirDados() {
    return `Tipo: Pessoa Física\nNome: ${this.nome}\nCPF: ${this.cpf}\nData de nascimento: ${this.dataNascimento}\nEndereço: ${this.endereco}`;
  }
}

module.exports = PessoaFisica;
