const filmes = require("./database");
const readline = require("readline-sync");

console.log("============[ CATÁLOGO DE FILMES ]===========");
console.log(
  "App desenvolvido durante o Dev for Tech - Gama Academy. Aluno: ATHOS. F. S. FEITOSA"
);
console.log("Olá! Escolha uma opção:");
console.log("(1) Listar filmes por categoria | (2) Listar todos os filmes");

const entradaInicial = readline.question("Digite o numero da escolha -> ");

if (entradaInicial === "1") {
  console.log("-------------");
  console.log("Essas são as categorias disponiveis:");
  console.log("TERROR/SUSPENSE (1)", "| AÇÃO/AVENTURA (2)", "| COMÉDIA (3)");

  const entradaCategoria = readline.question(
    "Insira o ID da categoria desejada: "
  );

  const retorno = filmes.filter(
    (livro) => livro.categoriaId === parseInt(entradaCategoria)
  );

  console.table(retorno);
} else if (entradaInicial === "2") {
  console.log("-------------");
  const filmesOrdenados = filmes.sort((a, b) => a.paginas - b.paginas);
  console.log("Esses são todos os filmes disponiveis:");
  console.table(filmesOrdenados);
} else {
  console.log("INPUT INCORRETO!");
}
