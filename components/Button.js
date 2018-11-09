import React from 'react';



export default class Button extends React.Component {

    componentWillMount(){
        console.log('Mounted');
    }

    handleClick = (e) => {
        e.preventDefault();
        if(this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        return (
            <button onClick={this.handleClick} >
                {this.props.children}
            </button>
        )
    }

}