import React, {Component} from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselCaption} from 'reactstrap';
import CustomIndicator from './CustomIndicator'

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);

    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.images.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex: nextIndex});
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.images.length - 1 : this.state.activeIndex - 1;
        this.setState({activeIndex: nextIndex});
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({activeIndex: newIndex});
    }

    render() {
        let imageList = this.props.images.map((image) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={image.url}>
                    <img src={image.url} alt={image.caption}/>
                    <CarouselCaption  captionHeader={image.caption}/>
                </CarouselItem>
            )
        });
        return (
            <div>
                <Carousel
                    interval={false}
                    activeIndex={this.state.activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CustomIndicator
                        items={this.props.images}
                        activeIndex={this.state.activeIndex}
                        handleClick={this.goToIndex}
                    />
                    {imageList}

                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>


                </Carousel>
            </div>

        );
    }

}

export default Gallery;
