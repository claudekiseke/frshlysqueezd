import React from 'react';
import 'firebase/auth';
import Head from 'next/head';
import Header from '../../components/Header/Header';
import PageHeading from '../../components/PageHeading/PageHeading';
import Accordion from '../../components/Accordion/Accordion';
import MailingListSection from '../../components/MailingListSection/MailingListSection';
import CommunityStats from '../../components/CommunityStats/CommunityStats';
import Footer from '../../components/Footer/Footer';
import { createClient } from 'contentful';
import SectionHeading from '../../components/SectionHeading/SectionHeading';

export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    // support page ID
    const logo = await client.getAsset('2l3wsP2lZPMo8hartismIj');
    const navigation = await client.getEntries({ content_type: 'menu' });
    const res = await client.getEntry('4FMOqP0mgRaG0CpbareO8S');
    const communityStats = await client.getEntry('2pjcOOh1Xy3kDPgpIEWSvk');
    const accordion = await client.getEntry('4Ky2JruN1xYCfYl8fxbnQd');

    return {
        props: {
            logo: logo,
            navigation: navigation,
            page: res,
            communityStats: communityStats,
            accordion: accordion
        }
    }

}

const HowTo = ({ logo, navigation, page, communityStats, accordion }) => {
    const pageContent = page.fields;
    const pageHeading = pageContent.pageHeading;
    const mainContent = pageContent.mainContent;

    const section = mainContent.map((item, index) => {
        let component;

        switch (item.sys.contentType.sys.id) {
            case 'accordion':
                component = <Accordion key={mainContent[index].sys.id} accordion={accordion} />;
                break;

            case 'mailingListSection':
                component = <MailingListSection key={mainContent[index].sys.id} mailingListSection={mainContent[index].fields} />;
                break;

            case 'sectionHeading':
                component = <SectionHeading key={mainContent[index].sys.id} sectionHeading={mainContent[index].fields} />;
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

export default HowTo;
