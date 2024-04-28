import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListPage = () => {
  const [Cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/Place")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  console.log(Cards);

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/Place/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Place has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
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
                Location : {Card?.location.slice(0, 75)}
              </p>
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

            <div className=" flex justify-between gap-4 ">
              <div>
                <Link to={`/UpdatePage/${Card?._id}`}>
                  <button
                    type="button"
                    className=" bg-green-500 text-white  text-xl flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
                    //   fdprocessedid="led2je"
                  >
                    Update
                  </button>
                </Link>
              </div>
              <div>
                <button
                  onClick={() => handleDelete(Card?._id)}
                  type="button"
                  className="   bg-orange-400 text-white  text-xl flex items-center w-full  justify-center  p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
                  //   fdprocessedid="led2je"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyListPage;
