import Footer  from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
//CSS
import './ProjectDetails.css'
//Images
import image1 from '../assets/images/projects/water-meter/meter1.webp'
import image2 from '../assets/images/projects/water-meter/meter2.webp'
import image3 from '../assets/images/projects/water-meter/meter3.webp'
import image4 from '../assets/images/projects/water-meter/meter4.webp'
import image5 from '../assets/images/projects/water-meter/meter5.webp'
import image6 from '../assets/images/projects/water-meter/meter6.webp'
import image7 from '../assets/images/projects/water-meter/meter7.webp'
import architecture from '../assets/images/projects/water-meter/architecture.webp'
import architectureDesktop from '../assets/images/projects/water-meter/architecture-desktop.webp'
import mobileApp1 from '../assets/images/projects/water-meter/mobile-app1.webp'
import mobileAppDesktop1 from '../assets/images/projects/water-meter/mobile-app1-desktop.webp'
import mobileApp2 from '../assets/images/projects/water-meter/mobile-app2.webp'
import mobileAppDesktop2 from '../assets/images/projects/water-meter/mobile-app2-desktop.webp'
import bill from '../assets/images/projects/water-meter/bill.webp'
import billDesktop from '../assets/images/projects/water-meter/bill-desktop.webp'

//Icons
import reactIcon from '../assets/skills/react.png'
import expressIcon from '../assets/skills/express.png'
import nodeIcon from '../assets/skills/nodejs.png'
import postgresIcon from '../assets/skills/postgres.png'
import awsIcon from '../assets/skills/aws.png'
import kotlinIcon from '../assets/skills/kotlin.png'
import useIsMobile from '../CustomHooks/useIsMobile';

//Animations
import FadeUpIntersection from '../Components/Animations/FadeUpIntersection';
import Carousel from '../Components/UtilityComponents/Carousel'

const MeterProject = () => {

  const isMobile = useIsMobile();

   
  return (
    <div className='energy-meter-project'>
      <Navbar />
      <FadeUpIntersection>
        <Carousel imagesArray={[image1,image2,image3,image4,image5,image6,image7]} />
      </FadeUpIntersection>
      <section className='project-details'>
        <div className='project-details__content'>
          <FadeUpIntersection>
            <header className='project-details__header'>
                <h1>Energy consumption OCR reading and billing Dashboard</h1>
                <div className='stack'>
                    <img src={reactIcon} alt="react logo" className='stack__icon'/>
                    <img src={expressIcon} alt="express logo" className='stack__icon'/>
                    <img src={nodeIcon} alt="node logo" className='stack__icon'/>
                    <img src={postgresIcon} alt="postgres logo" className='stack__icon'/>
                    <img src={kotlinIcon} alt="kotlin logo" className='stack__icon'/>
                    <img src={awsIcon} alt="aws logo" className='stack__icon'/>
                </div>
            </header>
          </FadeUpIntersection>
          <FadeUpIntersection>
            <p className='project-details__paragraph'>
              Mobile application built in Kotlin designed for electric company workers. 
              Obtains the reading of an energy meter with the use of the machine learning kit 
              provided by Google along with custom image processing algorithms.
            </p>
            <p className='project-details__paragraph '>
              Comes with a web dashboard for administration purposes. Energy reading tasks 
              can be assigned from dashboard to workers by an administrator. Can register 
              users/workers and clients with their respective households for monthly energy 
              consumption billing.
            </p>
          </FadeUpIntersection>
          <FadeUpIntersection>
            <img src={isMobile ? architecture : architectureDesktop } alt="image of a microservice architecture" className='project-details__img' />
            <p className='project-details__paragraph'>
              Deployed in the cloud and designed with a microservices architecture using 
              RESTful APIs created with Nodejs and Express for services like authenthication, 
              billing , image processing and registers. Modern interface design built with 
              Reactjs. 
            </p>
          </FadeUpIntersection>

        </div>

        <FadeUpIntersection>
          <article className='project-details__mobile-app'>
            <img src={isMobile? mobileApp1 : mobileAppDesktop1} alt="image of mobile app" />
            <div className='project-details__mobile-app--right'>
              <p className="project-details__paragraph">
                In the mobile app, users can visualize the households they need to 
                visit next for an energy meter reading. These house visits are in the 
                form of tasks and are seen in the pending section upon logging in.
              </p>
              <p className="project-details__paragraph">
                Tasks added by the administrator in the web dashboard appear only for 
                that specific user. It contains data about the property direction and code.
              </p>
            </div>
          </article>
        </FadeUpIntersection>
        <FadeUpIntersection>
          <article className='project-details__mobile-app'>
            <div className='project-details__mobile-app--left'>
              <p className="project-details__paragraph">
                In the mobile app, users can visualize the households they need to 
                visit next for an energy meter reading. These house visits are in the 
                form of tasks and are seen in the pending section upon logging in.
              </p>
              <p className="project-details__paragraph">
                Tasks added by the administrator in the web dashboard appear only for 
                that specific user. It contains data about the property direction and code.
              </p>
            </div>
            <img src={isMobile? mobileApp2 : mobileAppDesktop2} alt="image of mobile app" />
          </article>
        </FadeUpIntersection>
        <FadeUpIntersection>
          <img src={image3} alt="records of energy readings in dashboard" 
            className='project-details__img' />
          <p className='project-details__paragraph'>
            Administrators can visualize all saved readings in the dashboard with 
            more detailed information about the client, the property, and the taken 
            pictures stored in AWS S3 Buckets. The dashboard also provides filtering 
            options for easy navigation.
          </p>
        </FadeUpIntersection>
        <FadeUpIntersection>
          <article className='project-details__bill'>
            <div className='text-center my-2'>
              <img src={isMobile? bill : billDesktop} alt="image of service bill" className='' />
            </div>
            <div className='bill__description'>
              <p className="project-details__paragraph">
                From the dashboard, records can generate the bill for each 
                client's monthly consumption based on last month's reading difference.
              </p>    
              <p className="project-details__paragraph">
                The backend API is in charge of calculating the payment value. Dashboard generates 
                payment in a printing format with all client billing details.
              </p>
            </div>
          </article>
        </FadeUpIntersection>
      </section>
      <Footer />
    </div>
  )
}

export default MeterProject