
function Pagination({ currentPage = 1 , totalPages = 10, onPageChange }) {

  const pages = Array.from({ length: totalPages }, ( _, i) => i + 1)

  const isFistPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  const stylePrevButton = isFistPage ? { pointerEvents: 'none', opaciy: 0.5 } : {}
  const styleNextButton = isLastPage ? { pointerEvents: 'none', opaciy: 0.5 } : {}

  const handlePrevClick = (event) => {
    event.preventDefault()
    if (isFistPage === false) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextClick = (event) => {
    event.preventDefault()
    if (isLastPage === false) {
      onPageChange(currentPage + 1)
    }
  }

  const handleChangePage = (event, page) => {
    event.preventDefault()
    console.log(page)
    if (page !== currentPage) {
      onPageChange(page)
    }
  }

  return (
    <nav className="pagination">
      {
        !isFistPage && (
          <a href="#" onClick={handlePrevClick} style={stylePrevButton}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </a>
        )
      }
      
      { pages.map(page =>(
        <a
          href="#"
          key={page} 
          onClick={(event) => handleChangePage(event, page)}
          className={currentPage === page ? 'is-active' : ''}
        >{page}</a>
      )) }

      {
        isLastPage == false && (
          <a href="#" onClick={handleNextClick} style={styleNextButton}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </a>
        )
      }

    </nav>
  );
}

export default Pagination;
