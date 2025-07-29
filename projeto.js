document.addEventListener('DOMContentLoaded', async () => {
  // Pegar o ID do projeto da URL
  const urlParams = new URLSearchParams(window.location.search);
  const projetoId = parseInt(urlParams.get('id'));

  if (!projetoId) {
    window.location.href = 'index.html#projetos';
    return;
  }

  try {
    // Carregar dados do projeto
    const response = await fetch('projetos.json');
    const data = await response.json();
    const projeto = data.projetos.find(p => p.id === projetoId);

    if (!projeto) {
      throw new Error('Projeto não encontrado');
    }

    // Atualizar título da página
    document.title = `${projeto.titulo} - Davi Bachmann`;

    // Renderizar detalhes do projeto
    const projetoDetalhes = document.getElementById('projeto-detalhes');
    projetoDetalhes.innerHTML = `
      <article class="space-y-8">
        <header class="text-center">
          <h1 class="montserrat1 text-4xl font-bold text-[var(--cor-secundaria)] mb-12 text-center border-b-2 pb-0.5"
            style="border-color: var(--cor-primaria);">
            ${projeto.titulo}
          </h1>
          <p class="lato text-lg opacity-90 mb-6">${projeto.descricao_curta}</p>
          <div class="flex justify-center gap-4 mb-8">
            ${projeto.link_github ? `
              <a href="${projeto.link_github}" target="_blank" rel="noopener noreferrer"
                class="bg-[var(--cor-primaria)] hover:bg-[var(--cor-secundaria)] hover:underline text-[var(--cor-texto)] px-6 py-2 rounded-full inline-flex items-center gap-2 transition-all">
                <i class="fab fa-github"></i> Ver no GitHub
              </a>
            ` : ''}
          </div>
        </header>

        <div class="space-y-6">
          <div>
            <h2 class="montserrat1 text-2xl font-bold mb-4 border-b-2 inline-block pb-0.5"
              style="border-color: var(--cor-primaria);">
              Sobre o Projeto
            </h2>
            <p class="lato text-lg leading-relaxed">${projeto.descricao_completa}</p>
          </div>

          <div>
            <h2 class="montserrat1 text-2xl font-bold mb-4 border-b-2 inline-block pb-0.5"
              style="border-color: var(--cor-primaria);">  
              Tecnologias Utilizadas
            </h2>
            <div class="lato2 flex flex-wrap gap-2">
              ${projeto.tecnologias.map(tech => `
                <span class="bg-[var(--cor-primaria)] px-4 py-1 rounded-full text-sm">
                  ${tech}
                </span>
              `).join('')}
            </div>
          </div>

          <div>
            <h2 class="montserrat1 text-2xl font-bold mb-4 border-b-2 inline-block pb-0.5"
              style="border-color: var(--cor-primaria);">
              Destaques
            </h2>
            <ul class="lato list-disc list-inside space-y-2">
              ${projeto.destaques.map(destaque => `
                <li>${destaque}</li>
              `).join('')}
            </ul>
          </div>

          ${projeto.imagens_galeria.length > 0 ? `
            <div>
              <h2 class="montserrat1 text-2xl font-bold mb-4 border-b-2 inline-block pb-0.5"
                style="border-color: var(--cor-primaria);">
                Galeria
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${projeto.imagens_galeria.map(img => `
                  <div class="rounded-lg overflow-hidden shadow-md">
                    <img src="${img}" alt="Screenshot do projeto" onclick="abrirImagem(this.src)"
                      class="cursor-pointer w-full h-48 object-cover transition duration-300 transform hover:scale-105">
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </article>
    `;

  } catch (error) {
    console.error('Erro ao carregar projeto:', error);
    document.getElementById('projeto-detalhes').innerHTML = `
      <div class="text-center py-16">
        <h1 class="text-3xl font-bold mb-4">Projeto não encontrado</h1>
        <p class="mb-8">Desculpe, não foi possível encontrar o projeto solicitado.</p>
        <a href="index.html#projetos" class="bg-[var(--cor-primaria)] hover:bg-[var(--cor-secundaria)] text-[var(--cor-texto)] px-6 py-2 rounded-full inline-flex items-center gap-2 transition-all">
          <i class="fas fa-arrow-left"></i> Voltar aos Projetos
        </a>
      </div>
    `;
  }
});
