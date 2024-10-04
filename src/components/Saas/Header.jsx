import Link from 'next/link';

const Header = () => {
  return (
    <header className=" style-5" data-scroll-index="0">
      <div className="content">
      <div className="container section-head style-5 py-lg-0 py-4">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-12 col-sm-12 ">
            <h1 className=""><span className='text_blue'>World’s first</span><br></br> Cloud and AI native <br></br><span className='text_blue'>Loan</span> Origination <span className='text_blue'>System</span></h1>
            <p className='py-lg-2 py-2'></p>
            <button className='btn blue5-3Dbutn hover-blue2 btn-sm  fw-bold text-white mt-lg-3 mt-2 px-lg-4 py-lg-3 px-3 py-2 '>Read More..</button>
          </div>
          <div className="col-lg-6 col-md-6 col-12 col-sm-12">
            <img src='/assets/img/algebrik/worlds-first-cloud.png' className="img-fluid float-lg-left py-lg-0 pt-5" />
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header