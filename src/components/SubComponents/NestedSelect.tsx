import React from "react"
import type { CascaderProps } from "antd"
import { Cascader } from "antd"
import { SecondCheckboxContentType } from "../../contexts/SecondCheckboxContext"

// Pass the last value to end object in the component above

export interface OptionInt {
  label: string
  value: string | number | undefined
  children?: OptionInt[]
}

interface NestedSelectProps {
  optionList: OptionInt[]
  keyName: string
  globalDocs: SecondCheckboxContentType | undefined
}

const NestedSelect: React.FC<NestedSelectProps> = ({
  optionList,
  keyName,
  globalDocs,
}) => {
  const options: OptionInt[] = optionList

  const onChange: CascaderProps<OptionInt>["onChange"] = (value) => {
    const lastVal = value[value.length - 1];
    globalDocs?.setDocs({
      ...globalDocs.docs,
      [keyName]: lastVal,
    })
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
