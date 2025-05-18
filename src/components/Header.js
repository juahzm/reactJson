import PropsTypes from 'prop-types';
import Button from "./Button";
const Header = () => {

    return (

        <header className="flex justify-between basis-[777px] ">
            <h1 className="text-xl font-bold font-body mt-5 mb-10">Travel Packages</h1>
            <div>
                <Button title="Add" />
            </div>
        </header>
    )
}


export default Header;