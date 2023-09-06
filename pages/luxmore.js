import { fetchPost } from "/lib/api";

import Layout from "/components/Layout";
import SectionSlider from "/components/SectionSlider";
import TitleSection from "/components/TitleSection";
import Card from "/components/Card";
import SectionModLeft from "/components/SectionModLeft";
import SectionModRight from "/components/SectionModRight";
import { luxmoreImages } from "../lib/helper";

export default function Home({ allPosts }) {
  const heroPost = allPosts[0].fields;

  return (
    <>
      <Layout>
        {/* SLIDER */}
        <SectionSlider sliderItems={luxmoreImages} title="Luxmore" />
        {/* SECTION */}
        <SectionModLeft
          className="relative bg-[#eee7df] lg:mt-0 md:mt-4 mb-0 md:mb-4 lg:mb-16"
          tagline="Luxmore Grande Estate"
          title="Luxury is defined as a condition or situation of great comfort, a welcomed indulgence."
          titleSize="text-3xl text-dark sm:text-5xl leading-[2rem] lg:leading-[3.5rem]"
          ImageUrl="https://rw-brands.com/wp-content/uploads/2020/05/2019-06-15-13.11.29-1280x853-1.jpg"
          ButtonLink="/"
          ButtonTitle="our packages"
        >
          Luxmore Grande Estate is a one of a kind facility nestled in the heart
          of Winter Springs, Florida. This picturesque lakefront property sits
          on 5 acres of land with gated access giving our clientele the privacy
          they deserve. Whether you’re planning a corporate luncheon, meeting,
          social gathering, rehearsal dinner, or wedding, the offer of a
          luxurious setting, impeccable cuisine, and stellar customer service is
          our promise to you! <br />
          <br />
          Luxmore Grande Estate is available year-round and can accommodate up
          to 200 guests. Originally built as a 20,543 square foot private
          residence in 2001, the estate was purchased in 2014 and converted into
          a luxury private event venue with all the quaint features of a
          southern manor house, making for a memorable wedding location. It also
          features a large ballroom, parlor with attached library, a large
          garden attached to a massive patio, and VIP suite. Guaranteed, you and
          your guests will enjoy mingling and moseying around the grounds. As
          one of our premier full-service reception venues, Luxmore Grande
          Estate also offers gourmet catering for large groups, custom
          decorating, audio-visual services and more. Of course, our services
          aren’t limited to weddings and can also accommodate a variety of
          events.
          <br />
          <br />
        </SectionModLeft>
        {/* SECTION */}
        <div className="bg-white">
          <div className="mx-auto max-w-full grid grid-cols-1 lg:grid-cols-3 p-10 gap-10 border-white">
            <div>
              <Card
                title="Recent Events"
                ImageUrl="img/cypress.jpg"
                ButtonLink="/"
              >
                Is the perfect southern backdrop for wedding ceremonies +
                receptions. Offering a lakeside gazebo, dinner under the market
                lights, and...
              </Card>
              <hr />
            </div>
            <div>
              <Card
                title="The Estate"
                ImageUrl="img/luxmore.jpg"
                ButtonLink="/"
              >
                Is the perfect southern backdrop for wedding ceremonies +
                receptions. Offering a lakeside gazebo, dinner under the market
                lights, and...
              </Card>
              <hr />
            </div>
            <div>
              <Card
                title="Book a Tour"
                ImageUrl="img/rwstyle.jpg"
                ButtonLink="/"
              >
                Is the perfect southern backdrop for wedding ceremonies +
                receptions. Offering a lakeside gazebo, dinner under the market
                lights, and...
              </Card>
              <hr />
            </div>
          </div>
        </div>
        {/* SECTION */}
        <SectionModLeft
          className="relative bg-[#eee7df] mb-1 lg:mb-16"
          tagline="NEED SOME GUIDANCE?"
          title="WE CELEBRATE LOVE, HAPPINESS, + MOMENTS OF JOY WITH OUR FAMILY OF CLIENTS, THROUGH AUTHENTIC, MEANINGFUL, CUSTOMER-CENTERED INTERACTIONS"
          titleSize="text-xl text-dark sm:text-3xl leading-[1.5rem] lg:leading-[2.5rem]"
          ImageUrl="https://rw-brands.com/wp-content/uploads/2020/05/2018-02-03-16.39.45-1200x800-1.jpg"
          ButtonLink="/contact"
          ButtonTitle="connect"
        >
          Drop us a line and let us know how we can help –
          info@luxmoregrande.com
        </SectionModLeft>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const { posts } = await fetchPost();
  return {
    props: { allPosts: posts },
    revalidate: 60,
  };
}
