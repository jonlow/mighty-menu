import React from "react"
import Img from "gatsby-image"
import { GetPlaceholderImage } from "queries/GetPlaceholderImage"

const AvenueImg = props => {
  const aspectRatio = props.aspectRatio ? props.width / props.height : null

  const placeholderImage = GetPlaceholderImage()

  const wpFluid = props.src & props.srcSet && {
    aspectRatio: aspectRatio,
    sizes: props.sizes || "100vw",
    src: props.src,
    srcSet: props.srcSet,
  }

  if (props.src && props.src.includes(".gif") && !props.noAnimate) {
    return (
      <img
        onClick={props.onClick}
        className={props.className}
        src={props.src}
        alt={props.alt}
        loading="lazy"
        style={props.style}
      />
    )
  }

  return (
    <Img
      ref={props.setRef}
      onClick={props.onClick}
      className={props.className}
      loading={props.loading || "lazy"}
      fadeIn={props.noFade ? false : true}
      fluid={props.fluid || wpFluid || placeholderImage}
      alt={props.alt}
      style={props.style}
    />
  )
}

export default AvenueImg
