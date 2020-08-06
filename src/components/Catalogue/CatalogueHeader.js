import React from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "../Button/Button";
import Searchfield from "../Searchfield/Searchfield";

function CatalogueHeader(props) {
    const searchFieldStyle = {
        border: "3px solid #F1F3F4",
        fontSize: "15px",
        height: "30px",
        width: "170px",
    }

    const buttonStyle = {
        marginRight: "20px",
    }

    let searchSubmit = (value) => {
<<<<<<< HEAD
        fetch(`${props.url}/item/name/${value}`)
            .then(res => res.json())
            .then(res => {
                <Redirect to={`/catalog/item/${}`} />
            })
=======
        props.searchSubmit(value)
>>>>>>> efe8f16012925730067d25c264805bf4930eb0df
    }


    return (
        <div className="catalogue-header">
            <div className="catalogue-searchfield">
                <Searchfield style={searchFieldStyle} className="catalogue-header-search" name="Submitbtn" type="submit" placeholder="Search your catalogue..." small url={props.url} searchSubmit={searchSubmit} />
            </div>
<<<<<<< HEAD
            <Searchfield style={searchFieldStyle} className="catalogue-header-search" name="Submitbtn" type="submit" placeholder="Search your catalogue..." small searchSubmit={searchSubmit} />
=======
>>>>>>> efe8f16012925730067d25c264805bf4930eb0df
            <div className="new-item-button">
                <Link to="/catalog/item/new">
                    <Button style={buttonStyle} type="create" label="+ New Item" />
                </Link>
            </div>

        </div>
    )

}

export default CatalogueHeader;
