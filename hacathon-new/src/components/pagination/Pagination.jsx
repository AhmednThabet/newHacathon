import React from "react";
import _ from "lodash";

export const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const pagesCounts = Math.ceil(itemsCount / pageSize);
  if (pagesCounts === 1) return null;
  const pages = _.range(1, pagesCounts + 1);
  return (
    <nav aria-label="Page navigation example  " className="mt-5">
      <ul class="inline-flex -space-x-px ">
        {pages.map((page) => (
          <li key={page} className>
            <a
              href="#"
              aria-current={page === currentPage ? "page" : null}
              class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700  "
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
