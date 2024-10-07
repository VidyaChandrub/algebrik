import Link from 'next/link';

const Content = ({ list, rtl }) => {
  return (
    <div className="content mt-lg-5 pt-lg-5">
      <div className="container">
        <div className="row align-items-center justify-content-between d-flex">
          <div className="col-lg-7">
            <div className="img main-img2">
              <img src="/assets/img/about/about_s5_2_1.png" alt="" />
              <img src="/assets/img/algebrik/algebrik-advantage.svg" alt="" className="img-body" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-head mb-30 style-5">
              <h2>The Algebrik  <span>Advantage</span> </h2>
              <p className="p-styles pt-lg-3">Helping credit unions & banks transition to inclusive, future-proof lending tech.</p>
            </div>
            <ul className="line-links list-icon">
              {
                list.map((item, index) => (
                  <li key={index}>
                    <span className="icon">
                      <i className={item.icon}></i>
                    </span>
                    <a>{ item.title }</a>
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