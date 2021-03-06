import React, { Component } from 'react'
import Button from '../Button/Button'
import { Link, Redirect } from 'react-router-dom'

export class CatalogDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: ""
            ,name: ""
            ,description: ""
            ,unit: 0
            ,price: 0
            ,inventory: 0
            ,image: ""
        }
        this.id = this.props.id
    }

    componentDidMount = () => {
        fetch(`${this.props.url}/item/id/${this.props.id}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    id: res._id
                    ,name: res.name
                    ,description: res.description
                    ,unit: res.unit
                    ,price: res.unitPrice
                    ,inventory: res.inventoryCount
                    ,image: res.image
                    ,ready: true
                    ,deleted: false
                })
            })

    }

    componentDidUpdate(props) {
        if (props.id !== this.props.id) {
            fetch(`${this.props.url}/item/id/${this.props.id}`)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        name: res.name
                        , description: res.description
                        , unit: res.unit
                        , price: res.unitPrice
                        , inventory: res.inventoryCount
                        , image: res.image
                        , ready: true
                    })
                })
        }
    }

    editItem = () => {
      this.props.setId(this.state.id)
    }

    deleteItem = () =>{
        const options = {
            "method": "DELETE"
            ,"headers" : { "Content-Type" : "application/json"}
            ,body: JSON.stringify(this.state)
        } 
        fetch(`${this.props.url}/item/name/${this.state.name}`, options)
        .then(res => res.json())
        .then(() =>{
            this.setState({
                ready: false
                ,deleted: true
            })
            return alert("The item has been deleted")
        })
    }

    render() {
        if (this.state.ready === true){
        return (
            <div className="item-detail">
            <div className="item-detail-image" style={{backgroundImage: `url(${this.state.image}`}}></div>
            <div className="item-detail-row-one">
                <h1>{this.state.name}</h1>
                <h3>{this.state.description}</h3>
            </div>
            <div className="item-detail-row-two">
                <div className="row-two-unit-price">
                    <h2>Unit Size: {this.state.unit}</h2>
                    <h2>Price: ${this.state.price}</h2>
                </div>
                <div className="row-two-inventory">
                    <h2>In Stock: {this.state.inventory}</h2>
                </div>
            </div>
            <div className="item-detail-buttons">
                <div onClick={this.deleteItem} >
                    <Button type="delete" label="Delete" />
                </div>
                <Link to={`/catalog/item/edit/${this.state.id}`} onClick={this.editItem}>
                    <Button type="edit" label="Edit"  />
                </Link>
            </div>
        </div>
        )
        } else if (this.state.deleted === true){
            return <Redirect to="/catalog" />
        } else {return null}
    }
  }


export default CatalogDetail;
