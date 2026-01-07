import React from 'react';
import SingleFeature from "@/app/Components/SingleFeature";

const ServicesSection = () => {
    return (
        <section id={'planes'} className="pricing-area section-padding40">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
                            <h2 className={'pricing-title'}>Servicios</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 d-flex">
                        <div className="properties mb-30 wow fadeInUp w-100">
                            <div className="properties__card h-100 d-flex flex-column">
                                <div className="properties__caption flex-grow-1">
                                    <SingleFeature label="CLASE DE PRUEBA - GRATIS" />
                                    <SingleFeature label="CLASE SIN INSCRIPCION - RD$1,000" />
                                    <SingleFeature label="PROGRAMA DE ENTRENAMIENTO ADAPATADO A SU CONDICION FISICA Y SU OBJETIVO (INCLUYE ACCESO A LA APP DE SEGUIMIENTO) - RD$3,500" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 d-flex">
                        <div className="properties mb-30 wow fadeInUp w-100">
                            <div className="properties__card h-100 d-flex flex-column">
                                <div className="properties__caption flex-grow-1">
                                    <SingleFeature label="PLAN DE NUTRICION PERSONALIZADO - RD$3,500" />
                                    <SingleFeature label="EVALUACION DE SEGUIMIENTO INBODY - RD$500" />
                                    <SingleFeature label="REPOSICION/CAMBIO DE HORARIO - RD$500" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 d-flex">
                        <div className="properties mb-30 wow fadeInUp w-100">
                            <div className="properties__card h-100 d-flex flex-column">
                                <div className="properties__caption flex-grow-1">
                                    <SingleFeature label="MASAJE DE DESCARGA MUSCULAR - RD$2,000" />
                                    <SingleFeature label="TERAPIA DE CUPPING/VENTOSAS - RD$2,000" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 d-flex">
                        <div className="properties mb-30 wow fadeInUp w-100">
                            <div className="properties__card h-100 d-flex flex-column">
                                <div className="properties__caption flex-grow-1">
                                    <SingleFeature label="READAPTACION DEPORTIVA - RD$2,000" />
                                    <SingleFeature label="TERAPIA VIBRATORIA - RD$2,000" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
