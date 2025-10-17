const contatoSection = document.getElementById('contato');

// Cria o elemento principal <div>
const divContato = document.createElement('div');
divContato.id = 'Contato';
divContato.className = 'container-sm';

// Cria o primeiro elemento <p>
const p1ct = document.createElement('p');
p1ct.textContent = 'Contate-nos nas redes sociais!';

// Cria o <div> dos links
const divLinks = document.createElement('div');
divLinks.className = 'Links';

// Cria o primeiro <a>
const link1 = document.createElement('a');
link1.target = '_blank';
link1.href = 'https://www.instagram.com/incentivams/';
link1.textContent = '@incentivams';

// Cria o segundo <a>
const link2 = document.createElement('a');
link2.target = '_blank';
link2.href = 'https://www.instagram.com/segundoams_/';
link2.textContent = '@segundoams_';

// Adiciona os links ao <div> Links
divLinks.appendChild(link1);
divLinks.appendChild(link2);

// Cria o <br> (que estava no código original, mas é mais semântico usar CSS)
const br = document.createElement('br');

// Cria o segundo elemento <p>
const p2ct = document.createElement('p');
p2ct.textContent = 'Tem algo a nos dizer? Envie seu comentário!';

// Adiciona todos os elementos ao <div> principal
divContato.appendChild(p1ct);
divContato.appendChild(divLinks);
divContato.appendChild(br);
divContato.appendChild(p2ct);

// Limpa o conteúdo existente e adiciona o novo conteúdo à seção
contatoSection.innerHTML = ''; // Limpa antes de adicionar, se necessário
contatoSection.appendChild(divContato);