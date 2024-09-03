import { MouseEventHandler, useState } from "react"
import AditionalRejectText from "../components/SubComponents/AditionalRejectText"

export interface MouseCoords {
  x: number
  y: number
}

const TestPage: React.FC = () => {
  const [showReject, setShowReject] = useState<boolean>()
  const [mouseCoords, setMouseCoords] = useState<MouseCoords>({ x: 0, y: 0 })

  const handleContextMenu: MouseEventHandler<HTMLDivElement> = (e: React.MouseEvent) => {
    e.preventDefault()

    setMouseCoords({
      x: e.clientX,
      y: e.clientY,
    })
    setShowReject(true)
  }

  const handleClick = () => {
    setShowReject(false)
  }

  return (
    <section className="h-full w-full">
      <header>
        <h2>Welcome to the Test Area</h2>
      </header>
      <div
        onContextMenu={handleContextMenu}
        onClick={handleClick}
        className="w-2/4 h-2/4 border-2 rounded-md bg-[#fefefe30]"
      >
        {showReject ? <AditionalRejectText mouseCoords={mouseCoords}/> : <></>}
      </div>
    </section>
  )
}

export default TestPage
