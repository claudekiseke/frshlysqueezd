import React, { useState } from "react";
import Header from '../components/Header/Header';
import PageHeading from '../components/PageHeading/PageHeading';
import Sidebar from '../components/Sidebar/Sidebar';
import ResourcesDirectory from '../components/ResourcesDirectory/ResourcesDirectory';
import Footer from '../components/Footer/Footer';
import { createClient } from 'contentful';

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  // about page ID
  const res = await client.getEntry('4eBvOukdeGK0JZvTrPEBg2')
  const resourcesDirectory = await client.getEntries({ content_type: 'resource' })
  const overlay = await client.getAsset('5V9ElQUshEK1eG7G3nZVZ5');
  const links = await client.getEntries({ content_type: 'navigation' });

  return {
    props: {
      page: res,
      resourcesDirectory: resourcesDirectory,
      overlay: overlay,
      links: links
    }
  }

}

const Resources = ({ page, resourcesDirectory, overlay, links }) => {

  const [isFilter, setFilter] = useState('all');

  const pageContent = page.fields;
  const pageHeading = pageContent.pageHeading;
  const mainContent = pageContent.mainContent;
  const section = mainContent.map((item, index) => {
    let component;

    switch (item.sys.contentType.sys.id) {
      case 'sidebar':
        component = <Sidebar key={mainContent[index].sys.id} sidebar={mainContent[index].fields.sidebarLinks} links={links} setFilter={setFilter} />;
        break;

      case 'resources':
        component = <ResourcesDirectory key={mainContent[index].sys.id} overlay={overlay} resources={resourcesDirectory} filter={isFilter} />;
        break;
    }

    return component;
  });

  return (
    <>
      <Header />
      <PageHeading key={pageHeading.sys.id} page={page} />
      <div className="container">
        {section}
      </div>
      <Footer />
    </>
  )
}

export default Resources;
