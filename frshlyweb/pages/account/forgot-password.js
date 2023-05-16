import Head from 'next/head';
import { useRouter } from "next/router";
import { auth, onAuthStateChanged } from "../../firebase/clientApp";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ForgotPassword from '../../components/Forms/Auth/ForgotPassword';
import { createClient } from 'contentful';

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const logo = await client.getAsset('2l3wsP2lZPMo8hartismIj');
  const navigation = await client.getEntries({ content_type: 'menu' });

  return {
    props: {
      logo: logo,
      navigation: navigation
    }
  }

}

export default function forgotPassword ({ logo, navigation }) {

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
      <div className="container">
        <ForgotPassword />
      </div>
      <Footer />
    </div>
  )
}
