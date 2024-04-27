const AddTourist = () => {
  
    const handleAddPlace = (event) => {
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

    const newSpace = {
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
    console.log(newSpace);
    
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add a Place</h2>
      <form onSubmit={handleAddPlace}>
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
                placeholder="image URL"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Spot name</span>
            </label>
            <label>
              <input
                type="text"
                name="sportName"
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
                placeholder="country_Name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">location</span>
            </label>
            <label>
              <input
                type="text"
                name="location"
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
                placeholder="short description"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">average_cost</span>
            </label>
            <label>
              <input
                type="text"
                name="averageCost"
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
                placeholder="seasonality"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">travel_time</span>
            </label>
            <label>
              <input
                type="text"
                name="travelTime"
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
                placeholder="totalVisitorsPerYear"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
         
        </div>
        {/* userName and sportName */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label>
              <input
                type="text"
                name="UserName"
                placeholder="User Name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label>
              <input
                type="text"
                name="UserEmail"
                placeholder="User Email"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
     

      <input
        type="submit"
        value="Add Place "
        className="btn btn-block bg-slate-700 text-white font-bold text-xl"
      />
       </form>
    </div>
  );
};

export default AddTourist;
