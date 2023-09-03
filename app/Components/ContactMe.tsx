import React from "react";
import {DEFAULT_WHATSAPP_MESSAGE, DEFAULT_WHATSAPP_URL} from "@/lib/constants";

export default function ContactMe() {
    return (
        <section id={'contact'} className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
                            <h2 className={'pricing-title'}>Contactos</h2>
                        </div>
                    </div>
                </div>
                <div className="d-none d-sm-block mb-5 pb-4">
                    <div id="map" className={'container'} >
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe
                                    className="gmap_iframe"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                    src="https://maps.google.com/maps?width=1000&amp;height=400&amp;hl=en&amp;q=Plaza dommy mall&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                ></iframe></div>
                        </div>
                    </div>
                </div>
                <div className="d-none d-sm-block mb-5 pb-4">
                    <a href={DEFAULT_WHATSAPP_URL + DEFAULT_WHATSAPP_MESSAGE} target={'_blank'} className="btn_2">Contactar</a>
                </div>
            </div>
        </section>
    );
}
