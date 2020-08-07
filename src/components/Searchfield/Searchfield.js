import React, {Component} from 'react';
import './Searchfield.css';
import { Redirect } from 'react-router-dom'

class Searchfield extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ""
            ,id: ""
            ,redirect: false
        }

        this.classList = [];
        this.types = ['submit']
    }


    onChange = (e) => {
        this.setState({
            value: e.target.value 
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        fetch(`${this.props.url}/item/name/${this.state.value}`)
            .then(res => res.json())
            .then(res =>{
                this.setState({
                    id : res[0]._id 
                    ,redirect: true
                })
                this.props.searchSubmit(this.state.id)
            })
            
            
    }
    
    render(props){

        if (this.types.includes(this.props.type)) {
            this.classList.push(`button-${this.props.type}`)
        }
        if (this.state.redirect === true){
            this.setState({
                redirect:false
            })
            return  <Redirect to={`/catalog/item/id/${this.state.id}`} />
          } 
        
    return (
        <div>
            <div className="form">
                <form onSubmit={this.onSubmit}>
                    <input style={this.props.style}
                        placeholder={this.props.placeholder}
                        name={this.props.name}
                        onChange={this.onChange}

                    />
                    <div className="btn">
                    <input type="submit" className={this.classList.join(" ")}  /*onClick={handleSubmit}*/ />
                    </div>
                </form>
            </div>


        </div>
    )
    }


}

export default Searchfield;