import React from "react"
import { RadioInputContainer, Input, Label, Checkmark } from "./style"
import { ErrorMessage } from "components/Form/style.js"

const RadioInput = ({
  name,
  value,
  values,
  label,
  type,
  onChange,
  className,
  showError,
  error,
}) => {
  const isChecked = values && values === value ? true : false

  return (
    <>
      <RadioInputContainer className={className}>
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
      </RadioInputContainer>
    </>
  )
}

export default RadioInput

RadioInput.defaultProps = {
  type: "radio",
}
