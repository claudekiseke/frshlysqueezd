import { useRouter } from "next/router";
import { auth, onAuthStateChanged } from "../../firebase/clientApp";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Auth from '../../components/Forms/Auth/auth';

const Register = () => {

  const router = useRouter();

    onAuthStateChanged(auth, (user) => {
      if (user) {
          router.push('/account/my-account')
      }
    });
    
    return (
      <div>
        <Header />
        <Auth />
        <Footer />
      </div>
    )
  }
  
  export default Register;
  