/*********************************************
// Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.name = "maria";
pessoa1.age = 29;
pessoa1.profession = "atriz"

let pessoa2 = {}
pessoa2.name = "roberto";
pessoa2.age = 19;
pessoa2.profession = "Padeiro";

let pessoa3 = {
    name: "laura",
    age: "32",
    profession: "Atriz"
};

let pessoa4 = {
    name = "carlos",
    age = 19,
    profession = "padeiro"
}
**********************************************/

enum Job {
  Atriz,
  Padeiro,
}

type Human = {
  name: string;
  age: number;
  profession: Job;
};

let pessoa1: Human = {
  name: "maria",
  age: 29,
  profession: Job.Atriz,
};

let pessoa2: Human = {
  name: "roberto",
  age: 19,
  profession: Job.Padeiro,
};

let pessoa3: Human = {
  name: "laura",
  age: 32,
  profession: Job.Atriz,
};

let pessoa4: Human = {
  name: "carlos",
  age: 19,
  profession: Job.Padeiro,
};