import { useLoaderData } from "react-router-dom";

const AllTourist = () => {

    const places=useLoaderData();
    
    return (
        <div>
            <h3>Beatutiful country:{places.length}</h3>
            
        </div>
    );
};

export default AllTourist;