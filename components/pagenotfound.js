import Link from "next/link";

export default function PageNotFound() {
  return (
    <>
      {/*
		  This example requires updating your template:

		  ```
		  <html class="h-full">
		  <body class="h-full">
		  ```
		*/}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <img className="mx-auto p-10 h-40" src="/img/logo.svg" alt="" />
          <p className="text-base font-semibold text-secondary-950">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-950">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-full px-8 py-4 text-md font-semibold text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white bg-primary-950"
            >
              Go back home
            </Link>
            <Link
              href="/contact-us"
              className="text-sm font-semibold text-gray-900"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
