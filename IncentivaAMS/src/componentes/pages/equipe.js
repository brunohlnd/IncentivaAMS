const equipeSection = document.getElementById('equipe');

// Cria o elemento principal <div>
const divEquipe = document.createElement('div');
divEquipe.id = 'Equipe';
divEquipe.className = 'container-sm';

// --- Seção 1: Equipe
// Cria o primeiro <h1>
const h1eq = document.createElement('h1');
h1eq.textContent = 'Equipe';

// Cria o primeiro <p>
const p1eq = document.createElement('p');
p1eq.textContent = 'Somos alunas do curso com módulo AMS, unidas pela vontade de compartilhar a grande oportunidade que consideramos esse curso. Cada uma contribui com suas habilidades para divulgar o AMS de forma criativa e acessível, por meio de ações presenciais e digitais. Também contamos com o apoio e a ajuda de colegas da sala que se interessam pelo projeto, tornando possível a realização de cada etapa com colaboração e dedicação.';

// --- Seção 2: Missão, Visão e Valores
// Cria o segundo <h1>
const h1eq_2 = document.createElement('h1');
h1eq_2.textContent = 'Missão, Visão e Valores';

//MVMdiv
const MVMDiv = document.createElement('div');
MVMDiv.className = 'MVMDiv';

// MISSÃO
const divMissao = document.createElement('div');
divMissao.className = 'MVMdivs';

const div_alvo = document.createElement('div');
div_alvo.className = 'item-img';
const img_alvo = document.createElement('img')
img_alvo.id = 'alvo';
img_alvo.src = './src/img/alvo.png';
div_alvo.appendChild(img_alvo);
divMissao.appendChild(div_alvo);

const pmissao = document.createElement('p');
pmissao.textContent = 'Promover o conhecimento e a valorização do curso AMS e incentivar os estudantes a usufruírem dessa oportunidade que une ensino médio, técnico e superior!'
divMissao.appendChild(pmissao)

// VISÃO
const divVisao = document.createElement('div')
divVisao.className = 'MVMdivs'

const pvisao = document.createElement('p');
pvisao.textContent = 'Ser reconhecido como um projeto de referência na divulgação AMS e ser levado a outras ETECs, contribuindo para que mais jovens descubram essa oportunidade'
divVisao.appendChild(pvisao)

// VALORES
const divValores = document.createElement('div');
divValores.className = 'MVMdivs';

const pvalores = document.createElement('span');
pvalores.textContent = 'Acolhimento e inclusão de novos alunos; Colaboração entre estudantes; Compromisso com a informação de qualidade e Responsabilidade com o que divulgamos'
divValores.appendChild(pvalores)

MVMDiv.appendChild(divMissao)
MVMDiv.appendChild(divVisao)
MVMDiv.appendChild(divValores)

// --- Seção 3: Por que criamos o projeto?
// Cria o terceiro <h1>
const h1eq_3 = document.createElement('h1');
h1eq_3.textContent = 'Por que criamos o projeto?';

// Cria o terceiro <p>
const p3eq = document.createElement('p');
p3eq.textContent = 'Criamos o Incentiva AMS a partir da percepção de que muitas pessoas ainda não conhecem o curso e o potencial que ele tem. Vimos de perto como ele pode abrir portas e quisemos compartilhar isso com outros estudantes, ajudando-os a enxergar essa possibilidade e a aproveitá-la com mais segurança e motivação.';

// Adiciona todos os elementos ao <div> principal na ORDEM LÓGICA
// Seção 1
divEquipe.appendChild(h1eq);
divEquipe.appendChild(p1eq);

// Seção 2: Missão, Visão e Valores
divEquipe.appendChild(h1eq_2);
divEquipe.appendChild(MVMDiv);

// Seção 3: Por que criamos o projeto?
divEquipe.appendChild(h1eq_3);
divEquipe.appendChild(p3eq);


// Limpa o conteúdo existente e adiciona o novo conteúdo à seção
equipeSection.innerHTML = ''; // Limpa antes de adicionar, se necessário
equipeSection.appendChild(divEquipe);