import Layout from "/components/Layout";

import {
  ArrowLongRightIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <>
      <Layout>
        <div className="mx-auto max-w-6xl mt-0 lg:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 p-8">
            <div>
              <h2 className="mb-8 uppercase font-bold tracking-wider text-sm">
                The Intro
              </h2>
              <h1 className="text-3xl mb-8">Meet The Owner - Tamuel</h1>
              <p>
                She is the creative mastermind and driving force behind the RW
                Events brand + its subsidiaries (Luxmore Grande Estate, Cypress
                Grove Estate House + RW Style). She prides herself in running a
                successful family owned business with a dedicated team of
                passionate professionals.
                <br />
                <br />
                Ok, ok, enough of the boring stuff – let’s get a little personal
                – quick facts about her:
              </p>
              <ul role="list" className="mt-8 space-y-8">
                <li className="flex gap-x-3">
                  <ArrowLongRightIcon
                    className="mt-1 h-5 w-5 flex-none text-[#C09D97]"
                    aria-hidden="true"
                  />
                  <span>
                    She is obsessed with her husband of 27+ years and <br />{" "}
                    gorgeous daughters
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowLongRightIcon
                    className="mt-1 h-5 w-5 flex-none text-[#C09D97]"
                    aria-hidden="true"
                  />
                  Carbs make her extremely happy
                </li>
                <li className="flex gap-x-3">
                  <ArrowLongRightIcon
                    className="mt-1 h-5 w-5 flex-none text-[#C09D97]"
                    aria-hidden="true"
                  />
                  If dogs could speak; she’d never converse with a human again
                  <br />
                  (so, we think)
                </li>
                <li className="flex gap-x-3">
                  <ArrowLongRightIcon
                    className="mt-1 h-5 w-5 flex-none text-[#C09D97]"
                    aria-hidden="true"
                  />
                  Retail therapy = book + grocery stores
                </li>
                <li className="flex gap-x-3">
                  <ArrowLongRightIcon
                    className="mt-1 h-5 w-5 flex-none text-[#C09D97]"
                    aria-hidden="true"
                  />
                  Monotony is not her thing
                </li>
                <li className="flex gap-x-3">
                  <ArrowLongRightIcon
                    className="mt-1 h-5 w-5 flex-none text-[#C09D97]"
                    aria-hidden="true"
                  />
                  DIY projects are not for this gal, ever
                </li>
                <li className="flex gap-x-3">
                  <ArrowLongRightIcon
                    className="mt-1 h-5 w-5 flex-none text-[#C09D97]"
                    aria-hidden="true"
                  />
                  She hates the beach and thinks sand is gross
                </li>
                <li className="flex gap-x-3">
                  <ArrowLongRightIcon
                    className="mt-1 h-5 w-5 flex-none text-[#C09D97]"
                    aria-hidden="true"
                  />
                  She loves genuine connections – drop her a line today
                  <br /> – Tamuel (at) rwevents.com
                </li>
              </ul>
            </div>
            <div>
              <img src="https://rw-brands.com/wp-content/uploads/2022/05/tamuel_cowart.jpg" />
            </div>
          </div>
        </div>
        <style>{"body { background-color: #f5f5f7; }"}</style>
      </Layout>
    </>
  );
}
