export default function Example() {
  return (
    <div className="relative bg-[#f7f4f0]">
      <div className="p-4 lg:p-16 relative h-80 bg-white overflow-hidden md:absolute md:right-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://uj8.ad7.myftpupload.com/wp-content/uploads/2023/06/Amanda-and-Gerardo-Wedding-Party-210-scaled.jpg"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-8xl py-10 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-8 pr-8 md:mr-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-16 lg:pr-16 xl:pl-32">
          <h2 className="mb-8 text-3xl tracking-wider">
            Need some <span className="italic">guidance</span>?
          </h2>
          <h1 className="mt-2 text-xl font-bold text-dark lg:text-2xl uppercase">
            {`"We celebrate love, happiness, + moments of joy with our family of
            clients, through authentic, meaningful, customer-centered
            interactions"`}
          </h1>
          <p className="mt-6 leading-7 text-dark">
            Drop us a line and let us know how we can help – hello@rw-brands.com
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex underline underline-offset-8 uppercase"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
