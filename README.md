# Aucad - Auxiliar de Cadastro

Aplicativo feito para verificar o cadastro com base no que **falta**, gerando uma mensagem automática de recusa.

## Como utilizar

A interface principal é a primeira que aparece. A cada cadastro novo que você for validar, certifique-se que tenha resetado a página apertando no botão do canto inferior direito.
*Não é necessário que se aperte no botão se for a primeira vez.*

A segunda página do aplicativo é a versão mais primitiva, onde você seleciona as caixinhas e ele automaticamente irá gerar um texto de recusa com base nas caixinhas que você marcou.

Cada caixinha foi pensada para gerar **apenas uma** pequena mensagem cada, que é junta com as partes superiores e inferiores da mensagem.

A mensagem é editável.

### Dicas

- Não precisa selecionar "não" em todo documento que estiver faltando. Ele será requerido por padrão caso esteja vazio;
- Alguns textos são modelos, como por exemplo, o texto para pedir o documento de identidade de algum dependente. Certifique-se de que você digitou o nome da pessoa no lugar do texto em maiúsculo.
- Se você mudar de aba no aplicativo, as caixinhas selecionadas (da página principal) serão resetadas.
- Apenas o botão de reset da página principal recarrega o aplicativo.

### Proximas mensagens / features para implementar

- ID de dependente incompleto
- Estado Civil não declarado e nenhuma certidão
- Numero de suporte para id pessoal +10 (fix)
- Página para me enviar mensagem sobre alguma feature nova, ideia ou relatar bug


#### Pensionistas - Documents

- Identitade
- Comprovante de Residência
- Após falecimento -> Casamento OU União Estável
est. civil não obrigatório
- PIS
- Declaração de IRPF ou ISENÇÃO

**Filhos**

- PIS para + 18;
- Inacumulabilidade de Pensão
