export default function Button({ nameProp }) {
  return (
    <button
      type="submit"
      className="text-yellow-500 bg-green-700 hover:bg-yellow-500 hover:text-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-colors duration-200"
    >
      {nameProp}
    </button>
  );
}
