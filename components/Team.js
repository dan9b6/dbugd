import Social from "./Social";
import Card from "./Card";

const Team = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="team">
          <div className="team-intro">
            <h2>Our team</h2>
            <p className="lead">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <div className="team-members">
            <Card
              img="/images/pt.png"
              alt="team member image"
              title="Dan Burton"
              subtitle="Founder & Developer"
              socials
            >
              <p>
                Praesentium iure error aliquam voluptas ut libero. Commodi
                placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui
                est accusamus exercitationem natus ut voluptas. Officiis velit
                eos ducimus.
              </p>
            </Card>
            <Card
              img="/images/pt.png"
              alt="team member image"
              title="Dan Burton"
              subtitle="Founder & Developer"
              socials
            >
              <p>
                Praesentium iure error aliquam voluptas ut libero. Commodi
                placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui
                est accusamus exercitationem natus ut voluptas. Officiis velit
                eos ducimus.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
