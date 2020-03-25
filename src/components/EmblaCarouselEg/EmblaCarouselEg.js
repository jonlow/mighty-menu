import React from "react"
import { Item } from "./style"
import { Carousel } from "../Carousel"

const items = [1, 2, 3, 4, 5, 6, 7, 8]
const EmblaCarouselEg = () => {
  return (
    <>
      <h2>overflowed</h2>
      <Carousel gap={20}>
        {items.map((item, index) => {
          return (
            <Item key={index}>
              <h2>{item}</h2>
            </Item>
          )
        })}
      </Carousel>

      <h2>looped</h2>

      <Carousel gap={20} loop align="center">
        {items.map((item, index) => {
          return (
            <Item key={index}>
              <h2>{item}</h2>
            </Item>
          )
        })}
      </Carousel>

      <h2>faded</h2>

      <Carousel gap={20} fade loop autoPlay interval={5}>
        {items.map((item, index) => {
          return (
            <Item key={index}>
              <h2>{item}</h2>
            </Item>
          )
        })}
      </Carousel>
    </>
  )
}

export default EmblaCarouselEg
