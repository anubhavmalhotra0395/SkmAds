import React from "react";
import "./Tracking.css";

const aboutTypes = [
  {
    header: "optimal impact",
    title:
      "SKMADS harnesses innovative strategies, we empower advertising excellence for optimal impact",
    desc: "SKMADS leads the way in advertising, specializing in in-app and web services through our robust dashboards. With a team of skilled professionals dedicated to delivering exceptional results, we pride ourselves on offering innovative solutions tailored to each client's unique needs, ensuring advertising excellence every step of the way.",
  },
  {
    header: "creative ingenuity",
    title:
      "SKMADS empowers advertising excellence through innovative strategies and creative ingenuity.",
    desc: `At SKMADS, we're dedicated to empowering advertising success. Our expertise lies in providing in-app and web advertising services through dynamic dashboards. With a committed team of professionals, we offer tailored solutions that drive exceptional results, ensuring our clients achieve advertising excellence with every campaign.`,
  },
  {
    header: "creative brilliance",
    title:
      "SKMADS drives advertising success through dynamic strategies and creative brilliance instantly.",
    desc: `SKMADS is your partner in driving advertising success. Specializing in in-app and web advertising services through cutting-edge dashboards, our skilled team is committed to delivering outstanding results. With a focus on innovation and tailored solutions, we empower clients to achieve their advertising goals and excel in their campaigns.`,
  },
];

const TrackingPartnersHome = () => {
  return (
    <div
      className="d-flex flex-row py-5 gap-5"
      style={{ backgroundColor: "#f9f8f3" }}
    >
      <div className="col-lg-6">
        <div className="w-100">
          <img src="images/h-1.png" style={{ position: "sticky" }} />
        </div>
        <div>
          <img src="images/h-2.png" />
        </div>
        <div>
          <img src="images/h-3.png" />
        </div>
      </div>
      <div className="col-lg-5 d-flex justify-content-center flex-column">
        <div className="py-5 px-3 align-items-center text-start">
          {aboutTypes.map((ab) => {
            return (
              <div className="d-flex flex-wrap ca-initvalues-applied lqd-animations-done snipcss-5mnKy">
                <div className="d-flex flex-wrap pb-200 module-content">
                  <div className="m-0  rounded-1 bg-slate-200 ld-fancy-heading position-relative animation-element lqd-unit-animation-done">
                    <h6 className="ld-fh-element d-inline-block position-relative bg-gray py-2 px-3 rounded-5 text-12 -tracking-0/5 text-slate-500 text-uppercase">
                      {ab.header}
                    </h6>
                  </div>
                  <div className="ld-fancy-heading position-relative">
                    <h2 className="ld-fh-element position-relative lqd-highlight-custom lqd-highlight-custom-2 mt-0/25em mb-0/75em text-38 is-in-view lqd-unit-animation-done">
                      <mark className="lqd-highlight">
                        <span className="lqd-highlight-txt">
                          {ab.title.split(" ").at(0)}
                        </span>
                        <span
                          className="bottom-10 left-0 lqd-highlight-inner bg-purple-100 style-TgRvE"
                          id="style-TgRvE"
                        >
                          <svg
                            className="lqd-highlight-brush-svg lqd-highlight-brush-svg-2"
                            width={233}
                            height={13}
                            viewBox="0 0 233 13"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="m.624 9.414-.312-2.48C0 4.454.001 4.454.002 4.454l.035-.005.102-.013.398-.047c.351-.042.872-.102 1.557-.179 1.37-.152 3.401-.368 6.05-.622C13.44 3.081 21.212 2.42 31.13 1.804 50.966.572 79.394-.48 113.797.24c34.387.717 63.927 2.663 84.874 4.429a1048.61 1048.61 0 0 1 24.513 2.34 641.605 641.605 0 0 1 8.243.944l.432.054.149.02-.318 2.479-.319 2.48-.137-.018c-.094-.012-.234-.03-.421-.052a634.593 634.593 0 0 0-8.167-.936 1043.26 1043.26 0 0 0-24.395-2.329c-20.864-1.76-50.296-3.697-84.558-4.413-34.246-.714-62.535.332-82.253 1.556-9.859.612-17.574 1.269-22.82 1.772-2.622.251-4.627.464-5.973.614a213.493 213.493 0 0 0-1.901.22l-.094.01-.028.004Z"
                              fill="#7150E8"
                            />
                          </svg>
                        </span>
                      </mark>
                      {ab.title.split(" ").slice(1).join(" ")}
                      &nbsp;🔔
                    </h2>
                  </div>
                  <div className="mb-30 iconbox d-flex flex-grow-1 position-relative iconbox-circle iconbox-icon-ripple lqd-unit-animation-done">
                    <div className="iconbox-icon-wrap me-2">
                      <div className="iconbox-icon-container inline-flex position-relative z-1 rounded-full text-24 w-30 h-30 text-accent bg-white shadow-md">
                        <i
                          aria-hidden="true"
                          className="fa fa-circle text-success"
                        />
                      </div>
                    </div>
                    <p className="text-13 leading-16 m-0 lqd-iconbox-heading">
                      {ab.desc}
                    </p>
                  </div>
                  <a href="#" className="text-dark">
                    <span
                      data-text="Learn More"
                      className="btn-txt fw-bold  text-decoration-underline"
                      style={{ textUnderlineOffset: "10px" }}
                    >
                      Learn More <i class="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrackingPartnersHome;
