export function Hero() {
    return (
        <>
            {/* Slider Area Start */}
            <div className="slider-area position-relative">
                <div className="slider-active">
                    {/* Single Slider */}
                    <div className="single-slider slider-height d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 col-lg-9 col-md-10">
                                    <div className="hero__caption">
                                        <span data-animation="fadeInLeft" data-delay="0.1s">Transforma tu cuerpo,</span>
                                        <h1 data-animation="fadeInLeft" data-delay="0.4s">Transforma tu vida!</h1>
                                        <a href="#what-we-offer" className="border-btn hero-btn" data-animation="fadeInLeft" data-delay="0.8s">Mira como</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slider Area End */}
        </>
    )
}
