import { FC } from "react"

import { Button, List } from "antd"
import AditionalTexts from "../objects/AditionalRejectTexts"
import TextBox from "./rejectComponent/TextBox"

const AditionalRejectText: FC = () => {
  // Create an object and use map to render a button for each button
  // Render as a div, not as a button

  console.log(AditionalTexts)

  return (
    <div className="dropdown flex flex-col gap-4 overflow-auto">
      <header>
        <h4 className="text-center font-bold">Textos adicionais</h4>
      </header>
      <List className="w-full">
        {AditionalTexts.map((el) => {
          return (
            <List.Item>
              <TextBox text={el.text} title={el.name} />
            </List.Item>
          )
        })}
      </List>
    </div>
  )
}

export default AditionalRejectText
