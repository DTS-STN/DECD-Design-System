/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from "prop-types";
import React from "react";
import { usePagination } from "./usePagination";
// import { DOTS } from "./usePagination";
import { Image } from "../Image/Image";
import prevArrow from "../../assets/pagination_next_arrow.svg";
import nextArrow from "../../assets/pagination_prev_arrow.svg";

export function Pagination(props) {
  let siblingCount = 1;
  const {
    onPageChange,
    totalCount,
    currentPage,
    pageSize,
    browser,
    nextText,
    previousText,
  } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
    browser,
  });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="ds-inline-flex ds-p-4px">
      <ul className={"ds-list-none ds-flex ds-flex-wrap"}>
        {currentPage !== 1 ? (
          <li
            key={1}
            className={"ds-pagination_prev_next ds-rounded-l"}
            onClick={onPrevious}
            onKeyUp={onPrevious}
          >
            <div role="button" className="ds-flex ds-flex-row">
              <Image
                alt="Previous Arrow"
                id="pagination-prev-arrow"
                src={prevArrow}
              />
              <p className="ds-pl-10px">{previousText}</p>
            </div>
          </li>
        ) : null}
        {paginationRange.map((pageNumber) => {
          // The dots "hiding" pages that aren't displayed
          // if (pageNumber === DOTS) {
          //   return <li className="ds-pagination_btn_style">&#8230;</li>;
          // }
          // The current page styling
          if (pageNumber === currentPage) {
            let borderStyle = "";
            if (currentPage === 1) {
              borderStyle = "ds-rounded-l";
            } else if (currentPage === lastPage) {
              borderStyle = "ds-rounded-r";
            }
            return (
              <li
                key={pageNumber + 1}
                className={`ds-pagination_cur_style ${borderStyle}`}
                onClick={() => onPageChange(pageNumber)}
                onKeyUp={() => onPageChange(pageNumber)}
                // tabindex={pageNumber}
              >
                <div role="button">{pageNumber}</div>
              </li>
            );
          }
          // Other Page numbers being displayed styling
          return (
            <li
              key={pageNumber + 1}
              className={"ds-pagination_btn_style"}
              onClick={() => onPageChange(pageNumber)}
              onKeyUp={() => onPageChange(pageNumber)}
              // tabindex={pageNumber}
            >
              <div role="button">{pageNumber}</div>
            </li>
          );
        })}
        {currentPage !== lastPage ? (
          <li
            key={lastPage + 1}
            className={"ds-pagination_prev_next ds-rounded-r"}
            onClick={onNext}
            onKeyUp={onNext}
          >
            <div role="button" className="ds-flex ds-flex-row">
              <p className="ds-pr-10px">{nextText}</p>
              <Image
                alt="Next Arrow"
                id="pagination-next-arrow"
                src={nextArrow}
              />
            </div>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

Pagination.defaultProps = {
  screenSize: "mobile",
  nextText: "Next Page",
  previousText: "Previous Page",
};
Pagination.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   * function used when changing between pages
   */
  onPageChange: PropTypes.func,

  /**
   * The amount of data, which each page will display
   */
  pageSize: PropTypes.number,

  /**
   * The total amount of data that is going to be displayed between all pages
   */
  totalCount: PropTypes.number,

  /**
   * currentPage defaults to page 1
   */
  currentPage: PropTypes.number,

  /**
   * prop to switch from mobile display to browser display (by default will display mobile pagination)
   */
  browser: PropTypes.bool,

  /**
   * Used to add custom styling to pagination component
   */
  className: PropTypes.string,

  /**
   * Next Button text
   */
  nextText: PropTypes.string,

  /**
   * Previous Button text
   */
  previousText: PropTypes.string,
};
