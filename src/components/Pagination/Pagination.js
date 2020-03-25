import React, { useState, useEffect } from "react"
import {
  PaginationContainer,
  PageNumberList,
  Number,
  PreviousButton,
  NextButton,
  ListItem,
} from "./style.js"
import { animateScroll as scroll } from "react-scroll"
import PageNumber from "./PageNumber"
import history from "./history"

//! this means that the prop is REQUIRED for the component to work

const Pagination = ({
  currentPage, //! page you are currently on
  setCurrentPage, //! sets the next page
  pageNumbersShown, //! max number of pages shown within the pagination (number)
  totalPosts, //! total number of matching posts
  postsPerPage, //! number of posts you wish to display on each page
  /////////////////////////////////////////////
  scrollId, // element you want to scroll to on pagination (string)
  topOfElement, // scrolls to the top of the elemennt (boolean)
  filters, //to allow storage of filters history in back pagination
  setFilters,
  query, //to allow storage of query history in back pagination
  setQuery,
}) => {
  const pageNumbers = []
  const lastPage = Math.ceil(totalPosts / postsPerPage)
  const [firstNumber, setFirstNumber] = useState(1)

  for (
    let i = firstNumber;
    i <= firstNumber + (pageNumbersShown - 1) && i <= lastPage;
    i++
  ) {
    pageNumbers.push(i)
  }

  const skipForwards = () => {
    pagination(firstNumber + pageNumbersShown)
  }

  const skipBackwards = () => {
    pagination(firstNumber - 1)
  }

  const scrollToTop = () => {
    const element = document.getElementById(scrollId)

    scroll.scrollTo(
      topOfElement
        ? element.offsetTop
        : element.offsetTop + element.clientHeight,
      { duration: 0, ignoreCancelEvents: true, smooth: "easeOutCubic" }
    )
  }

  const pushToHistory = page => {
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set("p", page)

    if (query) {
      urlParams.set("q", query)
    }

    if (filters) {
      urlParams.delete("f")
      filters.map(filter => {
        urlParams.append("f", filter.replace("categories:", ""))
      })
    }

    history.push({
      pathname: `${window.location.pathname}` + "?" + urlParams.toString(),
      state: { page: page, query: query, filters: filters },
    })
  }

  const setPaginationGroup = page => {
    setFirstNumber(
      (Math.floor((page - 1) / pageNumbersShown) + 1) * pageNumbersShown -
        (pageNumbersShown - 1)
    )
  }

  const pagination = page => {
    if (scrollId) {
      scrollToTop()
    }
    setPaginationGroup(page)
    pushToHistory(page)
    setCurrentPage(page)
  }

  useEffect(() => {
    setPaginationGroup(currentPage)
  }, [currentPage])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const pageParam = urlParams.get("p")

    if (pageParam) {
      setCurrentPage(pageParam)
      setPaginationGroup(pageParam)
    }

    //handle back
    const myListener = history.listen((location, action) => {
      if (action === "POP") {
        const page = location.state
          ? location.state.page
          : pageParam
          ? pageParam
          : 1
        setCurrentPage(page)
        setPaginationGroup(page)

        const query = location.state ? location.state.query : ""
        setQuery && setQuery(query)

        let filters = location.state ? location.state.filters : []
        setFilters && setFilters(filters)
        console.log(location)
      }
    })

    return function cleanUp() {
      myListener()
    }
  }, [])

  return (
    <PaginationContainer
      hide={totalPosts <= postsPerPage}
      className="container"
      noResults={totalPosts === 0}
    >
      <PreviousButton
        disabled={currentPage === 1}
        onClick={
          currentPage === pageNumbers[0]
            ? () => skipBackwards()
            : () => pagination(currentPage - 1)
        }
        className="button"
      >
        Prev
      </PreviousButton>

      <PageNumberList>
        <ListItem hidden={firstNumber === 1}>
          <Number onClick={() => skipBackwards()}>...</Number>
        </ListItem>
        {pageNumbers.map(pageNumber => {
          return (
            <PageNumber
              key={pageNumber}
              pageNumber={pageNumber}
              currentPage={currentPage}
              pagination={pagination}
            />
          )
        })}

        <ListItem hidden={firstNumber >= lastPage - pageNumbersShown + 1}>
          <Number onClick={() => skipForwards()}>...</Number>
        </ListItem>
      </PageNumberList>

      <NextButton
        className="button"
        disabled={totalPosts === 0 || currentPage === lastPage}
        onClick={
          currentPage === pageNumbers[pageNumbers.length - 1]
            ? () => skipForwards()
            : () => pagination((currentPage * 10) / 10 + 1)
        }
      >
        Next
      </NextButton>
    </PaginationContainer>
  )
}

export default Pagination
