import Head from 'next/head';
import { useRouter } from "next/router";
import { auth, onAuthStateChanged } from "../../firebase/clientApp";
import React, { useState } from "react";
import Header from '../../components/Header/Header';
import PageHeading from '../../components/PageHeading/PageHeading';
import Sidebar from '../../components/Sidebar/Sidebar';
import AccountContent from "../../components/Layout/AccountContent/AccountContent";
import Footer from '../../components/Footer/Footer';
import { createClient } from 'contentful';

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  // about page ID
  const res = await client.getEntry('7wlXlPB7ItjUwI8GH8CfIP');
  const logo = await client.getAsset('2l3wsP2lZPMo8hartismIj');
  const navigation = await client.getEntries({ content_type: 'menu' })
  const accountContent = await client.getEntry('5uv7QCKTImfsgkI2h8GiLG');
  const supportTabs = await client.getEntry('2rRmCmbJZLngiCxjz3893y');
  const overlay = await client.getAsset('5V9ElQUshEK1eG7G3nZVZ5');
  const links = await client.getEntries({ content_type: 'navigation' });
  const modal = await client.getEntry('17KoK3nnBo7dwSU109zhyD');

  return {
    props: {
      page: res,
      logo: logo,
      navigation: navigation,
      accountContent: accountContent,
      supportTabs: supportTabs,
      overlay: overlay,
      links: links,
      modal: modal
    }
  }

}

const MyAccount = ({ page, logo, navigation, supportTabs, accountContent, links, modal }) => {

  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push('/account/login')
    }
  });

  const [isFilter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);

  const pageContent = page.fields;
  const pageHeading = pageContent.pageHeading;
  const mainContent = pageContent.mainContent;
  const section = mainContent.map((item, index) => {
    let component;

    switch (item.sys.contentType.sys.id) {
      case 'sidebar':
        component = <Sidebar key={mainContent[index].sys.id} sidebar={mainContent[index].fields.sidebarLinks} links={links} setFilter={setFilter} showModal={showModal} setShowModal={setShowModal} modal={modal} />;
        break;

      case 'sidebarContent':
        component = <AccountContent key={mainContent[index].sys.id} filter={isFilter} accountContent={accountContent} supportTabs={supportTabs} />;
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
      <Footer />
    </>
  )
}

export default MyAccount;

