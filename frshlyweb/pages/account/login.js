import Head from 'next/head';
import { useRouter } from "next/router";
import { auth, onAuthStateChanged } from "../../firebase/clientApp";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Auth from '../../components/Forms/Auth/Auth';

const Login = () => {

  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push('/account/my-account')
    }
  });

  return (
    <div>
      <Head>
        <title>Frshly Squeezd - Log In</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Auth />
      <Footer />
    </div>
  )
}

export default Login;
