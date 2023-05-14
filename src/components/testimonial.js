import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import data from '../data/testimonial.json'
import { Autoplay, Pagination } from "swiper";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"

const Testimonial = ({ isBg }) => {
  const { testimonial } = data

  return (
    <section
     id='reviews'
     className={`section-padding testimonial ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{testimonial.subtitle}</span>
              <h2 className="display-6">{testimonial.title}</h2>
              <div className='section-divider divider-traingle'></div>
            </div>
          </div>
        </div>

        <div className="row testi-row">
          <div className="col-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                }, 1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {testimonial.testimonialItem?.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="swiper-slide p-5px-lr">
                    <div className="testi-card card h-100 translateEffect1">
                      <div className="card-body p-4">

                        <div className="testi-card__quotation">
                          <svg fill="#c27b7f" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 349.078 349.078">
                            <path d="M150.299,26.634v58.25c0,7.9-6.404,14.301-14.304,14.301c-28.186,0-43.518,28.909-45.643,85.966h45.643c7.9,0,14.304,6.407,14.304,14.304v122.992c0,7.896-6.404,14.298-.304,14.298H14.301C6.398,336.745,0,330.338,0,322.447V199.455 c0-27.352,2.754-52.452,8.183-74.611c5.568-22.721,14.115-42.587,25.396-59.048c11.608-16.917,26.128-30.192,43.16-39.44 C93.886,17.052,113.826,12.333,136,12.333C143.895,12.333,150.299,18.734,150.299,26.634z M334.773,99.186 c7.896,0,14.305-6.407,14.305-14.301v-58.25c0-7.9-6.408-14.301-14.305-14.301c-22.165,0-42.108,4.72-59.249,14.023 c-17.035,9.248-31.563,22.523-43.173,39.44c-11.277,16.461-19.824,36.328-25.393,59.054c-5.426,22.166-8.18,47.266-8.18,74.605 v122.992c0,7.896,6.406,14.298,14.304,14.298h121.69c7.896,0,14.299-6.407,14.299-14.298V199.455 c0-7.896-6.402-14.304-14.299-14.304h-44.992C291.873,128.095,306.981,99.186,334.773,99.186z"/>
                          </svg>
                        </div>
                        <p className="my-4">{data.description}</p>
                        <div className="testi-card__user-info pt-4">
                          <div className="testimonial__user-info__image">
                            <img src={data.image} alt={data.title} />
                          </div>
                          <div className="testimonial__user-info__content">
                            <h4 className="mb-0">{data.name}</h4>
                            <p className="mb-0">{data.title}</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Testimonial;
