const botoes = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")

botoes.forEach((botao, indice) =>{
    botao.addEventListener('click', ()=>{
       
        removerClassAtiva();
        
        botao.classList.add("selecionado")
        
        esconderImagemAtiva();

        mostrarImagemFundo(indice);
        
        esconderInformacoes();

        ativarInformcaoes(indice);
    })
})

function ativarInformcaoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoes() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");

    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function removerClassAtiva() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
