import { useContext } from "react"
import type { CascaderProps } from "antd"
import { Cascader } from "antd"
import { SecondCheckboxContext } from "../../contexts/SecondCheckboxContext"
import { PensionerContext } from "../../contexts/PensionerContext"

// Int = interface
export interface OptionInt {
  label: string
  value: string | number | undefined
  children?: OptionInt[]
}

interface NestedSelectProps {
  optionList: OptionInt[]
  keyName: string
  category: "active" | "inactive" | "pensioner"
}

const NestedSelect: React.FC<NestedSelectProps> = ({
  optionList,
  keyName,
  category,
}) => {
  const options: OptionInt[] = optionList
  const globalDocs = useContext(SecondCheckboxContext)
  const pensionerDocs = useContext(PensionerContext)

  const onChange: CascaderProps<OptionInt>["onChange"] = (value) => {
    const lastVal = value[value.length - 1]
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
    console.log(keyName + " " + lastVal)
  }

  return (
    <Cascader
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
  )
}

export default NestedSelect
