import ProductsList from '../../ProductsList'
import Game from '../../models/Game'
import resident from '../../../assets/images/resident.png'
import diablo from '../../../assets/images/diablo.png'
import star from '../../../assets/images/star_wars.png'
import zelda from '../../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Um jogo de terror e sobrevivência.',
    title: 'Resident Evil 4',
    image: resident,
    system: 'Windows',
    infos: ['10%', 'R$ 225,00']
  },
  {
    id: 2,
    category: 'RPG',
    description: 'Um jogo de ação e aventura no mundo sombrio de Santuário.',
    title: 'Diablo IV',
    image: diablo,
    system: 'Windows',
    infos: ['15%', 'R$ 340,00']
  },
  {
    id: 3,
    category: 'Aventura',
    description: 'Uma jornada épica numa galáxia muito, muito distante.',
    title: 'Star Wars Jedi: Fallen Order',
    image: star,
    system: 'PlayStation 5',
    infos: ['20%', 'R$ 200,00']
  },
  {
    id: 4,
    category: 'Aventura',
    description: 'Uma aventura lendária em Hyrule.',
    title: 'The Legend of Zelda: Breath of the Wild',
    image: zelda,
    system: 'Nintendo Switch',
    infos: ['25%', 'R$ 270,00']
  }
]

const embreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'Um jogo de terror e sobrevivência.',
    title: 'Resident Evil 4',
    image: resident,
    system: 'Windows',
    infos: ['10%', 'R$ 225,00']
  },
  {
    id: 6,
    category: 'RPG',
    description: 'Um jogo de ação e aventura no mundo sombrio de Santuário.',
    title: 'Diablo IV',
    image: diablo,
    system: 'Windows',
    infos: ['15%', 'R$ 340,00']
  },
  {
    id: 7,
    category: 'Aventura',
    description: 'Uma jornada épica numa galáxia muito, muito distante.',
    title: 'Star Wars Jedi: Fallen Order',
    image: star,
    system: 'PlayStation 5',
    infos: ['20%', 'R$ 200,00']
  },
  {
    id: 8,
    category: 'Aventura',
    description: 'Uma aventura lendária em Hyrule.',
    title: 'The Legend of Zelda: Breath of the Wild',
    image: zelda,
    system: 'Nintendo Switch',
    infos: ['25%', 'R$ 270,00']
  }
]
const Categories = () => {
  return (
    <>
      <ProductsList games={promocoes} background="cinza" title="RPG" />
      <ProductsList games={embreve} background="black" title="Ação" />
      <ProductsList games={promocoes} background="cinza" title="Aventura" />
      <ProductsList games={embreve} background="black" title="FPS" />
    </>
  )
}

export default Categories
