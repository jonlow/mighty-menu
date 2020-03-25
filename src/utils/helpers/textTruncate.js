const textTruncate = (str, length, ending) => {
  if (length == null) {
    length = 100
  }
  if (ending == null) {
    ending = "..."
  }
  //remove https
  let processedStr = str.replace(/(^\w+:|^)\/\//, "")
  //remove  forward slash at end if exists
  if (str.substr(str.length - 1) === "/") {
    processedStr = processedStr.substring(0, processedStr.length - 1)
  }
  if (processedStr.length > length) {
    return processedStr.substring(0, length - ending.length) + ending
  } else {
    return processedStr
  }
}

export default textTruncate
