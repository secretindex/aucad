import text from "./text"
import FinalTextDocuments, { InactivesDocuments } from "./endTextObject"
import { PensionerDocuments } from "./endTextObject"
import { RequiredDocs } from "./docsInterface"

import {
  InactiveStandard,
  InvalidDocuments,
  invalidDocuments,
  StandardDocuments,
  standardDocuments,
} from "./documents and models/pendingDocuments"

import {
  invalidPensioner,
  InvalidPensioner,
  standardPensioner,
  PensionerCheck,
} from "./documents and models/pensionerDocuments"
import { inactivesStandard } from "./documents and models/inactivesDocuments"

class EndText {
  private upper: string = text.upperText
  private midText: string = ""
  private bottom: string = text.bottomText
  private textFields: Array<string>
  private supportNumber: string
  fields:
    | RequiredDocs
    | FinalTextDocuments
    | PensionerDocuments
    | PensionerCheck
    | InactivesDocuments

  constructor(fields: RequiredDocs | FinalTextDocuments | PensionerDocuments | InactivesDocuments) {
    this.fields = fields
    this.textFields = []
    this.supportNumber =
      "\nNúmero do suporte: +55 (96) 3082-1277\nHorários: 08:00 às 17:00, segunda a sexta\n"
  }

  addTextFields(): Array<string> | [] {
    for (const i in this.fields) {
      if ((this.fields as RequiredDocs)[i as keyof RequiredDocs] === true) {
        this.textFields.push(i)
      }
    }

    return []
  }

  returnActivesRejectText(): any {
    let support: string = ""

    for (const i in this.fields) {
      if (
        typeof (this.fields as RequiredDocs)[i as keyof RequiredDocs] !==
        "string"
      ) {
        this.textFields.push(
          (this.fields as RequiredDocs)[i as keyof RequiredDocs] === true
            ? ""
            : standardDocuments[i as keyof StandardDocuments]
        )
      } else {
        let supportValue = (this.fields as FinalTextDocuments)[
          i as keyof FinalTextDocuments
        ]
        console.log("this is support value " + supportValue)
        support =
          supportValue === "dep/id/10" || supportValue === "id/10"
            ? this.supportNumber
            : ""
        this.textFields.push(
          invalidDocuments[
            (this.fields as FinalTextDocuments)[
              i as keyof FinalTextDocuments
            ] as keyof InvalidDocuments
          ]
        )
      }
    }

    for (let i = 0; i < this.textFields.length; i++) {
      if (
        typeof this.textFields[i] === "string" &&
        this.textFields[i].length === 0
      )
        continue
      if (typeof this.textFields[i] === "undefined") continue

      if (this.textFields[i]) this.midText += `- ${this.textFields[i]};\n`
    }

    if (this.midText) {
      return this.upper + "\n" + this.midText + support + this.bottom
    } else {
      return "Cadastro completo 👍"
    }
  }

  returnInactiveText() {
    let support: string = ""

    for (const i in this.fields) {
      if (
        typeof (this.fields as InactivesDocuments)[
          i as keyof InactivesDocuments
        ] !== "string"
      ) {
        this.textFields.push(
          (this.fields as InactivesDocuments)[i as keyof InactivesDocuments] ===
            true
            ? ""
            : inactivesStandard[i as keyof InactiveStandard]
        )
      } else {
        let supportValue = (this.fields as InactivesDocuments)[
          i as keyof InactivesDocuments
        ]
        console.log("this is support value " + supportValue)
        support =
          supportValue === "dep/id/10" || supportValue === "id/10"
            ? this.supportNumber
            : ""
        this.textFields.push(
          invalidDocuments[
            (this.fields as InactivesDocuments)[
              i as keyof InactivesDocuments
            ] as keyof InvalidDocuments
          ]
        )
      }
    }

    for (let i = 0; i < this.textFields.length; i++) {
      if (
        typeof this.textFields[i] === "string" &&
        this.textFields[i].length === 0
      )
        continue
      if (typeof this.textFields[i] === "undefined") continue

      if (this.textFields[i]) this.midText += `- ${this.textFields[i]};\n`
    }

    if (this.midText) {
      return this.upper + "\n" + this.midText + support + this.bottom
    } else {
      return "Cadastro completo 👍"
    }
  }

  returnPensionerText() {
    let support: string = ""

    for (const i in this.fields) {
      if (
        typeof (this.fields as PensionerDocuments)[
          i as keyof PensionerDocuments
        ] !== "string"
      ) {
        this.textFields.push(
          (this.fields as PensionerCheck)[i as keyof PensionerCheck] === true
            ? ""
            : standardPensioner[i as keyof PensionerCheck]
        )
      } else {
        let supportValue = (this.fields as PensionerDocuments)[
          i as keyof PensionerDocuments
        ]
        console.log("this is support value for pensioner " + supportValue)
        support = supportValue === "id/10" ? this.supportNumber : ""
        this.textFields.push(
          invalidPensioner[
            (this.fields as PensionerDocuments)[
              i as keyof PensionerDocuments
            ] as keyof InvalidPensioner
          ]
        )
      }
    }

    for (let i = 0; i < this.textFields.length; i++) {
      if (
        typeof this.textFields[i] === "string" &&
        this.textFields[i].length === 0
      )
        continue
      if (typeof this.textFields[i] === "undefined") continue

      if (this.textFields[i]) this.midText += `- ${this.textFields[i]};\n`
    }

    if (this.midText) {
      return this.upper + "\n" + this.midText + support + this.bottom
    } else {
      return "Cadastro completo 👍"
    }
  }
}

export default EndText
