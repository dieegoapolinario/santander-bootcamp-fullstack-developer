"use strict";
const pessoa = { nome: "Diego", idade: 31, profissao: "Desenvolvedor" };
pessoa.idade = 30;
const andre = {
    nome: "Andre",
    idade: 21,
    profissao: "Dev",
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Dev"] = 2] = "Dev";
    Profissao[Profissao["Jogadora"] = 3] = "Jogadora";
})(Profissao || (Profissao = {}));
const raquel = { nome: "Raquel", idade: 20, profissao: Profissao.Dev };
const monica = {
    nome: "Monica",
    idade: 25,
    //profissao: Profissao.Atriz,
    materias: ["Mat", "Port"],
};
function listar(lista) {
    for (const item of lista) {
        console.log("- ", item);
    }
}
listar(monica.materias);
