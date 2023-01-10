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

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  // home page ID
  const res = await client.getEntry('48Iwwj1cVcgo2N8dkkuBg6');
  const communityStats = await client.getEntry('2pjcOOh1Xy3kDPgpIEWSvk');

  return {
    props: {
      page: res,
      communityStats: communityStats
    }
  }

}

export default function Home({ page, communityStats }) {
  
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
      <header>
      <a href="mailto:hello@frshlysqueezd.com" class="btn btn__secondary">Get in touch</a>
      <a href="https://www.linkedin.com/company/frshlysqueezd" target="_blank" class="btn btn__primary">Follow us on LinkedIn</a>
    </header>

    <main>
      <img src="Logo.png" width="274" />
      <p>We’re an open collective of designers of design and tech creatives, professionals, students and grads, cultivating
        a culture of education, growth and collaboration through virtual and in-person events, projects and research.
      </p>
      <p><strong>Be the first one to find out about our launch. No spam. Ever. We promise.</strong></p>
<div id="mc_embed_signup">
  <form action="https://frshlysqueezd.us7.list-manage.com/subscribe/post?u=7f5f44f058739ef29780dca63&amp;id=628c0ddafe&amp;f_id=00a684e3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate sign-up-form" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">
      
      <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
      <br />
      <div id="mce-responses" class="clear foot">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
      </div>

<div class="mc-field-group">
<input type="text" value="" name="FNAME" class="required" id="mce-FNAME" required placeholder="First Name*" />
  <input type="text" value="" name="LNAME" class="" id="mce-LNAME" placeholder="Last Name" />
  </div>
<div class="mc-field-group">
<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Email Address*" required />
<input type="text" value="" name="CITY" class="" id="mce-CITY" placeholder="Location (City, Country)" />
</div>
<div class="mc-field-group">
<input type="text" value="" name="OCCUPATION" class="" id="mce-OCCUPATION" placeholder="Occupation" />
<input type="submit" value="Join the community" name="subscribe" id="mc-embedded-subscribe" class="btn btn__primary" />

  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_7f5f44f058739ef29780dca63_628c0ddafe" tabindex="-1" value="" /></div>
      <div class="optionalParent">
          <div class="clear foot">
          </div>
      </div>
  </div>
</div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='CITY1';ftypes[3]='address';fnames[4]='COUNTRY1';ftypes[4]='address';fnames[5]='OCCUPATION';ftypes[5]='text';fnames[6]='CITY';ftypes[6]='text';fnames[7]='COUNTRY';ftypes[7]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
    </main>

    
    <footer>
      <p class="copyright">Copyright Ⓒ FRSHLY SQUEEZD 2022, All Rights Reserved</p>
    </footer>
    </>
  );
}