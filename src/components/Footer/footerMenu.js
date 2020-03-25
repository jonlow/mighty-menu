import React from "react"
import { ReactComponent as Avenue } from "./made-by-avenue.svg"
import { FlexGrid, FlexRow, FlexCol } from "../FlexGrid/index"

import {
  MenuItems,
  Copyright,
  LogoContainer,
  Logo,
  Menu,
  SocialAndLogo,
} from "./footerMenuStyles"

import { SocialLinks } from "../SocialLinks/index"

const FooterMenu = props => (
  <FlexGrid className={props.className} gap={[0]} rowGap={[30, 50, 60]}>
    <FlexRow>
      <FlexCol xs={12} md={7} lg={8}>
        <Menu>
          <MenuItems to="/about">About</MenuItems>
          <MenuItems to="/" href="mailto:connect@inspirationgrid.com">
            Get in touch
          </MenuItems>
          <MenuItems to="/privacy-policy-terms-of-use/">
            Privacy & Terms
          </MenuItems>
        </Menu>
      </FlexCol>
      <FlexCol xs={12} md={5} lg={4}>
        <SocialAndLogo>
          <SocialLinks footer />

          <LogoContainer>
            <Logo>
              <a
                className="avenue"
                target="_blank"
                rel="noopener noreferrer"
                href="https://avenue.design/"
              >
                <Avenue />
              </a>
            </Logo>
          </LogoContainer>
        </SocialAndLogo>
      </FlexCol>
      <FlexCol xs={12}>
        <Copyright>
          © 2019 Inspiration Grid, all rights reserved. Some of our posts may
          contain affiliate links to partner brands. We earn a small commission
          if you click the link and make a purchase. There is no extra cost to
          you, so it’s just a nice way to help support the site. All images,
          videos, and other content posted on the site is attributed to their
          creators and original sources. If you see something wrong here or you
          would like to have it removed, please
          <a href="mailto:connect@inspirationgrid.com"> contact us</a>.
        </Copyright>
      </FlexCol>
    </FlexRow>
  </FlexGrid>
)
export default FooterMenu
