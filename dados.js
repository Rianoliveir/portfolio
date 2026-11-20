// ➜ EDITE AQUI: cada projeto vira um quadrado na página de projetos (3 por linha), na ordem desta lista.
// "capa" = imagem do quadrado. "imagens" = fotos que aparecem dentro da página do projeto.
// O "id" precisa ser único e simples (só letras minúsculas, números e hífen).
// ATENÇÃO: o GitHub diferencia maiúsculas de minúsculas. Escreva o nome do arquivo EXATAMENTE como está na pasta img.
const PROJETOS = [
  {
    id: "conjunto-feminino-high-company",
    titulo: "Conjunto Feminino HIGH COMPANY",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Desenvolvimento de produto para HIGH COMPANY. Dir Criativa @patylinos Gráfico: @coutocqa",
    capa: "img/conjunto.png",
    imagens: ["img/conjunto.png", "img/grafico.PNG" , "img/lookbook.jpg", "img/fotonocorpo.jpg"]
  },
  {
    id: "grafico-drop-verao1",
    titulo: "Grafico para HIGH COMPANY",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Grafico desenvolvido para estampa de camiseta para HIGH COMPANY. Dir Criativa @patylinos",
    capa: "img/graficoriot.png",
    imagens: ["img/graficoriot.png", "img/camisasriot.png", "img/bandeirariot.png", "img/lookbookriot.png"]
  },
  {
    id: "grafico-drop-high-cia",
    titulo: "Grafico para HIGH COMPANY",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Grafico desenvolvido para estampa de camiseta para HIGH COMPANY. Dir Criativa @patylinos",
    capa: "img/graficocia.PNG",
    imagens: ["img/graficocia.PNG", "img/camisacia.jpg", "img/ret.PNG"]
  },
  {
    id: "produto-high-company",
    titulo: "Produto para HIGH COMPANY",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Desenvolvimento de produto para HIGH COMPANY. Dir Criativa @patylinos Gráfico: @caioschwartzz",
    capa: "img/prato.jpg",
    imagens: ["img/prato.jpg", "img/prato2.jpg", "img/prato3.jpg"]
  },
  {
    id: "grafico-strive",
    titulo: "Grafico para STRIVE",
    ano: "2026",
    cliente: "STRIVE",
    descricao: "Grafico desenvolvido para estampa de camiseta para STRIVE.",
    capa: "img/ss.PNG",
    imagens: ["img/ss.PNG", "img/mm.PNG", "img/fotostrive.jpeg","img/fotostrive2.jpeg"]
  },
  {
    id: "styling-high-company",
    titulo: "Styling para HIGH COMPANY",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Trabalho de estilo para HIGH COMPANY Ficha tecnica: Fotografia:@joshvellis Modelos:@anavoig.aguiar & @sainktt Team: @mfbastos @patylinos @ngo.fs @statickayke @roccondiogo.",
    capa: "img/otn1.jpeg",
    imagens: ["img/otn1.jpeg", "img/otn2.jpeg", "img/otn3.jpeg","img/otn4.jpeg", "img/otn5.jpeg", "img/otn6.jpg",
      "img/otn7.jpg", "img/otn8.jpg", "img/otn9.jpg", "img/otn10.jpg", "img/otn11.jpeg", "img/otn12.jpeg"
     ]
  },
  {
    id: "jamaica-slow-jam-pecas-visuais",
    titulo: "Peças visuais para “Jamaica Slow Jam”",
    ano: "2026",
    cliente: "@vulgo7b_",
    descricao: "Tracklist feito com caneta Bic no verso da obra do artista @Trama.Downtown + capas alternativas do projeto.",
    capa: "img/trackecapa.jpeg",
    imagens: ["img/TRACKLIST TITULO.png" , "img/artealt.png", "img/capasinal.png", "img/carro.png", "img/degrade.png", "img/pintura.png", "img/radio.png", "img/jsjcapa.png", 
      "img/bandeiras.png"]
  },
  {
    id: "videoclipe-proximo-nivel",
    titulo: "VideoClipe da faixa Próximo nivel",
    ano: "2026",
    cliente: "@vulgo7b_",
    descricao: "Dir, edição e color para videoclipe dafaixa da mixtape \"Jamaica Slow Jam\".Ficha técnica: Prod:@jaypluggz Mix: @wbandxz Master: @prod.coelho Diretor de Fotografia: Victor de Almeida Prod Executiva: @annaclarabianchi Imagens de Handycam: @lucasbs_",
    capa: "img/clipe1.jpg",
    imagens: ["img/clipe1.jpg", "img/clipe2.jpg", "img/clipe3.jpg", "img/clipe4.jpg", "img/clipe5.jpg"]
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
    ]
  },
  {
    id: "dover-street-market-concept",
    titulo: "Dover Street Market Magazine(concept)",
    ano: "2026",
    cliente: "—",
    descricao: ".",
    capa: "img/dsm1.jpg",
    imagens: ["img/dsm1.jpg", "img/dsm22.jpg", "img/dsm33.jpg"]
  },
  {
    id: "buckethat-high-company",
    titulo: "BucketHat para HIGH COMPANY",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Desenvolvimento de produto para HIGH COMPANY. Dir Criativa @patylinos Gráfico: @kiqillus",
    capa: "img/bucket.jpeg",
    imagens: ["img/bucket.jpeg", "img/spike.png", "img/Lookbookbucket.jpeg"]
  },
 {
    id: "grafico-drop-verao2",
    titulo: "Grafico para HIGH COMPANY",
    ano: "2026",
    cliente: "HIGH COMPANY",
    descricao: "Grafico desenvolvido para estampa de camiseta para HIGH COMPANY. Dir Criativa @patylinos",
    capa: "img/flor.png",
    imagens: ["img/flor.png", "img/camisasflor.png"]
  }
];
