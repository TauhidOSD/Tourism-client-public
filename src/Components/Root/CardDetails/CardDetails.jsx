import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    

    const [data,setData]=useState({});
    const {_id}=useParams();
    const details =useLoaderData();

    useEffect(()=>{
        const findCart =details?.find((item)=>item._id===_id);
         
        setData(findCart);
    },[_id,details])
    console.log(data);
    return (
        <div>
      {/* <Helmet>
        <title>Indrusto || Details</title>
      </Helmet> */}
      <div>
        <div className="w-full mb-10">
          <div className=" lg:w-[60%] md:w-full mx-auto  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img
              src={data?.image}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  {}
                </h2>
                <p className="dark:text-gray-800">{}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Country : {data?.country}</h2>
                <h2 className="text-xl font-semibold">
                  Location : {data?.location}
                </h2>
                <div>
                  <h2 className="text-xl">More Details :</h2>
                </div>
                <ul>
                  <li>SportName : {data?.sportName}</li>
                  <li>TotalVisitorsPerYear: {data?.totalVisitorsPerYear} </li>
                  <li>TravelTime : {data?.travelTime}</li>
                </ul>
                
                <h2 className="text-xl font-semibold">Average Cost : {data?.averageCost}</h2>
                <div>
                <h2 className="text-xl font-semibold">
                  ShortDescription : {data?.shortDescription}
                </h2> 
                </div>
              </div>

              <button
                type="button"
                className="text-3xl bg-slate-700 text-white  flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
                // fdprocessedid="led2je"
              >
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <div className="text-center mt-4">
          <button className="btn btn-outline btn-error">Home</button>
        </div>
      </Link>
    </div>
    );
};

export default CardDetails;