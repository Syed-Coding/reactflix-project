function Pagination({ totalPages, dispatch, page }) {
  const handleNextPage = () => {
    dispatch({ type: "Increase Page" });
  };

  const handlePreviousPage = () => {
    dispatch({ type: "Decrease Page" });
  };
  return (
    <div className="pagination">
      <button disabled={page <= 1} onClick={handlePreviousPage}>
        Previous
      </button>
      <p>
        {page} of {totalPages}
      </p>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
}

export default Pagination;
