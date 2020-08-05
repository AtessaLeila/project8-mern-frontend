import React, {Component} from 'react';
import './Searchfield.css';
import { render } from '@testing-library/react';

class Searchfield extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ""
        }

        this.classList = [];
        this.types = ['submit']
    }


    onChange = (e) => {
        this.setState({
            value: e.target.value 
        })
    }
    
    render(props){

        if (this.types.includes(this.props.type)) {
            this.classList.push(`button-${this.props.type}`)
        }
    return (
        <div>
            <div className="form">
                <form onSubmit={this.props.searchSubmit(this.state.value)}>
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