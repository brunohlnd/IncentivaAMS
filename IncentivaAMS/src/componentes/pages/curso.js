const cursoSection = document.getElementById('curso');

// Cria o elemento principal <div>
const divCurso = document.createElement('div');
divCurso.id = 'Curso';
divCurso.className = 'container-sm';

// --- Seção 1: O que é o AMS?
// Cria o primeiro <h1>
const h1_1 = document.createElement('h1');
h1_1.textContent = 'O que é o ';

// Cria o <span> dentro do <h1>
const span1 = document.createElement('span');
span1.textContent = ' AMS?';

// Adiciona o <span> ao <h1>
h1_1.appendChild(span1);

// Cria o primeiro <p>
const p1 = document.createElement('p');
p1.textContent = 'O curso com módulo AMS oferece um modelo de formação inovador: em apenas cinco anos, o aluno conclui o ensino médio, um curso técnico e o ensino superior (tecnólogo). É uma jornada intensa, mas repleta de oportunidades e aprendizados.';

// --- Seção 2: Período de duração
// Cria o segundo <h1>
const h1_2 = document.createElement('h1');
h1_2.textContent = 'Período de duração';

// Cria o segundo <p>
const p2 = document.createElement('p');
p2.textContent = 'O curso tem duração de 5 anos: são 3 anos de ensino médio e técnico integrados, seguidos por 2 anos de curso superior tecnológico, tudo dentro da própria ETEC.';

// --- Seção 3: Diferenciais
// Cria o terceiro <h1>
const h1_3 = document.createElement('h1');
h1_3.textContent = 'Diferenciais';

// Cria o terceiro <p>
const p3 = document.createElement('p');
p3.textContent = 'O curso com módulo AMS proporciona uma formação integrada que une ensino médio, técnico e superior tecnólogo, permitindo que o aluno conclua as três etapas em apenas cinco anos. Desde o primeiro ano, os estudantes têm contato com conteúdos técnicos que se conectam à prática, aliando teoria e vivências do mercado para uma preparação mais completa. Além disso, ao final do curso, o aluno sai com uma formação continuada e um excelente diferencial no currículo, estando preparado para ingressar no mercado de trabalho ou seguir aprofundando seus estudos, com uma base sólida construída ao longo de toda a jornada.';

// Adiciona todos os elementos ao <div> principal
divCurso.appendChild(h1_1);
divCurso.appendChild(p1);
divCurso.appendChild(h1_2);
divCurso.appendChild(p2);
divCurso.appendChild(h1_3);
divCurso.appendChild(p3);

// Limpa o conteúdo existente e adiciona o novo conteúdo à seção
cursoSection.innerHTML = ''; // Limpa antes de adicionar, se necessário
cursoSection.appendChild(divCurso);