import React from "react";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section id={'sobre-me'} className="about-area2 fix pb-padding pt-50 pb-80">
            <div className="support-wrapper align-items-center">
                <div className="right-content2">
                    <div className="right-img wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                        <Image
                            src="/../assets/img/gallery/cristal-goma.png"
                            width={716}
                            height={956}
                            alt=""
                        />
                    </div>
                </div>
                <div className="left-content2">
                    <div className="section-tittle2 mb-20 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                        <div className="front-text">
                            <h2 className=""><span className={"about-me-span"}>So</span>bre mi</h2>
                            <p>
                                Soy Cristal López, una dominicana de pura cepa nacida en 1997. Desde mi infancia, el mundo del deporte ha sido una parte fundamental de mi vida. Fui introducida al fascinante mundo del fitness por excelentes maestros que me mostraron su importancia.
                            </p>
                            <p>
                                Para mí, el deporte no es solo una actividad, es un desahogo, un estilo de vida y mi pasión. Comencé practicando Taekwondo a los 9 años y, con el tiempo, exploré otros deportes como fútbol, boxeo y gimnasia. Aunque soy ingeniera civil de profesión, desde marzo de 2020, cuando la pandemia llegó, decidí enfocarme en especializarme en el mundo del fitness.
                            </p>
                            <p>
                                Durante este tiempo, he realizado diversas certificaciones y diplomados para brindar un servicio de calidad a mis clientes. En el 2022, di un paso más y me aventuré en el mundo del fisiculturismo, logrando el primer lugar en la categoría bikini wellness.
                            </p>
                            <p>
                                Good Shape es mi primer proyecto en este apasionante viaje, y estoy entusiasmada por compartir mi amor por el fitness, mi experiencia  y mi éxito en el fisiculturismo contigo.
                            </p>
                            <p className="mb-40">
                                Mi objetivo es ayudarte a alcanzar tus metas de salud y bienestar de la manera más profesional y comprometida posible. ¡Bienvenido a nuestra comunidad en busca de la mejor forma!
                            </p>
                            <p className={'about-me-sign'}>
                                Cristal Mabel Lopez
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
