import PropTypes from 'prop-types';
import Button from "./Button";
import { useLocation } from 'react-router-dom';
const Header = ({ toogleForm, showAdd }) => {

    const location = useLocation();

    return (

        <header className="flex justify-between basis-[777px] ">
            <h1 className="text-xl font-bold font-body mt-5 mb-10">Travel Packages</h1>
            <div>
                {location.pathname === '/packages' && (<Button title={showAdd ? 'Close' : 'Add'} onClick={toogleForm} />)}

            </div>
        </header>
    )
}


export default Header;