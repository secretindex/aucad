import { useContext } from "react"

import { ActivesContext, documentsContext } from "../contexts/SecondCheckboxContext"
import { InactivesContext, inactivesDefault } from "../contexts/InactivesContext"
import { PensionerContext, pensionerContextDocs } from "../contexts/PensionerContext"
import { Category } from "../components/SubComponents/types/essentialTypes"
import { TextFieldContext } from "../contexts/TextfieldContext"

const useAppReset = (category: Category) => {
  const globalDocs = useContext(ActivesContext)
  const pensionerDocs = useContext(PensionerContext)
  const inactiveDocs = useContext(InactivesContext)
  const textField = useContext(TextFieldContext)

  const statusReset = () => {
    textField?.setText("")

    if (category === "active") {
      globalDocs?.setDocs(() => documentsContext)
    }
    if (category === "pensioner") {
      pensionerDocs?.setDocs(pensionerContextDocs)
    }
    if (category === "inactive") {
      inactiveDocs?.setDocs(inactivesDefault)
    }
  }

  return statusReset
}

export default useAppReset
