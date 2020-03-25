import React from "react"
import Select from "react-select"
import {
  SelectContainer,
  ArrowContainer,
  SingleValueContainer,
  // Placeholder,
} from "./style"
import { ReactComponent as Arrow } from "./down-arrow.svg"

const SelectInput = ({
  placeholder,
  options,
  debug,
  onChange,
  name,
  value,
  type,
}) => {
  const customSingleValue = () => (
    <SingleValueContainer>
      <span>{value.label || placeholder}</span>
    </SingleValueContainer>
  )

  // const customPlaceholder = () => (
  //   <Placeholder>
  //     <span>asdsdffsff</span>
  //   </Placeholder>
  // )

  const customDropdownIndicator = props => {
    return (
      <ArrowContainer open={props.selectProps.menuIsOpen}>
        <Arrow />
      </ArrowContainer>
    )
  }

  return (
    <SelectContainer>
      <Select
        menuIsOpen={debug}
        classNamePrefix="basic"
        isSearchable={false}
        // autoFocus={false}
        options={options}
        components={{
          SingleValue: customSingleValue,
          DropdownIndicator: customDropdownIndicator,
          // Placeholder: customPlaceholder,
        }}
        type={type || "select"}
        onChange={e => onChange(e, { name: name })}
        name={name}
        id={name}
        value={value}
      />
    </SelectContainer>
  )
}

export default SelectInput
