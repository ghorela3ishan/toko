import React, { Component} from "react";
import { fetchCarouselImages } from "../../services/carousel/actions"; 
import { connect } from "react-redux"; 
import { bindActionCreators } from "redux";
import "./Carousel.scss";

class Carousel extends Component {

    slideIndex = 1;

    componentDidMount() {
        this.props.fetchCarouselImages();
    }

    componentDidUpdate() {
        if(this.props.images.length)    
            this.showSlides(this.slideIndex);
    }
    // Next/previous controls
    plusSlides = (n) => {
        this.showSlides(this.slideIndex += n);
    }

    // Thumbnail image controls
    currentSlide = (n) => {
        this.showSlides(this.slideIndex = n);
    }

    showSlides = (n) => {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {this.slideIndex = 1}
        if (n < 1) {this.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex-1].style.display = "block";
        dots[this.slideIndex-1].className += " active";
    }

    render() {
        let { images } = this.props;
        return(
            <>
            {   images.length ? 
                    <div className="carouselCont">
                        <div className="slideshow-container">
                            { images.map((img, index) => {
                                return (
                                        <div className="mySlides fade">
                                            <div className="numbertext">{index} / 3</div>
                                            <img src={img.url}/>
                                        </div>
                                    );    
                            })}

                            <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                            <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                        </div>
                        <br/>

                    <div className="dotCont">
                        { images.map((img,i) => {
                            return (
                                <span className="dot" onClick={() => this.currentSlide(i)}></span>
                            )
                        })}
                    </div>
                </div>
            : 
                ""}
            </>

            
        );
    }
}


const mapStateToProps = (state) => {
    return {
        images: state.images.images,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchCarouselImages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);