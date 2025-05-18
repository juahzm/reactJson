import PropsTypes from 'prop-types';
import Button from "./Button";
const Header = () => {

    return (

        <header className="flex justify-between ">
            <h1 className="text-xl font-body">Travel packages</h1>
            <Button title="Add" />
        </header>
    )
}


export default Header;