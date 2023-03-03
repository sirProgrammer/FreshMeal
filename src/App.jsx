import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel'
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'

import BenefitCard from './components/BenefitCard.jsx'
import PlanCard from './components/PlanCard.jsx'

import vegetablePile from './images/vegetablePile.jpg'
import delivery from './images/benefits/delivery1.jpg'
import diet from './images/benefits/diet1.jpg'
import healthy from './images/benefits/healthyAndDelicious1.jpg'
import budget from './images/benefits/scheduleAndBudget1.jpg'
import thumbsUp from './images/benefits/thumbsUp1.jpg'

import chickenSalad from './images/meals/highProteinChickenSalad.jpg'
import spicyShrimp from './images/meals/spicyShrimp.jpg'
import veggiePowerBowl from './images/meals/veggiePowerBowl.jpg'

import family1 from './images/testimonials/family1.jpg'
import family2 from './images/testimonials/family2.jpg'
import family3 from './images/testimonials/family3.jpg'
import family4 from './images/testimonials/family4.jpg'
import family5 from './images/testimonials/family5.jpg'

function App() {

  

  return (
    <div className="App">
      <div className='header'>
        <h1>FreshMeal</h1>
        <h2>Fresh, Healthy Meals Delivered Right to Your Door!</h2>
      </div>
      <div className='promotion'>
        <img src={vegetablePile}/>
        <h2>Order Now {'\n'}and Get Your First Week {'\n'}FREE!</h2>
        
      </div>
      <div className='benefits'>
        <h4>Why FreshMeal?</h4>
        <div className='benefitCardContainer'>
          <BenefitCard image={healthy} header='Good for health' description='Healthy and delicious meals made with fresh ingredients'/>
          <BenefitCard image={delivery} header='Convenient' description='Convenient delivery right to your door'/>
          <BenefitCard image={budget} header='Afforadble' description='Flexible subscription options to fit your schedule and budget'/>
          <BenefitCard image={diet} header='For everyone' description='Personalized meal plans to meet your dietary needs'/>
          <BenefitCard image={thumbsUp} header='People like FreshMeal' description="Social Proof: Customer testimonials and reviews highlighting the quality and convenience of FreshMeal's service"/>
        </div>
      </div>
      <div className='mealPlans'>
        <PlanCard image={chickenSalad} title='Veggie Power Bowl' price='$12.99' ingredients={['quinoa', 'roasted sweet potato', 'avocado', 'broccoli', 'kale', 'chickpeas']}/>
        <PlanCard image={spicyShrimp} title='High Protein Chicken Salad' price='$14.99' ingredients={['grilled chicken', 'mixed greens', 'cherry tomatoes', 'cucumber', 'boiled eggs', 'quinoa','balsamic vinaigrette']}/>
        <PlanCard image={veggiePowerBowl} title='Spicy Shrimp Stir-Fry' price='$16.99' ingredients={['shrimp', 'brown rice', 'bell peppers','onion','snap peas','carrots','garlic','spicy soy sauce']}/>
      </div>

      
      <footer className="footer">
      <div className="footer-content">
        <h3 >FreshMeal</h3>
        <p>A healthy and tasty meal is just a click away!</p>
        
        <div className="socialMediaLinks">
        <a href="#">
          <FaFacebookSquare className="icon"/>
        </a>
        <a href="#">
          <FaTwitter className="icon"/>
        </a>
        <a href="#">
          <FaInstagram className="icon"/>
        </a>
      </div>
      </div>
      <div className="footer-bottom">
        <p>Developed by Andrzej Zawalnicki</p>
      </div>
    </footer>
    </div>
  )
}

export default App