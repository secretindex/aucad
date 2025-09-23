import { ActivesDocs } from "../../utils/docsInterface"

const activesDocument: ActivesDocs = {
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
    name: "Estado civil",
    required: true,
    present: false,
    options: undefined,
    optionList: [
      {
        label: "solteiro",
        value: "s/u",
        children: [
          {
            label: "C. Nascimento",
            value: "cns/u",
            children: [
              {
                label: "sim",
                value: "cns/s",
              },
              {
                label: "não",
                value: "cns/n",
              },
            ],
          },
        ],
      },
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
          {
            label: "C. Casamento Avb",
            value: "cav/u",
            children: [
              {
                label: "sim",
                value: "cav/s",
              },
              {
                label: "não",
                value: "cav/n",
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
        label: "não declarado",
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
  },
  reservista: {
    name: "Reservista",
    required: true,
    present: false,
    optionList: [
      {
        label: "Requerido",
        value: "res/r",
        children: [
          {
            label: "enviado",
            value: "res/s"
          },
          {
            label: "não enviado",
            value: "res/n"
          }
        ]
      },
      {
        label: "não requerido",
        value: "res/nr"
      }
    ]
  },
  posse: {
    name: "Portaria de Posse",
    required: true,
    present: false,
  },
  cnis: {
    name: "CNIS",
    required: true,
    present: false,
  },
  escolaridade: {
    name: "Comprovante de Escolaridade",
    required: true,
    present: false,
  },
  depId: {
    name: "Dependentes",
    required: false,
    present: false,
    options: undefined,
    optionList: [
      {
        label: "sim",
        value: "dep/s",
        children: [
          {
            label: "identidade",
            value: "dep/id",
            children: [
              {
                label: "valida",
                value: "dep/id/v",
                children: [
                  {
                    label: "Invalidez",
                    value: "inv/i",
                    children: [
                      {
                        label: "comprovado",
                        value: "inv/sc"
                      },
                      {
                        label: "não comprovado",
                        value: "inv/nc"
                      },
                    ]
                  },
                  {
                    label: "Curatela/Guarda",
                    value: "cg/u",
                    children: [
                      {
                        label: "Termo de Guarda/Curatela",
                        value: "tgc/u",
                        children: [
                          {
                            label: "sim",
                            value: "tgc/s",
                          },
                          {
                            label: "não",
                            value: "tgc/n",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: "Filho +18",
                    value: "dp/21",
                  },
                  {
                    label: "Ok",
                    value: "dp/s",
                  },
                ],
              },
              {
                label: "não",
                value: "dep/id/n",
              },
            ],
          },
          {
            label: "C. Nascimento",
            value: "cnd/u",
            children: [
              {
                label: "sim",
                value: "cnd/s",
              },
              {
                label: "não",
                value: "cnd/n",
              },
            ],
          },
        ],
      },
      {
        label: "não",
        value: "dep/n",
      },
    ],
  },
}

export default activesDocument
