import React, { useEffect } from 'react'
import './Story.css'
import CommentBox from './CommentBox'
import Aos from 'aos'
 import 'aos/dist/aos.css'
export default function Story() {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <div>
      {/* <h2 className='p1 mt-5'><b>Kitchen's Story</b></h2>
<p><b>This is how our kitchen evolved in new digital era.</b></p> */}

<div className="hero2">
    
    <div className="text2" data-aos="fade-up">
    <h1>Kitchen's Story</h1>
    <p><b>This is how our kitchen evolved in new digital era.</b></p>
    </div>
   
</div>
<hr />

<h4 className='p1 m-4' data-aos="fade-right"><b>Team Members</b></h4>

{/* first card */}
<div className="card mb-3" data-aos="fade-up">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className='p1'><b>Sam Miller</b></p>
        <p><b>CEO and Manager</b></p>

        <p className="card-text">Maintaining all the financing and makes major corporate decisions, managing overall operations, and setting the company's strategic direction.  </p>
          </div>
    </div>
  </div>
</div>


<div className="card mb-3" data-aos="fade-up">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chef-cooking.jpg?quality=82&strip=1" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className='p1'><b>Saransh Goyal</b></p>
        <p><b>Senior Chef</b></p>

        <p className="card-text">
        Controls and directs all the chefs and the food preparation process,
Constructing menus with new or existing culinary creations ensuring the variety and quality of the servings
Approving and “polishing” dishes before they reach the custome
          </p>
       </div>
    </div>
  </div>
</div>

<div className="card mb-3" data-aos="fade-up">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://media.istockphoto.com/id/869409288/photo/young-businessman-standing-in-his-restaurant.jpg?s=612x612&w=0&k=20&c=Gr2rkThdMfdhfDCVeO7BidpkUi83tQRN-oz730vr0pU=" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className='p1'><b>sIdhdhant Jindal</b></p>
        <p><b>Restaurent Manager</b></p>

        <p className="card-text">Maintains staff by recruiting, selecting, orienting, and training employees. Ensures a safe, secure, and legal work environment. Develops personal growth opportunities. Accomplishes staff results by communicating job expectations; planning, monitoring, and appraising job results.
             </p>
          </div>
    </div>
  </div>
  
</div>
<br />
<CommentBox></CommentBox>
<br />
    </div>
  )
}
