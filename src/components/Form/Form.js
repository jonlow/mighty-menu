import React from "react"
import { validateEmail } from "../../utils/helpers"
import { FormWrap } from "./style"
import { TextInput } from "./TextInput"

const useForm = ({ initialValues, onSubmit, validate }) => {
  const [values, setValues] = React.useState(initialValues || {})
  const [errors, setErrors] = React.useState({})

  const handleChange = (event, select) => {
    const target = event.target
    const value = target && target.value
    const name = target && target.name

    if (target && target.type === "checkbox") {
      const itemExists = values[name] ? values[name].includes(value) : null

      if (itemExists) {
        const updatedCheckedItems = values[name].filter(item => item !== value)

        setValues({
          ...values,
          [name]: [...updatedCheckedItems],
        })
      } else {
        setValues({
          ...values,
          [name]: values[name] ? [...values[name], value] : [value],
        })
      }
    } else if (select) {
      setValues({
        ...values,
        [select.name]: event,
      })
    } else {
      setValues({
        ...values,
        [name]: value,
      })
    }
  }

  // useEffect(() => {
  //   console.log(values)
  // }, [values])

  const handleSubmit = event => {
    event.preventDefault()
    const e = validate(values)
    setErrors({
      ...errors,
      ...e,
    })
    onSubmit({ values, e })
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  }
}

const Form = ({ onSubmit, children, className, noValidate, netlify, name }) => {
  const checkIsInput = type => {
    if (
      type === "text" ||
      type === "email" ||
      type === "password" ||
      type === "radio" ||
      type === "checkbox" ||
      type === "textarea" ||
      type === "select"
    ) {
      return true
    } else return false
  }

  let childrenInitialValues = {}

  //sets the initialValue of the child inputs
  children.map(child => {
    if (
      child.props.type === "text" ||
      child.props.type === "email" ||
      child.props.type === "password" ||
      child.props.type === "radio" ||
      child.props.type === "textarea" ||
      child.props.type === "select"
    ) {
      childrenInitialValues[child.props.name] = child.props.initialValue || ""
    }

    if (child.props.type === "checkbox") {
      childrenInitialValues[child.props.name] = child.props.initialValue || []
    }

    if (child.props.type === "hidden") {
      childrenInitialValues[child.props.name] = child.props.value || []
    }

    return children
  })

  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues: childrenInitialValues,
    onSubmit(values, errors) {
      console.log("values:", values.values)
      console.log("errors:", values.e)

      const errorResponses = Object.values(values.e)
      const noErrorsExist = !errorResponses.includes(true)

      if (noErrorsExist) {
        onSubmit(values.values)
      }
    },
    validate(values) {
      const errors = {}

      children.map(child => {
        //if validation function is passed through props
        if (child.props.validation) {
          const validValue = child.props.validation(values[child.props.name])

          return validValue
            ? (errors[child.props.name] = false)
            : (errors[child.props.name] = true)

          //some default validation stuff
        } else {
          if (
            (child.props.type === "text" || child.props.type === "textarea") &&
            child.props.error
          ) {
            const validTextInput = values[child.props.name] !== ""
            return validTextInput
              ? (errors[child.props.name] = false)
              : (errors[child.props.name] = true)
          }

          if (child.props.type === "email" && child.props.error) {
            const validEmail = validateEmail(values.email)
            return validEmail
              ? (errors[child.props.name] = false)
              : (errors[child.props.name] = true)
          }

          if (child.props.type === "password" && child.props.error) {
            const validPassword = values.password === "avenue"
            validPassword
              ? (errors[child.props.name] = false)
              : (errors[child.props.name] = true)
          }

          if (child.props.type === "radio" && child.props.error) {
            const validRadioInputResponse = values[child.props.name] !== ""
            return validRadioInputResponse
              ? (errors[child.props.name] = false)
              : (errors[child.props.name] = true)
          }

          if (child.props.type === "checkbox" && child.props.error) {
            const validCheckboxResponse = values[child.props.name].length
            return validCheckboxResponse
              ? (errors[child.props.name] = false)
              : (errors[child.props.name] = true)
          }

          if (child.props.type === "select" && child.props.error) {
            const validSelectInputResponse = values[child.props.name] !== ""
            return validSelectInputResponse
              ? (errors[child.props.name] = false)
              : (errors[child.props.name] = true)
          }
        }

        return children
      })

      return errors
    },
  })

  const formattedChildren = React.Children.map(children, child => {
    const isInput = checkIsInput(child.props.type)
    if (isInput) {
      return React.cloneElement(child, {
        onChange: handleChange,
        value: child.props.value || values[child.props.name],
        showError: errors[child.props.name],
        values: values[child.props.name],
      })
    } else {
      return child
    }
  })

  return (
    <FormWrap
      noValidate={noValidate}
      onSubmit={handleSubmit}
      className={className}
      data-netlify={netlify ? "true" : "false"}
      netlify-honeypot="bot-field"
      name={name && name}
    >
      {netlify && (
        <TextInput name="subject" type="hidden" value="Website Enquiry" />
      )}
      {formattedChildren}
    </FormWrap>
  )
}

export default Form
