export default function Pagination({
  nextPage,
  previousPage,
  currentPage,
  pagination,
}) {
  return (
    <div className=" bg-yellow-500 rounded-full max-w-screen-xl mx-auto mt-12 text-gray-100 md:px-8 w-[900px] font-semibold">
      <div className="flex items-center justify-around text-l font-medium py-1">
        <a
          className="border-2 border-green-700 bg-green-700 px-4 py-1 rounded-full cursor-pointer hover:text-yellow-300"
          onClick={previousPage}
        >
          Previous
        </a>
        <div className="text-green-700">
          Page {currentPage} of{" "}
          {pagination?.totalPage === 0 ? 1 : pagination?.totalPage}
        </div>
        <a
          className="text-center border-2 border-green-700 bg-green-700 w-[100px] px-4 py-1 rounded-full cursor-pointer hover:text-yellow-300"
          onClick={nextPage}
        >
          Next
        </a>
      </div>
    </div>
  );
}
