import Image from "next/image";
import { Inter } from "next/font/google";
import { fetchPost } from "/lib/api";

import Layout from "/components/Layout";
import SectionSlider from "/components/SectionSlider";
import TitleSection from "/components/TitleSection";
import Card from "/components/Card";
import SectionModLeft from "/components/SectionModLeft";
import SectionModRight from "/components/SectionModRight";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ allPosts }) {
  const heroPost = allPosts[0].fields;

  console.log("====================================");
  console.log(heroPost);
  console.log("====================================");

  return (
    <>
      <Layout>
        {/* SLIDER */}
        <SectionSlider
          PictureOne="url(https://uj8.ad7.myftpupload.com/wp-content/uploads/2020/05/luxmore-grande-wedding-gian-carlo-photography-312-1-scaled.jpg)"
          PictureTwo="url(https://uj8.ad7.myftpupload.com/wp-content/uploads/2020/05/luxmore-grande-wedding-gian-carlo-photography-312-1-scaled.jpg)"
          PictureThree="url(https://uj8.ad7.myftpupload.com/wp-content/uploads/2020/05/luxmore-grande-wedding-gian-carlo-photography-124-1-scaled.jpg)"
        />
        {/* SECTION */}
        <SectionModLeft
          className="relative bg-[#eee7df] mb-1 lg:mb-16"
          tagline="weddings, corporate + social events"
          title="A Colorful Summer Floral Makeover At Luxmore Featured on MunaLuchi Bride"
          titleSize="text-3xl text-dark sm:text-5xl leading-[2rem] lg:leading-[3rem]"
          ImageUrl="https://uj8.ad7.myftpupload.com/wp-content/uploads/2023/06/KIMGOPHOTOGRAPHY_0059.jpg"
          ButtonLink="/"
          ButtonTitle="learn more"
        >
          We’re a brand passionate about weddings, corporate + social events…
          Committed to styling and designing events throughout the greater
          Orlando and Central Florida area.
          <br />
          <br />
          Our brand is comprised of RW Style (rentals + design), Cypress Grove
          Estate House (venue management), and Luxmore Grande Estate (venue
          ownership).
        </SectionModLeft>
        {/* SECTION */}
        <SectionModRight
          className="relative bg-[#eee7df] mb-1 lg:mb-16"
          tagline="FROM OUR BLOG"
          title="A Colorful Summer Floral Makeover At Luxmore Featured on MunaLuchi Bride"
          titleSize="text-3xl text-dark sm:text-5xl leading-[2rem] lg:leading-[3rem]"
          ImageUrl="https://uj8.ad7.myftpupload.com/wp-content/uploads/2022/11/Colorful-Summer-Floral-Inspiration-Jennifer-Nicole-Photography-100.jpeg"
          ButtonLink="/"
          ButtonTitle="read more"
        >
          Styled Shoots Across America + Intrigued Events teamed up to give you
          a vibrant, colorful summer floral inspiration that’ll make you want to
          bust out your gardening gloves and get to work! We’re delighted that
          they’ve decided to host their floral workshop here, giving Luxmore a
          floral transformation!
        </SectionModRight>
        {/* SECTION */}
        <div className="bg-white">
          <TitleSection />
          <div className="mx-auto max-w-full grid grid-cols-1 lg:grid-cols-3 p-10 gap-10 border-white">
            <div>
              <Card
                title="Cypress Grove"
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
                title="Luxmore Grande"
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
              <Card title="RW Style" ImageUrl="img/rwstyle.jpg" ButtonLink="/">
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
          ImageUrl="https://uj8.ad7.myftpupload.com/wp-content/uploads/2023/06/Amanda-and-Gerardo-Wedding-Party-210-scaled.jpg"
          ButtonLink="/contact"
          ButtonTitle="connect"
        >
          Drop us a line and let us know how we can help – hello@rw-brands.com
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
