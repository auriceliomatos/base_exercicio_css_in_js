import { LinkAnuncio, TitleAnuncioDaVaga, VagasAnuncio } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  entrevista: string
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagasAnuncio>
    <TitleAnuncioDaVaga>{props.titulo}</TitleAnuncioDaVaga>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>Salário: {props.entrevista}</li>
      <li>Habilidades profissionais: {props.requisitos.join(', ')}</li>
    </ul>
    <LinkAnuncio href="#">interesses</LinkAnuncio>
  </VagasAnuncio>
)

export default Vaga
