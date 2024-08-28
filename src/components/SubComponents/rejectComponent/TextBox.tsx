import { FC } from "react"

interface TextBoxProps {
  title: string
  text: string
}

const TextBox: FC<TextBoxProps> = ({ title, text }) => {
  return (
    <div className="w-full h-2/6 border-gray-400 p-3 cursor-pointer hover:bg-[#aeaeae50] transition-all ease-in-out">
      <h5 style={{ fontWeight: "bold" }}>{title}</h5>
      <p className="overflow-hidden hidden">{text}</p>
    </div>
  )
}

export default TextBox
