import { useContext, Dispatch, SetStateAction, BaseSyntheticEvent  } from "react"

// TODO: Remove every material ui component remaining
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"

import { Button, Checkbox, Typography, Layout } from "antd"
import type { CheckboxProps } from "antd"

import { TextFieldContext } from "../contexts/TextfieldContext"
import EndText from "../utils/endTextGen"
import { RequiredDocs } from "../utils/docsInterface"

const { Content } = Layout

interface LabelsProps {
  docs: RequiredDocs
  setDocs: Dispatch<SetStateAction<RequiredDocs>>
}

const CheckboxLabelsAnt: React.FC<LabelsProps> = ({ docs, setDocs }) => {
  const textField = useContext(TextFieldContext)

  const handleChange: CheckboxProps["onChange"] = (e) => {
    console.log(e.target)
    const name: string | any = e.target.name

    setDocs({
      ...docs,
      [name]: docs[name] === true ? false : true,
    })
  }

  const submitCheckboxes = (_e: BaseSyntheticEvent) => {
    const endText = new EndText(docs)
    const fullText: string = endText.returnFullText()

    console.log(fullText)

    textField?.setText(fullText || "")
  }

  return (
    <div>
      <Content className="flex flex-col gap-2">
        <Typography.Title level={2} style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>
          Documentos
        </Typography.Title>
      </Content>
      <FormGroup
        sx={{ display: "flex", gap: "0.5rem", flexDirection: "column" }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={docs.foto}
              onChange={handleChange}
              name="foto"
            />
          }
          label="Foto + ID"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={docs.id}
              onChange={handleChange}
              name="id"
            />
          }
          label="Identidade"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={docs.pis}
              onChange={handleChange}
              name="pis"
            />
          }
          label="PIS/PASEP ou NIT"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={docs.residencia}
              onChange={handleChange}
              name="residencia"
            />
          }
          label="C. Residência"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={docs.uniao}
              onChange={handleChange}
              name="uniao"
            />
          }
          label="D. União estável"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={docs.casamento}
              onChange={handleChange}
              name="casamento"
            />
          }
          label="Certidão de Casamento"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={docs.contracheque}
              onChange={handleChange}
              name="contracheque"
            />
          }
          label="Contracheque"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={docs.posse}
              onChange={handleChange}
              name="posse"
            />
          }
          label="Termo de Posse"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={docs.veracidade}
              onChange={handleChange}
              name="veracidade"
            />
          }
          label="Termo de Veracidade"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={docs.estadoc}
              onChange={handleChange}
              name="estadoc"
            />
          }
          label="Declaração de Estado Civil"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={docs.depid}
              onChange={handleChange}
              name="depid"
            />
          }
          label="ID do Dependente"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={docs.decres}
              onChange={handleChange}
              name="decres"
            />
          }
          label="Declaração de Residência"
        />
        <Content style={{ width: "40%" }}>
          <Button
            type="primary"
            onClick={(e: BaseSyntheticEvent) => submitCheckboxes(e)}
          >
            Generate Message
          </Button>
        </Content>
      </FormGroup>
    </div>
  )
}

export default CheckboxLabelsAnt
