function Pagination({ setPage, totalPages, page }) {
  const handleNextPage = () => {
    setPage((previous) => previous + 1);
  };

  const handlePreviousPage = () => {
    setPage((previous) => previous - 1);
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
