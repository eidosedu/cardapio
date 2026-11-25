const MENU_CONFIG = {
  storeName: "Lanches & Cia",
  tagline: "Sabor de verdade, feito na hora",
  whatsappNumber: "5575988165288",
  pixKey: "(75) 9 8816-5288",
  imageBasePath: "assets/imagens/"
};

const MENU_CATEGORIES = [
  { id: "todos", label: "Todos" },
  { id: "lanches", label: "Lanches" },
  { id: "petiscos", label: "Petiscos" },
  { id: "bebidas", label: "Bebidas" },
  { id: "refrigerantes", label: "Refrigerantes" }
];

const CATEGORY_NOTICES = {
  petiscos: "Servimos tira-gosto! Consulte a disponibilidade pelo WhatsApp."
};

// svgType disponíveis para fallback automático:
// 'misto', 'hamburguer', 'x_burguer', 'x_bacon', 'x_tudo',
// 'batata', 'batata_recheada', 'suco', 'guarathon', 'agua',
// 'refri_pequeno', 'refri_lata', 'refri_litro', 'cerveja'

const MENU_ITEMS = [
  // ================= LANCHES =================
  {
    id: "misto-quente",
    category: "lanches",
    name: "Misto Quente",
    description: "Pão, queijo e presunto.",
    price: 7.00,
    image: "misto-quente.webp",
    svgType: "misto"
  },
  {
    id: "sanduba",
    category: "lanches",
    name: "Sanduba",
    description: "Pão, ovo e presunto.",
    price: 7.00,
    image: "sanduba.webp",
    svgType: "misto"
  },
  {
    id: "hamburguer",
    category: "lanches",
    name: "Hambúrguer",
    description: "Pão, carne e salada.",
    price: 8.00,
    image: "hamburguer.webp",
    svgType: "hamburguer"
  },
  {
    id: "bauru",
    category: "lanches",
    name: "Bauru",
    description: "Pão, queijo, presunto e salada.",
    price: 8.00,
    image: "bauru.webp",
    svgType: "misto"
  },
  {
    id: "holandes",
    category: "lanches",
    name: "Holandês",
    description: "Pão, carne, ovo e salada.",
    price: 10.00,
    image: "holandes.webp",
    svgType: "hamburguer"
  },
  {
    id: "x-burguer",
    category: "lanches",
    name: "X-Burguer",
    description: "Pão, carne, queijo e salada.",
    price: 11.00,
    image: "x-burguer.webp",
    svgType: "x_burguer"
  },
  {
    id: "x-calabresa",
    category: "lanches",
    name: "X-Calabresa",
    description: "Pão, calabresa, queijo e salada.",
    price: 12.00,
    image: "x-calabresa.webp",
    svgType: "x_burguer"
  },
  {
    id: "x-bacon",
    category: "lanches",
    name: "X-Bacon",
    description: "Pão, bacon, queijo e salada.",
    price: 12.00,
    image: "x-bacon.webp",
    svgType: "x_bacon"
  },
  {
    id: "x-frango",
    category: "lanches",
    name: "X-Frango",
    description: "Pão, frango, queijo e salada.",
    price: 12.00,
    image: "x-frango.webp",
    svgType: "x_burguer"
  },
  {
    id: "americano",
    category: "lanches",
    name: "Americano",
    description: "Pão, ovo, queijo, presunto e salada.",
    price: 12.00,
    image: "americano.webp",
    svgType: "misto"
  },
  {
    id: "misto-bacon",
    category: "lanches",
    name: "Misto Bacon",
    description: "Pão, bacon, queijo e presunto.",
    price: 13.00,
    image: "misto-bacon.webp",
    svgType: "x_bacon"
  },
  {
    id: "suico",
    category: "lanches",
    name: "Suíço",
    description: "Pão, carne, queijo, presunto e salada.",
    price: 13.00,
    image: "suico.webp",
    svgType: "x_burguer"
  },
  {
    id: "x-egg-burguer",
    category: "lanches",
    name: "X-Egg Burguer",
    description: "Pão, carne, ovo, queijo, presunto e salada.",
    price: 14.00,
    image: "x-egg-burguer.webp",
    svgType: "x_burguer"
  },
  {
    id: "x-burguer-bacon",
    category: "lanches",
    name: "X-Burguer Bacon",
    description: "Pão, carne, bacon, queijo e salada.",
    price: 15.00,
    image: "x-burguer-bacon.webp",
    svgType: "x_bacon"
  },
  {
    id: "x-frango-bacon",
    category: "lanches",
    name: "X-Frango c/ Bacon",
    description: "Pão, frango, bacon, queijo e salada.",
    price: 15.00,
    image: "x-frango-bacon.webp",
    svgType: "x_bacon"
  },
  {
    id: "suico-bacon",
    category: "lanches",
    name: "Suíço Bacon",
    description: "Pão, carne, bacon, queijo, presunto e salada.",
    price: 15.00,
    image: "suico-bacon.webp",
    svgType: "x_bacon"
  },
  {
    id: "suico-frango",
    category: "lanches",
    name: "Suíço Frango",
    description: "Pão, carne, frango, queijo, presunto e salada.",
    price: 15.00,
    image: "suico-frango.webp",
    svgType: "x_burguer"
  },
  {
    id: "x-egg-burguer-frango",
    category: "lanches",
    name: "X-Egg Burguer Frango",
    description: "Pão, carne, frango, ovo, queijo, presunto e salada.",
    price: 17.00,
    image: "x-egg-burguer-frango.webp",
    svgType: "x_tudo"
  },
  {
    id: "x-egg-burguer-bacon",
    category: "lanches",
    name: "X-Egg Burguer Bacon",
    description: "Pão, carne, bacon, ovo, queijo, presunto e salada.",
    price: 17.00,
    image: "x-egg-burguer-bacon.webp",
    svgType: "x_bacon"
  },
  {
    id: "rangao",
    category: "lanches",
    name: "Rangão",
    description: "Pão, 2 carnes, 2 ovos, 2 queijos, 2 presuntos e salada.",
    price: 21.00,
    image: "rangao.webp",
    svgType: "x_tudo"
  },
  {
    id: "x-tudo",
    category: "lanches",
    name: "X-Tudo",
    description: "Pão, carne, ovo, queijo, presunto, frango, bacon, calabresa e salada.",
    price: 21.00,
    image: "x-tudo.webp",
    svgType: "x_tudo"
  },

  // ================= PETISCOS =================
  {
    id: "batata-frita",
    category: "petiscos",
    name: "Batata Frita",
    description: "Porção crocante de batata frita na hora.",
    price: 18.00,
    image: "batata-frita.webp",
    svgType: "batata"
  },
  {
    id: "batata-frita-recheada",
    category: "petiscos",
    name: "Batata Frita Recheada",
    description: "Porção generosa coberta com bacon crocante e cheddar cremoso.",
    price: 22.00,
    image: "batata-recheada.webp",
    svgType: "batata_recheada"
  },

  // ================= BEBIDAS =================
  {
    id: "suco-polpa",
    category: "bebidas",
    name: "Suco de Polpa (500ml)",
    description: "Acerola, cacau, cajá, caju, cupuaçu, goiaba, graviola, manga, mangaba, umbu ou tamarindo.",
    price: 7.00,
    image: "suco-polpa.webp",
    svgType: "suco",
    optionsLabel: "Escolha o sabor",
    options: [
      "Acerola", "Cacau", "Cajá", "Caju", "Cupuaçu",
      "Goiaba", "Graviola", "Manga", "Mangaba", "Umbu", "Tamarindo"
    ]
  },
  {
    id: "guarathon",
    category: "bebidas",
    name: "Guarathon",
    description: "Bebida energética à base de guaraná bem gelada.",
    price: 3.00,
    image: "guarathon.webp",
    svgType: "guarathon"
  },
  {
    id: "agua-com-gas",
    category: "bebidas",
    name: "Água com Gás",
    description: "Garrafa de água mineral com gás gelada.",
    price: 3.00,
    image: "agua-com-gas.webp",
    svgType: "agua"
  },
  {
    id: "agua-sem-gas",
    category: "bebidas",
    name: "Água sem Gás",
    description: "Garrafa de água mineral sem gás gelada.",
    price: 2.50,
    image: "agua-sem-gas.webp",
    svgType: "agua"
  },

  // ================= REFRIGERANTES =================
  {
    id: "refri-pequeno",
    category: "refrigerantes",
    name: "Refrigerante Pequeno",
    description: "Garrafinha individual bem gelada.",
    price: 3.00,
    image: "refri-pequeno.webp",
    svgType: "refri_pequeno"
  },
  {
    id: "refri-lata",
    category: "refrigerantes",
    name: "Refrigerante Lata",
    description: "Lata 350ml bem gelada.",
    price: 6.00,
    image: "refri-lata.webp",
    svgType: "refri_lata"
  },
  {
    id: "refri-litro",
    category: "refrigerantes",
    name: "Refrigerante Litro",
    description: "Garrafa 1 Litro ideal para compartilhar.",
    price: 10.00,
    image: "refri-litro.webp",
    svgType: "refri_litro"
  }
];