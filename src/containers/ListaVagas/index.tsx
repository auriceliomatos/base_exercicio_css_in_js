import { useState } from 'react'
import FormVagas from '../../components/FormVagas'

import Vaga from '../../components/Vaga'
import { ListaDasVagas } from './styles'

type Vaga = {
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  entrevista: string

  requisitos: string[]
}

const vagas = [
  {
    id: 1,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    entrevista: 'Pós Entrvista',
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor back end',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    entrevista: 'Pós Entrvista',
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 3,
    titulo: 'Desenvolvedor fullstack',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    entrevista: 'Pós Entrvista',
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 4,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    entrevista: 'Pós Entrvista',
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 5,
    titulo: 'Desenvolvedor back end',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'clt',
    entrevista: 'Pós Entrvista',
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 6,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'pj',
    entrevista: 'Pós Entrvista',
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter(
    (x) => x.titulo.toLocaleLowerCase().search(filtro) >= 0
  )

  return (
    <div>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <ListaDasVagas>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            entrevista={vag.entrevista}
            requisitos={vag.requisitos}
          />
        ))}
      </ListaDasVagas>
    </div>
  )
}

export default ListaVagas
