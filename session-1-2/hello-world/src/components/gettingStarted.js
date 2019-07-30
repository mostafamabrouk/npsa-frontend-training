import React from 'react';

class GettingStarted extends React.Component{

    render(){
        const currentDate = new Date() ;
        console.log('we are here at Getting Started');
        return (
        <div>
            <p>We are just getting started, ya {this.props.name} - {currentDate.toDateString()}</p>
        </div>
        )
    }
}

export default GettingStarted;