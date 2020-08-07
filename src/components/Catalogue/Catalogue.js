import React, { Component } from 'react'
import CatalogueHeader from './CatalogueHeader'
import CatalogueDetail from './CatalogDetail'
import ItemForm from './ItemForm'
import { Route } from 'react-router-dom'
import CatalogueSidebar from './CatalogueSidebar'
import './CatalogueSidebar.css'
import CatalogHome from './CatalogHome'

class Catalogue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentId: ""
            ,ready: false
        }
    }

    resetState = () => {
        this.setState({
            currentId: ""
            , ready: false
        })
    }

    searchSubmit = (value) => {
        this.setState({
            currentId: value
            , ready: true
        })

    }

    render() {
        return (
            <div className="catalogue-main">
                <Route path="/catalog"
                    render={() => {
                        return (<div className="catalogue-main">
                            <CatalogueHeader url={this.props.url} searchSubmit={this.searchSubmit} />
                            <div className="catalogue-body">
                                <div className="catalogue-sidebar" style={{ marginLeft: "10px", marginRight: "20px" }}>
                                    <CatalogueSidebar setId={this.searchSubmit} />
                                </div>
                                    <Route path="/catalog" component={CatalogHome} exact />
                    
                    <Route path="/catalog/item/new" 
                        render={()=>{return(
                        <div className="item-form-body">
                            <ItemForm url={this.props.url} method={"POST"}/>
                        </div>)}} exact />

                    <Route path={`/catalog/item/edit/${this.state.currentId}`} 
                        render={()=>{return(
                        <div className="item-form-body">
                            <ItemForm url={this.props.url} id={this.state.currentId} method={"PUT"}  />
                        </div>)}} exact />

                    <Route path={`/catalog/item/id/${this.state.currentId}`}
                        render={()=>{ 
                            if(this.state.ready === true){
                                return(<CatalogueDetail url={this.props.url} id={this.state.currentId} setId={this.searchSubmit} />)
                            }
                            else {return null}
                        }} exact />
                            </div>
                        </div>)
                    }}
                />

        </div>
    )
    }
}

export default Catalogue
