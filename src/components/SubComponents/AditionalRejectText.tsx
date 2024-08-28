import { FC } from "react"

import { List } from "antd"
import AditionalTexts from "../objects/AditionalRejectTexts"
import TextBox from "./rejectComponent/TextBox"

import { MouseCoords } from "../../pages/TestPage"

interface RejectProps {
  mouseCoords: MouseCoords
}

const AditionalRejectText: FC<RejectProps> = ({ mouseCoords }) => {
  // Create an object and use map to render a button for each button
  // Render as a div, not as a button

  console.log(AditionalTexts)

  return (
    <div style={{ zIndex: 1000, position: "absolute", top: mouseCoords.y, left: mouseCoords.x }} className="dropdown flex flex-col justify-between gap-4 overflow-auto bg-[#fefefe]">
      <header className="mt-2">
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
