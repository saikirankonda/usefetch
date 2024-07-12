import React from "react";
import useFetch from "./useFetch";

function Posts() {
  const {
    isLoading,
    error,
    paginationData,
    handlePrev,
    handleNext,
    pages,
    setCurrentPage,
    currentpage
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
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
          <h1>Posts</h1>
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
                <td>{each?.body}</td>
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
            {pages.map((page) => (
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
  );
}

export default Posts;
