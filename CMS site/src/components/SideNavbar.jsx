import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";

export default function SideNavbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("access_token");
    navigate("/login");
  }

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-green-700">
          <ul className="space-y-2 font-medium">
            <li className="flex bg-green-950 rounded-xl justify-center">
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white "
              >
                <span className="text-2xl font-bold text-yellow-500">
                  SAB<span className="text-green-700 border-white">BAY</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-yellow-500 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Cuisines</span>
              </Link>
            </li>
            <li>
              <Link
                to="/addCuisine"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-yellow-500 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Add Cuisine{" "}
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/category"
                className="flex cursor-pointer items-center py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-yellow-500 group"
              >
                <Icon
                  icon="eos-icons:products"
                  width="2em"
                  height="1.7em"
                  className="text-gray-400 font-bold"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Categories
                </span>
              </Link>
            </li>

            <li>
              {/* <Link
                to="/upload/:id"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-yellow-500 group"
              >
                <Icon
                  icon="tabler:cloud-upload"
                  width="24"
                  height="24"
                  className="text-gray-400 font-bold"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Upload Image
                </span>
              </Link> */}
            </li>

            <li>
              <Link
                to="/register"
                className="flex items-center py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-yellow-500 group"
              >
                <Icon
                  icon="mdi:register"
                  width="2em"
                  height="1.7em"
                  className="text-gray-400 font-bold"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Register</span>
              </Link>
            </li>

            <li>
              <a
                onClick={handleLogout}
                className="flex items-center py-2 text-gray-900 rounded-lg dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-yellow-500 group"
              >
                <Icon
                  icon="ic:outline-logout"
                  width="2em"
                  height="1.5em"
                  className="text-gray-400 font-bold"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
