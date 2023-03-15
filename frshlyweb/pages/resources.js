import React, { useState } from "react";
import Header from '../components/Header/Header';
import Head from 'next/head';
import PageHeading from '../components/PageHeading/PageHeading';
import Sidebar from '../components/Sidebar/Sidebar';
import ResourcesDirectory from '../components/ResourcesDirectory/ResourcesDirectory';
import Modal from "../components/Modal/Modal";
import Footer from '../components/Footer/Footer';
import { createClient } from 'contentful';

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  // about page ID
  const logo = await client.getAsset('2l3wsP2lZPMo8hartismIj');
  const navigation = await client.getEntries({ content_type: 'menu' });
  const res = await client.getEntry('4eBvOukdeGK0JZvTrPEBg2')
  const resourcesDirectory = await client.getEntries({ content_type: 'resource' })
  const overlay = await client.getAsset('5V9ElQUshEK1eG7G3nZVZ5');
  const links = await client.getEntries({ content_type: 'navigation' });
  const modal = await client.getEntry('2mbobStDC9QlRpNaoC8e3Z');
  const submitResource = await client.getEntry('74EDUa04XnaDQzxE1mnYC3');

  return {
    props: {
      logo: logo,
      navigation: navigation,
      page: res,
      resourcesDirectory: resourcesDirectory,
      overlay: overlay,
      links: links,
      modal: modal,
      submitResource: submitResource
    }
  }

}

const Resources = ({ logo, navigation, page, resourcesDirectory, overlay, links, modal, submitResource }) => {
// console.log(submitResource);
  const [isFilter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const pageContent = page.fields;
  const pageHeading = pageContent.pageHeading;
  const mainContent = pageContent.mainContent;

  const section = mainContent.map((item, index) => {
    let component;

    switch (item.sys.contentType.sys.id) {
      case 'sidebar':
        component = <Sidebar key={mainContent[index].sys.id} sidebar={mainContent[index].fields.sidebarLinks} links={links} setFilter={setFilter} modal={modal} showModal={showModal} setShowModal={setShowModal} submitResource={submitResource} />;
        break;

      case 'resources':
        component = <ResourcesDirectory key={mainContent[index].sys.id} overlay={overlay} resources={resourcesDirectory} filter={isFilter} />;
        break;
    }

    return component;
  });

  return (
    <>
      <Head>
        <title>Frshly Squeezd - {pageHeading.fields.pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header logo={logo} navigation={navigation} />
      <PageHeading key={pageHeading.sys.id} page={page} />
      <div className="container">
        {section}
      </div>
      <Modal />
      <Footer />
    </>
  )
}

export default Resources;
