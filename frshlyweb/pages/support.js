import React from 'react';
import 'firebase/auth';
import Header from '../components/Header/Header';
import PageHeading from '../components/PageHeading/PageHeading';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import MailingListSection from '../components/MailingListSection/MailingListSection';
import CommunityStats from '../components/CommunityStats/CommunityStats';
import SupportTabs from '../components/SupportTabs/SupportTabs';
import Brands from '../components/Brands/Brands';
import Footer from '../components/Footer/Footer';
import '../styles/Home.module.css';
import { createClient } from 'contentful';
import ContactForm from '../components/Forms/ContactForm.js/ContactForm';


export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  // support page ID
  const res = await client.getEntry('6oqhFEO1KP8qTAlUxrL3NV');
  const communityStats = await client.getEntry('2pjcOOh1Xy3kDPgpIEWSvk');
  const supportTabs = await client.getEntry('4dkKCXXyc0F0IGgEG6Eymy');

  return {
    props: {
      page: res,
      communityStats: communityStats,
      supportTabs: supportTabs
    }
  }

}

const Support = ({ page, communityStats, supportTabs } ) => {

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

      case 'contactForm':
      component = <ContactForm key={mainContent[index].sys.id} contactForm={mainContent[index].fields} />;
      break;
    }

    return component;
  });

  return (
    <>
      <Header />
      <PageHeading key={pageHeading.sys.id} page={page} />
      {section}
      <Footer />
    </>
  )
}

export default Support;
