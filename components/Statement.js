import Link from "next/link";

const Statement = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="statement">
          <div className="statement-content">
            <h2 className="h1">Work with us</h2>
            <p className="lead">
              Choosing the right web agency to partner with is crucial for the
              success of your online endeavors. At dbugd, we offer a unique
              blend of expertise, passion, and personalized service that sets us
              apart from the competition. Here&apos;s why you should choose to
              work with us:
            </p>
            <ul className="horizontal-list">
              <li>
                <Link href="/">Open Roles</Link>
              </li>
              <li>
                <Link href="/">Open Roles</Link>
              </li>
              <li>
                <Link href="/">Open Roles</Link>
              </li>
              <li>
                <Link href="/">Open Roles</Link>
              </li>
            </ul>
            <div className="grid grid-4">
              <div>
                <h3>12</h3>
                <p>Offices Worldwide</p>
              </div>
              <div>
                <h3>12</h3>
                <p>Offices Worldwide</p>
              </div>
              <div>
                <h3>12</h3>
                <p>Offices Worldwide</p>
              </div>
              <div>
                <h3>12</h3>
                <p>Offices Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statement;
