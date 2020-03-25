import React, { useState } from "react"
import { TextInput } from "../Form/TextInput"
import { RadioInput } from "../Form/RadioInput"
import { Checkbox } from "../Form/Checkbox"
import { CustomForm, SubmitButton } from "./style"
import { Icon } from "utils/helpers/getIcon"
import { SelectInput } from "../SelectInput"

const nameIcon = <Icon name="name" />
const titleIcon = <Icon name="title" />
const messageIcon = <Icon name="message" />
const phoneIcon = <Icon name="phone" />
const mailIcon = <Icon name="mail" />

const options = [
  { value: "general-enquiry", label: "General enquiry" },
  { value: "plantations", label: "Plantations" },
  { value: "sawmill", label: "Sawmill" },
  { value: "sales", label: "Sales" },
  { value: "distribution", label: "Distribution" },
]

const FormEg = () => {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = values => {
    setSubmitted(true)
    console.log(values)
  }

  return (
    <CustomForm noValidate onSubmit={onSubmit} name="contact">
      <TextInput
        name="message"
        type="textarea"
        error="Please enter a message"
        floatingLabel="message"
        icon={messageIcon}
      />

      <TextInput
        name="username"
        error="Please enter a username fella"
        floatingLabel="username"
        icon={nameIcon}
      />
      <TextInput
        type="email"
        name="email"
        floatingLabel="Email"
        error="Please enter a valid email bruz"
        icon={mailIcon}
      />
      <TextInput
        type="password"
        name="password"
        password="Password"
        floatingLabel="Password"
        error="Please enter the correct password (avenue)"
        // icon
      />

      <h4
        style={{
          marginBottom: "10px",
          textDecoration: "underline",
          color: "black",
        }}
      >
        radio eg
      </h4>

      <RadioInput name="gender" value="female" />
      <RadioInput name="gender" value="male" />
      <RadioInput
        name="gender"
        value="xenon"
        error="You must be one of these...."
        initialValue="male"
      />

      <h4
        style={{
          marginBottom: "10px",
          textDecoration: "underline",
          color: "black",
        }}
      >
        checkbox eg
      </h4>

      <Checkbox name="ingredients" value="broccoli" />
      <Checkbox name="ingredients" value="cheese" />
      <Checkbox
        name="ingredients"
        value="lemon"
        error="Atleast 1 ingredient must be selected"
        initialValue={["broccoli", "lemon"]}
      />
      <SelectInput
        options={options}
        name="options"
        type="select"
        initialValue={options[0]}
      />

      <SubmitButton submit label="Submit" />
    </CustomForm>
  )
}

export default FormEg
