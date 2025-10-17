const inicialSection = document.getElementById('inicio');

// --- Conteúdo Original (Incentiva AMS) ---

// Cria o elemento principal <div>
const divInicial = document.createElement('div');
divInicial.id = 'Inicial';
divInicial.className = 'container-sm';

// Cria o elemento <h1>
const h1 = document.createElement('h1');
h1.textContent = 'O que é o ';

// Cria o elemento <span> dentro do <h1>
const span = document.createElement('span');
span.textContent = 'Incentiva AMS?';

// Adiciona o <span> ao <h1>
h1.appendChild(span);
divInicial.appendChild(h1);

//Cria o grupo de divs
const pdvis = document.createElement('div')
pdvis.className = "pdivs";

// Cria o elemento <p>
const p01 = document.createElement('p');
p01.textContent = 'O Incentiva AMS é um projeto pensado e criado por alunas do curso com módulo AMS';

const p02 = document.createElement('p');
p02.textContent = 'Seu principal objetivo é divulgar a oportunidade única de formação integrada que ele proporciona!';

const p03 = document.createElement('p');
p03.textContent = 'Acreditamos no poder da informação para transformar o futuro de estudantes que procuram novas oportunidades, e por isso buscamos tornar o curso mais conhecido.';

p01.className = "p";
p02.className = "p";
p03.className = "p";

// Adiciona os <p>s ao pdivs principal
pdvis.appendChild(p01);
pdvis.appendChild(p02);
pdvis.appendChild(p03);
divInicial.appendChild(pdvis);


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