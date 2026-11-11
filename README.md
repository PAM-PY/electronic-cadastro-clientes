# Electronic — Cadastro de Clientes

**Estudante:** Pamela Lopes de Sousa  
**Atividade:** Atividade 01 — Cadastro de Clientes da Electronic: da Modelagem ao Código  
**Linguagem:** JavaScript  
**Ambiente de execução:** Node.js  
**Paradigma:** Programação Orientada a Objetos (POO)

## 1. Sobre o projeto

Neste projeto, desenvolvi um módulo de cadastro de clientes para a empresa fictícia Electronic, contemplando pessoas físicas e pessoas jurídicas. O objetivo foi aplicar os conceitos de Programação Orientada a Objetos para organizar as classes, reaproveitar código por meio de herança, proteger os atributos com encapsulamento e validar os dados informados antes de incluir um cliente na lista.

## 2. Funcionalidades implementadas

- Cadastro de clientes pessoa física e pessoa jurídica.
- Armazenamento dos clientes válidos em uma lista.
- Exibição dos cadastros válidos ao final da execução.
- Validação do nome, CPF, CNPJ, data de nascimento, razão social e endereço.
- Tratamento de valores inválidos com exceções (`throw`) e blocos `try/catch`, sem interromper a execução do programa.

## 3. Tecnologias e recursos utilizados

- JavaScript (classes, módulos e campos privados).
- Node.js para execução do programa.
- Draw.io (diagrams.net) para elaboração do diagrama UML.
- GitHub para publicação e versionamento do projeto.

## 4. Organização dos arquivos

electronic-cadastro-clientes/
├── src/
│   ├── Endereco.js
│   ├── Pessoa.js
│   ├── PessoaFisica.js
│   └── PessoaJuridica.js
├── diagrama-classes.drawio
├── diagrama-classes.svg
├── index.js
├── package.json
└── README.md

## 5. Modelagem e orientação a objetos

Modelei as classes `Endereco`, `Pessoa`, `PessoaFisica` e `PessoaJuridica`. A classe `Pessoa` concentra os dados comuns de nome e endereço. As classes `PessoaFisica` e `PessoaJuridica` herdam de `Pessoa`, utilizando `extends` e `super`, e acrescentam os dados específicos de cada tipo de cliente.

Utilizei campos privados (`#`) no JavaScript e getters e setters para controlar o acesso aos atributos. Na representação UML, os atributos privados aparecem com o sinal `-`, conforme a notação da UML; os métodos públicos aparecem com `+`.

Também sobrescrevi o método `exibirDados()` nas classes derivadas. Dessa forma, a chamada ao método apresenta os dados específicos de cada tipo de cliente, aplicando polimorfismo.

O diagrama está disponível em dois formatos na raiz do repositório: o arquivo .drawio, para edição no diagrams.net, e o arquivo .svg, para visualização.

## 6. Regras de validação

Implementei as seguintes validações:

- O nome deve conter pelo menos três caracteres.
- O CPF deve conter exatamente 11 dígitos.
- O CNPJ deve conter exatamente 14 dígitos.
- Pontos, traços, barras e espaços são removidos antes da contagem do CPF e do CNPJ.
- A data de nascimento deve existir no calendário, estar no formato `AAAA-MM-DD` e não pode ser posterior à data atual.
- A razão social não pode ficar vazia.
- O endereço deve ser informado como um objeto da classe `Endereco`.

Quando um valor não atende às regras, o código lança um erro com `throw new Error()`. Cada tentativa de cadastro é executada dentro de `try/catch`, para que uma entrada inválida seja informada sem encerrar o programa.

**Observação sobre CPF e CNPJ:** conforme o requisito desta atividade, a validação implementada verifica a quantidade de dígitos após remover a pontuação. Não foi implementado o cálculo dos dígitos verificadores.

## 7. Como executar o projeto

É necessário ter o Node.js instalado.

1. Baixe ou clone este repositório.
2. Abra a pasta `electronic-cadastro-clientes` no terminal ou no Visual Studio Code.
3. Execute o comando:

```bash
node index.js
```

Também é possível executar o projeto com:

```bash
npm start
```

## 8. Testes realizados e evidências

Executei o arquivo `index.js` com quatro cenários: duas entradas válidas e duas inválidas. Os resultados abaixo foram obtidos no terminal com o comando `node index.js`.

### Cenário 1 — Pessoa física válida

**Dados utilizados:** nome `Ana Souza`, CPF `123.456.789-01`, data de nascimento `1990-05-20` e endereço preenchido.

**Resultado no terminal:**

```text
[SUCESSO] Pessoa Física válida cadastrado(a) com sucesso.
```

### Cenário 2 — Pessoa jurídica válida

**Dados utilizados:** nome `Electronic`, CNPJ `12.345.678/0001-90`, razão social preenchida e endereço preenchido.

**Resultado no terminal:**

```text
[SUCESSO] Pessoa Jurídica válida cadastrado(a) com sucesso.
```

### Cenário 3 — Pessoa física inválida

**Dados utilizados:** CPF `123.456`, com quantidade de dígitos inferior à exigida.

**Resultado no terminal:**

```text
[ERRO] Pessoa Física inválida: O CPF deve conter exatamente 11 dígitos.
```

### Cenário 4 — Pessoa jurídica inválida

**Dados utilizados:** CNPJ com 14 dígitos e razão social em branco.

**Resultado no terminal:**

```text
[ERRO] Pessoa Jurídica inválida: A razão social é obrigatória.
```

### Saída final — Listagem dos clientes válidos

```text
========== CLIENTES VÁLIDOS ==========

--- Cliente 1 ---
Tipo: Pessoa Física
Nome: Ana Souza
CPF: 12345678901
Data de nascimento: 1990-05-20
Endereço: Rua das Flores, 120 - Macaé/RJ

--- Cliente 2 ---
Tipo: Pessoa Jurídica
Nome: Electronic
CNPJ: 12345678000190
Razão social: Electronic Comércio de Eletrônicos Ltda.
Endereço: Avenida Brasil, 500 - Rio de Janeiro/RJ

Total de cadastros válidos: 2
```

Os dados de CPF e CNPJ utilizados nos exemplos são dados fictícios para teste da regra de quantidade de dígitos.

## 9. Versionamento

Publiquei o projeto neste repositório público do GitHub. O histórico de commits registra as etapas de inclusão do diagrama, implementação das classes, inclusão dos testes e documentação do projeto. Os commits podem ser consultados pela opção **Commits** na página do repositório.

## 10. Autoria

**Pamela Lopes de Sousa**
