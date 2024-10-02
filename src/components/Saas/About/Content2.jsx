import Link from 'next/link';

const Content = ({ list, rtl }) => {
  return (
    <div className="content">
      <div className="container">
        <div className="row align-items-center justify-content-between d-flex">
          <div className="col-lg-7">
            <div className="img main-img2">
              <img src="/assets/img/about/about_s5_2_1.png" alt="" />
              <img src="/assets/img/about/about_s5_2_2.png" alt="" className="img-body" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-head mb-30 style-5">
              <h2>Built to attract, <span>retain engage & grow</span> </h2>
            </div>
            <ul className="list-icon">
              {
                list.map((item, index) => (
                  <li key={index}>
                    <span className="icon">
                      <i className={item.icon}></i>
                    </span>
                    <h6>{ item.title }</h6>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content