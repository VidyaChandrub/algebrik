// import community from '@data/Saas/community.json';
// import communityRTL from '@data/Saas/community-rtl.json';

// const Community = ({ rtl }) => {
//   const communityData = rtl ? communityRTL : community;

//   return (
//     <section className="community pt-40 style-5">
//       <div className="container">
//         <div className="section-head text-center mb-40 style-5">
//           <h2 className="mb-20">{ rtl ? 'لماذا' : 'Top' } <span>{ rtl ? 'نحن' : 'Reasons' }</span> </h2>
//           <p>{ rtl ? 'توحيد بيانات عملك في لوحة تحكم بسيطة واحدة للتجارة الإلكترونية' : 'Unify your business data in one simple ecommerce dashboard' }</p>
//         </div>
//         <div className="content rounded-pill">
//           {
//             communityData.map((item, index) => (
//               <div className="commun-card" key={index}>
//                 <div className="icon">
//                   <img src={item.img} alt="" />
//                 </div>
//                 <div className="inf">
//                   <h5>{ item.title }</h5>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Community

import React from 'react'

function Community() {
  return (
    <section className='cont-2  style-5 '>
      <div className="content">
    <div className='container section-head style-5 pt-lg-5'>
      <div className="row  ">
        <div className="col-lg-5 col-sm-12 col-md-4 col-12">
          <h2 className=''>About <span>Algebrik</span></h2>
          <p className='py-lg-3 py-2 algerbik-p'>Algebrik AI is the first cloud-native, <b className='text-blue'>AI-powered Loan Origination System (LOS)</b>, based in the US. It offers modern solutions to credit unions and mid-tier banks facing outdated technology.</p>
          
          <p className="algerbik-p">With lending tech stagnant for over <b className='text-blue'>25 years</b>, it's crucial for lenders to adopt inclusive, future-proof technologies to engage and grow Gen Z and Gen Alpha customers.</p>
        </div>
        <div className="col-lg-7 col-sm-12 col-md-8 col-12">
          <img src='/assets/img/algebrik/about-algibrik.png' className="img-fluid float-lg-left py-lg-0 pt-5 me-0 pe-0" />
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Community