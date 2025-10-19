const inicialSection = document.getElementById('inicio');

// --- Conteúdo Original (Incentiva AMS) ---

// Cria o elemento principal <div>
const divInicial = document.createElement('div');
divInicial.id = 'Inicial';

// Cria o elemento <h1>
const h1 = document.createElement('h1');
h1.textContent = 'O que é o ';

// Cria o elemento <span> dentro do <h1>
const span = document.createElement('span');
span.textContent = 'Incentiva AMS?';

// Adiciona o <span> ao <h1>
h1.appendChild(span);
divInicial.appendChild(h1);

// Cria o grupo de divs
const pDIV = document.createElement('div')
pDIV.className = "pDIV";

// Div 1
const p01div = document.createElement('div');
p01div.className = 'pdiv'

// Imagem 1
const img_p01div = document.createElement('div');
const img_p01 = document.createElement('img')
img_p01.className = 'item-img-p';
img_p01.id = 'ideia';
img_p01.src = './src/img/ideia.png';
img_p01div.appendChild(img_p01);
p01div.appendChild(img_p01div);
pDIV.appendChild(p01div)

// Texto 1
const p01 = document.createElement('p');
p01.className = "p";
p01.textContent = 'O projeto Incentiva AMS foi criado por nós, alunas do segundo ano do curso Técnico de Informática para Internet na modalidade Articulado Médio Superior (AMS)';
p01div.appendChild(p01)

// Div 2
const p02div = document.createElement('div');
p02div.className = 'pdiv'

// Imagem 2
const img_p02div = document.createElement('div');
const img_p02 = document.createElement('img')
img_p02.className = 'item-img-p';
img_p02.id = 'social';
img_p02.src = './src/img/social.png';
img_p02div.appendChild(img_p02);
p02div.appendChild(img_p02div);
pDIV.appendChild(p02div)

// Texto 2
const p02 = document.createElement('p');
p02.className = "p";
p02.textContent = 'Percebendo que o curso AMS é uma novidade na região e muitos estudantes não o conhecem bem, nosso propósito é divulgar seus detalhes por dois canais principais: por meio de palestras informativas nas escolas da região e através das redes sociais.';
p02div.appendChild(p02)


// Div 3
const p03div = document.createElement('div');
p03div.className = 'pdiv'

// Imagem 3
const img_p03div = document.createElement('div');
const img_p03 = document.createElement('img')
img_p03.id = 'estrela';
img_p03.src = './src/img/estrela.png';
img_p03div.appendChild(img_p03);
p03div.appendChild(img_p03div);
pDIV.appendChild(p03div)

// Texto 3
const p03 = document.createElement('p');
p03.className = "p";
p03.textContent = 'Nessas ações, compartilharemos tudo sobre o funcionamento do curso, seus principais diferenciais e os caminhos futuros promissores que ele pode oferecer aos alunos';
p03div.appendChild(p03)

// Adiciona os <p>s ao pdivs principal
pDIV.appendChild(p01div);
pDIV.appendChild(p02div);
pDIV.appendChild(p03div);
divInicial.appendChild(pDIV);


// --- Novo Conteúdo (Trajetória AMS) ---

// Cria o elemento <div> principal da Trajetória
const divTrajetoriaContainer = document.createElement('div');
divTrajetoriaContainer.className = 'trajetoria-container';

// Cria o elemento <h2> (título)
const h2Trajetoria = document.createElement('h2');
h2Trajetoria.className = 'titulo';
h2Trajetoria.textContent = 'Trajetória AMS';

// Cria o elemento <p> (subtítulo)
const pSubtitulo = document.createElement('p');
pSubtitulo.className = 'subtitulo';
pSubtitulo.textContent = 'Quer saber o que vem pela frente no AMS? Dá uma olhada nessa linha do tempo!';

// Cria o <div> slide-wrapper
const divSlideWrapper = document.createElement('div');
divSlideWrapper.className = 'slide-wrapper';
divSlideWrapper.style.position = 'relative';
divSlideWrapper.style.width = '100%';
// Comentário original: // Cria o <input> range
const inputRange = document.createElement('input');
inputRange.type = 'range';
inputRange.min = '1';
inputRange.max = '5';
inputRange.value = '1';
inputRange.id = 'anoSlider';

// Cria o <div> descricaoAno
const divDescricaoAno = document.createElement('div');
divDescricaoAno.id = 'descricaoAno';
divDescricaoAno.className = 'descricao';

// Cria o <h3> vazio dentro do descricaoAno
const h3Descricao = document.createElement('h3');
divDescricaoAno.appendChild(h3Descricao);

// Adiciona os elementos ao divSlideWrapper
divSlideWrapper.appendChild(inputRange);
divSlideWrapper.appendChild(divDescricaoAno);

// Adiciona os elementos ao divTrajetoriaContainer
divTrajetoriaContainer.appendChild(h2Trajetoria);
divTrajetoriaContainer.appendChild(pSubtitulo);
divTrajetoriaContainer.appendChild(divSlideWrapper);

// --- Adiciona todos os blocos à seção final ---

// Limpa o conteúdo existente na seção 'inicio'
inicialSection.innerHTML = '';

// Adiciona o bloco original
inicialSection.appendChild(divInicial);
inicialSection.appendChild(divTrajetoriaContainer);