import React from 'react';
import './CustomIndicator.css'

class CustomIndicator extends React.Component {
    render() {
        return (
            this.props.items.map((elem, index) =>
                <img className={this.props.activeIndex==index?'custom-indicator-active' : 'custom-indicator-inactive'} key={index} onClick={() => this.props.handleClick(index)} height="150px" src={elem.url}
                     alt={elem.caption}/>
            )
        );
    }
}

export default CustomIndicator;