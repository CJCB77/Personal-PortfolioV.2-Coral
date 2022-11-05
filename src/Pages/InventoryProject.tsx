import { Fragment } from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
//CSS
import './ProjectDetails.css'
//Images
import mainImg from '../assets/images/projects/inventory-system/main.png'
import loginImg from '../assets/images/projects/inventory-system/login.png'
import filterImg from '../assets/images/projects/inventory-system/filter.png'
import addMedicineImg from '../assets/images/projects/inventory-system/add-medicine.png'
import addMedicineMobileImg from '../assets/images/projects/inventory-system/add-medicine-mobile.png'
import addClientImg from '../assets/images/projects/inventory-system/add-client.png'
import updateImg from '../assets/images/projects/inventory-system/update.png'
import listImg from '../assets/images/projects/inventory-system/list.png'
import listImgMobile from '../assets/images/projects/inventory-system/list-mobile.png'
import clientsImg from '../assets/images/projects/inventory-system/clients.png'
//Icons
import reactIcon from '../assets/skills/react.png'
import expressIcon from '../assets/skills/express.png'
import nodeIcon from '../assets/skills/nodejs.png'
import postgresIcon from '../assets/skills/postgres.png'
import typescriptIcon from '../assets/skills/typescript.png'
import useIsMobile from '../CustomHooks/useIsMobile'
//Animations
import FadeUpIntersection from '../Components/Animations/FadeUpIntersection'
import Carousel from '../Components/UtilityComponents/Carousel'

const InventoryProject = () => {

  const isMobile = useIsMobile();

  return (
    <Fragment>
      <Navbar />
      <section className='project-details'>
        <FadeUpIntersection>
          <Carousel imagesArray={[mainImg,loginImg,filterImg,addClientImg,updateImg,clientsImg]} />
        </FadeUpIntersection>
          <div className='project-details__content'>
            <FadeUpIntersection>
              <header className='project-details__header'>
                <h1 className='project-details__title' style={{color:"#4B5D67"}}>
                  Pharmacy Inventory management system for NGO
                </h1>
                <div className='stack'>
                    <img src={reactIcon} alt="react logo" className='stack__icon'/>
                    <img src={expressIcon} alt="express logo" className='stack__icon'/>
                    <img src={nodeIcon} alt="node logo" className='stack__icon'/>
                    <img src={postgresIcon} alt="postgres logo" className='stack__icon'/>
                    <img src={typescriptIcon} alt="kotlin logo" className='stack__icon'/>
                </div>
              </header>
            </FadeUpIntersection>
            <FadeUpIntersection>
              <p className='project-details__paragraph'>
                An inventory management system developed for the Tacita Caliente Foundation. 
                Its purpose is to manage the supplies of the small pharmacy used in 
                conjunction with their health services. 
              </p>
            </FadeUpIntersection>
            <FadeUpIntersection>
              <p className='project-details__paragraph'>
                The user can manage medicines, client information, and other products 
                through a web dashboard created using ReactJs with typescript.
              </p>
            </FadeUpIntersection>
            <FadeUpIntersection>
              <img src={isMobile? listImgMobile : listImg} alt="image all available medicines"  className='project-details__img'/>
              <p className='project-details__paragraph'>
                Only the designed administrator can access the dashboard through 
                their credentials. An API built with NodeJs and Express retrieves all 
                medicines from a PostgresSQL database and lists the detailed records 
                with information like available stock, name, price, and category. 
              </p>
            </FadeUpIntersection>
            <FadeUpIntersection>
              <img src={isMobile? addMedicineMobileImg : addMedicineImg} alt="image all available medicines"  className='project-details__img'/>
              <p className='project-details__paragraph'>
                The user can modify, delete or add new medicines to the record 
                following the principles of a CRUD application. There is a visualization 
                button for a modal with more detailed information about each product. 
                Additionally, users are notified by email when a product is going low in 
                stock. Client information is saved for billing or future references like 
                discounts or sending offers to customers' emails.
              </p>       
            </FadeUpIntersection>     
          </div>
      </section>
      <Footer />
    </Fragment>
  )
}

export default InventoryProject

