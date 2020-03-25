const checkSite = (site, email) => {
  const prefix1 = "http://"
  if (
    site &&
    site.substr(0, prefix1.length) !== prefix1 &&
    (site.includes("www.") || site.includes(".com")) &&
    !site.includes("https") &&
    !email
  ) {
    return prefix1 + site
  } else {
    return site
  }
}

export default checkSite
