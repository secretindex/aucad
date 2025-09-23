import { PensionerDocs } from "../../utils/docsInterface"

const pensionerObj: PensionerDocs = {
  id: {
    name: "Cadastro de Pessoa Física",
    optionList: [
      {
        label: "sim",
        value: "id/v",
      },
      {
        label: "não",
        value: "id/n",
      },
    ],
  },
  residencia: {
    name: "C. Residencia",
    required: true,
    present: false,
    options: undefined,
    optionList: [
      {
        label: "sim",
        value: "cr/s",
        children: [
          {
            label: "valido",
            value: "cr/v",
          },
          {
            label: "desatualizado",
            value: "cr/60",
          },
          {
            label: "terceiros",
            value: "cr/t",
            children: [
              {
                label: "Em nome do pai, mãe ou conjuge",
                value: "dr/u",
                children: [
                  {
                    value: "dr/s",
                    label: "sim",
                  },
                  {
                    value: "dr/n",
                    label: "nao",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "não",
        value: "cr/n",
      },
    ],
  },
  estadoCivil: {
    name: "Conjuge/Companheiro",
    required: true,
    present: false,
    optionList: [
      {
        label: "casado",
        value: "c/u",
        children: [
          {
            label: "C. Casamento",
            value: "cerc/u",
            children: [
              {
                label: "sim",
                value: "cerc/s",
              },
              {
                label: "não",
                value: "cerc/n",
              },
            ],
          },
        ],
      },
      {
        label: "uniao",
        value: "u/u",
        children: [
          {
            label: "reconhecida",
            value: "nascimento",
            children: [
              {
                label: "sim",
                value: "un/s",
              },
              {
                label: "não",
                value: "un/n",
              },
            ],
          },
        ],
      },
      {
        label: "não considerar",
        value: "estc/nd",
      },
    ],
  },
  pis: {
    name: "PIS/PASEP ou NIT",
    required: true,
    present: false,
  },
  tituloEleitor: {
    name: "Título de Eleitor",
    required: true,
    present: false,
    optionList: [
      {
        label: "maior de 18",
        value: "titel/18",
        children: [
          {
            label: "sim",
            value: "titel/p"
          },
          {
            label: "não",
            value: "titel/n"
          }
        ]
      },
      {
        label: "menor",
        value: "titel/m"
      }
    ]
  },
  certObito: {
    name: "Certidão de Óbito",
    required: true,
    present: true
  },
  idExServidor: {
    name: "Identidade ex-servidor",
    required: true,
    present: true,
    optionList: [
      {
        label: "sim",
        value: "idsf/s"
      },
      {
        label: "não",
        value: "idsf/n"
      }
    ]
  },
  posseExServidor: {
    name: "Portaria de Posse ex-servidor",
    required: true,
    present: false,
  },
  portariaConcessao: {
    name: "Portaria de Concessão de Benefício de Pensão",
    required: false,
    present: false,
    optionList: undefined,
  },
}



export default pensionerObj
