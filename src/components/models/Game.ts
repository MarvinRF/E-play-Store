class Game {
  category: string
  description: string
  system: string
  title: string
  image: string
  infos: string[]
  id: number

  constructor(
    category: string,
    description: string,
    system: string,
    title: string,
    image: string,
    infos: string[],
    id: number
  ) {
    this.category = category
    this.description = description
    this.system = system
    this.title = title
    this.image = image
    this.infos = infos
    this.id = id
  }
}

export default Game
