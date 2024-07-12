import React from "react";
import useFetch from "./useFetch";
function Users() {
  const {
    isLoading,
    error,
    paginationData,
    handlePrev,
    handleNext,
    pages,
    setCurrentPage,
    currentpage
  } = useFetch("https://jsonplaceholder.typicode.com/users");

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
            <h1>Posts</h1>
            <table id="customers">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th> Username</th>
                <th>Email</th>
              </tr>
              {paginationData?.map((each, i) => (
                <tr>
                  <td>{each?.id}</td>
                  <td>{each?.name}</td>
                  <td>{each?.username}</td>
                  <td>{each?.email}</td>
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
    </div>
  );
}

export default Users;
