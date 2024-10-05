import React from 'react'

const Content = ({ links, rtl }) => {
  return (
    <div className="content mb-lg-5 pb-lg-5">
      <div className="container">
        <div className="row align-items-center">
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
              <img src="/assets/img/about/about_s5_1_3.png" alt="" className="card1" />
              <img src="/assets/img/about/about_s5_1_4.png" alt="" className="card2" />
              <img src="/assets/img/about/about_s5_1_5.png" alt="" className="lg-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content