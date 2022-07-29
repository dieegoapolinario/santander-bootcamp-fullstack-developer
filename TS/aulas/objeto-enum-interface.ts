const pessoa = { nome: "Diego", idade: 31, profissao: "Desenvolvedor" };
pessoa.idade = 30;

const andre: { nome: string; idade: number; profissao: string } = {
  nome: "Andre",
  idade: 21,
  profissao: "Dev",
};

enum Profissao {
  Professora,
  Atriz,
  Dev,
  Jogadora,
}
interface Pessoa {
  nome: string;
  idade: number;
  profissao?: Profissao;
}
interface Estudante extends Pessoa {
  materias: string[];
}

const raquel: Pessoa = { nome: "Raquel", idade: 20, profissao: Profissao.Dev };
const monica: Estudante = {
  nome: "Monica",
  idade: 25,
  //profissao: Profissao.Atriz,
  materias: ["Mat", "Port"],
};

function listar(lista: string[]) {
  for (const item of lista) {
    console.log("- ", item);
  }
}

listar(monica.materias);
