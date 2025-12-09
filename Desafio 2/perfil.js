function exibirPerfil(id) {
    if (typeof id === "string") {
        console.log("O ID é uma string: " + id);
    }
    else {
        console.log("O ID é do tipo number: " + id);
    }
}
//Teste 1
exibirPerfil("user123");
//Teste 2
exibirPerfil(456);
