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
    descricao: "Desenvolvimento de produto para HIGH COMPANY. Dir Criativa @patylinos Gráfico: @coutocqa",
    capa: "img/conjunto.png",
    imagens: ["img/conjunto.png", "img/grafico.png" , "img/lookbook.jpg", "img/fotonocorpo.jpg"] // ex.: ["img/projeto1-a.jpg", "img/projeto1-b.jpg"]
  },
  {
    id: "grafico-drop-verao1",
    titulo: "Grafico para DROP/VERÃO1",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Grafico desenvolvido para estampa de camiseta para HIGH COMPANY. Dir Criativa @patylinos",
    capa: "img/graficoriot.png",
    imagens: ["img/graficoriot.png", "img/camisasriot.png", "img/bandeirariot.png", "img/lookbookriot.png"] // ex.: ["img/projeto2-a.png", "img/projeto2-b.png"]
  },
  {
    id: "grafico-drop-high-cia",
    titulo: "Grafico para DROP/HIGH CIA",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Grafico desenvolvido para estampa de camiseta para HIGH COMPANY. Dir Criativa @patylinos",
    capa: "img/graficocia.png",
    imagens: ["img/graficocia.png", "img/camisacia.jpg", "img/ret.png"] // ex.: ["img/projeto3-a.png", "img/projeto3-b.png"]
  },
  {
    id: "produto-high-company",
    titulo: "Produto para HIGH COMPANY",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Desenvolvimento de produto para HIGH COMPANY. Dir Criativa @patylinos Gráfico: @caioschwartzz",
    capa: "img/prato.jpg",
    imagens: ["img/prato.jpg", "img/prato2.jpg", "img/prato3.jpg"] // ex.: ["img/projeto4-a.jpg", "img/projeto4-b.jpg"]
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
    titulo: "Styling para HIGH COMPANY  ",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Trabalho de estilo para HIGH COMPANY Ficha tecnica: Fotografia:@joshvellis Modelos:@anavoig.aguiar & @sainktt Team: @mfbastos @patylinos @ngo.fs @statickayke @roccondiogo.",
    capa: "img/otn1.jpeg",
    imagens: ["img/otn1.jpeg", "img/otn2.jpeg", "img/otn3.jpeg","img/otn4.jpeg", "img/otn5.jpeg", "img/otn6.jpg",
      "img/otn7.jpg", "img/otn8.jpg", "img/otn9.jpg", "img/otn10.jpg", "img/otn11.jpeg", "img/otn12.jpeg"
     ] // ex.: ["img/projeto6-a.jpg", "img/projeto6-b.jpg"]
  },
  {
    id: "jamaica-slow-jam-pecas-visuais",
    titulo: "Peças visuais para \"Jamaica Slow Jam\"",
    ano: "2026",
    cliente: "@vulgo7b_",
    descricao: "Tracklist feito com caneta Bic no verso da obra do artista @Trama.Downtown + capas alternativas do projeto.",
    capa: "img/trackecapa.jpeg",
    imagens: ["img/TRACKLIST TITULO.png" , "img/artealt.png", "img/capasinal.png", "img/carro.png", "img/degrade.png", "img/pintura.png", "img/radio.png", "img/jsjcapa.png", 
      "img/bandeiras.png"] // ex.: ["img/projeto7-a.jpg", "img/projeto7-b.jpg"]
  },
  {
    id: "videoclipe-proximo-nivel",
    titulo: "VideoClipe da faixa Próximo nivel",
    ano: "2026",
    cliente: "@vulgo7b_",
    descricao: "Dir, edição e color para videoclipe dafaixa da mixtape \"Jamaica Slow Jam\".Ficha técnica: Prod:@jaypluggz Mix: @wbandxz Master: @prod.coelho Diretor de Fotografia: Victor de Almeida Prod Executiva: @annaclarabianchi Imagens de Handycam: @lucasbs_",
    capa: "img/clipe1.jpg",
    imagens: ["img/clipe1.jpg", "img/clipe2.jpg", "img/clipe3.jpg", "img/clipe4.jpg", "img/clipe5.jpg"] // ex.: ["img/projeto8-a.jpg", "img/projeto8-b.jpg"]
  },
  {
    id: "graficos-spg-org",
    titulo: "Gráficos para SPG ORG",
    ano: "2026",
    cliente: "@spgorganization",
    descricao: "Gráficos para SPG ORG",
    capa: "img/spg1.jpg",
    imagens: ["img/spg1.jpg", "img/spg2.jpg", "img/spg3.jpg", "img/spg4.jpg", "img/spg5.jpg", "img/spg6.jpg", 
      "img/spg7.jpg", "img/spg8.jpg", "img/spg9.jpg"
    ] // ex.: ["img/projeto9-a.png", "img/projeto9-b.png"]
  },
  {
    id: "Dover Street Market Magazine(concept)",
    titulo: "Dover Street Market Magazine(concept)",
    ano: "2026",
    cliente: "—",
    descricao: ".",
    capa: "img/dsm1.jpg",
    imagens: ["img/dsm1.jpg", "img/dsm22.jpg", "img/dsm33.jpg"] // ex.: ["img/projeto10-a.jpg", "img/projeto10-b.jpg"]
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
