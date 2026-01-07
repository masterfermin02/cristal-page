import React from 'react';
import SingleFeature from "@/app/Components/SingleFeature";
import { createMessage } from "@/lib/whatsapp";

const JoanPlansSection = ({
  whatsAppUrl,
  ref,
}: {
  whatsAppUrl: string;
  ref?: any;
}) => {
  return (
    <section id={'planes'} ref={ref} className="pricing-area section-padding40 fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div
              className="section-tittle text-center mb-55 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay=".1s"
            >
              <h2 className={'pricing-title'}>Planes - Joan</h2>
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
                  <span className="month">2 DÍAS A LA SEMANA</span>
                  <p className="mb-25">
                    <span className={'price-format'}>$5,500</span>
                  </p>
                  <SingleFeature label="Entrenamiento 2 días a la semana" />
                  <a
                    href={whatsAppUrl + createMessage('plan de Joan de 2 días a la semana')}
                    target={'_blank'}
                    className="border-btn border-btn2"
                  >
                    Ver disponibilidad
                  </a>
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
                  <span className="month">3 DÍAS A LA SEMANA</span>
                  <p className="mb-25">
                    <span className={'price-format'}>$8,500</span>
                  </p>
                  <SingleFeature label="Entrenamiento 3 días a la semana" />
                  <a
                    href={whatsAppUrl + createMessage('plan de Joan de 3 días a la semana')}
                    target={'_blank'}
                    className="border-btn border-btn2"
                  >
                    Ver disponibilidad
                  </a>
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
                  <span className="month">4 DÍAS A LA SEMANA</span>
                  <p className="mb-25">
                    <span className={'price-format'}>$9,500</span>
                  </p>
                  <SingleFeature label="Entrenamiento 4 días a la semana" />
                  <a
                    href={whatsAppUrl + createMessage('plan de Joan de 4 días a la semana')}
                    target={'_blank'}
                    className="border-btn border-btn2"
                  >
                    Ver disponibilidad
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoanPlansSection;
