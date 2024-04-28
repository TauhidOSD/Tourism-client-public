import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
  
    const place =useLoaderData();
    const {_id,country,image,sportName,location,shortDescription,averageCost,seasonality,travelTime,totalVisitorsPerYear,UserEmail,UserName}= place;

    const handleUpdatePlace = (event) => {
        event.preventDefault();
    
        const form = event.target;
        const image = form.image.value;
        const sportName = form.sportName.value;
        const country = form.country.value;
        const location = form.location.value;
        const shortDescription = form.shortDescription.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const UserEmail = form.UserEmail.value;
        const UserName = form.UserName.value;
        
    
        const newPlace = {
          image,
          sportName,
          country,
          location,
          shortDescription,
          averageCost,
          seasonality,
          travelTime,
          totalVisitorsPerYear,
          UserEmail,
          UserName
        }
        console.log(newPlace);
    
        //send data to the server
        fetch(`http://localhost:5000/Place/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newPlace)
    
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Place Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
    
            }
    
        })
        
      }
    
    

    return (
        <div className="bg-[#F4F3F0] p-4 md:p-24">
        <form onSubmit={handleUpdatePlace}>
          {/*image and sportName */}
          <div className="md:flex mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <label>
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  placeholder="image URL"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Spot name</span>
              </label>
              <label>
                <input
                  type="text"
                  name="sportName"
                  defaultValue={sportName}
                  placeholder="Spot name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/* country and location  */}
          <div className="md:flex mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">country_Name</span>
              </label>
              <label>
                <input
                  type="text"
                  name="country"
                  defaultValue={country}
                  placeholder="country_Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">location</span>
              </label>
              <label>
                <input
                  type="text"
                  name="location"
                  defaultValue={location}
                  placeholder="location"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/* Description and cost  */}
          <div className="md:flex mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">short description</span>
              </label>
              <label>
                <input
                  type="text"
                  name="shortDescription"
                  defaultValue={shortDescription}
                  placeholder="short description"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">average_cost</span>
              </label>
              <label>
                <input
                  type="text"
                  name="averageCost"
                  defaultValue={averageCost}
                  placeholder="average_cost"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/* Season and time*/}
          <div className="md:flex mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">seasonality</span>
              </label>
              <label>
                <input
                  type="text"
                  name="seasonality"
                  defaultValue={seasonality}
                  placeholder="seasonality"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">travel_time</span>
              </label>
              <label>
                <input
                  type="text"
                  name="travelTime"
                  defaultValue={travelTime}
                  placeholder="travel_time"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/* visitedYear and email */}
          <div className="md:flex mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">totalVisitorsPerYear</span>
              </label>
              <label>
                <input
                  type="text"
                  name="totalVisitorsPerYear"
                  defaultValue={totalVisitorsPerYear}
                  placeholder="totalVisitorsPerYear"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <label>
                <input
                  type="text"
                  name="UserName"
                  defaultValue={UserName}
                  placeholder="User Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
           
          </div>
          {/* userName and sportName */}
          <div className="md:flex mb-6">
          
            <div className="form-control md:w-full ">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <label>
                <input
                  type="text"
                  name="UserEmail"
                  defaultValue={UserEmail}
                  placeholder="User Email"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
       
  
        <input
          type="submit"
          value="Update"
          className="btn btn-block bg-slate-700 text-white font-bold text-xl"
        />
         </form>
      </div>
    );
};

export default UpdatePage;