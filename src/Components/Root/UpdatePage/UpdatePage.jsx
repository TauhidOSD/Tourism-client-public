import { useLoaderData } from "react-router-dom";

const UpdatePage = () => {
  
    const place =useLoaderData();
    const {sportName}=place;

    return (
        <div>
            <h3>This is Update Page: {sportName}</h3>
            
        </div>
    );
};

export default UpdatePage;