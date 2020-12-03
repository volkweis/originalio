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
    images: {
      img1: require('./assets/img/mainProd.jpg'),
      img2: require('./assets/img/prod01.jpg'),
      img3: require('./assets/img/prod03.jpg'),
      img4: require('./assets/img/prod04.jpg'),
      img5: require('./assets/img/prod03.jpg'),
    },
  },
];

export default products;
