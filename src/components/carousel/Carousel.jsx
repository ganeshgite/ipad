import React from 'react'

function Carousel() {
  return (
    <>
      <div id="demo" className="carousel slide" data-ride="carousel">
  
  <div className="carousel-inner">
      <div className="carousel-item active">
       <a href=""><img src="/css/sites/default/files/home1.jpeg" alt="Los Angeles" width="1100" height="700" /></a> 
        
   
  </div>
  <div className="carousel-item">
        <a href=""><img src="/css/sites/default/files/home3.jpeg" alt="Los Angeles" width="1100" height="700" />
     </a>
  </div>
  <div className="carousel-item">
        <a href=""><img src="/css/sites/default/files/home2.jpeg" alt="Los Angeles" width="1100" height="700" />
           </a>
  
  
  </div>
  <div className="carousel-item">
        <a href=""><img src="/css/sites/default/files/home4.jpeg"   alt="Los Angeles" width="1100" height="700" />
           </a>
  
  </div>
  <div className="carousel-item">
        <a href=""><img src="/css/sites/default/files/home5.jpeg" alt="Los Angeles" width="1100" height="700" />
           </a>
           
</div>
  </div>
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </a>
    <a className="carousel-control-next" href="#demo" data-slide="next">
      <span className="carousel-control-next-icon"></span>
    </a>
  </div>
  
    </>
  )
}

export default Carousel
