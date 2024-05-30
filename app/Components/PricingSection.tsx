import React from 'react';
import SingleFeature from "@/app/Components/SingleFeature";
import {createMessage} from "@/lib/whatsapp";

const PricingSection = ({ 
    whatsAppUrl,
    ref,
}: {
    whatsAppUrl: string;
    ref: any;
}) => {
    return (
        <section id={'planes'} ref={ref} className="pricing-area section-padding40 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
                            <h2 className={'pricing-title'}>Planes</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="properties mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            <div className="properties__card">
                                <div className="about-icon">
                                    <img src="../assets/img/icon/price.svg" alt="" />
                                </div>
                                <div className="properties__caption">
                                    <span className="month">PLAN BASICO</span>
                                    <p className="mb-25"><span className={'price-format'}>$6,500</span>  <span>(8 clases)</span></p>
                                    <SingleFeature label="8 CLASES QUE DEBEN SER TOMADAS DENTRO DEL MES, RESPETANDO SU HORARIO ASIGNADO" />
                                    <SingleFeature label="ASISTENCIA PERSONALIZADA" />
                                    <SingleFeature label="PROGRAMA DE ENTRENAMIENTO ADAPTADO A SU CONDICIÓN FÍSICA Y SU OBJETIVO" />
                                    <SingleFeature label="ACCESO A LA APLICACIÓN DE SEGUIMIENTO" />
                                    <SingleFeature label="INCLUYE 2 REPOSICIONES DE CLASE O CAMBIOS DE HORARIO" />
                                    <SingleFeature label="EVALUACIÓN FÍSICA AL COMPLETAR EL MES" />
                                    <SingleFeature label="GUÍA DE SUPLEMENTACIÓN" />
                                    <a href={whatsAppUrl + createMessage('Plan Basico')} target={'_blank'} className="border-btn border-btn2">Ver disponibilidad</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="properties mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            <div className="properties__card">
                                <div className="about-icon">
                                    <img src="../assets/img/icon/price.svg" alt="" />
                                </div>
                                <div className="properties__caption">
                                    <span className="month">PLAN GOOD SHAPE</span>
                                    <p className="mb-25"><span className={'price-format'}>$8,500</span>  <span>(12 clases)</span></p>
                                    <SingleFeature label="12 CLASES QUE DEBEN SER TOMADAS DENTRO DEL MES, RESPETANDO SU HORARIO ASIGNADO" />
                                    <SingleFeature label="ASISTENCIA PERSONALIZADA" />
                                    <SingleFeature label="PROGRAMA DE ENTRENAMIENTO ADAPTADO A SU CONDICIÓN FÍSICA Y SU OBJETIVO" />
                                    <SingleFeature label="ACCESO A LA APLICACIÓN DE SEGUIMIENTO" />
                                    <SingleFeature label="ACCESO A LAS INSTALACIONES DEL GYM FUERA DE SU HORARIO CON CITA PREVIA SEGÚN DISPONIBILIDAD" />
                                    <SingleFeature label="INCLUYE 2 REPOSICIONES DE CLASE" />
                                    <SingleFeature label="INCLUYE 2 CAMBIOS DE HORARIO" />
                                    <SingleFeature label="EVALUACIÓN FÍSICA AL COMPLETAR EL MES" />
                                    <SingleFeature label="GUÍA DE SUPLEMENTACIÓN" />
                                    <a href={whatsAppUrl + createMessage('Plan Good Shape')} target={'_blank'} className="border-btn border-btn2">Ver disponibilidad</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="properties mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                            <div className="properties__card">
                                <div className="about-icon">
                                    <img src="../assets/img/icon/price.svg" alt="" />
                                </div>
                                <div className="properties__caption">
                                    <span className="month">PLAN PREMIUM</span>
                                    <p className="mb-25"><span className={'price-format'}>$12,000</span> <span>(16 clases)</span></p>
                                    <SingleFeature label="16 CLASES QUE DEBEN SER TOMADAS DENTRO DEL MES, RESPETANDO SU HORARIO ASIGNADO." />
                                    <SingleFeature label="ASISTENCIA PERSONALIZADA" />
                                    <SingleFeature label="PROGRAMA DE ENTRENAMIENTO ADAPTADO A SU CONDICIÓN FÍSICA Y SU OBJETIVO" />
                                    <SingleFeature label="ACCESO A LA APLICACIÓN DE SEGUIMIENTO" />
                                    <SingleFeature label="PLAN NUTRICIONAL PERSONALIZADO" />
                                    <SingleFeature label="HORARIO FLEXIBLE: INCLUYE 2 CAMBIOS DE HORARIO A LA SEMANA" />
                                    <SingleFeature label="1 EVALUACIÓN FÍSICA AL COMPLETAR EL MES" />
                                    <SingleFeature label="GUÍA DE SUPLEMENTACIÓN" />
                                    <a href={whatsAppUrl + createMessage('Plan premium')} target={'_blank'} className="border-btn border-btn2">Ver disponibilidad</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="properties mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            <div className="properties__card">
                                <div className="about-icon">
                                    <img src="../assets/img/icon/price.svg" alt="" />
                                </div>
                                <div className="properties__caption">
                                    <span className="month">PLAN ELITE</span>
                                    <p className="mb-25"><span className={'price-format'}>$16,000</span>  <span>(16 clases)</span></p>
                                    <SingleFeature label="16 CLASES QUE DEBEN SER TOMADAS DENTRO DEL MES" />
                                    <SingleFeature label="ASISTENCIA PERSONALIZADA" />
                                    <SingleFeature label="PROGRAMA DE ENTRENAMIENTO ADAPTADO A SU CONDICIÓN FÍSICA Y SU OBJETIVO" />
                                    <SingleFeature label="ACCESO A LA APLICACIÓN DE SEGUIMIENTO" />
                                    <SingleFeature label="PLAN NUTRICIONAL PERSONALIZADO" />
                                    <SingleFeature label="HORARIO FLEXIBLE: INCLUYE CAMBIO DE HORA ILIMITADO" />
                                    <SingleFeature label="1 EVALUACIÓN FÍSICA AL COMPLETAR EL MES" />
                                    <SingleFeature label="1 ACOMPAÑANTE 1 VEZ A LA SEMANA OPCIONAL" />
                                    <SingleFeature label="1 DESCARGA MUSCULAR POR MES" />
                                    <SingleFeature label="GUÍA DE SUPLEMENTACIÓN" />
                                    <a href={whatsAppUrl + createMessage('Plan elite')} target={'_blank'} className="border-btn border-btn2">Ver disponibilidad</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="properties mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            <div className="properties__card">
                                <div className="about-icon">
                                    <img src="../assets/img/icon/price.svg" alt="" />
                                </div>
                                <div className="properties__caption">
                                    <span className="month">PLAN YO PERREO SOL@</span>
                                    <p className="mb-25"><span className={'price-format'}>$3,000</span> </p>
                                    <SingleFeature label="EVALUACION INICIAL" />
                                    <SingleFeature label="ACCESO A LAS INSTALACIONES RESPETANDO SU HORARIO ASIGNADO, EN CASO DE NECESITAR CAMBIO DE HORARIO DURANTE EL MES CONFIRMAR DISPONIBILIDAD." />
                                    <SingleFeature label="GUIA O AYUDA DEL PERSONAL CAPACITADO SI LO REQUIERE" />
                                    <SingleFeature label="1 EVALUACION DE SEGUIMIENTO GRATIS A LOS 3 MESES CONSECUTIVOS" />
                                    <a href={whatsAppUrl + createMessage('Plan yo perreo sol@')} target={'_blank'} className="border-btn border-btn2">Ver disponibilidad</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="properties mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                            <div className="properties__card">
                                <div className="about-icon">
                                    <img src="../assets/img/icon/price.svg" alt="" />
                                </div>
                                <div className="properties__caption">
                                    <span className="month">KIDS & TEENS</span>
                                    <p className="mb-25"><span className={'price-format'}>$6,500</span>  <span>(8 clases)</span></p>
                                    <p className="mb-25"><span className={'price-format'}>$8,500</span>  <span>(12 clases)</span></p>
                                    <SingleFeature label="8 O 12 CLASES QUE DEBEN SER TOMADAS DENTRO DEL MES, RESPETANDO SU HORARIO ASIGNADO" />
                                    <SingleFeature label="PROGRAMA DE ENTRENAMIENTO ADAPTADO A SU EDAD" />
                                    <SingleFeature label="PLAN NUTRICIONAL PERSONALIZADO" />
                                    <SingleFeature label="AMBIENTE SANO" />
                                    <SingleFeature label="GRUPO LIMITADO" />
                                    <SingleFeature label="INCLUYE 2 REPOSICIONES DE CLASE" />
                                    <SingleFeature label="INCLUYE 2 CAMBIOS DE HORARIO" />
                                    <SingleFeature label="1 EVALUACION FISICA AL COMPLETAR EL MES" />
                                    <SingleFeature label="PUEDE LLEVAR UN ACOMPANANTE ADULTO DURANTE LA HORA DE CLASE" />
                                    <a href={whatsAppUrl + createMessage('Su plan Kids y Teens')} target={'_blank'} className="border-btn border-btn2">Ver disponibilidad</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="properties mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                            <div className="properties__card">
                                <div className="about-icon">
                                    <img src="../assets/img/icon/price.svg" alt="" />
                                </div>
                                <div className="properties__caption">
                                    <span className="month">ONLINE COACHING</span>
                                    <p className="mb-25"><span className={'price-format'}>$120</span> dolares  <span>(4 semanas)</span></p>
                                    <p className="mb-25"><span className={'price-format'}>$300</span>  dolares <span>(12 semanas)</span></p>
                                    <SingleFeature label="EVALUACION INICIAL" />
                                    <SingleFeature label="PLAN NUTRICIONAL PERSONALIZADO" />
                                    <SingleFeature label="PROGRAMA DE ENTRENAMIENTO ADAPATADO A SU CONDICION FISICA Y SU OBJETIVO" />
                                    <SingleFeature label="ACCESO A LA APLICACIÓN DE SEGUIMIENTO" />
                                    <SingleFeature label="RUTINAS CON VIDEOS DE EJEMPLO" />
                                    <SingleFeature label="GUIA DE SUPLEMENTACION" />
                                    <SingleFeature label="ATENCION DIARIA AL CLIENTE VIA WHATSAPP" />
                                    <SingleFeature label="SEGUIMIENTO 1 VEZ A LA SEMANA VIA WHATSAPP" />
                                    <SingleFeature label="EVALUACION DE SEGUIMIENTO 1 VEZ AL MES" />
                                    <a target={'_blank'} href={whatsAppUrl + createMessage('Online Coaching')} className="border-btn border-btn2">Ver disponibilidad</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h2 className={'others-service-title'}>
                            Otros Servicios:
                        </h2>
                    </div>
                    <div className={'col-lg-3 col-md-3 col-sm-12'}>
                        <div className="properties mb-30 wow fadeInUp">
                            <div className="properties__card">
                                <div className="properties__caption">
                                    <SingleFeature label="CLASE DE PRUEBA - GRATIS" />
                                    <SingleFeature label="CLASE SIN INSCRIPCION - RD$1,000" />
                                    <SingleFeature label="PROGRAMA DE ENTRENAMIENTO ADAPATADO A SU CONDICION FISICA Y SU OBJETIVO (INCLUYE ACCESO A LA APP DE SEGUIMIENTO) - RD$3,500" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-lg-3 col-md-3 col-sm-12'}>
                        <div className="properties mb-30 wow fadeInUp">
                            <div className="properties__card">
                                <div className="properties__caption">
                                    <SingleFeature label="PLAN DE NUTRICION PERSONALIZADO - RD$3,500" />
                                    <SingleFeature label="EVALUACION DE SEGUIMIENTO INBODY - RD$500" />
                                    <SingleFeature label="REPOSICION/CAMBIO DE HORARIO - RD$500" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-lg-3 col-md-3 col-sm-12'}>
                        <div className="properties mb-30 wow fadeInUp">
                            <div className="properties__card">
                                <div className="properties__caption">
                                    <SingleFeature label="MASAJE DE DESCARGA MUSCULAR - RD$2,000" />
                                    <SingleFeature label="TERAPIA DE CUPPING/VENTOSAS - RD$2,000" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-lg-3 col-md-3 col-sm-12'}>
                        <div className="properties mb-30 wow fadeInUp">
                            <div className="properties__card">
                                <div className="properties__caption">
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

export default PricingSection;
