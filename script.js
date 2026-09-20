/*
  Atividade Prática - JavaScript básico
  Simulador simples de orçamento pessoal
  Aluno: Diego Leite Portes Caetano
  Matrícula: 933458
*/

// Lê um número do usuário e repete o prompt enquanto o valor não for numérico.
function lerNumero(mensagem) {
  let entrada = prompt(mensagem);
  let valor = Number(entrada);

  while (entrada === null || entrada.trim() === "" || isNaN(valor)) {
    alert("Valor inválido. Digite apenas números (exemplo: 2500.50).");
    entrada = prompt(mensagem);
    valor = Number(entrada);
  }

  return valor;
}

// 1) Dados iniciais (tipos básicos)
const nome = prompt("Qual é o seu nome?");
const renda = lerNumero("Qual é a sua renda mensal? (apenas números)");
let quantidadeDespesas = lerNumero("Quantas despesas você vai informar? (de 1 a 5)");

// Regra: limite entre 1 e 5
if (quantidadeDespesas < 1) {
  quantidadeDespesas = 1;
} else if (quantidadeDespesas > 5) {
  quantidadeDespesas = 5;
}

quantidadeDespesas = Math.floor(quantidadeDespesas);

// 3) Lançamento das despesas com for
let totalDespesas = 0;

for (let i = 1; i <= quantidadeDespesas; i++) {
  const despesa = lerNumero("Despesa " + i + ": informe o valor (apenas números)");
  totalDespesas = totalDespesas + despesa;
  console.log("Despesa " + i + " registrada: R$ " + despesa.toFixed(2));
}

// 4) Análise com if / else
const sobra = renda - totalDespesas;
const percentualSobra = renda > 0 ? (sobra / renda) * 100 : 0;
let classificacao = "";

if (totalDespesas > renda) {
  classificacao = "⚠️ Atenção: você gastou mais do que ganhou.";
} else if (sobra >= renda * 0.3) {
  classificacao = "✅ Ótimo: boa margem de sobra.";
} else {
  classificacao = "🙂 Ok: dá para melhorar a sobra.";
}

// 5) Saída final (alert + console.log)
const resultado =
  "Resumo do orçamento\n" +
  "Nome: " + nome + "\n" +
  "Renda: R$ " + renda.toFixed(2) + "\n" +
  "Total de despesas: R$ " + totalDespesas.toFixed(2) + "\n" +
  "Sobra: R$ " + sobra.toFixed(2) + "\n" +
  "Percentual de sobra: " + percentualSobra.toFixed(2) + "%\n" +
  classificacao;

alert(resultado);

console.log("==============================================");
console.log("       SIMULADOR DE ORÇAMENTO PESSOAL");
console.log("==============================================");
console.log("Nome:               " + nome);
console.log("Renda:              R$ " + renda.toFixed(2));
console.log("Total de despesas:  R$ " + totalDespesas.toFixed(2));
console.log("Sobra:              R$ " + sobra.toFixed(2));
console.log("Percentual sobra:   " + percentualSobra.toFixed(2) + "%");
console.log("Classificação:      " + classificacao);
console.log("==============================================");
