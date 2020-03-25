import React, { useState } from "react"

import { SelectInput } from "../SelectInput"

import {} from "./style"

const SelectEg = () => {
  const [value, setValue] = useState({})

  const handleSelect = e => {
    setValue(e)
    console.log(e)
  }

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "nuts", label: "Nuts" },
  ]

  return (
    <SelectInput
      options={options}
      placeholder={"React Select Input"}
      value={value}
      onChange={handleSelect}
    />
  )
}

export default SelectEg
