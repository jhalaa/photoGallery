import React from 'react';
import './CustomIndicator.css'

class CustomIndicator extends React.Component {
    render() {
        return (
            <div className='custom-indicator'>
                {

                    this.props.items.map((elem, index) =>
                        <img
                            className={this.props.activeIndex == index ? 'custom-indicator-active' : ''}
                            key={index} onClick={() => this.props.handleClick(index)} height="120px" src={elem.url}
                            alt={elem.caption}/>
                    )}
            </div>
        );
    }
}

export default CustomIndicator;