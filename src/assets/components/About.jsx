import React from "react";

const betterDetails = [
  {
    title: "Brand safety",
    desc: "Your brand's safety is our top priority for building healthy relationship",
    class: "fa-solid fa-unlock",
  },
  {
    title: "Our Priority",
    desc: "Our main goal is user retention & engagement for all the campaigns we run to get more ROI",
    class: "fa-regular fa-user",
  },
  {
    title: "Anti-Fraud Mechanism",
    desc: "Our in-house anti-fraud technology works in background to fight fraud.",
    class: "fa-solid fa-shield-halved",
  },
  {
    title: "Auto Optimization",
    desc: "Our in-house auto optimization tool taking care of CVR and EVR.",
    class: "fa-solid fa-chart-line",
  },
];

const processDetails = [
  {
    title: "01 / Consultation",
    desc: "SKMADS team conducts an initial consultation with the client to understand their business objectives and advertising needs. This includes identifying the target audience, budget, ad formats, and other relevant factors.",
  },
  {
    title: "02 / Proposal Development",
    desc: "Based on the consultation, SKMADS develops a detailed proposal outlining the advertising solutions that best fit the client's needs. This includes the advertising strategy, targeting options, ad formats, and budget.",
  },
  {
    title: "03 / Review and Approval",
    desc: "The proposal is reviewed and discussed with the client to ensure that it meets their expectations and requirements. Any adjustments or modifications are made to the proposal as needed until it is approved by the client.",
  },
  {
    title: "04 / Implementation and Monitoring",
    desc: "Once the proposal is approved, SKMADS implements the advertising campaign and monitors its performance closely. Regular reports are provided to the client to track ad performance and adjust the campaign as needed to achieve optimal results.",
  },
];

const teamDetails = [
  { name: "SANJAY KUMAR MEENA", designation: "Founder & CEO", img: "ceo.webp" },
  {
    name: "CHANDRABHAN MEENA",
    designation: "Chief Marketing Officer",
    img: "cmo.webp",
  },
];

const About = () => {
  return (
    <div className="services-con col justify-content-center pt-5 pb-0">
      <div className="row justify-content-center p-0">
        <div className="col text-center">
          <h1 className="fw-bold services-header">About SKMADS</h1>
          <p className="text-muted fw-semibold services-inner-desc">
            SKMADS provides targeted and transparent advertising solutions to
            help businesses grow
          </p>

          <div className="d-flex mt-5 about-inner-container">
            <div className="col-lg-6 col-12">
              <img src="src/images/a-1.jpeg" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-12 about-desc  text-start">
              <span className="fs-6 text-muted fw-light ">
                SKMADS is a leading advertising company that specializes in
                providing in-app and web advertising services through our
                powerful dashboards. Our team of skilled professionals is
                committed to delivering exceptional results, and we pride
                ourselves on offering innovative and tailored solutions to meet
                our clients' unique needs.​
                <br />
                With years of experience in the industry, SKMADS has established
                itself as a trusted partner for businesses looking to enhance
                their online presence and reach their target audience. Our
                in-house team of experts possesses extensive knowledge in
                creating and managing effective advertising campaigns that drive
                results.​
                <br />
                At SKMADS, we believe in the power of collaboration, and we work
                closely with our clients to understand their goals and
                objectives, ensuring that every campaign is designed to deliver
                maximum impact. Our focus on quality and attention to detail has
                earned us a reputation for excellence in the industry, and we
                are committed to maintaining that reputation through every
                project we undertake.
              </span>
              <div className="d-flex justify-content-start mt-4">
                <a href="/contact">
                  <button className="hero-btn mt-3 rounded-1 p-3">
                    Start your campaign
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col text-center better-con"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <h2 className="fw-bold">Why We’re Better.</h2>
        <div className="d-flex justify-content-center mt-5">
          <div className="col-lg-8 row">
            {betterDetails.map((det) => {
              return (
                <>
                  <div className="col col-12 col-lg-3 mt-3">
                    <span className="details-outer">
                      <i class={`${det.class} details-icon`}></i>
                    </span>
                    <div className="mt-3 col text-center details-inner-des">
                      <h6>{det.title}</h6>
                      <p className="text-muted details-desc">{det.desc}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="row justify-content-center process-con">
        <div className="col-lg-10 row justify-content-center">
          <div className="col-lg-2 text-start">
            <h2>The Process</h2>
          </div>
          {processDetails.map((pro, index) => {
            const a = pro.title.split("/");
            return (
              <div key={index} className="col">
                <h2>
                  {a[0]} <span style={{ fontSize: "11px" }}>/{a[1]}</span>
                </h2>
                <p style={{ fontSize: "11px" }} className="text-muted">
                  {pro.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="row justify-content-center py-5"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <div className="col-lg-10 col justify-content-center">
          <h1 className="fw-bold text-center">Meet the Team</h1>
          <div className="row justify-content-center mt-5">
            {teamDetails.map((t, i) => {
              return (
                <div className="col-lg-4 col-11" key={i}>
                  <div className="w-100">
                    <img
                      src={`src/images/${t.img}`}
                      className="img-fluid team-img"
                    />
                    <div className="p-2">
                      <h6 className="mt-4">{t.name}</h6>
                      <p className="mt-4 team-desc text-muted">
                        {t.designation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;