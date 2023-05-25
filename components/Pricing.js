import Card from "./Card";

const Pricing = () => {
  return (
    <section className="section pricing">
      <div className="container">
        <div className="container--narrow">
          <span className="eyebrow">Pricing</span>
          <h2>Pricing plans for teams of all sizes</h2>
          <p className="lead">
            We offer flexible pricing packages designed to suit the unique needs
            and budgets of our clients. Our transparent pricing structure
            ensures that you know exactly what you&apos;re paying for and allows
            you to choose the package that best aligns with your requirements.
          </p>
        </div>
        <div className="grid grid-3">
          <Card title="Basic" rounded border padding>
            <p>The essentials to provide your best work for clients.</p>
            <p>£24/month</p>
            <ul>
              <li>5 products</li>
              <li>5 products</li>
              <li>5 products</li>
              <li>5 products</li>
            </ul>
          </Card>
          <Card title="Pro" rounded border padding>
            <p>The essentials to provide your best work for clients.</p>
            <p>£24/month</p>
            <ul>
              <li>5 products</li>
              <li>5 products</li>
              <li>5 products</li>
              <li>5 products</li>
            </ul>
          </Card>
          <Card title="Custom" rounded border padding feature>
            <p>The essentials to provide your best work for clients.</p>
            <p>£24/month</p>
            <ul>
              <li>5 products</li>
              <li>5 products</li>
              <li>5 products</li>
              <li>5 products</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
