import React from 'react';
import Image from "next/image";

const TeamSection = () => {
    return (
        <section id="what-we-offer" className="team-area fix">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <h2>Que ofrecemos?</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            <div className="cat-icon">
                                <Image
                                    src="/../assets/img/gallery/cristal-pelota.png"
                                    alt="First what we offer image"
                                    width={300}
                                    height={400}
                                />
                            </div>
                            <div className="cat-cap">
                                <h5><a href="services.html">Entrenamineto asistido</a></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            <div className="cat-icon">
                                <Image
                                    src="/../assets/img/gallery/cristal-cables.png"
                                    alt="Second what we offer image"
                                    width={300}
                                    height={400}
                                />
                            </div>
                            <div className="cat-cap">
                                <h5><a href="services.html">Nutricion</a></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                            <div className="cat-icon">
                                <Image
                                    src="/../assets/img/gallery/cristal-goma.png"
                                    alt="Third what we offer image"
                                    width={300}
                                    height={400}
                                />
                            </div>
                            <div className="cat-cap">
                                <h5><a href="services.html">Online coaching</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
