import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import services from '@data/Saas/services.json';
import servicesRTL from '@data/Saas/services-rtl.json';
import services2 from '@data/Saas/services-2.json';

import "swiper/css";

const Services = ({ rtl }) => {
  const servicesData = rtl ? servicesRTL : services;

  return (
    <>
    <section className="services section-padding pb-50 style-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-head text-center mb-60 style-5">
              <p className="text-blue">Services</p>
              <h2 className="mb-20">Provide loans digitally <br></br><span>to members/customers in hours</span> </h2>
              <p className="p-styles">
              The average time taken by lenders to process loans <br></br>can vary significantly depending on the type of credit product
              </p>
            </div>
          </div>
          <div className="content">
        <div className="row">
          {/* <Swiper
            className="swiper-container"
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={0}
            speed={1000}
            pagination={false}
            navigation={false}
            mousewheel={false}
            keyboard={true}
            autoplay={{
              delay: 4000
            }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              480: {
                slidesPerView: 1
              },
              787: {
                slidesPerView: 2
              },
              991: {
                slidesPerView: 4
              },
              1200: {
                slidesPerView: 4
              }
            }}
          > */}
            {
              servicesData.map((service, index) => (
                <div className="col-lg-3 col-sm-6 mb-lg-0 mb-2" key={index}>
                    <a href="#" className="features-card style-5">
                      <div className="icon">
                        <img src={service.img} alt="" />
                      </div>
                      <div className="info">
                        <h5 className="fw-bold">{ service.info }</h5>
                        <div className="text">
                          { service.text }
                        </div>
                      </div>
                      <div className="info">
                      <div className="text text-dark">
                        {service.link} <span><i className="bi bi-arrow-right"></i></span>
                      </div>
                      </div>
                      
                    </a>
                    </div>
              ))
            }
          {/* </Swiper> */}
        </div>
      </div>
        </div>
      </div>
      
    </section>
    
    <section className="services py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="section-head text-center mb-60 style-5">
              
              <h2 className="mb-20">The Next Generation In Digital Lending<br></br><span>Enhancing Customer Loyalty</span></h2>
              
            </div>
            <div className="content py-lg-5">
          <div className="row">
            {
              services2.map((service2, i) => (
                <div className="col-lg-3 col-sm-6" key={i}>
                  <a href="#" className="features-card mb-30 style-5">
                    <div className="icon1">
                      <img src={service2.img} alt="" />
                    </div>
                    <div className="info">
                      <h5 className="card-title">
                        { service2.info }
                      </h5>
                      <p className="text">
                        { service2.text }
                      </p>
                    </div>
                  </a>
                </div>
              ))
            }
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  </> 
  )
}

export default Services