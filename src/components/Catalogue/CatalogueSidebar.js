import React, { Component } from 'react';
import axios from 'axios';
import './CatalogueSidebar.css'
import Box from '../Box/Box'

import { Link } from "react-router-dom";


class CatalogueSidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            ready: false
        };
    }

    componentDidMount() {
        axios.get('https://group-project-mern-backend.herokuapp.com/item')
            .then(response => {
                this.setState({
                    items: response.data,
                    ready: true
                })

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    displayBoxes() {
        let itemsArr = this.state.items
        itemsArr = itemsArr.map((val, idx) => {

            let newItem = <div key={idx}className="link"><Link to={"/catalog/item/id/" + val._id} id={val._id} onClick={() => { this.setId(val._id) }}><p><Box id={val._id} name={val.name} image={val.image} price={val.unitPrice} key={idx} /></p></Link></div>;
            return (
                newItem
            )
        })
        return itemsArr
    }

    setId(id) {
        this.props.setId(id)
    }

    render() {
        return (
            <div>
                <div className="sidebar scroll">
                    {this.state.ready === true ? this.displayBoxes() : null}
                </div>
            </div>
        )
    }
}

export default CatalogueSidebar;