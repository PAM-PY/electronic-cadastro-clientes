class Endereco {
  #logradouro;
  #numero;
  #cidade;
  #uf;

  constructor(logradouro, numero, cidade, uf) {
    this.logradouro = logradouro;
    this.numero = numero;
    this.cidade = cidade;
    this.uf = uf;
  }

  get logradouro() {
    return this.#logradouro;
  }

  set logradouro(valor) {
    if (typeof valor !== "string" || valor.trim().length < 2) {
      throw new Error("O logradouro deve ter ao menos 2 caracteres.");
    }
    this.#logradouro = valor.trim();
  }

  get numero() {
    return this.#numero;
  }

  set numero(valor) {
    if (valor === undefined || valor === null || String(valor).trim() === "") {
      throw new Error("O número do endereço é obrigatório.");
    }
    this.#numero = String(valor).trim();
  }

  get cidade() {
    return this.#cidade;
  }

  set cidade(valor) {
    if (typeof valor !== "string" || valor.trim().length < 2) {
      throw new Error("A cidade deve ter ao menos 2 caracteres.");
    }
    this.#cidade = valor.trim();
  }

  get uf() {
    return this.#uf;
  }

  set uf(valor) {
    if (typeof valor !== "string" || !/^[A-Za-z]{2}$/.test(valor.trim())) {
      throw new Error("A UF deve conter exatamente 2 letras.");
    }
    this.#uf = valor.trim().toUpperCase();
  }

  toString() {
    return `${this.#logradouro}, ${this.#numero} - ${this.#cidade}/${this.#uf}`;
  }
}

module.exports = Endereco;
