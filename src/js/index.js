 /* 
     OBJETIVO 1 - Quando clicar no botão do personagem, marcar o botao como selecionado.

        Passo 1 - Pegar os botores no JS para poder verificar quando o usuario clicar em cima de um deles 
        Passo 2 - adicionar a classe "selecionado" no botao que o usuario clicou.
        Passo 3 - verificar se já existe um botao selecinado, se sim, devemos remover a seleção dele
 
    OBJETIVO 2 - Quando clicar no botao do personagem mostrar as informações do personagem
        Passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        Passo 2 - adicionar a classe "selecionado" no personagem que o usuario selecionou
        Passo 3 - Verificar se já existe um personagem selecionado, se sim, devemos remover a selecao dele
 
 */
 

//OBJETIVO 1 - Quando clicar no botão do personagem, marcar o botao como selecionado.
//Passo 1 - Pegar os botores no JS para poder verificar quando o usuario clicar em cima de um deles 
const botoes = document.querySelectorAll(".botao");

//OBJETIVO 2 - Quando clicar no botao do personagem mostrar as informações do personagem
// Passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem")

//Para cada botao faça:
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        
        //Objetivo 1   
        //Passo 3 - Verificar se já existe um personagem selecionado, se sim, devemos remover a selecao.
        Desselecionarbotao();

        //Passo 2 - adicionar a classe "selecionado" no botao que o usuario clicou.
        botao.classList.add("selecionado");

        //Objetivo 2
        //Passo 3 - Verificar se já existe um personagem selecionado, se sim, devemos remover a selecao dele
        Desselecionarpersonagem();

        //Passo 2 - adicionar a classe "selecionado" no personagem que o usuario selecionou
        personagens[indice].classList.add("selecionado");
    })
})

function Desselecionarpersonagem() {
    const personagemselecionado = document.querySelector(".personagem.selecionado");
    personagemselecionado.classList.remove("selecionado");
}

function Desselecionarbotao() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");
}
