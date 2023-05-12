import React from "react";
import data from '../data/pricing.json'

const Pricing = ({ isBg }) => {
  const { pricing } = data

  return (
    <section
     id='pricing'
     className={`section-padding pricing ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{pricing.title}</span>
              <h2 className="display-6">{pricing.subtitle}</h2>
              <div className='section-divider divider-traingle'></div>
            </div>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          {pricing.pricingItem?.map((data, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-4 mb-lg-0"
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay={(i + 2) * 50}
            >
              {data.card === "active" ? (
                <div className="pricing__item translateEffect1 active">
                  <h3 className="pricing__title">{data.title}</h3>
                  <h3 className="pricing__price">{data.price}</h3>
                  <ul className="pricing__list">
                    {data.feature?.map((items, i) => (
                      <li key={i}>{items.item}</li>
                    ))}
                  </ul>
                  <a href="#pric" className="button button__primary">
                    <span>{data.btnText}</span>
                  </a>
                </div>
              ) : (
                <div className="pricing__item translateEffect1">
                  <h3 className="pricing__title">{data.title}</h3>
                  <h3 className="pricing__price">{data.price}</h3>
                  <ul className="pricing__list">
                    {data.feature?.map((items, i) => (
                      <li key={i}>{items.item}</li>
                    ))}
                  </ul>
                  <a href="#pric" className="btn__secondary">
                    <span>{data.btnText}</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing;
