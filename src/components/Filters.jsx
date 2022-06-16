import React from "react";

function SortBy({ sortBy, setSortBy, orderBy, setOrderBy }) {
  const queries = ["created_at", "title", "votes"];

  function handleChange(event) {
    setSortBy(event.target.value);
  }

  function handleChangeOrder(event) {
    setOrderBy(event.target.value);
  }

  return (
    <section>
      <form>
        <label htmlFor="sort-by">Sort by:</label>
        <select id="sort-by" value={sortBy} onChange={handleChange}>
          {queries.map((query) => {
            return <option value={query}>{query}</option>;
          })}
        </select>
      </form>
      <br></br>
      <form>
        <label htmlFor="order-by">Order by:</label>
        <select id="order-by" value={orderBy} onChange={handleChangeOrder}>
          <option value="DESC">Descending</option>
          <option value="ASC">Ascending</option>
        </select>
      </form>
    </section>
  );
}

export default SortBy;
