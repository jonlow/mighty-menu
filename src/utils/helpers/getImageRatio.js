const getImageRatio = srcSet => {
  let ratio

  if (!srcSet) {
    return 16 / 9
  }

  if (srcSet.w_3000_width) {
    ratio = srcSet.w_3000_width / srcSet.w_3000_height
  } else {
    ratio = srcSet["w_3000-width"] / srcSet["w_3000-height"]
  }

  return ratio
}

export default getImageRatio
