import Image from "next/image";
import { Inter } from "next/font/google";
import { fetchPost } from "/lib/api";

import Header from "/components/Header";
import Slides from "/components/Slides";
import TitleSection from "/components/TitleSection";
import SectionLong from "/components/SectionLong";
import Card from "/components/Card";
import Footer from "/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ allPosts }) {
  const heroPost = allPosts[0].fields;

  console.log("====================================");
  console.log(heroPost);
  console.log("====================================");

  return (
    <>
      <main>
        <Header />
        <Slides />
        <div className="relative bg-[#eee7df] mb-1 lg:mb-16">
          <div className="p-4 lg:p-16 bg-white relative h-80 overflow-hidden md:absolute md:right-0 md:h-full md:w-1/3 lg:w-1/2">
            <img
              className="h-full w-full object-cover"
              src="https://uj8.ad7.myftpupload.com/wp-content/uploads/2023/06/KIMGOPHOTOGRAPHY_0059.jpg"
              alt=""
            />
          </div>
          <div className="relative mx-auto max-w-8xl py-10 sm:py-32 lg:px-8 lg:py-40">
            <div className="pl-8 pr-8 md:mr-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-16 lg:pr-16 xl:pl-32">
              <h2 className="mb-8 uppercase tracking-wider">
                weddings, corporate + social events
              </h2>
              <h1 className="text-3xl text-dark sm:text-5xl leading-[2rem] lg:leading-[3rem]">
                ...Passion
              </h1>
              <p className="mt-6 leading-7 text-dark">
                We’re a brand passionate about weddings, corporate + social
                events… Committed to styling and designing events throughout the
                greater Orlando and Central Florida area.
                <br />
                <br />
                Our brand is comprised of RW Style (rentals + design), Cypress
                Grove Estate House (venue management), and Luxmore Grande Estate
                (venue ownership).
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex underline underline-offset-8 uppercase"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-[#eee7df]">
          <div className="p-4 lg:p-16 bg-white relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
            <img
              className="h-full w-full object-cover"
              src="https://uj8.ad7.myftpupload.com/wp-content/uploads/2022/11/Colorful-Summer-Floral-Inspiration-Jennifer-Nicole-Photography-100.jpeg"
              alt=""
            />
          </div>
          <div className="relative mx-auto max-w-8xl py-10 sm:py-32 lg:px-8 lg:py-40">
            <div className="pl-8 pr-8 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-16 lg:pr-16 xl:pl-32">
              <h2 className="mb-8 uppercase tracking-wider">From Our Blog</h2>
              <h1 className="text-3xl text-dark sm:text-5xl leading-[2rem] lg:leading-[3rem]">
                A Colorful Summer Floral Makeover At Luxmore Featured on
                MunaLuchi Bride
              </h1>
              <p className="mt-6 text-base leading-7 text-dark">
                Styled Shoots Across America + Intrigued Events teamed up to
                give you a vibrant, colorful summer floral inspiration that’ll
                make you want to bust out your gardening gloves and get to work!
                We’re delighted that they’ve decided to host their floral
                workshop here, giving Luxmore a floral transformation!
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex underline underline-offset-8 uppercase"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
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
            </div>
            <div>
              <Card title="RW Style" ImageUrl="img/rwstyle.jpg" ButtonLink="/">
                Is the perfect southern backdrop for wedding ceremonies +
                receptions. Offering a lakeside gazebo, dinner under the market
                lights, and...
              </Card>
            </div>
          </div>
        </div>
        <div className="relative bg-[#eee7df] mb-0 lg:mb-16">
          <div className="p-4 lg:p-16 bg-white relative h-80 overflow-hidden md:absolute md:right-0 md:h-full md:w-1/3 lg:w-1/2">
            <img
              className="h-full w-full object-cover"
              src="https://uj8.ad7.myftpupload.com/wp-content/uploads/2023/06/Amanda-and-Gerardo-Wedding-Party-210-scaled.jpg"
              alt=""
            />
          </div>
          <div className="relative mx-auto max-w-8xl py-10 sm:py-32 lg:px-8 lg:py-40">
            <div className="pl-8 pr-8 md:mr-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-16 lg:pr-16 xl:pl-32">
              <h2 className="mb-8 font-bold uppercase tracking-wider">
                Need some <span className="italic">guidance</span>?
              </h2>
              <h1 className="text-xl text-dark sm:text-3xl leading-[1.5rem] lg:leading-[2.5rem]">
                &quot;WE CELEBRATE LOVE, HAPPINESS, + MOMENTS OF JOY WITH OUR
                FAMILY OF CLIENTS, THROUGH AUTHENTIC, MEANINGFUL,
                CUSTOMER-CENTERED INTERACTIONS&quot;
              </h1>
              <p className="mt-6 leading-7 text-dark">
                Drop us a line and let us know how we can help –
                hello@rw-brands.com
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex underline underline-offset-8 uppercase"
                >
                  CONNECT
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
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
