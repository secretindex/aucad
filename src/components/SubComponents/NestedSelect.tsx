import { useContext } from "react"
import type { CascaderProps } from "antd"
import { Cascader } from "antd"
import { ActivesContext } from "../../contexts/SecondCheckboxContext"
import { PensionerContext } from "../../contexts/PensionerContext"
import { InactivesContext } from "../../contexts/InactivesContext"

type OptionVal = string | number | undefined

export interface OptionInt {
  label: string
  value: OptionVal
  children?: OptionInt[]
}

interface NestedSelectProps {
  optionList: OptionInt[]
  keyName: string
  category: "active" | "inactive" | "pensioner"
}

const NestedSelect: React.FC<NestedSelectProps> = ({ optionList, keyName, category }) => {
  const options: OptionInt[] = optionList
  const globalDocs = useContext(ActivesContext)
  const pensionerDocs = useContext(PensionerContext)
  const inactiveDocs = useContext(InactivesContext)

  const onChange: CascaderProps<OptionInt>["onChange"] = (value) => {
    const lastVal = value && value[value.length - 1]

    if (typeof lastVal === "undefined") {
      console.log(keyName + " " + lastVal)
    }

    if (category === "active") {
      globalDocs?.setDocs({
        ...globalDocs.docs,
        [keyName]: lastVal,
      })
    }

    if (category === "pensioner") {
      pensionerDocs?.setDocs({
        ...pensionerDocs.docs,
        [keyName]: lastVal,
      })
    }

    if (category === "inactive") {
      inactiveDocs?.setDocs({
        ...inactiveDocs.docs,
        [keyName]: lastVal,
      })
    }

    console.log(keyName + " " + lastVal)
  }

  return <Cascader options={options} onChange={onChange} placeholder="Please select" />
}

export default NestedSelect
