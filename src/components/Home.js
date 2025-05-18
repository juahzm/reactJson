import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const Home = ({ setshowaddPackage }) => {
    useEffect(() => {
        setshowaddPackage(false);
    }, [setshowaddPackage]);

    return (
        <div className="">

            <p>At Travel Packages, we believe travel is more than a destination — it’s a journey filled with discovery, inspiration, and unforgettable moments. Whether you're craving a relaxing beach retreat, a cultural city escape, or a heart-pounding adventure, our carefully curated travel packages are designed to match every passion, budget, and dream.

                🌟 What We Offer:

                ✈️ All-inclusive international & local getaways
                🏖️ Beach, adventure, cultural, and luxury packages
                🔎 Customizable itineraries to fit your schedule
                💬 Personalized support every step of the way
                Browse our growing selection of packages, from the romantic streets of Paris to the wild plains of the Serengeti, and find your perfect escape today.

                🧳 Start your journey with WanderWise — where the world is just a click away.</p>
            <div className='mt-7 p-1 border inline-flex rounded text-center'>
                <Link className="font-bold inline-flex text-gray-400 " to="/packages"> Back</Link>
            </div>
        </div>
    )


}

export default Home;