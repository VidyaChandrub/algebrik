import Link from 'next/link';

const Header = () => {
  return (
    <header className=" style-5" data-scroll-index="0">
      <div className="content">
      <div className="container section-head style-5 py-lg-0 py-4">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-12 col-sm-12">
            <h1><span className='text_blue'>World’s first</span><br></br> Cloud and AI native <br></br><span className='text_blue'>Loan</span> Origination <span className='text_blue'>System</span></h1>
            <p className='py-lg-2 py-3'></p>
            <button className='btn rounded-pill blue5-3Dbutn btn-lg fw-bold text-white'>Get Started</button>
          </div>
          <div className="col-lg-6 col-md-6 col-12 col-sm-12">
            <img src='/assets/img/algebrik/home_slide.png' className="img-fluid float-lg-left py-lg-0 pt-5" />
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header