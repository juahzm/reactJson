import { Link } from 'react-router-dom';
const Footer = () => {

    return (
        <footer className="mt-7 w-full flex pt-2 justify-center">
            <div className="text-center flex flex-col">
                <small>Juan Hernandez, all rights reserved. 2025</small>
                {/* <Link className="font-bold text-blue-400" to="/about"> About </Link> */}
            </div>
        </footer >
    )
}

export default Footer;