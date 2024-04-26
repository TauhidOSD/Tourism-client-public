import { Outlet } from 'react-router-dom';
import NavBer from './NavBer/NavBer';
import Footer from './Home/Footer/Footer';

const Root = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;