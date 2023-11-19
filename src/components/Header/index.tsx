import { useSelector } from 'react-redux'

import * as S from './styles'

import { Produto } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootReduce } from '../../store'

type Props = {
  favoritos: Produto[]
}

const Header = ({ favoritos }: Props) => {
  const itens = useSelector((state: RootReduce) => state.carrinhor.itens)
  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
