import React from 'react';
import Image from "next/image";
import { DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';

const TeamSection = () => {
    return (
        <section id="our-team" className="team-area fix p-4">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <h2>Nuestro Equipo</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card shadow-sm">
                            <Image
                                    src="/../assets/img/team/cristal.jpeg"
                                    alt="Cristal coach"
                                    width={423}
                                    height={425}
                                    sizes="(max-width: 423px) 100vw, 33vw"
                                />
                            <div className="card-body">
                                <h2>Cristal Lopez</h2>
                                <p className="card-text">
                                    <ul>
                                        <li>Entrenadora personal certificada (FDFF)</li>
                                        <li>Certificación nutrición y dietética aplicada al deporte (FDFF)</li> 
                                        <li>Atleta campeona fisiculturismo bikini wellness (2022)</li>
                                        <li>Taller sistemas de entrenamiento</li>
                                        <li>Taller suplementarios y farmacología</li>
                                        <li>Taller peak week management</li>
                                    </ul>
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="#planes" className="btn btn-sm btn-outline-secondary">Ver plan</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <Image
                                    src="/../assets/img/team/yoedy.jpeg"
                                    alt="Yoedy coach"
                                    width={423}
                                    height={425}
                                    sizes="(max-width: 423px) 100vw, 33vw"
                                />
                            <div className="card-body">
                                <h2>Yoedy Bernard</h2>
                                <p className="card-text">
                                    <ul>
                                        <li>- Coach internacional en competención de culturismo y fitness ( ifbb Academy )</li>
                                        <li>- Certificado en nutrición, ejercicios y deportes (Wageningen  university and research )</li>
                                        <li>- Estudiante de maestría en nutrición  (Escuela de Postgrado de Medicina y Sanidad, grupo esceneca)</li>
                                    </ul>
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                    <a href={`https://wa.me/+18493766655?text=${DEFAULT_WHATSAPP_MESSAGE}`} className="btn btn-sm btn-outline-secondary">Ver planes</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                        <Image
                                    src="/../assets/img/team/aldo-perez.jpeg"
                                    alt="Yoedy coach"
                                    width={423}
                                    height={425}
                                    sizes="(max-width: 423px) 100vw, 33vw"
                                />
                            <div className="card-body">
                                <h2>Aldo Pérez</h2>
                                <p className="card-text">
                                    <ul>
                                        <li>- Certificación internacional por la Ifbb academy</li>
                                        <li>- Certificado en nutrición CIFMEC</li>
                                        <li>- Certificado por la NSPC (National strength program for coaches))</li>
                                        <li>- Certificado en varios talleres deportivos y de nutrición</li>
                                    </ul>
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href={`https://wa.me/+18298736377?text=${DEFAULT_WHATSAPP_MESSAGE}`} className="btn btn-sm btn-outline-secondary">Ver planes</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-4">
                        <div className="card shadow-sm">
                            <Image
                                    src="/../assets/img/team/joan-2.jpeg"
                                    alt="Yoedy coach"
                                    width={423}
                                    height={425}
                                    sizes="(max-width: 423px) 100vw, 33vw"
                                />
                            <div className="card-body">
                                <h2>Joan Guzman</h2>
                                <p className="card-text">
                                    <ul>
                                        <li>- MLB player performance specialist</li>
                                        <li>- Sport nutrítion</li>
                                        <li>- FMS level 1</li>
                                    </ul>
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href={`https://wa.me/+18297803248?text=${DEFAULT_WHATSAPP_MESSAGE}`} className="btn btn-sm btn-outline-secondary">Ver planes</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card shadow-sm">
                            <Image
                                    src="/../assets/img/team/elvissaul.jpeg"
                                    alt="Yoedy coach"
                                    width={423}
                                    height={425}
                                    sizes="(max-width: 423px) 100vw, 33vw"
                                />
                            <div className="card-body">
                                <h2>Elvisaul Núñez</h2>
                                <p className="card-text">
                                    <ul>
                                        <li>IFBB International Coach</li>
                                        <li>Certification en nutrición deportiva</li>
                                        <li>Certificación en masajes deportivos y relajantes</li>
                                        <li>Certificación en primeros auxilios</li>
                                    </ul>
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href={`https://wa.me/+18493516061?text=${DEFAULT_WHATSAPP_MESSAGE}`} className="btn btn-sm btn-outline-secondary">Ver planes</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
