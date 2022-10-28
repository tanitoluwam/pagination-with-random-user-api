import { useState, useMemo } from "react";
import { UserCard } from "../components/userCard/UserCard";
import { useFetch } from "../hooks/useFetch";
import spinner from "../components/images/spinner-2.gif";

export const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: users,
    isLoading,
    error,
  } = useFetch("https://randomuser.me/api/?results=50");


  const PER_PAGE = 9;
  const totalPages = useMemo(() => {
    return Math.ceil((users?.results?.length ?? 0) / PER_PAGE);
  }, [users]);
  const isLastPage = currentPage === totalPages
  const isFirstPage =  currentPage === 1
  

  if (isLoading) {
    return <img src={spinner} alt="" className="spinner_img" />;
  }

  if (error) {
    return <div>An error occured</div>;
  }

  return (
    <section>
      <div className="user-grid">
        {users.results?.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE).map((user, index) => (
          <UserCard user={user} key={index} />
        ))}
      </div>
      <div>
        <button
          className="pagination-button"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={isFirstPage}
        >
          Prev
        </button>
        {Array(totalPages)
          .fill()
          .map((_, index)  => (
            <button
              className="pagination-button"
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        <button
          className="pagination-button"
          onClick={() => setCurrentPage((prev) => prev + 1)}
         disabled={isLastPage}
        >
          Next
        </button>
      </div>
    </section>
  );
};
