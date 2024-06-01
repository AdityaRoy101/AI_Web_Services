import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from "../context/AuthProvider"
import toast from 'react-hot-toast';
import errorpage from '../assets/icons/no-results.png'
import LinkTag from '../components/LinkTag';

const SessionOutPage = () => {

    const { userAuth } = useContext(GlobalContext);
    const navigate = useNavigate();

    const login = () => {
        navigate('/login');
    };

    return (
        <main className=" flex justify-center items-center mt-[50px] ">
            <section className=' flex justify-center items-center flex-col'>
                <img 
                    src={errorpage} 
                    alt="errorpage"
                    width={250}
                    height={250}
                />
                <h2 className=' mb-5 mt-5 font-montserrat font-medium text-slate-600 text-[20px]'>You Came to the wrong track, make sure your are Logged In !!!</h2>
                <LinkTag text="Sign In" route={login}/>
                {/* <LinkTag text="Sign In" route={login}/> */}
            </section>
        </main>
    );
};

export default SessionOutPage;
