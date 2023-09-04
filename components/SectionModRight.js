import Link from "next/link";

export default function SectionModLeft(props) {
  const { children, slug, imageUrl } = props; // Destructure 'children' from 'props'

  return (
    <div className={[props.className]}>
      <div className="p-8 lg:p-16 bg-white relative overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <h2 className="mb-4 uppercase font-bold tracking-wider text-sm block md:hidden">
          {props.tagline}
        </h2>
        <img className="h-full w-full object-cover" src={imageUrl} alt="" />
      </div>
      <div className="relative mx-auto max-w-8xl py-10 md:py-16 lg:px-8 lg:py-40">
        <div className="pl-8 pr-8 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-16 lg:pr-16 xl:pl-32">
          <h2 className="mb-8 uppercase font-bold tracking-wider text-sm hidden md:block">
            {props.tagline}
          </h2>
          <h1 className={[props.titleSize]}>{props.title}</h1>
          <p className="mt-6 leading-7 text-dark">{children}</p>
          <div className="mt-8">
            <Link
              href={`/${slug}`}
              className="inline-flex underline underline-offset-8 uppercase"
            >
              {props.ButtonTitle}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
