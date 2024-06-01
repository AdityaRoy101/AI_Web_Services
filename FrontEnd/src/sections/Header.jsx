import { useContext, useState } from 'react'
import homeImage from '../assets/icons/Home_image.png'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import hamburgerIcon from '../assets/icons/hamburger.png'
import { GlobalContext } from "../context/AuthProvider"
import BreadCrumb from '../components/BreadCrumb'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const { userAuth } = useContext(GlobalContext);
  const [Menu, setMenu] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openMenu = () => {
    setMenu(prev => !prev);
  }

  const openSignUpPage = () => {
    navigate("/login")
  }

  const openLoginPage = () => {
    navigate("/register")
  }

  const openDashboard = () => {
    navigate("/user")
  }

  return (
    <main className=" pr-10 pl-10 mt-5">
      <section className=" flex flex-col">
        <section className=' flex justify-between'>
          <button className='heroimage md:flex' onClick={ () => navigate("/")}>
            <img 
              src={homeImage} 
              alt="image" 
              width={50} 
              height={50}
              className=' rounded-xl'
            />
          </button>

          {/* Menu for desktops */}
          {userAuth === null ?
          (
          <section className='invisible sm:invisible md:visible lg:visible xl:visible 2xl:visible'>
            <div className='Buttons and others'>
              <div className=' flex gap-5'>
                <PrimaryButton text="Sign In" work={openSignUpPage}/>
                <SecondaryButton text="Sign Up" work={openLoginPage}/>
              </div>
            </div>
          </section>
          )
          :
          (
          <section className='invisible sm:invisible md:visible lg:visible xl:visible 2xl:visible'>
            <div className='Buttons and others'>
              <div className=' flex gap-5'>
                <SecondaryButton text=" Go to Dashboard" work={openDashboard}/>
              </div>
            </div>
          </section>
          )
          }

          {/* ================================== */}
          {/* Hamburger Section starts */}
          {/* ================================== */}
          {userAuth === null ?
          (
          <section className='visible sm:visible md:hidden lg:hidden xl:hidden 2xl:hidden justify-end items-end flex flex-col'>
            <button onClick={openMenu} className='flex flex-col justify-center items-center'>
              <img 
                src={hamburgerIcon} 
                alt="Hamburger Menu"
                height={40}
                width={40}
                className='flex flex-col justify-center items-center pt-2'
              />
            </button>
            <br/>
            {Menu === true?
              <section className=''>
                <BreadCrumb />
              </section>
            :
            <></>
            }
          </section>
          )
          :
          (
          <section className='visible sm:visible md:hidden lg:hidden xl:hidden 2xl:hidden'>
            <div>
              <img 
                src={hamburgerIcon} 
                alt="Hamburger Menu"
                height={40}
                width={40}
              />
            </div>
          </section>
          )
          }
          {/* ==================================== */}
        </section>
      </section>
    </main>
  )
}

export default Header