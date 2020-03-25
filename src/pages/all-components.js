import React, { useContext } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentTest from "../components/ContentTest"
import { Button } from "../components/Button"
import { Grid } from "../components/Grid"
import { Teaser } from "../components/Teaser"
import { Dropdown } from "../components/Dropdown"
import { MenuList } from "../components/MenuList"
import { MainColumn } from "../components/MainColumn"

import { List } from "../components/List"
import { PopUpContext } from "../context/PopUpContext"
import { PopUp } from "../components/PopUp"
import { MoreArticles } from "../components/Articles/index"

import { Icon } from "../utils/helpers/getIcon"
import { SelectEg } from "../components/SelectEg"
import { FormEg } from "../components/FormEg"
import { Link } from "gatsby"
import FlexboxGridEg from "../components/FlexboxGridEg/FlexboxGridEg"
import { EmblaCarouselEg } from "../components/EmblaCarouselEg"
import AvenueImg from "../components/AvenueImg"

const IndexPage = () => {
  const artIcon = <Icon name="industrial-design" />
  const { isPopUpOpen, setPopUpOpen } = useContext(PopUpContext)

  const togglePopUp = () => {
    setPopUpOpen(!isPopUpOpen)
  }
  const doSomething = () => {
    alert("something got did")
  }

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

  const list = ["list1 asdf ", "list2 asdf", "list3"]

  return (
    <Layout>
      <SEO title="Home" />
      <FlexboxGridEg />

      {/* <AvenueImg/> */}
      <EmblaCarouselEg />
      <MainColumn>
        <PopUp />
        <FormEg />
        <MoreArticles />
        <List>
          <Link to="/">Link1</Link>
          <Link to="/">Link2</Link>
          <Link to="/">Link3</Link>
        </List>
        <List>{list}</List>
        <List direction="horizontal">
          <h6>List1</h6>
          <h6>List2</h6>
          <h6>List3</h6>
        </List>
        <Button noBackground label="context trigger" onClick={togglePopUp} />
        <Button fullWidth icon={artIcon} label="Icon button" />
        <Button label="Link button" link="/" />
        <Button label="Function button" onClick={doSomething} />
        <SelectEg />
        <Dropdown label="Dropdown...">
          <MenuList />
        </Dropdown>
        <Grid cols={[1, 2, 3]} gap={[30, 40, 60]}>
          {items.slice(0, 6).map((item, i) => (
            <Teaser key={i} centered />
          ))}
        </Grid>
        <ContentTest />
      </MainColumn>
    </Layout>
  )
}

export default IndexPage
