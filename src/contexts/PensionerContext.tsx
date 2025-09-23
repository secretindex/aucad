import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react"

import { PensionerDocuments } from "../utils/endTextObject"

export const pensionerContextDocs: PensionerDocuments = {
  posseExServidor: false,
  certObito: false,
  portariaConcessao: false,
  id: "id/n",
  idExServidor: "idsf/n",
  residencia: "cr/n",
  tituloEleitor: "titel/m",
  estadoCivil: "cns/nr",
  pis: "pis/nr",
}

export interface PensionerContentType {
  docs: PensionerDocuments
  setDocs: Dispatch<SetStateAction<PensionerDocuments>>
}

const PensionerContext = createContext<PensionerContentType | undefined>(
  undefined
)

interface ContextProps {
  children: ReactNode
}

const PensionerContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [docs, setDocs] = useState<PensionerDocuments>(pensionerContextDocs)

  return (
    <PensionerContext.Provider value={{ docs, setDocs }}>
      {children}
    </PensionerContext.Provider>
  )
}

export { PensionerContextProvider, PensionerContext }
