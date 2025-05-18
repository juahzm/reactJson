import SinglePackage from "./SinglePackage";

const Packages = ({ destinations, onDelete, onUpdate }) => {
    return (
        <>
            {destinations.map((destination) => (
                <SinglePackage key={destination.id} destination={destination} onDelete={onDelete} onUpdate={onUpdate} />
            ))}
        </>
    );
};

export default Packages;
