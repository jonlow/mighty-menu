import React, { useState, useEffect, useCallback, useRef } from "react"
import { Icon } from "helpers/getIcon"
import useMedia from "hooks/useMedia.js"
import { setAutoPlay } from "./setAutoPlay"

import {
  CarouselContainer,
  SlidesContainer,
  PreviousButton,
  EmblaComponent,
  NextButton,
  Slide,
  DotsContainer,
  DotButton,
  ButtonsContainer,
} from "./style"

//PROPS
//snapBack : will snap back to the start when clicking next at end (boolean)
//speed : default is 6 (number)
//slidesToShow : [mobile, desktop]
//fade : single slide fade in (boolean)
//autoPlay : (boolean)
//interval : (in seconds)
//loop : (boolean)
//align : (string)

const Carousel = ({
  children,
  gap,
  slidesToShow,
  fade,
  snapBack,
  speed,
  autoPlay,
  interval,
  loop,
  align,
}) => {
  const carouselRef = useRef(null)
  const buttonsRef = useRef(null)
  const dotsRef = useRef(null)
  const carouselElement =
    carouselRef.current && carouselRef.current.container.current

  const [embla, setEmbla] = useState(null)
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const arrowIcon = <Icon name="arrow-left" />

  const isDesktop = useMedia(
    // Media queries
    ["(min-width: 1024px)"],
    //options
    [true],
    // default
    false
  )

  const scrollTo = useCallback(index => embla.scrollTo(index), [embla])

  const scrollPrev = useCallback(() => {
    embla.scrollPrev()
    // if (snapBack && selectedIndex === 0) {
    //   embla.scrollTo(scrollSnaps.length)
    // }
  }, [embla, scrollSnaps, selectedIndex])

  const scrollNext = useCallback(() => {
    embla.scrollNext()

    if (snapBack && selectedIndex === scrollSnaps.length - 1) {
      embla.scrollTo(0)
    }
  }, [embla, scrollSnaps, selectedIndex])

  //Re-initializes the embla on re-size
  useEffect(() => {
    if (embla) {
      embla.changeOptions({})
    }
  }, [isDesktop])

  //Main Embla functionality
  useEffect(() => {
    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap())
      setPrevBtnEnabled(embla.canScrollPrev())
      setNextBtnEnabled(embla.canScrollNext())
    }

    if (embla) {
      const autoPlayer = setAutoPlay(embla, interval)
      onSelect()
      setScrollSnaps(embla.scrollSnapList())
      embla.on("select", () => {
        // console.log(`Current index is ${embla.selectedScrollSnap()}`)
        onSelect()
      })

      embla.on("resize", () => {
        // console.log(`resized mutha fucka`)
        setScrollSnaps(embla.scrollSnapList())
      })

      //initializing autoPlay
      if (autoPlay) {
        autoPlayer.play()
        carouselElement.addEventListener("mousedown", autoPlayer.play, false)
        buttonsRef.current.addEventListener("mousedown", autoPlayer.play, false)
        dotsRef.current.addEventListener("mousedown", autoPlayer.play, false)
      }

      return () => {
        autoPlayer.stop()
        embla.destroy()
      }
    }
  }, [embla])

  const options = {
    loop: loop ? true : false,
    align: align || "start",
    containScroll: true,
    speed: fade ? 1000 : speed,
    draggable: fade ? false : true,
  }
  return (
    <CarouselContainer gap={gap} fade={fade}>
      <EmblaComponent
        loop={loop}
        className="embla-carousel"
        emblaRef={setEmbla}
        fade={fade}
        options={options}
        ref={carouselRef}
      >
        <SlidesContainer
          loop={loop}
          gap={gap}
          fade={fade}
          slidesToShow={fade ? 1 : slidesToShow}
        >
          {children.map((Child, index) => (
            <Slide fade={fade} key={index}>
              {Child}
            </Slide>
          ))}
        </SlidesContainer>
      </EmblaComponent>

      <DotsContainer ref={dotsRef}>
        {scrollSnaps.map((snap, index) => (
          <DotButton
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
            key={index}
          />
        ))}
      </DotsContainer>

      <ButtonsContainer ref={buttonsRef}>
        <PreviousButton
          disabled={!prevBtnEnabled}
          onClick={scrollPrev}
          icon={arrowIcon}
        />
        <NextButton
          disabled={!nextBtnEnabled && !snapBack}
          onClick={scrollNext}
          icon={arrowIcon}
        />
      </ButtonsContainer>
    </CarouselContainer>
  )
}

export default Carousel

Carousel.defaultProps = {
  speed: 6,
  slidesToShow: [1.3, 3],
  interval: 6000,
}
