import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const About = ({ setshowaddPackage }) => {
    useEffect(() => {
        setshowaddPackage(false);
    }, [setshowaddPackage]);

    return (
        <div className="text-center">
            <h4 className="font-bold text-blue-400 text-center">About this App</h4>
            <p>Version: 1.1.1</p>
            <p><strong>Dev: </strong>Juan Hernandez</p>

            <div className='mt-7 p-1 border inline-flex rounded text-center'>
                <Link className="font-bold inline-flex text-gray-400" to="/packages"> Back</Link>
            </div>
        </div>
    )


}

export default About;