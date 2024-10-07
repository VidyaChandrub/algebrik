import React from 'react'

const Content = ({ links, rtl }) => {
  return (
    <div className="content mb-lg-5 pb-lg-5">
      <div className="container">
        {/* <div className="row align-items-center">
          <div className="col-lg-5 order-2 order-lg-0">
            <div className="section-head mb-30 style-5">
              <h2>What's slowing <span>lenders down?</span></h2>
            </div>
            <ul className="line-links list-icon">

              {
                links.map((link, index) => (<li key={index}>
                  <span className="icon">
                  <i className={link.icon}></i>
                </span>
                <a>{link.title }</a>
                </li>))
              }
            </ul>
          </div>
           
          <div className="col-lg-7 order-0 order-lg-2">
            <div className="img main-img1">
              <img src="/assets/img/about/about_s5_1_1.png" alt="" className="sm-circle" />
              <img src="/assets/img/about/about_s5_1_2.jpeg" alt="" className="img-body" />
              {/* <img src="/assets/img/about/about_s5_1_3.png" alt="" className="card1" />
              <img src="/assets/img/about/about_s5_1_4.png" alt="" className="card2" /> 
              <img src="/assets/img/about/about_s5_1_5.png" alt="" className="lg-circle" />
            </div>
          </div>
        </div> */}
        <div className="row align-items-center justify-content-between">
          <div className="section-head mb-30 pb-lg-5 style-5">
              <h2 className="text-center">What's slowing <span>lenders down?</span></h2>
            </div>

            <div className="col-lg-3">
              <div>
                <h2 className="text-blue fw-bold">80%</h2>
                <h4 className="text-dark fw-bold fs-4">Customer drop offs </h4>
                <p className="p-text">Broken omni channel onboarding journeys </p>
              </div>
              <div>
                <h2 className="text-blue fw-bold">$200 - $500</h2>
                <h4 className="text-dark fw-bold fs-4">Cost of acquiring a customer </h4>
                <p className="p-text">One size fits all onboarding journeys </p>
              </div>
            </div>
            <div className="col-lg-5 ">
            <div className="img main-img1">
              <img src="/assets/img/about/about_s5_1_1.png" alt="" className="sm-circle" />
              <img src="/assets/img/about/about_s5_1_2.jpeg" alt="" className="img-body" />
              {/* <img src="/assets/img/about/about_s5_1_3.png" alt="" className="card1" />
              <img src="/assets/img/about/about_s5_1_4.png" alt="" className="card2" /> */}
              <img src="/assets/img/about/about_s5_1_5.png" alt="" className="lg-circle" />
            </div>
            </div>
            {/* <div className="col-lg-1"></div> */}
            <div className="col-lg-3 ">
            <div>
                <h2 className="text-blue fw-bold">5 to 7 days</h2>
                <h4 className="text-dark fw-bold fs-4">Loan processing times  </h4>
                <p className="p-text">Lenghty inflexible workflows and manual processes</p>
              </div>
              <div>
                <h2 className="text-blue fw-bold">6 months to 1 year</h2>
                <h4 className="text-dark fw-bold fs-4">New product launch times </h4>
                <p className="p-text">Legacy tech hinder ability to test and launch new products </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Content