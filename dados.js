// ➜ EDITE AQUI: a página de projetos tem 10 quadrados (3 por linha), na ordem desta lista.
// Para cada projeto: coloque a imagem quadrada na pasta /img e ajuste "capa" e "imagens".
// O "titulo" aparece quando o mouse passa por cima do quadrado.
// Se faltar imagem, o quadrado aparece cinza até você colocá-la.
const PROJETOS = [
  {
    id: "",
    titulo: "Conjunto Feminino HIGH COMPANY",
    categoria: "Conceito",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Desenvolvimento de produto para HIGH COMPANY.",
    capa: "img/capa-1.jpg",
    imagens: [] // ex.: ["img/projeto1-a.jpg", "img/projeto1-b.jpg"]
  },
  {
    id: "Grafico para DROP/VERÃO1",
    titulo: "Grafico para DROP/VERÃO1",
    categoria: "Capa / Arte",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Grafico desenvolvido para estampa de camiseta para HIGH COMPANY.",
    capa: "img/capa-2.jpg",
    imagens: [] // ex.: ["img/projeto2-a.jpg", "img/projeto2-b.jpg"]
  },
  {
    id: "Grafico para DROP/HIGH CIA",
    titulo: "Grafico para DROP/HIGH CIA",
    categoria: "Categoria",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Grafico desenvolvido para estampa de camiseta para HIGH COMPANY.",
    capa: "img/capa-3.jpg",
    imagens: [] // ex.: ["img/projeto3-a.jpg", "img/projeto3-b.jpg"]
  },
  {
    id: "Produto para HIGH COMPANY",
    titulo: "Produto para HIGH COMPANY",
    categoria: "Produto",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Desenvolvimento de produto para HIGH COMPANY.",
    capa: "img/capa-4.jpg",
    imagens: [] // ex.: ["img/projeto4-a.jpg", "img/projeto4-b.jpg"]
  },
  {
    id: "Grafico para STRIVE",
    titulo: "Grafico para STRIVE",
    categoria: "Capa / Arte",
    ano: "2026",
    cliente: "STRIVE",
    descricao: "Grafico desenvolvido para estampa de camiseta para STRIVE.",
    capa: "img/capa-4.jpg",
    imagens: [] // ex.: ["img/projeto4-a.jpg", "img/projeto4-b.jpg"]
  },
  {
    id: "Syling para HIGH COMPANY  ",
    titulo: "Syling para HIGH COMPANY  ",
    categoria: "Categoria",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Trabalho de estilo para HIGH COMPANY.",
    capa: "img/capa-6.jpg",
    imagens: [] // ex.: ["img/projeto6-a.jpg", "img/projeto6-b.jpg"]
  },
  {
    id: "Peças visuais para \"Jamaica Slow Jam\"",
    titulo: "Peças visuais para \"Jamaica Slow Jam\"",
    categoria: "Categoria",
    ano: "2026",
    cliente: "@vulgo7b_",
    descricao: "Tracklist feito com caneta Bic no verso da obra do artista Trama.Downtowner + capas alternativas do projeto.",
    capa: "img/capa-7.jpg",
    imagens: [] // ex.: ["img/projeto7-a.jpg", "img/projeto7-b.jpg"]
  },
  {
    id: "VideoClipe da faixa Próximo nivel",
    titulo: "VideoClipe da faixa Próximo nivel",
    categoria: "Categoria",
    ano: "2026",
    cliente: "@vulgo7b_",
    descricao: "Dir, edição e color para videoclipe dafaixa da mixtape \"Jamaica Slow Jam\".",
    capa: "img/capa-8.jpg",
    imagens: [] // ex.: ["img/projeto8-a.jpg", "img/projeto8-b.jpg"]
  },
  {
    id: "Gráficos para SPG ORG",
    titulo: "Gráficos para SPG ORG",
    categoria: "Categoria",
    ano: "2026",
    cliente: "@spgorganization",
    descricao: "Gráficos para SPG ORG",
    capa: "img/capa-9.jpg",
    imagens: [] // ex.: ["img/projeto9-a.jpg", "img/projeto9-b.jpg"]
  },
  {
    id: "projeto-10",
    titulo: "Projeto 10",
    categoria: "Categoria",
    ano: "2026",
    cliente: "—",
    descricao: "Descreva aqui o projeto: objetivo, processo e resultado.",
    capa: "img/capa-10.jpg",
    imagens: [] // ex.: ["img/projeto10-a.jpg", "img/projeto10-b.jpg"]
  }
];

// ➜ MÚSICA DO DIA: a cada dia o player toca a próxima música da lista, em ordem.
// Para adicionar: no Spotify, clique em "Compartilhar → Copiar link da música".
// O link é parecido com https://open.spotify.com/track/5X69MOmlbEJQA49rwn2tjd?si=...
// Copie só o código entre "/track/" e o "?" e cole abaixo, entre aspas, separado por vírgula.
const MUSICAS = [
  "5X69MOmlbEJQA49rwn2tjd"
  // , "codigo-da-musica-2"
  // , "codigo-da-musica-3"
];
