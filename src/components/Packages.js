import SinglePackage from "./SinglePackage";
const Packages = ({ destinations }) => {
    return (
        <>
            {destinations.map((destination) => (
                <SinglePackage key={destination.id} destination={destination} />
            ))}
        </>
    );
};

export default Packages;
