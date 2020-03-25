const kFormatter = num => {
  var total = (num / 1000).toFixed(1)
  // If number is 4.0 then just make it 4
  if (num > 999 && total.substring(total.length - 1) === "0") {
    total = total.substring(0, total.length - 2)
  }
  var nFormatted = num > 999 ? total + "K" : num
  return nFormatted
}

export default kFormatter
