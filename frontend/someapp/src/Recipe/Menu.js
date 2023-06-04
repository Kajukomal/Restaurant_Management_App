import React, { useEffect } from 'react'
import './Menu.css'
import Aos from 'aos'
 import 'aos/dist/aos.css'

export default function Menu() {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <div>

<br />
<div className="hero1">
    
    <div className="text1" data-aos="fade-up">
    <h1>Our Menu</h1>
    <p><b>Perfect for all breakfast,lunch and dinner</b></p>
    </div>
   
</div>
   
<h3 className="p1 m-5" data-aos="fade-right"><b>Breakfast Menu</b></h3>

<div className="container">
  <div className="row">
    <div className="col-sm-12 col-lg-4 col-md-6">
    {/* first column */}
  <div className="card " data-aos="fade-up">
    <img src="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png" className="card-img-top" alt="..." height="200px"/>
    <div className="card-body">
      <h5 className="card-title p1">Pancakes</h5>
      <p className="card-text"> <b>4.2/5</b></p>
<p className="p1"><b>just in 6.7$</b></p>
      <p className="card-text"><small className="text-muted">Last updated 4 mins ago</small></p>
    </div>
  </div>
  </div>


{/* second column */}
<div className="col-sm-12 col-lg-4 col-md-6"data-aos="fade-up" >
<div className="card">
    <img src="https://lh3.googleusercontent.com/PxOkKTYJwWojNXUSQ1HH3ofTd0GGx-IN_twb0jQBLwSY38dC5d1kbyjd9WMMQEBvhnfDhFTLBjgV1gsVdILw0iC6gJH8fgdrgC__23Cpuw" className="card-img-top" alt="..." height="200px"/>
    <div className="card-body">
      <h5 className="card-title p1">Uttapam</h5>
      <p className="card-text"> <b>4.4/5</b></p>
<p className="p1"><b>just in 1.5$</b></p>
      <p className="card-text"><small className="text-muted">Last updated 8 mins ago</small></p>
    </div>
  </div>

</div>

{/* 3rd column */}
<div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up" >
<div className="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRJJqqv5GGbz7uM2qTBugoty1bwlVF40ODd7D_uP2Ykw&usqp=CAU&ec=48600112" className="card-img-top" alt="..." height="200px"/>
    <div className="card-body">
      <h5 className="card-title p1">Fresh Juices</h5>
      <p className="card-text"> <b>4.9/5</b></p>
<p className="p1"><b>just in 1.2$</b></p>
      <p className="card-text"><small className="text-muted">Last updated 12 mins ago</small></p>
    </div>
  </div>
  </div>
</div>
</div>
{/* second row */}
  <h3 className="p1 m-5" data-aos="fade-right"><b>Lunch Menu</b></h3>
<div className="container">
  <div className="row">
    {/* first column */}
    <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
    <div className="card">
    <img src="https://previews.123rf.com/images/relineo/relineo1912/relineo191201765/134776321-main-course-in-a-restaurant.jpg" className="card-img-top" alt="..." height="200px"/>
    <div className="card-body">
      <h5 className="card-title p1">Grilled Salmon</h5>
      <p className="card-text"> <b>4.2/5</b></p>
<p className="p1"><b>just in 6.7$</b></p>
      <p className="card-text"><small className="text-muted">Last updated 4 mins ago</small></p>
    </div>
  </div>
    </div>
    {/* second column */}
    <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
    <div className="card ">
    <img src="https://iliveinafryingpan.com/wp-content/uploads/2015/11/760DSC02555.jpg" className="card-img-top" alt="..." height="200px"/>
    <div className="card-body">
      <h5 className="card-title p1">Kolkata Biryani</h5>
      <p className="card-text"> <b>4.4/5</b></p>
<p className="p1"><b>just in 1.5$</b></p>
      <p className="card-text"><small className="text-muted">Last updated 8 mins ago</small></p>
    </div>
  </div>
    </div>
    {/* third column */}
    <div className="col-sm-12 col-lg-4 col-md-6" data-aos="fade-up">
    <div className="card">
    <img src="https://www.sanjanafeasts.co.uk/wp-content/uploads/2018/05/Creamy-Restaurant-Style-Matar-Paneer-1.jpg" className="card-img-top" alt="..." height="200px"/>
    <div className="card-body">
      <h5 className="card-title p1">Paneer Butter Masala</h5>
      <p className="card-text"> <b>4.9/5</b></p>
<p className="p1"><b>just in 1.2$</b></p>
      <p className="card-text"><small className="text-muted">Last updated 12 mins ago</small></p>
    </div>
  </div>
    </div>
  </div>
</div>


  <h3 className="p1 m-5" data-aos="fade-right"><b>Dinner Menu</b></h3>
{/* third row */}
<div className="container">
  <div className="row">
    {/* first column */}
    <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
    <div className="card">
    <img src="https://recipesofhome.com/wp-content/uploads/2020/06/veg-fried-rice-recipe.jpg" className="card-img-top" alt="..." height="200px"/>
    <div className="card-body">
      <h5 className="card-title p1">Veg Fried Rice</h5>
      <p className="card-text"> <b>4.2/5</b></p>
<p className="p1"><b>just in 6.7$</b></p>
      <p className="card-text"><small className="text-muted">Last updated 4 mins ago</small></p>
    </div>
  </div>
    </div>
    {/* second column */}
    <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
    <div className="card">
    <img src="https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/gallery_promo_image/Top%2010%20August%20Recipes_Dessert%20Recipes.jpg?itok=o3He36C7" className="card-img-top" alt="..." height="200px"/>
    <div className="card-body">
      <h5 className="card-title p1">Sweet Heaven</h5>
      <p className="card-text"> <b>4.4/5</b></p>
<p className="p1"><b>just in 1.5$</b></p>
      <p className="card-text"><small className="text-muted">Last updated 8 mins ago</small></p>
    </div>
  </div>

    </div>
    {/* thirs column */}
    <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
    <div className="card">
    <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2023/03/unhealthy-salad.jpg?quality=82&strip=1" className="card-img-top" alt="..." height="200px"/>
    <div className="card-body">
      <h5 className="card-title p1">Green Crunch Bowl</h5>
      <p className="card-text"> <b>4.9/5</b></p>
<p className="p1"><b>just in 1.2$</b></p>
      <p className="card-text"><small className="text-muted">Last updated 12 mins ago</small></p>
    </div>
  </div>
    </div>
  </div>
</div>


<h3 className='p1 m-5' data-aos="fade-right"><b>Special For You!</b></h3>
<div className="card mb-3" data-aos="fade-up">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="img-fluid rounded-start" alt="..." height="250px"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className='p1 mt-5'><b>Free Of Cost!</b></h3>
        <p className="card-text mt-4">As a dessert we will offer you ice creams of flavours which id absolutely free for our all customers.</p>
        <p className='mt-5'><b>Thank You for visiting us!</b></p>
             </div>
    </div>
  </div>
</div>




    </div>
  )
}
