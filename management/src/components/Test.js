import React from 'react';

class Test extends React.Component{

    state={
        number:0,
    }
    
    handlerincrease=()=>{
        this.setState({
            number:this.state.number+1
        })

    }
    handlerdecrease=()=>{
        this.setState({
            number:this.state.number-1
        })
    }
    d
    render(){
        return(
            <div>
            <p>숫자 : {this.state.number}</p>
            <button onClick={this.handlerincrease}>+</button>
            <button onClick={this.handlerdecrease}>-</button>
            </div>
            
        );
    }
}

export default Test;