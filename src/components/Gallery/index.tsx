import { useState } from 'react'
import Section from '../Section'

import lupa from '../../assets/mais-zoom.png'
import play from '../../assets/botao-play.png'
import close from '../../assets/close.png'
import { Items, Item, Action, Modal, ModalContent } from './styles'

interface GalleryItem {
  type: 'video' | 'image'
  url: string
}
interface ModalState extends GalleryItem {
  isVisible: boolean
}

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') {
      return item.url
    }
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return lupa
    return play
  }

  const closeModal = () => {
    setModal({ isVisible: false, type: 'image', url: '' })
  }

  return (
    <>
      <Section title={'Galeria'} background={'black'}>
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({ isVisible: true, type: media.type, url: media.url })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="clique para maximizar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={close}
              alt="icone de fechar"
              onClick={() => closeModal()}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="foto do game" />
          ) : (
            <iframe
              frameBorder={0}
              src={modal.url}
              title="YouTube video player"
            ></iframe>
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery
