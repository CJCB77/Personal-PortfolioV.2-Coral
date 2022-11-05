import { Fragment } from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
//CSS
import './ProjectDetails.css'
import FadeUpIntersection from '../Components/Animations/FadeUpIntersection'
//Images
import pantsImg from '../assets/images/projects/clothing-store/pants.png'
import jacketImg from '../assets/images/projects/clothing-store/jackets.png'
import shirtsImg from '../assets/images/projects/clothing-store/shirts.png'
import accesoryImg from '../assets/images/projects/clothing-store/accesories.png'
import shoesImg from '../assets/images/projects/clothing-store/shoes.png'
import useIsMobile from '../CustomHooks/useIsMobile'
import heroImg from '../assets/images/projects/clothing-store/hero.png'
import shoppingCartImg from '../assets/images/projects/clothing-store/shopping-bag.png'
import shoppingCartMobileImg from '../assets/images/projects/clothing-store/shopping-bag-mobile.png'
import billingImg from '../assets/images/projects/clothing-store/billing.png'
import billingMobileImg from '../assets/images/projects/clothing-store/billing-mobile.png'
import orderImg from '../assets/images/projects/clothing-store/order.png'
import orderMobileImg from '../assets/images/projects/clothing-store/order-mobile.png'
//Icons
import reactIcon from '../assets/skills/react.png'
import typescriptIcon from '../assets/skills/typescript.png'
import djangoIcon from '../assets/skills/django.png'
import postgresIcon from '../assets/skills/postgres.png'
import Carousel from '../Components/UtilityComponents/Carousel'

const ClothingStore = () => {

  const isMobile = useIsMobile();

  return (
    <Fragment>
      <Navbar />
      <section className='project-details'>
      <FadeUpIntersection>
          <Carousel imagesArray={[
            heroImg,
            pantsImg,
            jacketImg,
            shirtsImg,
            accesoryImg,
            shoesImg,
            ]} 
          />
        </FadeUpIntersection>
        <div className='project-details__container'>
          <FadeUpIntersection>
              <header className='project-details__header'>
                <h1 className='project-details__title mt-1' >
                  Pharmacy Inventory management system for NGO
                </h1>
                <div className='stack'>
                    <img src={reactIcon} alt="react logo" className='stack__icon'/>
                    <img src={djangoIcon} alt="express logo" className='stack__icon'/>
                    <img src={postgresIcon} alt="postgres logo" className='stack__icon'/>
                    <img src={typescriptIcon} alt="kotlin logo" className='stack__icon'/>
                </div>
              </header>
          </FadeUpIntersection>
          <FadeUpIntersection>
              <p className='project-details__paragraph'>
                An online store for men’s clothing, the perfect e-commerce demo for other 
                fashion online stores built with ReactJs in the front-end and python’s Django framework on the back-end. The homepage displays offers, discounts, new collections, and store information.  
              </p>     
              <p className='project-details__paragraph'>
                The store has different sections for clothing, each divided into 
                categories and subcategories; furthermore, apply a diverse range of 
                filters like sizing, styles, or colors for a better searching experience.
              </p>
              <p className='project-details__paragraph'>
                Add products to the store shopping cart, and once you’re ready, signup or 
                log in to select a payment method and shipping details. A Stripe API 
                integration handles all the payment methods.nce.
              </p>
          </FadeUpIntersection>
          <img src={isMobile? shoppingCartMobileImg : shoppingCartImg } alt='image of main page' className='project-details__img'/>
          <img src={isMobile? billingMobileImg: billingImg} alt='image of main page' className='project-details__img'/>
          <img src={isMobile? orderMobileImg : orderImg} alt='image of main page' className='project-details__img'/>

        </div>
      </section>
      <Footer />    
    </Fragment>
  )
}

export default ClothingStore