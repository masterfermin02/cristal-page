import React from 'react';
import SingleFeature from "@/app/Components/SingleFeature";
import { createMessage } from "@/lib/whatsapp";

const YoedyPlansSection = ({
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
              <h2 className={'pricing-title'}>Planes - Yoedy</h2>
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
                  <span className="month">3 DÍAS A LA SEMANA</span>
                  <p className="mb-25">
                    <span className={'price-format'}>$9,000</span> <span>(por mes)</span>
                  </p>
                  <SingleFeature label="Entrenamiento 3 días a la semana" />
                  <a
                    href={whatsAppUrl + createMessage('plan de Yoedy de 3 días a la semana')}
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

export default YoedyPlansSection;
