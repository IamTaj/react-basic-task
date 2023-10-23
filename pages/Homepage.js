import React from 'react'
import "./homepage.css"

export default function Homepage() {
  return (
    <>

    <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Upgrade</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div className="items">
    <div className="i1"> <div className="pic"><img src="https://cdn1.iconfinder.com/data/icons/grocery-14/64/paper_bag-market-shopping-food-water-grocery_bag-256.png" height={"40px"} /></div> Grocery</div>
    <div className="i1"><div className="pic"><img src="https://cdn3.iconfinder.com/data/icons/communication-389/512/presenter-hand-fashion-showing-product-beauty-256.png" height={"40px"} /></div>Fashions</div>
    <div className="i1"><div className="pic"><img src="https://cdn1.iconfinder.com/data/icons/electronics-and-devices-22/32/electronics_watches_wrist_watches_smart_watches_mobile_phone_smart_phone-512.png" height={"40px"} /></div>Electronics</div>
    <div className="i1"><div className="pic"><img src="https://cdn2.iconfinder.com/data/icons/interior-homedecor-vol-1/512/workplace_desk_home_office-256.png" height={"40px"} /></div>Home</div>
    <div className="i1"><div className="pic"><img src="https://cdn0.iconfinder.com/data/icons/internet-of-thing-1/64/Appliance-automation-connected-electronics-technology-256.png" height={"40px"} /></div>Appliance</div>
    <div className="i1"><div className="pic"><img src="https://cdn4.iconfinder.com/data/icons/top-search-3/128/_new_sign_label_shopping_splash_sticker_new_offer_new_product_shopping_offer-256.png" height={"40px"} /></div>Top Offer</div>
</div>
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-sale-banner-template-design-389dc7a74f096738d1d425314404a2cd_screen.jpg?ts=1605613724" class="d-block w-100" width="100%" height="360px" />
    </div>
    <div class="carousel-item">
      <img src="https://www.shopickr.com/wp-content/uploads/2015/10/amazon-india-electronics-sale-2015-banner.jpg" class="d-block w-100" width="100%" height="360px"/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/free-vector/flat-furniture-sale-banner-with-photo_23-2148926442.jpg?w=2000" class="d-block w-100" width="100%" height="360px"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className="electronics">
    <div className='link'><h3>Best of Electronics</h3><button type="button" class="btn btn-primary">View All</button></div>
    <div className='e1'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvVTDox337zvfk0jf8uYSOkMTQ3sWiiRceFw&usqp=CAU" height={"200px"}/><h5>Camera </h5> <h6><a href="/">View Now</a></h6> </div>
    <div className='e1'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRsnDyKviymn7-9uFyopdQuPt7C7pN2gHRA&usqp=CAU" height={"200px"}/><h5>Monitors</h5> <h6><a href="/">View Now</a></h6> </div>
    <div className='e1'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXkKUZ5ECdJt4U3DwpMbG_8PmgEOD1vxcog&usqp=CAU" height={"200px"}/><h5>Camera Accessories</h5> <h6><a href="/">View Now</a></h6> </div>
    <div className='e1'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrAE7aulzxzdDj5Ex_GUnOw3HcIV-Hr1yfow&usqp=CAU" height={"200px"}/><h5>Powerbanks </h5> <h6><a href="/">View Now</a></h6> </div>
    <div className='e1'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCOmtvoSET54A919r4-4P-p_qQAUjv7fsB0w&usqp=CAU" height={"200px"}/><h5>Printers </h5> <h6><a href="/">View Now</a></h6> </div>
</div>
    </>
  )
}
