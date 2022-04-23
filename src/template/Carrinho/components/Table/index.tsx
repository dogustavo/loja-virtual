import { ICart } from 'types'

import * as S from './styles'

interface IProps {
  data: ICart[]
}

export default function Table({ data }: IProps) {
  const renderTableRow = (cart: ICart) => {
    return (
      <tr key={cart.id}>
        <S.TD>
          <S.Product>
            <img src={cart.image_url} alt={`Produto ${cart.name}`} />
            <p>{cart.name}</p>
          </S.Product>
        </S.TD>
        <S.TD>{cart.price}</S.TD>
        <S.TD>Excluir</S.TD>
      </tr>
    )
  }

  const rederTableBody = () => {
    return data?.map((cart) => renderTableRow(cart))
  }

  return (
    <S.Container>
      <thead>
        <tr>
          <S.TH>Produto</S.TH>
          <S.TH>Valor</S.TH>
          <th />
        </tr>
      </thead>
      <tbody>{rederTableBody()}</tbody>
    </S.Container>
  )
}