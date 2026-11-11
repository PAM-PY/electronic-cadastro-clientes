const Pessoa = require("./Pessoa");

class PessoaJuridica extends Pessoa {
  #cnpj;
  #razaoSocial;

  constructor(nome, cnpj, razaoSocial, endereco) {
    super(nome, endereco);
    this.cnpj = cnpj;
    this.razaoSocial = razaoSocial;
  }

  get cnpj() {
    return this.#cnpj;
  }

  set cnpj(valor) {
    const apenasDigitos = String(valor ?? "").replace(/[.\-/\s]/g, "");
    if (!/^\d{14}$/.test(apenasDigitos)) {
      throw new Error("O CNPJ deve conter exatamente 14 dígitos.");
    }
    this.#cnpj = apenasDigitos;
  }

  get razaoSocial() {
    return this.#razaoSocial;
  }

  set razaoSocial(valor) {
    if (typeof valor !== "string" || valor.trim().length === 0) {
      throw new Error("A razão social é obrigatória.");
    }
    this.#razaoSocial = valor.trim();
  }

  exibirDados() {
    return `Tipo: Pessoa Jurídica\nNome: ${this.nome}\nCNPJ: ${this.cnpj}\nRazão social: ${this.razaoSocial}\nEndereço: ${this.endereco}`;
  }
}

module.exports = PessoaJuridica;
