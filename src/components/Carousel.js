import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import shallowCompare from 'react-addons-shallow-compare';


class AutoCarousel extends Component {
	
	constructor()
	{
		super();
		this.autoPlayTimeout = false;
	}

	componentWillUnmount() {
		this.stopAutoSlide();
	}

	componentDidMount() {
		this.autoSlide();	
	}

	shouldComponentUpdate(nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState);
	}

	stopAutoSlide()
	{
		clearTimeout(this.autoPlayTimeout);
	}

	autoSlide()
	{
		if(this.props.autoTime)
		{
			var carousel = this.carousel;
			
			var carouselState = carousel.state;

			var nextSlide = carouselState.currentSlide + 1;
			
			if(nextSlide >= carouselState.slideCount)
			{
				nextSlide = 0;
			}

			this.stopAutoSlide();
			this.autoPlayTimeout = setTimeout(carousel.goToSlide.bind(null,nextSlide),this.props.autoTime);	
		}
	}

	afterSlide()
	{
		this.autoSlide();
	}

	render()
	{
		return (<Carousel ref={(c)=>this.carousel = c} {...this.props } afterSlide={this.afterSlide.bind(this)} >
					{this.props.children}
				</Carousel>);
	}
}

module.exports = AutoCarousel;