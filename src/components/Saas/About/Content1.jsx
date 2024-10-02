import React from 'react'

const Content = ({ links, rtl }) => {
  return (
    <div className="content">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 order-2 order-lg-0">
            <div className="section-head mb-30 style-5">
              <h2><span>Current loan origination</span>systems face several key issues </h2>
            </div>
            <p>{ rtl ? 'يمكن تبسيط عمليات التحميل والتحديث التي يقوم بها الموردون من خلال لوحات المعلومات الأمامية التي توفر سهولة الوصول بشكل أفضل.' : 'Antiquated technology mired in manual & physical paper ridden process – Launching new products, changing existing products configurations takes weeks & months. Members have to jump through online, offline, in person, physical paper hoops to get access to credit.' }</p>
            <ul className="line-links list-icon">

              {
                links.map((link, index) => (<li key={index}>
                  <span className="icon">
                  <i className={link.icon}></i>
                </span>
                <a href="#">{link.title }</a>
                </li>))
              }
            </ul>
          </div>
           
          <div className="col-lg-7 order-0 order-lg-2">
            <div className="img main-img1">
              <img src="/assets/img/about/about_s5_1_1.png" alt="" className="sm-circle" />
              <img src="/assets/img/about/about_s5_1_2.png" alt="" className="img-body" />
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