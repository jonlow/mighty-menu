import React from "react"
import { ButtonBtn, ButtonLink, Label, Icon } from "./style"

const Button = ({
  link,
  onClick,
  submit,
  label,
  icon,
  fullWidth,
  noBackground,
  className,
}) => {
  return (
    <>
      {onClick || submit ? (
        <ButtonBtn
          type={submit && "submit"}
          className={className}
          nobackground={noBackground ? "true" : "false"}
          fullwidth={fullWidth ? "true" : "false"}
          onClick={() => onClick && onClick()}
        >
          {icon && <Icon className="icon">{icon}</Icon>}
          <Label className="label">{label}</Label>
        </ButtonBtn>
      ) : (
        <ButtonLink
          to={link || "/"}
          nobackground={noBackground ? "true" : "false"}
          fullwidth={fullWidth ? "true" : "false"}
          className={className}
        >
          {icon && <Icon className="icon">{icon}</Icon>}
          <Label className="label">{label}</Label>
        </ButtonLink>
      )}
    </>
  )
}

export default Button
