import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import data from '../data/hero.json';

function SubscribeForm () {
  return (
    <form>
      <div className='input-group'>
        <input
          type='email'
          required
          placeholder='Your email'
        />
        <button type='submit' className='button button__primary'>
          <span>subscribe</span>
        </button>
      </div>
    </form>
  )
}

const Hero = ({isBg}) => {
  const { herov1 } = data;
  return (
    <section id='hero' 
        className={`hero hero__padding overflow-hidden position-relative 
        ${isBg === "yes" ? "bg-one" : ""}`}>
        <div className='circle x1'></div>
        <div className='circle x2'></div>
        <div className='circle x3'></div>
        <div className='circle x4'></div>
        <div className='circle x5'></div>
        <div className='container'>
          <div className='row align-items-center'>

            <div className='col-lg-6 m-0px-b md-m-30px-b'>
              <div className='hero__content position-relative'>
                <div className='badge-text mb-2 text-uppercase'>
                  {herov1.subtitle}
                </div>
                <h1 className='display-4 mb-4 text-capitalize'>{herov1.title}</h1>
                <p className='text-muted mb-5 fs-5'>{herov1.description}</p>
                <MailchimpSubscribe
                  render={({ subscribe, status, message }) => (
                    <SubscribeForm
                      status={status}
                      message={message}
                      onValidated={(formData) => subscribe(formData)}
                    />
                  )}
                />
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='hero__images text-center'>
                <img className='img-fluid' src={herov1.image} alt={herov1.title} />
                <div className='hero__images--badge'>
                  <span>
                    <span className='hero__images--badge--text1'>
                      {herov1.tagTitle}
                    </span>
                    <span className='hero__images--badge--text2'>
                      {herov1.tagText}
                    </span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
    </section>
  )
}

export default Hero;