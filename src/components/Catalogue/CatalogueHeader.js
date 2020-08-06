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
        props.searchSubmit(value)
    }


    return (
        <div className="catalogue-header">
            <div className="catalogue-searchfield">
                <Searchfield style={searchFieldStyle} className="catalogue-header-search" name="Submitbtn" type="submit" placeholder="Search your catalogue..." small url={props.url} searchSubmit={searchSubmit} />
            </div>
<<<<<<< HEAD
=======

>>>>>>> ab2064b2b45eb5619b7ebc2e4a34e7022420fe8a
            <div className="new-item-button">
                <Link to="/catalog/item/new">
                    <Button style={buttonStyle} type="create" label="+ New Item" />
                </Link>
            </div>

        </div>
    )

}

export default CatalogueHeader
