// const SelectComponent: FC<DocumentosOptionsProps> = ({
//   keyName,
//   optionList,
// }) => {
//   const globalDocs = useContext(SecondCheckboxContext)
//   const [field, setField] = useState<string>("")

//   const handleChange = (value: string) => {
//     setField(value)

//     console.log(optionList ? optionList : "marmota")

//     // console.log(field + " " + value)

//     globalDocs?.setDocs({
//       ...globalDocs.docs,
//       [keyName]: value == "sim" ? true : false,
//     })
//   }

//   // Default
//   if (!optionList) {
//     return (
//       <Select value={field} onChange={handleChange}>
//         <Option key="sim" value="sim">
//           Sim
//         </Option>
//         <Option key="nao" value="nao">
//           Não
//         </Option>
//       </Select>
//     )
//   }

//   if (optionList.every((e) => typeof e !== "object")) {
//     console.log(optionList)
//     return (
//       <Select value={field} onChange={handleChange}>
//         {optionList.map((opt) => (
//           <Option key={opt as string} value={opt}>
//             {opt as string}
//           </Option>
//         ))}
//       </Select>
//     )
//   } else if (optionList.every((e) => typeof e === "object")) {
//     return (
//       <NestedSelect
//         optionList={optionList}
//         keyName={keyName}
//         globalDocs={globalDocs}
//       />
//     )
//   }
// }

// const DocumentOptions: React.FC<DocumentosOptionsProps> = ({
//   name,
//   keyName,
//   optionList,
// }) => {
//   return (
//     <Col span={8}>
//       <Form.Item className=" w-full m-0">
//         <label className=" text-gray-500">{name}</label>
//         <SelectComponent
//           optionList={optionList}
//           name={name}
//           keyName={keyName}
//         />
//       </Form.Item>
//     </Col>
//   )
// }

