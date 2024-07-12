import React from "react";
import useFetch from "./useFetch";

function Photos() {
  const {
    isLoading,
    error,
    paginationData,
    handlePrev,
    handleNext,
    pages,
    setCurrentPage,
    currentpage,
    totalpages
  } = useFetch("https://jsonplaceholder.typicode.com/photos");
  const pageNumbers = [];

  // Show a limited number of page buttons, e.g., 5 pages at a time
  const maxPageButtons = 5;
  const halfPageButtons = Math.floor(maxPageButtons / 2);

  let startPage = Math.max(1, currentpage - halfPageButtons);
  let endPage = Math.min(totalpages, currentpage + halfPageButtons);

  // Adjust the range if there are not enough pages before or after the current page
  if (currentpage <= halfPageButtons) {
    endPage = Math.min(totalpages, maxPageButtons);
  } else if (currentpage + halfPageButtons >= totalpages) {
    startPage = Math.max(1, totalpages - maxPageButtons + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        {isLoading && (
          <div>
            {" "}
            <h1>Loading ....</h1>{" "}
          </div>
        )}
        {error && (
          <div>
            <h1>{error}</h1>{" "}
          </div>
        )}
        {paginationData?.length > 0 && (
          <div>
            <h1>Photos</h1>
            <table id="customers">
              <tr>
                <th>Id</th>
                <th>Tittle</th>
                <th> Body</th>
              </tr>
              {paginationData?.map((each, i) => (
                <tr>
                  <td>{each?.id}</td>
                  <td>{each?.title}</td>
                  <td>{each?.url}</td>
                </tr>
              ))}
            </table>
            <div>
              <button
                style={{ margin: "15px" }}
                disabled={currentpage === 1}
                onClick={handlePrev}>
                Prev
              </button>
              {pageNumbers.map((page) => (
                <button
                  style={{
                    cursor: currentpage === page ? "" : "pointer",
                    backgroundColor: currentpage === page ? "green" : "skyblue",
                    border: "1px solid white"
                  }}
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  disabled={currentpage === page}>
                  {page}
                </button>
              ))}
              <button
                style={{ margin: "15px" }}
                disabled={currentpage === pages?.length}
                onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Photos;
