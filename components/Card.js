export default function Card(props) {
  const { children } = props; // Destructure 'children' from 'props'
  return (
    <>
      <div className="max-w-full">
        <a href={props.ButtonLink}>
          <img className="" src={props.ImageUrl} alt="" />
        </a>
        <div className="py-10">
          <a href="#">
            <h5 className="mb-2 text-2xl lg:text-3xl text-dark uppercase">
              {props.title}
            </h5>
          </a>
          <p className="mb-8 font-normal text-dark">{children}</p>
          <a
            href={props.ButtonLink}
            className="inline-flex underline underline-offset-8 uppercase"
          >
            learn more
          </a>
        </div>
      </div>
    </>
  );
}
