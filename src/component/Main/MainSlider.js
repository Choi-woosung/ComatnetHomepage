import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'css/Main/MainSlider.css';
import MainImg1 from 'img/Main/back1.jpg';
import MainImg2 from 'img/Main/back2.jpg';
import MainImg3 from 'img/Main/back3.jpg';
import MainImg4 from 'img/Main/back4.jpg';

function MainSlider() {
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000
	};

	return (
		<div className="SliderBox">
			<Slider {...settings}>
				<div className="imgBox">
					<img alt="MainImg1" src={MainImg1} />
				</div>
				<div className="imgBox">
					<img alt="MainImg2" src={MainImg2} />
				</div>
				<div className="imgBox">
					<img alt="MainImg3" src={MainImg3} />
				</div>
				<div className="imgBox">
					<img alt="MainImg4" src={MainImg4} />
				</div>
			</Slider>
		</div>
	);
}

export default MainSlider;