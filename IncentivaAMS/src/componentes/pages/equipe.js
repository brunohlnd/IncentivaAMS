const equipeSection = document.getElementById('equipe');

// Cria o elemento principal <div>
const divEquipe = document.createElement('div');
divEquipe.id = 'Equipe';

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
const MVVDiv = document.createElement('div');
MVVDiv.className = 'MVVDiv';

// MISSÃO
const divMissao = document.createElement('div');
divMissao.className = 'MVVdivs';

const div_alvo = document.createElement('div');
div_alvo.className = 'item-img';
const img_alvo = document.createElement('img')
img_alvo.id = 'alvo';
img_alvo.src = './src/img/alvo.png';
div_alvo.appendChild(img_alvo);
divMissao.appendChild(div_alvo);

const divTituloMissao = document.createElement('div')
divTituloMissao.className = 'divTituloMVV';
const tituloMissao = document.createElement('h5');
tituloMissao.className = 'tituloMVV';
tituloMissao.textContent = 'MISSÃO';
divTituloMissao.appendChild(tituloMissao);
divMissao.appendChild(divTituloMissao);

const pmissao = document.createElement('p');
pmissao.textContent = 'Promover o conhecimento e a valorização do curso AMS e incentivar os estudantes a usufruírem dessa oportunidade que une ensino médio, técnico e superior!'
divMissao.appendChild(pmissao)

// VISÃO
const divVisao = document.createElement('div')
divVisao.className = 'MVVdivs'

const div_binoculo = document.createElement('div');
div_binoculo.className = 'item-img';
const img_binoculo = document.createElement('img')
img_binoculo.id = 'binoculo';
img_binoculo.src = './src/img/binoculo.png';
div_binoculo.appendChild(img_binoculo);
divVisao.appendChild(div_binoculo);

const divTituloVisao = document.createElement('div')
divTituloVisao.className = 'divTituloMVV';
const tituloVisao = document.createElement('h5');
tituloVisao.className = 'tituloMVV';
tituloVisao.textContent = 'VISÃO';
divTituloVisao.appendChild(tituloVisao);
divVisao.appendChild(divTituloVisao);

const pvisao = document.createElement('p');
pvisao.textContent = 'Ser reconhecido como um projeto de referência na divulgação AMS e ser levado a outras ETECs, contribuindo para que mais jovens descubram essa oportunidade'
divVisao.appendChild(pvisao)

// VALORES
const divValores = document.createElement('div');
divValores.className = 'MVVdivs';

const div_coracao = document.createElement('div');
div_coracao.className = 'item-img';
const img_coracao = document.createElement('img')
img_coracao.id = 'coracao';
img_coracao.src = './src/img/coracao.png';
div_coracao.appendChild(img_coracao);
divValores.appendChild(div_coracao);

const divTituloValores = document.createElement('div')
divTituloValores.className = 'divTituloMVV';
const tituloValores = document.createElement('h5');
tituloValores.className = 'tituloMVV';
tituloValores.textContent = 'VALORES';
divTituloValores.appendChild(tituloValores);
divValores.appendChild(divTituloValores);

const pvalores = document.createElement('span');
pvalores.textContent = 'Acolhimento e inclusão de novos alunos; Colaboração entre estudantes; Compromisso com a informação de qualidade e Responsabilidade com o que divulgamos'
divValores.appendChild(pvalores)

MVVDiv.appendChild(divMissao)
MVVDiv.appendChild(divVisao)
MVVDiv.appendChild(divValores)

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
divEquipe.appendChild(MVVDiv);

// Seção 3: Por que criamos o projeto?
divEquipe.appendChild(h1eq_3);
divEquipe.appendChild(p3eq);


// Limpa o conteúdo existente e adiciona o novo conteúdo à seção
equipeSection.innerHTML = ''; // Limpa antes de adicionar, se necessário
equipeSection.appendChild(divEquipe);