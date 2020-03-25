import React from "react"
import PropTypes from "prop-types"
import { Icon } from "utils/helpers/getIcon"
import Categories from "./Categories"
import moment from "moment"
import AvenueImg from "../AvenueImg"

import {
  TeaserContainer,
  ImageContainer,
  InfoContainer,
  WrappingLink,
  Title,
  Excerpt,
  Date,
  TeaserButton,
  Tag,
} from "./style.js"

/*
catsTopRight
row
centered
*/

const Teaser = ({
  title,
  categories,
  excerpt,
  date,
  img,
  catsTopRight,
  row,
  tag,
  centered,
  overlapped,
  button,
  link,
  internalLink,
  className,
}) => {
  return (
    <TeaserContainer className={className} row={row} centered={centered}>
      <ImageContainer row={row}>
        <AvenueImg fluid={img} />
      </ImageContainer>

      <InfoContainer centered={centered} row={row} overlapped={overlapped}>
        {title && (
          <WrappingLink to={link}>
            <Title
              centered={centered}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </WrappingLink>
        )}
        {date && <Date> {moment(date).format("DD MMM YYYY")}</Date>}
        {tag && <Tag> {tag}</Tag>}

        {categories && (
          <Categories catsTopRight={catsTopRight} categories={categories} />
        )}
        {excerpt && (
          <Excerpt
            centered={centered}
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        )}
        {button && <TeaserButton {...button} />}
      </InfoContainer>
      {internalLink && <WrappingLink to={link} />}
    </TeaserContainer>
  )
}

export default Teaser

Teaser.defaultProps = {
  // title: "I'm a re-usable teaser",
  // date: "1995-02-17T10:11:12",
  // categories: ["art", "design", "food"],
  // excerpt:
  //   "Here’s an introduction paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore east dolore magna.",
}

Teaser.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.array,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  img: PropTypes.object,
}
