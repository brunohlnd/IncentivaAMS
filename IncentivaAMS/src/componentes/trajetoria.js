// REMOVA ESTAS DUAS LINHAS. Elas procurarão elementos antes de estarem prontos e serão inúteis.
// const slider = document.getElementById("anoSlider");
// const descricao = document.getElementById("descricaoAno");

document.addEventListener("DOMContentLoaded", function() {
    // 1. Variáveis locais (corretas)
    const sliderLocal = document.getElementById("anoSlider");
    const descricaoLocal = document.getElementById("descricaoAno");
    
    // 2. Verificação de segurança:
    if (!sliderLocal || !descricaoLocal) {
        console.error("Erro: Elementos do slider (anoSlider ou descricaoAno) não encontrados no DOM.");
        return;
    } // <-- CHAVE DE FECHAMENTO DO 'if' CORRIGIDA AQUI

    // 3. Informações de cada ano
    const anos = {
        1: { titulo: "1º Ano - Na ETEC", conteudo: "Redes, HTML, Introdução à Informática", icone: "<i class='fas fa-laptop'></i>" },
        2: { titulo: "2º Ano - Na ETEC", conteudo: "JavaScript, CSS, Banco de Dados", icone: "<i class='fas fa-desktop'></i>" },
        3: { titulo: "3º Ano - Início do Técnico", conteudo: "Projetos de Software, React, Redes Avançadas", icone: "<i class='fas fa-tools'></i>" },
        4: { titulo: "4º Ano - AMS Avançado", conteudo: "Desenvolvimento Fullstack, APIs, Metodologias Ágeis", icone: "<i class='fas fa-mobile-alt'></i>" },
        5: { titulo: "5º Ano - Na FATEC", conteudo: "Projetos Profissionais, Estágio, Preparação para o Mercado", icone: "<i class='fas fa-graduation-cap'></i>" }
    };


    // 4. Função para atualizar o conteúdo
    function atualizarDescricao() {
        // Usa as variáveis locais corrigidas
        const ano = sliderLocal.value;

        // Atualiza descrição
        descricaoLocal.innerHTML = `
            <h3>${anos[ano].titulo}</h3>
            <p>${anos[ano].conteudo}</p>
            <div class="icone">${anos[ano].icone}</div>
        `;

        // Cálculos de posição (usando as variáveis locais)
        const sliderWidth = sliderLocal.offsetWidth; 
        const max = sliderLocal.max;
        const min = sliderLocal.min;
        const percent = (ano - min) / (max - min);

        // Centraliza a descrição
        const offset = descricaoLocal.offsetWidth / 2;
        descricaoLocal.style.left = `calc(${percent * 100}% - ${offset}px)`;
    }

    // 5. Chamada de eventos e inicialização
    sliderLocal.addEventListener("input", atualizarDescricao);
    atualizarDescricao();
}); // <-- FECHAMENTO CORRETO DO document.addEventListener