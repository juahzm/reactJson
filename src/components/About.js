import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const About = ({ setshowaddPackage }) => {
    useEffect(() => {
        setshowaddPackage(false);
    }, [setshowaddPackage]);

    return (
        <div className="text-center">
            <h4 className="font-bold text-blue-400 text-center">About this Application</h4>
            <p>Version: 1.1.1</p>
            <p><strong>Web Developper: </strong>Juan Hernandez</p>
            <Link className="font-bold text-gray-400" to="/"> Back</Link>
        </div>
    )


}

export default About;