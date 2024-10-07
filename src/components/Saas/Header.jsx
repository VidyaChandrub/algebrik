import Link from 'next/link';

const Header = () => {
  return (
    <header className=" style-5" data-scroll-index="0">
      <div className="content">
      <div className="container section-head style-5 py-lg-0 py-4">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 col-sm-12 ">
            <h1 className=""><span className='text_blue'>End to End Digital Loan Origination Starts Here</span></h1>
            <p className="text-secondary fw-bold fs-3 text-break">Take prospects from <br></br>
                Looked to Booked in minutes, <br></br>
                not days</p>
            <p className='pb-lg-1 py-2 pe-lg-5 me-lg-5 algerbik-p'>Algebrik is the world's first cloud-native, AI-powered Loan Origination System helping banks and credit unions win customer love!</p>  
            <button className='btn blue5-3Dbutn hover-blue2 btn-sm  text-white mt-lg-3 mt-2 '>Read More..</button>
          </div>
          <div className="col-lg-6 col-md-6 col-12 col-sm-12 order-0 order-lg-2">
            <div className="img main-img1"></div>
            <img src='/assets/img/algebrik/worlds-first-cloud.png' className="" />
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header