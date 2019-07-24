import React from 'react';


class CustomIndicator extends React.Component {
    render() {
        var items = this.props.items;
        return (

                items.map((elem,index) =>
                    <img key={index} onClick={() => this.props.handleClick(index)} height="150px" src={elem.url} alt={elem.caption}/>
                )
        );
    }
}

export default CustomIndicator;