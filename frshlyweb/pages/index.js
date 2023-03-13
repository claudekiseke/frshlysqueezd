import 'firebase/auth';
import Head from 'next/head';
import Header from '../components/Header/Header';
import PageHeading from '../components/PageHeading/PageHeading';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import MailingListSection from '../components/MailingListSection/MailingListSection';
import CommunityStats from '../components/CommunityStats/CommunityStats';
import Brands from '../components/Brands/Brands';
import Footer from '../components/Footer/Footer';
import { createClient } from 'contentful';
import Carousel from '../components/PageHeading/Carousel/Carousel';
import localFont from '@next/font/local'

const porker = localFont({ src: '../fonts/Porker.otf' })


export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  // home page ID
  const logo = await client.getAsset('2l3wsP2lZPMo8hartismIj');
  const navigation = await client.getEntries({ content_type: 'menu' });
  const  carousel = await client.getEntry('3Cw41S6UuhS6ty1FprBa0q');
  const res = await client.getEntry('48Iwwj1cVcgo2N8dkkuBg6');
  const communityStats = await client.getEntry('2pjcOOh1Xy3kDPgpIEWSvk');

  return {
    props: {
      page: res,
      logo: logo,
      carousel: carousel,
      communityStats: communityStats,
      navigation: navigation
    }
  }

}

export default function Home({ page, logo, carousel, communityStats, navigation }) {
  const pageContent = page.fields;
  const pageHeading = pageContent.pageHeading;
  const mainContent = pageContent.mainContent;
  const section = mainContent.map((item, index) => {
    let component;

    switch (item.sys.contentType.sys.id) {
      case 'brands':
        component = <Brands key={mainContent[index].sys.id} brand={mainContent[index].fields} />;
        break;

      case 'sectionHeading':
        component = <SectionHeading key={mainContent[index].sys.id} sectionHeading={mainContent[index].fields} />;
        break;

      case 'mailingListSection':
        component = <MailingListSection key={mainContent[index].sys.id} mailingListSection={mainContent[index].fields} />;
        break;

      case 'communityStats':
      component = <CommunityStats key={mainContent[index].sys.id} communityStats={communityStats} />;
      break;
    }

    return component;
  });

  return (
    <>
      <Head>
        <title>{`Frshly Squeezd ${pageHeading.fields.pageTitle ? '- ' + pageHeading.fields.pageTitle : ''}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header logo={logo} navigation={navigation} />
      <PageHeading key={pageHeading.sys.id} carousel={carousel} page={page} porker={porker} />
      {section}
      <Footer />
    </>
  );
}