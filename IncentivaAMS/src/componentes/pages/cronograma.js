const cronogramaSection = document.getElementById('cronograma');

// Cria o elemento principal <div>
const divCronograma = document.createElement('div');
divCronograma.id = 'Cronograma';
divCronograma.className = 'container-sm';

// Cria o elemento <h1>
const h1crn = document.createElement('h1');
h1crn.textContent = 'Cronograma';

// Cria o elemento <p>
const pcrn = document.createElement('p');
pcrn.textContent = 'Nós do Incentiva AMS preparamos para você um checklist detalhado das matérias que caem na ETEC. Com essa ferramenta, você terá uma visão clara do que estudar, facilitando a organização de seus estudos e a montagem de um cronograma perfeitamente adaptado à sua rotina. Comece a se preparar de forma mais eficiente hoje mesmo!';

// Adiciona o <h1> e o <p> ao <div> principal
divCronograma.appendChild(h1crn);
divCronograma.appendChild(pcrn);

// Limpa o conteúdo existente e adiciona o novo conteúdo à seção
cronogramaSection.innerHTML = ''; // Limpa antes de adicionar, se necessário
cronogramaSection.appendChild(divCronograma);