import Head from 'next/head';
import { useRouter } from "next/router";
import { auth, onAuthStateChanged } from "../../firebase/clientApp";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Auth from '../../components/Forms/Auth/Auth';
import { createClient } from 'contentful';

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  // home page ID
  const logo = await client.getAsset('2l3wsP2lZPMo8hartismIj');
  const navigation = await client.getEntries({ content_type: 'menu' });

  return {
    props: {
      logo: logo,
      navigation: navigation
    }
  }

}

const Login = ({ logo, navigation }) => {

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
      </Head>
      <Header logo={logo} navigation={navigation} />
      <Auth />
      <Footer />
    </div>
  )
}

export default Login;
