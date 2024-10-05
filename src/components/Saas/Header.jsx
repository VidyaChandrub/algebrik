import Link from 'next/link';

const Header = () => {
  return (
    <header className=" style-5" data-scroll-index="0">
      <div className="content">
      <div className="container section-head style-5 py-lg-0 py-4">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 col-sm-12 ">
            <h1 className=""><span className='text_blue'>Smarter Loan</span>Origination Starts Here: Faster Decisions,<span className='text_blue'>Lower Costs</span> </h1>
            <p className='py-lg-2 py-2 pe-lg-5 me-lg-5 p-styles'>The World's first cloud-native, AI-powered Loan Origination System that helps you streamline your lending process, reduce costs, and make data-driven decisions — in minutes</p>  
            <button className='btn blue5-3Dbutn hover-blue2 btn-sm  text-white mt-lg-3 mt-2 '>Read More..</button>
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