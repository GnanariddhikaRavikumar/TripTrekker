import React from "react";
import { useSelector } from "react-redux";

const Category = () => {

    const filteredplaces =  useSelector((state) => state.category.places);

    return (
        <>
            {filteredplaces.map((item) => {
                <div>
                    <h2></h2>
                </div>
            })}
        </>
    )
};

export default Category;