import "github-markdown-css"
import ReactMarkdown from "react-markdown"

import { useEffect, useState } from "react"

import "./texts/md-style.css"

const Help = () => {
  const [mdText, setMdText] = useState<string>()

  useEffect(() => {
    fetch("/src/pages/texts/help.md")
      .then((res) => res.text())
      .then((text: string) => {
        console.log(text)
        setMdText(text)
      })
      .catch((err) => console.error(err))
  }, [])
  return (
    <>
      <ReactMarkdown className="markdown-body" children={mdText}></ReactMarkdown>
    </>
  )
}

export default Help
