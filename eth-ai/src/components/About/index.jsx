import "./index.css";
const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-card">
        <h1 className="about-head">About EtnAi</h1>
        <p className="about-para">
          At Eth Ai, we’re all about making crypto trading easier and more
          intuitive. We provide tools that help traders keep up with all new
          market trends, track top traders’ movements.
        </p>
        <button className="about-btn">Read More</button>
      </div>
      <ul className="about-ul">
        <li className="about-li">
          <img
            className="about-li-img"
            src="https://res.cloudinary.com/dazwjceuy/image/upload/v1728978588/graph_juvo75.svg"
            alt="about-li-img"
          />
          <h1 className="about-li-head">Stay Ahead</h1>
          <p className="about-li-para">
            No more guesswork—get clear, trustable insights.
          </p>
        </li>
        <li className="about-li">
          <img
            className="about-li-img"
            src="https://res.cloudinary.com/dazwjceuy/image/upload/v1728978546/Vector_2_nq70qa.svg"
            alt="about-li-img"
          />
          <h1 className="about-li-head">Know Your Assets</h1>
          <p className="about-li-para">
            Always stay on top of how your investments are performing.
          </p>
        </li>
        <li className="about-li">
          <img
            className="about-li-img"
            src="https://res.cloudinary.com/dazwjceuy/image/upload/v1728978327/Vector_1_aei7sn.svg"
            alt="about-li-img"
          />
          <h1 className="about-li-head">Simple, Not Overwhelming</h1>
          <p className="about-li-para">
            Our tools are designed to make complex market analysis easy to
            understand and act on.
          </p>
        </li>
        <li className="about-li">
          <img
            className="about-li-img"
            src="https://res.cloudinary.com/dazwjceuy/image/upload/v1728978465/Future_Technology_cmqwd0.svg"
            alt="about-li-img"
          />
          <h1 className="about-li-head">Future-Proof</h1>
          <p className="about-li-para">
            We’re constantly improving, adding new features to help you make the
            most informed decisions possible.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default About;
