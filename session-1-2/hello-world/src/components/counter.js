import React from 'react';

class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.clear = this.clear.bind(this);
    }
    componentDidMount(){
        console.log('component is mounted');
        this.setState({count: this.props.initialValue})
    }
    
    increase(){
        this.setState({count: this.state.count+1})
    }
    decrease(){
        this.setState({count: this.state.count-1})
    }
    clear(){
        this.setState({count: this.props.initialValue})
    }
    render() {
        console.log('component is rendered');
        return(
            <div>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increase}>Increase</button>
            <button onClick={this.decrease}>Decrease</button>
            <button onClick={this.clear}>Clear</button>
            
            </div>
        )
    }
}
export default Counter;