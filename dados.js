// ➜ EDITE AQUI: a página de projetos tem 10 quadrados (3 por linha), na ordem desta lista.
// Para cada projeto: coloque a imagem quadrada na pasta /img e ajuste "capa" e "imagens".
// O "titulo" aparece quando o mouse passa por cima do quadrado.
// Se faltar imagem, o quadrado aparece cinza até você colocá-la.
const PROJETOS = [
  {
    id: "conjunto-feminino-high-company",
    titulo: "Conjunto Feminino HIGH COMPANY",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Desenvolvimento de produto para HIGH COMPANY.",
    capa: "img/conjunto.png",
    imagens: ["img/conjunto.png", "img/grafico.png" , "img/lookbook.jpeg", "img/fotonocorpo.jpg"] // ex.: ["img/projeto1-a.jpg", "img/projeto1-b.jpg"]
  },
  {
    id: "grafico-drop-verao1",
    titulo: "Grafico para DROP/VERÃO1",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Grafico desenvolvido para estampa de camiseta para HIGH COMPANY.",
    capa: "img/graficoriot.png",
    imagens: ["img/graficoriot.png", "img/camisasriot.png", "img/bandeirariot.png", "img/lookbookriot.png"] // ex.: ["img/projeto2-a.png", "img/projeto2-b.png"]
  },
  {
    id: "grafico-drop-high-cia",
    titulo: "Grafico para DROP/HIGH CIA",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Grafico desenvolvido para estampa de camiseta para HIGH COMPANY.",
    capa: "img/graficocia.png",
    imagens: ["img/graficocia.png", "img/camisacia.jpg", "img/ret.png"] // ex.: ["img/projeto3-a.png", "img/projeto3-b.png"]
  },
  {
    id: "produto-high-company",
    titulo: "Produto para HIGH COMPANY",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Desenvolvimento de produto para HIGH COMPANY.",
    capa: "img/capa-4.jpg",
    imagens: [] // ex.: ["img/projeto4-a.jpg", "img/projeto4-b.jpg"]
  },
  {
    id: "grafico-strive",
    titulo: "Grafico para STRIVE",
    ano: "2026",
    cliente: "STRIVE",
    descricao: "Grafico desenvolvido para estampa de camiseta para STRIVE.",
    capa: "img/ss.png",
    imagens: ["img/ss.png", "img/mm.png", "img/fotostrive.jpeg","img/fotostrive2.jpeg"] // ex.: ["img/projeto5-a.jpg", "img/projeto5-b.jpg"]
  },
  {
    id: "styling-high-company",
    titulo: "Syling para HIGH COMPANY  ",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Trabalho de estilo para HIGH COMPANY.",
    capa: "img/capa-6.jpg",
    imagens: [] // ex.: ["img/projeto6-a.jpg", "img/projeto6-b.jpg"]
  },
  {
    id: "jamaica-slow-jam-pecas-visuais",
    titulo: "Peças visuais para \"Jamaica Slow Jam\"",
    ano: "2026",
    cliente: "@vulgo7b_",
    descricao: "Tracklist feito com caneta Bic no verso da obra do artista Trama.Downtowner + capas alternativas do projeto.",
    capa: "img/capa-7.jpg",
    imagens: ["img/artealt.png", "img/capasinal.png", "img/carro.png", "img/degrade.png", "img/pintura.png", "img/radio.png", "img/jsjcapa.png", 
      "img/bandeiras.png"] // ex.: ["img/projeto7-a.jpg", "img/projeto7-b.jpg"]
  },
  {
    id: "videoclipe-proximo-nivel",
    titulo: "VideoClipe da faixa Próximo nivel",
    ano: "2026",
    cliente: "@vulgo7b_",
    descricao: "Dir, edição e color para videoclipe dafaixa da mixtape \"Jamaica Slow Jam\".",
    capa: "img/capa-8.jpg",
    imagens: [] // ex.: ["img/projeto8-a.jpg", "img/projeto8-b.jpg"]
  },
  {
    id: "graficos-spg-org",
    titulo: "Gráficos para SPG ORG",
    ano: "2026",
    cliente: "@spgorganization",
    descricao: "Gráficos para SPG ORG",
    capa: "img/capa-9.jpg",
    imagens: [] // ex.: ["img/projeto9-a.jpg", "img/projeto9-b.jpg"]
  },
  {
    id: "projeto-10",
    titulo: "Projeto 10",
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
