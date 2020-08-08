import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import Button from "../Button/Button"

export class ItemForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: ""
            ,description: ""
            ,category: ""
            ,unit: 0
            ,unitPrice: 0
            ,inventoryCount: 0
            ,image: ""
            ,success: false
            ,ready: false
        }
    }

    componentDidMount(){
        if (this.props.id){
            fetch(`${this.props.url}/item/id/${this.props.id}`)
            .then(res => res.json())
            .then(res =>{
                this.setState({
                    name: res.name
                    ,description: res.description
                    ,category: res.category
                    ,unit: res.unit
                    ,unitPrice: res.unitPrice
                    ,inventoryCount: res.inventoryCount
                    ,image: res.image
                    ,ready: true
                })
            })
        }
        else {
            this.setState({
                ready: true
            })
        }
    }

    onChange = (e) =>{
        e.preventDefault()

        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onSubmit = (e) =>{
        e.preventDefault()
        let submitUrl = ""
        
        if (this.props.method === "POST"){
            submitUrl = `${this.props.url}/item`
        }
        else {
            submitUrl = `${this.props.url}/item/name/${this.state.name}`
        }
        const options = {
            "method": this.props.method
            ,"headers" : { "Content-Type" : "application/json"}
            ,body: JSON.stringify(this.state)
        } 
        fetch(submitUrl, options)
        .then(res => res.json())
        .then(res =>{
            this.setState({
                name: ""
                ,description: ""
                ,category: ""
                ,unit: 0
                ,unitPrice: 0
                ,inventoryCount: 0
                ,image: ""
                ,success: true
            })
        })


    }

    cancelForm = () =>{

    }

    render() {
        if (this.state.success){
            alert("The item has been created")
         return <Redirect to="/catalog" />
        }
        else if (this.state.ready && this.props.id){
        return (
            <form className="item-form" onSubmit={this.onSubmit}>
                <div className="item-form-image" style={{backgroundImage: `url(${this.state.image})`}}>
    
                    <input className="item-form-add-image" type="text" name="image" value={this.state.image} onChange={this.onChange} />
                </div>
                <div className="item-form-row-one">
                    <h2>Enter the details for the new item.</h2>
                    <input className="item-form-name item-form-input" type="text" name="name" value={this.state.name} onChange={this.onChange} />
                    <input className="item-form-category item-form-input" type="text" name="category" value={this.state.category} onChange={this.onChange} />
                    <textarea className="item-form-detail item-form-input" name="description" value={this.state.description} onChange={this.onChange} />
                </div>
                <div className="item-form-row-two">
                
                    <div className="item-form-row-two-unit-price">
                    <div className="item-form-unit">
                        <input className="item-form-input" type="number" name="unit" value={this.state.unit} onChange={this.onChange} />
                        <h2>ct.</h2>
                    </div>
                    <div className="item-form-unit">
                        <h2>$</h2>
                        <input className="item-form-input" type="number" name="unitPrice" value={this.state.unitPrice} onChange={this.onChange} />
                    </div>
                    </div>
                    <div className="item-form-row-two-inventory">
                    <input className="item-form-inventory item-form-input" type="number" name="inventoryCount" value={this.state.inventoryCount} onChange={this.onChange} />
                    </div>
                </div>
                <div className="item-form-buttons">
                    <Link to="/catalog"><Button type="delete" label="Cancel" /></Link>
                    <Button as="submit" type="edit" label="Submit" />
                </div>
            </form>
        )
        } else if(this.state.ready /* && this.props.id == false */) {return(
            <form className="item-form" onSubmit={this.onSubmit}>
                <div className="item-form-image">
                    <h3 style={{color: "white"}}>Placeholder</h3>
                    <input className="item-form-add-image" type="text" name="image" placeholder="Image Url" onChange={this.onChange} />
                </div>
                <div className="item-form-row-one">
                    <h2>Enter the details for the new item</h2>
                    <input className="item-form-name item-form-input" type="text" name="name" placeholder="Item Name" onChange={this.onChange} />
                    <input className="item-form-category item-form-input" type="text" name="category" placeholder="Item Category" onChange={this.onChange} />
                    <textarea className="item-form-detail item-form-input" name="description" placeholder="Item Description" onChange={this.onChange} />
                </div>
                <div className="item-form-row-two">
                    <div className="item-form-row-two-unit-price">
                        <div className="item-form-unit">
                        <input className="item-form-input" type="number" name="unit" placeholder="Unit Size" onChange={this.onChange} />
                        <h2>ct.</h2>            
                        </div>
                        <div className="item-form-unit">
                        <h2>$</h2>            
                        <input className="item-form-input" type="number" name="unitPrice" placeholder="Unit Price" onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="item-form-row-two-inventory">
                    <input className="item-form-inventory item-form-input" type="number" name="inventoryCount" placeholder="Inventory Ct." onChange={this.onChange} />
                    </div>
                </div>
                <div className="item-form-buttons">
                    <Link to="/catalog"><Button type="delete" label="Cancel" /></Link>
                    <Button as="submit" type="edit" label="Create" />
                </div>
            </form>
        )} else {return <p>something</p>}
    }
}

export default ItemForm
