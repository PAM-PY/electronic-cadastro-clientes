const Endereco = require("./src/Endereco");
const PessoaFisica = require("./src/PessoaFisica");
const PessoaJuridica = require("./src/PessoaJuridica");

// A lista armazena somente clientes cuja criação e validação foram concluídas.
const clientes = [];

function cadastrarCliente(descricao, criacao) {
  try {
    const cliente = criacao();
    clientes.push(cliente);
    console.log(`\n[SUCESSO] ${descricao} cadastrado(a) com sucesso.`);
  } catch (erro) {
    console.log(`\n[ERRO] ${descricao}: ${erro.message}`);
  }
}

// Cenário 1: pessoa física válida.
cadastrarCliente("Pessoa Física válida", () => {
  const endereco = new Endereco("Rua das Flores", "120", "Macaé", "RJ");
  return new PessoaFisica("Ana Souza", "123.456.789-01", "1990-05-20", endereco);
});

// Cenário 2: pessoa jurídica válida.
cadastrarCliente("Pessoa Jurídica válida", () => {
  const endereco = new Endereco("Avenida Brasil", "500", "Rio de Janeiro", "RJ");
  return new PessoaJuridica(
    "Electronic",
    "12.345.678/0001-90",
    "Electronic Comércio de Eletrônicos Ltda.",
    endereco
  );
});

// Cenário 3: pessoa física inválida (CPF com menos de 11 dígitos).
cadastrarCliente("Pessoa Física inválida", () => {
  const endereco = new Endereco("Rua A", "10", "Macaé", "RJ");
  return new PessoaFisica("João Silva", "123.456", "1990-05-20", endereco);
});

// Cenário 4: pessoa jurídica inválida (razão social em branco).
cadastrarCliente("Pessoa Jurídica inválida", () => {
  const endereco = new Endereco("Rua B", "20", "Niterói", "RJ");
  return new PessoaJuridica("Loja Beta", "12.345.678/0001-90", "   ", endereco);
});

console.log("\n========== CLIENTES VÁLIDOS ==========");
if (clientes.length === 0) {
  console.log("Nenhum cliente válido cadastrado.");
} else {
  clientes.forEach((cliente, indice) => {
    console.log(`\n--- Cliente ${indice + 1} ---`);
    // O método sobrescrito é executado conforme o tipo do objeto (polimorfismo).
    console.log(cliente.exibirDados());
  });
}

console.log(`\nTotal de cadastros válidos: ${clientes.length}`);
