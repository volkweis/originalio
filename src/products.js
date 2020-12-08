const products = [
  {
    name: 'rasteira tira dedo',
    ref: 'RT 0568 | 03.07.0653',
    price: 69,
    discountPrice: 55.2,
    colors: [
      { id: 0, name: 'Fucsia', hex: '#A9095E' },
      { id: 1, name: 'Marinho', hex: '#2A5A75' },
      { id: 2, name: 'Caramelo', hex: '#A14830' },
      { id: 3, name: 'Preto', hex: '#000000' },
    ],
    sizes: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42'],
    installments: 6,
    description:
      'Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.',
    images: [
      require('./assets/img/mainProd.jpg'),
      require('./assets/img/prod01.jpg'),
      require('./assets/img/prod03.jpg'),
      require('./assets/img/prod04.jpg'),
      require('./assets/img/prod03.jpg'),
      require('./assets/img/prod01.jpg'),
      require('./assets/img/prod04.jpg'),
    ],
  },
  {
    name: 'bolsa messenger couro',
    ref: 'RT 0569 | 03.07.0654',
    price: 300,
    discountPrice: 259.9,
    colors: [
      { id: 0, name: 'Fucsia', hex: '#A9095E' },
      { id: 1, name: 'Marinho', hex: '#2A5A75' },
      { id: 2, name: 'Caramelo', hex: '#A14830' },
      { id: 3, name: 'Preto', hex: '#000000' },
    ],
    sizes: ['01'],
    installments: 6,
    description:
      'Bolsa estilo messenger em couro texturizado com tira de couro.',
    images: [
      require('./assets/img/prod03.jpg'),
      require('./assets/img/prod01.jpg'),
      require('./assets/img/mainProd.jpg'),
      require('./assets/img/prod04.jpg'),
      require('./assets/img/prod03.jpg'),
      require('./assets/img/prod01.jpg'),
      require('./assets/img/prod04.jpg'),
    ],
  },

  {
    name: 'sandália open toe slingback',
    ref: 'RT 0570 | 03.07.0655',
    price: 250,
    discountPrice: 204.9,
    colors: [
      { id: 0, name: 'Dourado', hex: '#daa520' },
      { id: 1, name: 'Prata', hex: '#C0C0C0' },
    ],
    sizes: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42'],
    installments: 6,
    description:
      'Sandália em couro com tiras em X. Solado emborrachado e palmilha em couro.',
    images: [
      require('./assets/img/prod04.jpg'),
      require('./assets/img/prod01.jpg'),
      require('./assets/img/mainProd.jpg'),
      require('./assets/img/prod04.jpg'),
      require('./assets/img/prod03.jpg'),
      require('./assets/img/prod01.jpg'),
      require('./assets/img/mainProd.jpg'),
    ],
  },

  {
    name: 'bolsa clutch couro',
    ref: 'RT 0571 | 03.07.0656',
    price: 230,
    discountPrice: 210.9,
    colors: [
      { id: 0, name: 'Fucsia', hex: '#A14830' },
      { id: 1, name: 'Marinho', hex: '#000000' },
    ],
    sizes: ['01'],
    installments: 6,
    description:
      'Bolsa estilo clutch em couro texturizado.',
    images: [
      require('./assets/img/prod01.jpg'),
      require('./assets/img/prod03.jpg'),
      require('./assets/img/prod01.jpg'),
      require('./assets/img/prod04.jpg'),
      require('./assets/img/prod03.jpg'),
      require('./assets/img/prod01.jpg'),
      require('./assets/img/prod04.jpg'),
    ],
  },
  {
    name: 'sandália rasteirinha couro',
    ref: 'RT 0572 | 03.07.0660',
    price: 89,
    discountPrice: 75.2,
    colors: [
      { id: 0, name: 'Fucsia', hex: '#000000' },
      { id: 1, name: 'Marinho', hex: '#2A5A75' },
      { id: 2, name: 'Caramelo', hex: '#A14830' },
    ],
    sizes: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42'],
    installments: 6,
    description:
      'Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.',
    images: [
      require('./assets/img/mainProd.jpg'),
      require('./assets/img/prod01.jpg'),
      require('./assets/img/prod03.jpg'),
      require('./assets/img/prod04.jpg'),
      require('./assets/img/prod03.jpg'),
      require('./assets/img/prod01.jpg'),
      require('./assets/img/prod04.jpg'),
    ],
  },
];

export default products;
