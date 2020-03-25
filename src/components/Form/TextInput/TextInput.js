import React, { useState, useEffect } from "react"
import { TextInputContainer, Input, Area, IconArea } from "./style"
import { Label, FloatingLabel, ErrorMessage } from "components/Form/style.js"

const TextInput = ({
  name,
  placeholder,
  value,
  type,
  onChange,
  className,
  error,
  showError,
  label,
  floatingLabel,
  icon,
}) => {
  const [fieldActive, setFieldActive] = useState(false)

  useEffect(() => {
    if (value.length) {
      setFieldActive(true)
    } else {
      setFieldActive(false)
    }
  }, [value.length])

  return (
    <TextInputContainer
      type={type}
      fieldActive={fieldActive}
      className={className}
      area={type === "textarea"}
    >
      {label && <Label htmlFor={name}>{label}</Label>}

      {floatingLabel && (
        <FloatingLabel
          area={type === "textarea"}
          icon={icon}
          fieldActive={fieldActive}
          htmlFor={name}
        >
          {floatingLabel}
        </FloatingLabel>
      )}

      {icon && icon}
      {type === "textarea" ? (
        <Area
          floatingLabel={floatingLabel}
          name={name}
          placeholder={placeholder || ""}
          value={value}
          type={type}
          onChange={onChange}
          id={name}
          onFocus={() => setFieldActive(true)}
          onBlur={() => !value.length && setFieldActive(false)}
          icon={icon}
        />
      ) : (
        <Input
          floatingLabel={floatingLabel}
          name={name}
          placeholder={placeholder || ""}
          value={value}
          type={type}
          onChange={onChange}
          id={name}
          onFocus={() => setFieldActive(true)}
          onBlur={() => !value.length && setFieldActive(false)}
          icon={icon}
        />
      )}

      {showError && <ErrorMessage>{error}</ErrorMessage>}
    </TextInputContainer>
  )
}

export default TextInput

TextInput.defaultProps = {
  type: "text",
}
