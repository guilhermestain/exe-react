import React, {Component}  from 'react'
import './index.css'

export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state={value:props.initialValue}

    }
    soma(delta){
        this.setState({...this.state,value: this.state.value+delta})
    }
    
    render(){
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button className="buttonClickDec" onClick={()=>this.soma(-1)}>Dec</button>
                <button className="buttonClickInc" onClick={()=>this.soma(1)}>Inc</button>
            </div>
        )
    }
}