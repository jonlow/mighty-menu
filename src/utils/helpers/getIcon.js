import React from "react"
import { ReactComponent as Art } from "../../images/icons/art.svg"
import { ReactComponent as Search } from "../../images/icons/search.svg"
import { ReactComponent as IndustrialDesign } from "../../images/icons/industrial_design.svg"
import { ReactComponent as MailIcon } from "../../images/icons/mail.svg"
import { ReactComponent as MessageIcon } from "../../images/icons/message.svg"
import { ReactComponent as TitleIcon } from "../../images/icons/title.svg"
import { ReactComponent as NameIcon } from "../../images/icons/name.svg"
import { ReactComponent as PhoneIcon } from "../../images/icons/phone.svg"
import { ReactComponent as ArrowLeft } from "../../images/icons/arrow-left.svg"

const iconMap = {
  art: { icon: Art },
  "industrial-design": { icon: IndustrialDesign },
  search: { icon: Search },
  mail: { icon: MailIcon },
  message: { icon: MessageIcon },
  title: { icon: TitleIcon },
  name: { icon: NameIcon },
  phone: { icon: PhoneIcon },
  "arrow-left": { icon: ArrowLeft },
  
}

export const hasIcon = name => {
  return !!iconMap[name]
}

export const Icon = ({ name, className }) => {
  return iconMap[name]
    ? React.createElement(iconMap[name].icon, { className: className || name })
    : false
}
