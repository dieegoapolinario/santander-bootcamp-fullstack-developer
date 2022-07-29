function jogaErro(erro: string, codigo: number){
  throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500)