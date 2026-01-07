import React, { forwardRef, Ref } from 'react';
import Image from "next/image";

const DEFAULT_WHATSAPP_MESSAGE = 'Hola me interesa conocer sus planes para entrenamiento presencial en Good Shape y su disponibilidad. Mensaje enviado desde el sitio web.';

interface OurTeamProps {
    ref: Ref<HTMLElement>;
    seePlanCristalClick: () => void;
  }

const TeamSection = forwardRef(({ seePlanCristalClick, ref }: OurTeamProps) => {
    return (
        <section id="our-team" ref={ref} className="team-area fix p-4">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <h2>Nuestro Equipo</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div style={{ position: 'relative', width: '100%', height: '325px' }}>
                                <Image
                                    src="/../assets/img/team/cristal.jpeg"
                                    alt="Cristal coach"
                                    layout='fill'
                                    objectFit='cover'
                                    objectPosition='center 10px'
                                    />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h2>Cristal Lopez</h2>
                                <div className="card-text flex-grow-1">
                                    <ul>
                                        <li>Entrenadora personal certificada (FDFF)</li>
                                        <li>Certificación nutrición y dietética aplicada al deporte (FDFF)</li> 
                                        <li>Atleta campeona fisiculturismo bikini wellness (2022)</li>
                                        <li>Taller sistemas de entrenamiento</li>
                                        <li>Taller suplementarios y farmacología</li>
                                        <li>Taller peak week management</li>
                                    </ul>
                                </div>
                                <div className="mt-3">
                                    <div className="btn-group">
                                        <button type='button' onClick={seePlanCristalClick} className="btn btn-sm btn-outline-secondary">Ver planes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div style={{ position: 'relative', width: '100%', height: '325px' }}>
                                <Image
                                    src="/../assets/img/team/joedy_natasha.jpeg"
                                    alt="Yoedy coach"
                                    layout='fill'
                                    objectFit='cover'
                                    objectPosition='center 10px'
                                />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h2>Yoedy Bernard</h2>
                                <div className="card-text flex-grow-1">
                                    <ul>
                                        <li>- Coach internacional en competención de culturismo y fitness ( ifbb Academy )</li>
                                        <li>- Certificado en nutrición, ejercicios y deportes (Wageningen  university and research )</li>
                                        <li>- Estudiante de maestría en nutrición  (Escuela de Postgrado de Medicina y Sanidad, grupo esceneca)</li>
                                    </ul>
                                </div>
                                <div className="mt-3">
                                    <div className="btn-group">
                                    <a href={`https://wa.me/+18493766655?text=${DEFAULT_WHATSAPP_MESSAGE}`} className="btn btn-sm btn-outline-secondary">Ver planes</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div style={{ position: 'relative', width: '100%', height: '325px' }}>
                                <Image
                                        src="/../assets/img/team/joan-2.jpeg"
                                        alt="Joan coach"
                                        layout='fill'
                                        objectFit='cover'
                                        objectPosition='center 10px'
                                    />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h2>Joan Guzman</h2>
                                <div className="card-text flex-grow-1">
                                    <ul>
                                        <li>- MLB player performance specialist</li>
                                        <li>- Sport nutrítion</li>
                                        <li>- FMS level 1</li>
                                    </ul>
                                </div>
                                <div className="mt-3">
                                    <div className="btn-group">
                                        <a href={`https://wa.me/+18297803248?text=${DEFAULT_WHATSAPP_MESSAGE}`} className="btn btn-sm btn-outline-secondary">Ver planes</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default TeamSection;
