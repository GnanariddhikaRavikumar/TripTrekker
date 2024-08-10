import { useSelector } from "react-redux";

const Packages = () => {
    const places = useSelector((state) => state.package.tour);

    return (
        <>
            {places.map((item) => (
                <div className="places" key={item.id}> {/* Add a unique key */}
                    <img src={item.image} alt="spots" />
                    <div className="details">
                        <h3>{item.placename}</h3>
                        <h3>{item.review}</h3>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Packages;
