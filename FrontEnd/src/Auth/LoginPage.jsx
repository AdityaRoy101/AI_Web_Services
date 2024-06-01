import heroImage from '../assets/icons/Home_image.png'
import teamImage from '../assets/images/teamImage.jpg'
import SignInForm from '../Auth/SignInForm'
// import SignUpForm from './SignUpForm'
// import teamImage1 from '../assets/images/tt.jpg'

const LoginPage = () => {
  return (
    <main>
      <section className=' flex flex-row justify-between pr-10 pl-10'>
        <section className=' flex justify-center items-center h-screen'>
          <img 
            src="https://www.merchantmaverick.com/wp-content/uploads/2019/09/corporate-office.jpg" 
            alt="heroimage"
            height='auto'
            width='auto'
            className=' rounded-lg'
          />
        </section>
        <section className='flex justify-center items-center flex-col ml-[20px] mt-10 pr-10 mb-10 border-dashed border-spacing-5 border-2 border-gray-400 rounded-xl'>
          <div className=' flex gap-2 justify-center items-center pl-20'>
            <img 
              src={heroImage} 
              alt="heroimage"
              width={50}
              height={50}
              className=' rounded-xl'
            />
            <h1 className=' text-[30px] font-palanquin font-medium'>AI Visualizer</h1>
          </div>
  
          <div className=' mt-10 w-[450px]'>
            <SignInForm />
          </div>
        </section>
      </section>
    </main>
  )
}

export default LoginPage