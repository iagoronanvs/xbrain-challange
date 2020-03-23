import img1 from '../../assets/img/produto-01.jpeg';
import img2 from '../../assets/img/produto-02.jpeg';
import img3 from '../../assets/img/produto-03.jpeg';
import img4 from '../../assets/img/produto-04.jpeg';
import img5 from '../../assets/img/produto-05.jpeg';
import img6 from '../../assets/img/produto-06.jpeg';
import img7 from '../../assets/img/produto-07.jpeg';
import img8 from '../../assets/img/produto-08.jpeg';

const initialState = {
  products: [
    {
      name: 'AirPods Apple Fones de ouvido',
      value: 1499,
      payments: [
        'Em até 12x de R$ 124,92',
        'R$ 1.349 à vista (10% de desconto)'
      ],
      image: img1
    },
    {
      name: 'Capa de silicone para iPhone 8/7 cor Areia - rosa',
      value: 299,
      payments: [
        'Em até 12x de R$ 24,92',
        'R$ 268,10 à vista (10% de desconto)'
      ],
      image: img2
    },
    {
      name: 'Apple Pencil',
      value: 729,
      payments: [
        'Em até 12x de R$ 60,75',
        'R$ 656,10 à vista (10% de desconto)'
      ],
      image: img3
    },
    {
      name: 'Magic Mouse 2 - Prateado',
      value: 549,
      payments: [
        'Em até 12x de R$ 45,75',
        'R$ 494,10 à vista (10% de desconto)'
      ],
      image: img4
    },
    {
      name: 'Caixa prateada de alumínio com pulseira esportiva branca',
      value: 2899,
      payments: [
        'Em até 12x de R$ 241,58',
        'R$ 2.609,10 à vista (10% de desconto)'
      ],
      image: img5
    },
    {
      name: 'Cabo de lightning para USB (1m)',
      value: 149,
      payments: [
        'Em até 12x de R$ 12,42',
        'R$ 134,10 à vista (10% de desconto)'
      ],
      image: img6
    },
    {
      name: 'Smart Keyboard para iPad Pro 12,9 polegadas - inglês (EUA)',
      value: 1099,
      payments: [
        'Em até 12x de R$ 91,58',
        'R$ 989,10 à vista (10% de desconto)'
      ],
      image: img7
    },
    {
      name: 'Carregador USB de SW Apple',
      value: 149,
      payments: [
        'Em até 12x de R$ 12,42',
        'R$ 134,10 à vista (10% de desconto)'
      ],
      image: img8
    }
  ]
};

function ProductReducer(state = initialState, action) {
  return state;
}

export default ProductReducer;
