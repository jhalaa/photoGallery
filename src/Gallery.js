import React, {Component} from 'react';


class Gallery extends Component {
    render() {
        let imageList = this.props.images.map(image => <img src={image.url}/>);
        return (
            <div>
                {imageList}
            </div>
        );
    }

}

export default Gallery;
