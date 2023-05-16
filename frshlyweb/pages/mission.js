import React from 'react';
import 'firebase/auth';
import Head from 'next/head';
import Header from '../components/Header/Header';
import PageHeading from '../components/PageHeading/PageHeading';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import MailingListSection from '../components/MailingListSection/MailingListSection';
import CommunityStats from '../components/CommunityStats/CommunityStats';
import SupportTabs from '../components/SupportTabs/SupportTabs';
import Team from '../components/Team/Team';
import Brands from '../components/Brands/Brands';
import Footer from '../components/Footer/Footer';
import { createClient } from 'contentful';


export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  // support page ID
  const logo = await client.getAsset('2l3wsP2lZPMo8hartismIj');
  const navigation = await client.getEntries({ content_type: 'menu' });
  const res = await client.getEntry('1n5ZaXctLBMLqHroseGmyz');
  const communityStats = await client.getEntry('2pjcOOh1Xy3kDPgpIEWSvk');
  const supportTabs = await client.getEntry('4dkKCXXyc0F0IGgEG6Eymy');
  const team = await client.getEntry('4SGIOrW93jgF0cWkL3CeSD');

  return {
    props: {
      logo: logo,
      navigation: navigation,
      page: res,
      communityStats: communityStats,
      supportTabs: supportTabs,
      team: team
    }
  }

}

const Mission = ({ logo, navigation, page, communityStats, supportTabs, team }) => {

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

      case 'supportTabs':
        component = <SupportTabs key={mainContent[index].sys.id} supportTabs={supportTabs} />;
        break;

      case 'team':
        component = <Team key={mainContent[index].sys.id} team={team} />;
        break;
    }

    return component;
  });

  return (
    <>
      <Head>
        <title>Frshly Squeezd - {pageHeading.fields.pageTitle}</title>
        <meta charSet="utf-8" />
      </Head>
      <Header logo={logo} navigation={navigation} />
      <PageHeading key={pageHeading.sys.id} page={page} />
      <div className="container">
        {section}
      </div>
      <Footer />
    </>
  )
}

export default Mission;
