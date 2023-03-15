/*
 objetivo: passar a imagens equivalentes ao botão.

- passo 1: fazer os botoes funcionar.

- passo 2: indenticar o clique no botão

- passo 3: desmarcar o botão anterior.

- passo 4: marcar o botão selecionado.

- passo 5: esconder a imagem anterior.
*/

//passo 1.
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//passo 2.
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //passo 3.
        desativarBotaoSelecionado();

        //passo 4.
        botao.classList.add('selecionado');

        //passo 5. 
        esconderImagemAtiva();

        // passo 6.
        imagens[indice].classList.add('ativa');  
    })
})

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado(){
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
