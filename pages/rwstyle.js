import Layout from "/components/Layout";
import SectionSlider from "/components/SectionSlider";
import { inventoryImages } from "../lib/helper";
import Link from "next/link";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <>
      <Layout>
        <SectionSlider sliderItems={inventoryImages} title="Inventory" />
        <div className="relative bg-white mt-2">
          <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
            <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
              <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0 hidden lg:block">
                <img
                  className="absolute inset-0 h-full w-full object-cover p-8"
                  src="https://rw-brands.com/wp-content/uploads/2020/03/Orlando_wedding_rentals_farm_table-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="px-6 lg:contents">
              <div className="mx-auto max-w-2xl pb-24 pt-8 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                <p className="text-base font-semibold leading-7 text-dark">
                  rw style
                </p>
                <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                  Inventory
                </h1>
                <p className="mt-6 text-base leading-8 text-gray-700">
                  RW Style is a boutique rentals and design firm located in the
                  heart of Central Florida. Our team has curated a collection of
                  rentals inclusive of vintage finds, everyday rentals: chaivari
                  chairs, banquet tables, and chargers, and lush soft seating
                  collections.
                  <br />
                  <br />
                  We strongly believe in transforming spaces so that they become
                  aesthetic experiences. All that we do, we do with intent and a
                  detailed eye. Style is who we are, style is what we do. Every
                  event, commercial project and styled shoot embraced the
                  personality of the our client, natural elements of the space,
                  and expert placement by our team. <br />
                  Our Central Florida wedding and event company’s most
                  sought-after service is our collection of specialty rentals.
                  We offer all of the intimate details from gathering tables and
                  bar carts to upholstered seating and more that can fill any
                  venue. <br />
                  <br />
                  Our event furniture rentals go way beyond utilitarian folding
                  tables and metal chairs: We want your event to be as unique as
                  the people celebrating it. That’s why we offer pieces such as
                  hand-crafted farm tables made out of refurbished barn doors —
                  a great option for country-style or rustic-themed events. RW
                  Style can also provide architectural backgrounds that are
                  perfect for photo shoots or to serve as the backdrop for a
                  dessert display, sweetheart table, and more for your event.{" "}
                  <br />
                  <br />
                  We’re here to make your big day as stress-free as possible, so
                  we will deliver, set-up, and pick up the event rentals and
                  decor for you. From chairs to chargers, we’ve curated a
                  collection of rental items that includes everything you need
                  to set the scene beautifully for your Central Florida wedding
                  or other event. Contact RW Style today for party rentals and
                  event furniture, as well as for event design ideas and help
                  with decorating the venue. <br />
                </p>
                <div className="mt-8">
                  <Link
                    href="/"
                    className="inline-flex underline underline-offset-8 uppercase"
                  >
                    Inventory + Collections
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
