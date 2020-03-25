import React from "react"

import { SocialLinksContainer } from "./style.js"

import { List } from "../List/index"

import { ReactComponent as FacebookLogo } from "./facebook-logo.svg"
import { ReactComponent as InstagramLogo } from "./instagram-logo.svg"
import { ReactComponent as TwitterLogo } from "./twitter-logo.svg"
import { ReactComponent as PinterestLogo } from "./pinterest-logo.svg"

const SocialLinks = props => {
  return (
    <SocialLinksContainer footer={props.footer}>
      <List direction="horizontal">
        <a
          href="https://www.facebook.com/TheInspirationGrid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookLogo />
        </a>
        <a
          href="https://www.instagram.com/inspirationgrid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogo />
        </a>
        <a
          href="https://twitter.com/inspirationgrid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterLogo />
        </a>
        <a
          href="https://www.pinterest.com.au/inspirationgrid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PinterestLogo />
        </a>
      </List>
    </SocialLinksContainer>
  )
}

export default SocialLinks
