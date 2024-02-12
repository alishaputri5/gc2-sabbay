import { Link } from "react-router-dom";
import rupiahFormat from "../helpers/formatRupiahPub";

export default function Card({ cuisines }) {
  return (
    <>
      <div className="flex flex-warp">
        <div className="flex flex-warp h-full w-full">
          <div id="cuisines" className="">
            <div className="grid grid-cols-4 gap-10 max-md:items-center max-md:flex-col-reverse justify-between max-md:py-10 px-32 py-10">
              {cuisines?.map((cuisine) => {
                return (
                  <div
                    className="max-md:text-center max-md:w-[90%] max-md:gap-3 flex flex-col hover:border-2 hover:border-yellow-500 "
                    key={cuisine.id}
                  >
                    <Link to={`/cuisines/${cuisine.id}`}>
                      <div className="flex justify-center">
                        <img
                          src={cuisine.imgUrl}
                          className="w-[20vw] h-[40vh] hover:shadow-xl"
                        />
                      </div>
                      <div className="py-3">
                        <p className="text-center first-letter:uppercase text-xl font-bold">
                          {cuisine.name}
                        </p>
                        <p className="text-center font-[300] text-lg ">
                          {cuisine.Category?.name}
                        </p>
                        <p className="text-center text-green-700 text-xl">
                          {rupiahFormat(cuisine.price)}
                        </p>
                      </div>
                      <p className="text-center">{cuisine.description}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
