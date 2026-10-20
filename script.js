// Alternar tema claro/escuro (a escolha fica salva no navegador)
const botaoTema = document.getElementById("tema");
if (botaoTema) {
  const raiz = document.documentElement;
  const atualizar = () => botaoTema.textContent = raiz.dataset.tema === "escuro" ? "Claro" : "Escuro";
  atualizar();
  botaoTema.addEventListener("click", () => {
    raiz.dataset.tema = raiz.dataset.tema === "escuro" ? "claro" : "escuro";
    try { localStorage.setItem("tema", raiz.dataset.tema); } catch (e) {}
    atualizar();
  });
}

// Relógio local (rodapé de contato)
const hora = document.getElementById("hora");
if (hora) {
  const tick = () => hora.textContent =
    new Date().toLocaleTimeString("pt-BR", {hour: "2-digit", minute: "2-digit"}) + " horário local";
  tick(); setInterval(tick, 30000);
}

// Lista de projetos (projetos.html)
const grade = document.getElementById("grade");
if (grade) {
  grade.innerHTML = PROJETOS.length ? PROJETOS.map(p => `
    <a class="card" href="projeto.html?id=${p.id}">
      <div class="capa"><img src="${p.capa}" alt="Capa do projeto ${p.titulo}" loading="lazy"></div>
      <h3>${p.titulo}</h3>
      <p>${p.categoria} · ${p.ano}</p>
    </a>`).join("") : `<p class="vazio">Nenhum projeto ainda.</p>`;
}

// Projeto individual (projeto.html?id=...)
const detalhe = document.getElementById("detalhe");
if (detalhe) {
  const id = new URLSearchParams(location.search).get("id");
  const i = PROJETOS.findIndex(p => p.id === id);
  if (i < 0) {
    detalhe.innerHTML = `<p class="vazio">Projeto não encontrado. <a href="projetos.html">Ver projetos</a></p>`;
  } else {
    const p = PROJETOS[i];
    const ant = PROJETOS[(i - 1 + PROJETOS.length) % PROJETOS.length];
    const prox = PROJETOS[(i + 1) % PROJETOS.length];
    document.title = `${p.titulo} — Rian Oliveira`;
    detalhe.innerHTML = `
      <h1 class="gigante">${p.titulo}</h1>
      <div class="proj-topo">
        <span>Categoria<strong>${p.categoria}</strong></span>
        <span>Ano<strong>${p.ano}</strong></span>
        <span>Cliente<strong>${p.cliente}</strong></span>
      </div>
      <p class="proj-desc">${p.descricao}</p>
      <div class="proj-imgs">${p.imagens.map(src => `<img src="${src}" alt="${p.titulo}" loading="lazy">`).join("")}</div>
      <nav class="proj-nav" aria-label="Outros projetos">
        <a href="projeto.html?id=${ant.id}">← ${ant.titulo}</a>
        <a href="projeto.html?id=${prox.id}">${prox.titulo} →</a>
      </nav>`;
  }
}
