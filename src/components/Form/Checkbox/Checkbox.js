import React from "react"
import { CheckboxContainer, Input, Label, Checkmark } from "./style"
import { ErrorMessage } from "components/Form/style.js"

const Checkbox = ({
  name,
  value,
  values,
  type,
  onChange,
  className,
  error,
  showError,
  label,
}) => {
  const isChecked = values && values.includes(value) ? true : false

  return (
    <>
      <CheckboxContainer className={className}>
        <Label htmlFor={value}>{label || value}</Label>
        <Input
          id={value}
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          checked={isChecked}
        />
        <Checkmark className="checkmark" />
        {showError && <ErrorMessage>{error}</ErrorMessage>}
      </CheckboxContainer>
    </>
  )
}

export default Checkbox

Checkbox.defaultProps = {
  type: "checkbox",
}
