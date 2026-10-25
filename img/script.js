/* ---------- Tema claro/escuro (escolha salva no navegador) ---------- */
const botaoTema = document.getElementById("tema");
if (botaoTema) {
  const raiz = document.documentElement;
  const atualizar = () => botaoTema.setAttribute("aria-checked", raiz.dataset.tema === "escuro");
  atualizar();
  botaoTema.addEventListener("click", () => {
    raiz.dataset.tema = raiz.dataset.tema === "escuro" ? "claro" : "escuro";
    try { localStorage.setItem("tema", raiz.dataset.tema); } catch (e) {}
    atualizar();
  });
}

/* ---------- Player flutuante do Spotify (botão arrastável) ---------- */
const player = document.getElementById("player");
if (player) {
  const btn = player.querySelector(".player-btn");
  const painel = player.querySelector(".player-painel");
  const frame = player.querySelector("iframe");
  const TAM = 52, MARGEM = 12;

  // Música do dia: troca todo dia, seguindo a lista MUSICAS (dados.js)
  if (typeof MUSICAS !== "undefined" && MUSICAS.length) {
    const h = new Date();
    const dias = Math.floor(Date.UTC(h.getFullYear(), h.getMonth(), h.getDate()) / 86400000);
    frame.dataset.src = `https://open.spotify.com/embed/track/${MUSICAS[dias % MUSICAS.length]}?utm_source=generator`;
  }

  const alternar = (abrir) => {
    const aberto = abrir ?? !player.classList.contains("aberto");
    player.classList.toggle("aberto", aberto);
    btn.setAttribute("aria-expanded", aberto);
    btn.setAttribute("aria-label", aberto ? "Fechar player de música" : "Abrir player de música");
    if (aberto && !frame.src) frame.src = frame.dataset.src; // só carrega o Spotify na 1ª abertura
    ajustar();
  };

  // O painel abre para o lado onde há espaço na tela
  const ajustar = () => {
    const r = player.getBoundingClientRect();
    player.classList.toggle("abaixo", r.top < painel.offsetHeight + MARGEM * 2);
    player.classList.toggle("esq", r.right < painel.offsetWidth + MARGEM);
  };

  const posicionar = (l, t) => {
    l = Math.min(Math.max(MARGEM, l), window.innerWidth - TAM - MARGEM);
    t = Math.min(Math.max(MARGEM, t), window.innerHeight - TAM - MARGEM);
    Object.assign(player.style, {left: l + "px", top: t + "px", right: "auto", bottom: "auto"});
    return {l, t};
  };
  const salvar = (p) => { try { localStorage.setItem("playerPos2", JSON.stringify(p)); } catch (e) {} };

  // Restaura a posição escolhida antes
  try {
    const p = JSON.parse(localStorage.getItem("playerPos2") || "null");
    if (p) posicionar(p.l, p.t);
  } catch (e) {}
  ajustar();
  window.addEventListener("resize", () => {
    if (player.style.left) { const r = player.getBoundingClientRect(); posicionar(r.left, r.top); }
    ajustar();
  });

  // Arrastar: segure o botão e mova. Soltou, parou. (mouse e toque)
  // Durante o arraste, uma camada transparente cobre a tela para o player não "engolir" o soltar do mouse.
  const capa = document.createElement("div");
  capa.className = "player-capa";
  capa.hidden = true;
  document.body.appendChild(capa);

  let d = null, arrastou = false, bloquearClique = false;
  const iniciar = (x, y) => {
    const r = player.getBoundingClientRect();
    d = {x, y, l: r.left, t: r.top};
    arrastou = false;
  };
  const mover = (x, y, e) => {
    if (!d) return;
    const dx = x - d.x, dy = y - d.y;
    if (!arrastou && Math.hypot(dx, dy) < 5) return; // evita confundir clique com arraste
    if (!arrastou) { arrastou = true; capa.hidden = false; player.classList.add("arrastando"); }
    posicionar(d.l + dx, d.t + dy);
    if (e && e.cancelable) e.preventDefault();
  };
  const soltar = () => {
    if (!d) return;
    d = null;
    capa.hidden = true;
    player.classList.remove("arrastando");
    if (arrastou) {
      const r = player.getBoundingClientRect();
      salvar({l: r.left, t: r.top});
      ajustar();
      bloquearClique = true; // o clique que o navegador gera ao soltar não deve abrir o player
      setTimeout(() => { bloquearClique = false; }, 350);
    }
  };

  // mouse
  btn.addEventListener("mousedown", e => {
    if (e.button !== 0 || bloquearClique) return;
    iniciar(e.clientX, e.clientY);
    e.preventDefault(); // evita selecionar texto enquanto arrasta
  });
  document.addEventListener("mousemove", e => {
    if (!d) return;
    if (e.buttons === 0) { soltar(); return; } // botão já foi solto: para de seguir o cursor
    mover(e.clientX, e.clientY, e);
  });
  document.addEventListener("mouseup", soltar);
  window.addEventListener("blur", soltar);

  // toque (celular/tablet)
  btn.addEventListener("touchstart", e => { const t = e.touches[0]; iniciar(t.clientX, t.clientY); }, {passive: true});
  document.addEventListener("touchmove", e => { if (d) { const t = e.touches[0]; mover(t.clientX, t.clientY, e); } }, {passive: false});
  document.addEventListener("touchend", soltar);
  document.addEventListener("touchcancel", soltar);

  btn.addEventListener("dragstart", e => e.preventDefault());
  btn.addEventListener("click", () => { if (bloquearClique || arrastou) { arrastou = false; return; } alternar(); });

  // Teclado: setas movem o botão
  btn.addEventListener("keydown", e => {
    const passo = {ArrowLeft: [-20, 0], ArrowRight: [20, 0], ArrowUp: [0, -20], ArrowDown: [0, 20]}[e.key];
    if (!passo) return;
    e.preventDefault();
    const r = player.getBoundingClientRect();
    salvar(posicionar(r.left + passo[0], r.top + passo[1]));
    ajustar();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") alternar(false); });
}

/* ---------- Partes de cada página (rodam de novo a cada troca de página) ---------- */
function iniciarPagina() {
  const hora = document.getElementById("hora");
  if (hora) hora.textContent = new Date().toLocaleTimeString("pt-BR", {hour: "2-digit", minute: "2-digit"}) + " horário local";

  const grade = document.getElementById("grade");
  if (grade) {
    const ESPACOS = 10; // quantidade de quadrados na página de projetos
    const cards = PROJETOS.slice(0, ESPACOS).map(p => `
      <a class="card" href="projeto.html?id=${encodeURIComponent(p.id)}" aria-label="${p.titulo}">
        <div class="capa"><img src="${p.capa}" alt="Capa do projeto ${p.titulo}" loading="lazy" onerror="this.remove()"></div>
        <span class="titulo">${p.titulo}</span>
      </a>`);
    while (cards.length < ESPACOS) cards.push(`<div class="card vazio-slot" aria-hidden="true"></div>`);
    grade.innerHTML = cards.join("");
  }

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
        <h1 class="sr">${p.titulo}</h1>
        <div class="proj-topo">
          <span>Ano<strong>${p.ano}</strong></span>
          <span>Cliente<strong>${p.cliente}</strong></span>
        </div>
        <p class="proj-desc">${p.descricao}</p>
        <div class="proj-imgs">${p.imagens.map(src => `<img src="${src}" alt="${p.titulo}" loading="lazy">`).join("")}</div>
        <nav class="proj-nav" aria-label="Outros projetos">
          <a href="projeto.html?id=${encodeURIComponent(ant.id)}">← ${ant.titulo}</a>
          <a href="projeto.html?id=${encodeURIComponent(prox.id)}">${prox.titulo} →</a>
        </nav>`;
    }
  }
}
iniciarPagina();
setInterval(() => { if (document.getElementById("hora")) iniciarHora(); }, 30000);
function iniciarHora() {
  const h = document.getElementById("hora");
  if (h) h.textContent = new Date().toLocaleTimeString("pt-BR", {hour: "2-digit", minute: "2-digit"}) + " horário local";
}

/* ---------- Troca de página sem recarregar (a música não para) ----------
   Funciona pelo Live Server ou hospedado. Abrindo o arquivo direto (file://),
   o navegador bloqueia isso e o site cai no modo normal: a música reinicia. */
async function irPara(url, empilhar = true) {
  try {
    const r = await fetch(url);
    if (!r.ok) throw new Error("falhou");
    const doc = new DOMParser().parseFromString(await r.text(), "text/html");
    const novo = doc.querySelector("main");
    if (!novo) throw new Error("sem main");
    document.querySelector("main").innerHTML = novo.innerHTML;
    document.title = doc.title;
    if (empilhar) history.pushState(null, "", url);
    window.scrollTo(0, 0);
    iniciarPagina();
  } catch (e) {
    location.href = url; // plano B: navegação normal
  }
}
document.addEventListener("click", e => {
  const a = e.target.closest("a");
  if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  if (a.target && a.target !== "_self") return;
  const u = new URL(a.href, location.href);
  if (u.origin !== location.origin || !u.pathname.endsWith(".html")) return;
  if (u.pathname === location.pathname && u.search === location.search) { e.preventDefault(); window.scrollTo({top: 0, behavior: "smooth"}); return; }
  e.preventDefault();
  irPara(u.href);
});
window.addEventListener("popstate", () => irPara(location.href, false));
