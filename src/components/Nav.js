import { Link } from 'react-router-dom';
const Nav = () => {

    return (
        <nav className="mt-7 w-full flex pt-2 justify-left pl-2">
            <div className="text-center flex flex-row gap-5 mb-8">
                <Link className="font-bold text-blue-400" to="/about"> About </Link>
                <Link className="font-bold text-blue-400" to="/packages"> Packages </Link>
                <Link className="font-bold text-blue-400" to="/home"> Home </Link>
            </div>
        </nav >
    )
}

export default Nav;