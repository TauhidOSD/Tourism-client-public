import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllTourist = () => {
    const [Cards, setCards] = useState([]);
  useEffect(() => {
    fetch("https://tourism-server-rho.vercel.app/Place")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  console.log(Cards);

    
    
    return (
        <div>
         <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-10 ">
      {Cards.map((Card) => (
        <div
          data-aos="zoom-in"
          data-aos-duration="3000"
          key={Card._id}
          className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 "
        >
          <img
            src={Card?.image}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">{}</h2>
              <p className="dark:text-gray-800   ">
                {/* TouristSportName: {Card?.location.slice(0, 75)} */}
                TouristSportName: {Card?.sportName}
              </p>
              <div>
              <h2 className="text-xl font-semibold">
                AverageCost  : {Card?.averageCost}
                </h2>
              </div>
              <div>
              <h2 className="text-xl font-semibold">
                TotalVisitorsPerYear : {Card?.totalVisitorsPerYear}
                </h2>
              </div>
              <div>
              <h2 className="text-xl font-semibold">
               TravelTime : {Card?.travelTime}
                </h2>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  Country : {Card?.country}
                </h2>
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  Seasonality: {Card?.seasonality}
                </h2>
              </div>
            </div>

            <Link to={`/${Card?._id}`}>
              <button
                type="button"
                className="   bg-slate-700 text-white  text-xl flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
                //   fdprocessedid="led2je"
              >
                View details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>  
            
        </div>
    );
};

export default AllTourist;