const slider = document.getElementById("anoSlider");
const descricao = document.getElementById("descricaoAno");

//informações de cada ano
const anos = {
    1: { titulo: "1º Ano - Na ETEC", conteudo: "Redes, HTML, Introdução à Informática", icone: "<i class='fas fa-laptop'></i>" },
    2: { titulo: "2º Ano - Na ETEC", conteudo: "JavaScript, CSS, Banco de Dados", icone: "<i class='fas fa-desktop'></i>" },
    3: { titulo: "3º Ano - Início do Técnico", conteudo: "Projetos de Software, React, Redes Avançadas", icone: "<i class='fas fa-tools'></i>" },
    4: { titulo: "4º Ano - AMS Avançado", conteudo: "Desenvolvimento Fullstack, APIs, Metodologias Ágeis", icone: "<i class='fas fa-mobile-alt'></i>" },
    5: { titulo: "5º Ano - Na FATEC", conteudo: "Projetos Profissionais, Estágio, Preparação para o Mercado", icone: "<i class='fas fa-graduation-cap'></i>" }
};


//função para atualzar o conteúdo de acor com a posição
function atualizarDescricao() {
    const ano = slider.value;//qual slider é (1-5)

    //vai atualizar descrição
    descricao.innerHTML = `
            <h3>${anos[ano].titulo}</h3>
            <p>${anos[ano].conteudo}</p>
            <div class="icone">${anos[ano].icone}</div>
            `;

    //vai calcular a posição horizontal da descrição sobre a bolinha do slider
    const sliderWidth = slider.offsetWidth; //largura
    const max = slider.max; //valor máximo
    const min = slider.min; //valor mínimo
    const percent = (ano - min) / (max - min); //porcentagem da posição do slider (0 a 1)

    //para centralizar a descrição sobre a bolinha
    const offset = descricao.offsetWidth / 2;
    descricao.style.left = `calc(${percent * 100}% - ${offset}px)`;
}

//para atualizar a descrição quando o slider mudar
slider.addEventListener("input", atualizarDescricao);

//chamando função
atualizarDescricao();

