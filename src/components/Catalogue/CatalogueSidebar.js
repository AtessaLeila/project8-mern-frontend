import React, { Component } from 'react';
import axios from 'axios';
import './CatalogueSidebar.css'
import Box from '../CatalogSidebarItem/Box'

// const Index = props => (
//     <div>
//         <div>{props.image}</div>
//         <div>{props.name}</div>
//         <div>{props.unitPrice}</div>
//     </div>
// )


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
                console.log(this.state.items)

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    displayBoxes() {
        let itemsArr = this.state.items
        itemsArr = itemsArr.map((val, idx) => {
            let newItem = <Box name={val.name} image={val.image} price={val.unitPrice} />;
            return (
                newItem
            )
        })
        console.log(itemsArr)
        return itemsArr
    }



    // bakeryList() {
    //     return this.state.items.map(function (currentItem, i) {
    //         return <Index item={currentItem} key={i} />
    //     })
    // }

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