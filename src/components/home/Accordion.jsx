import React, { useState } from "react";
import DownAngle from "../../assets/img/svg/arrow-down-s-line.svg"

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button className="btn-toggle-show p-1" onClick={toggleAccordion}>
        <span className="accor-text" data-aos="fade-up">
          {title}
        </span>
        <img
          src={DownAngle}
          alt=""
          className={`fa-2xl ${isOpen ? "rotate" : ""}`}
        />
      </button>
      <div className={`inner-content ${isOpen ? "" : "para-hide"} p-1`}>
        {content}
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="accordion-main">
      <AccordionItem
        title="Can I purchase for commercial work?"
        content={
          <>
            <p className="main-heading-text">
              <span style={{ paddingRight: "10px" }}>01</span> Can I purchase
              for commercial work?
            </p>
            <p className="text-show">
              Yes, you can purchase images or other creative work for commercial
              use. Many photographers, artists, and designers offer their work
              for commercial licensing, allowing businesses to use the content
              in their marketing materials, websites, advertisements, and other
              commercial projects. When purchasing content for commercial use,
              it's essential to ensure that you have the appropriate licensing
              rights. This typically involves acquiring a commercial license
              from the creator or purchasing royalty-free stock images from
              reputable stock photo websites.
            </p>
            <ul className="list-acordo">
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>quisquam laboriosam minus magnam obcaecati at.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Nobis ab exercitationem quidem eum! Rem, alias?</li>
            </ul>
          </>
        }
      />

      <AccordionItem
        title="How does the daily update work?"
        content={
          <>
            <p className="main-heading-text">
              <span style={{ paddingRight: "10px" }}>01</span>
              How does the daily update work?
            </p>
            <div className="text-show">
              <ol>
                <li>
                  Skill Development: If you've acquired new skills or expanded
                  your expertise, you can update your portfolio to reflect these
                  developments.For example, if you've learned a new software or
                  technique,you can showcase projects that demonstrate your
                  proficiency in those areas.
                </li>
                <li>
                  {" "}
                  Client Testimonials: If you receive positive feedback or
                  testimonials from clients about your work, consider adding
                  them to your portfolio.Testimonials can provide credibility
                  and showcase the value you bring to commercial projects.
                </li>
                <li>
                  Blog or News Section: Adding a blog or news section to your
                  ortfolio allows you to share updates, industry insights, or
                  project highlights with your audience. Regularly publishing
                  new content in this section can help keep your portfolio fresh
                  and engaging.
                </li>
              </ol>
            </div>
          </>
        }
      />

      <AccordionItem
        title="Do you use long term contracts?"
        content={
          <>
            <p className="main-heading-text">
              <span style={{ paddingRight: "10px" }}>01</span>
              Do you use long term contracts?
            </p>
            <p className="text-show">
              For instance, if you have worked with a client for an extended
              period or have engaged in ongoing projects with a company, you can
              include samples from those projects in your portfolio. This can
              showcase your ability to sustain long-term client relationships,
              deliver consistent results, and handle complex or extended
              assignments.Including such long-term contract projects in your
              portfolio can provide potential clients or employers with a better
              understanding of the breadth and depth of your experience, as well
              as your ability to manage and deliver on long-term commitments.
            </p>
            <ul className="list-acordo">
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>quisquam laboriosam minus magnam obcaecati at.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Nobis ab exercitationem quidem eum! Rem, alias?</li>
            </ul>
          </>
        }
      />

      <AccordionItem
        title="Can you work full time?"
        content={
          <>
            <p className="main-heading-text">
              <span style={{ paddingRight: "10px" }}>01</span>
              Can you work full time??
            </p>
            <p className="text-show">
              To implement a chatbot on your portfolio website, you can explore
              various platforms or tools that offer chatbot building
              capabilities. These platforms often provide intuitive interfaces
              and integration options to tailor the chatbot's functionality to
              your specific needs.Remember that while chatbots can be helpful in
              certain scenarios, it's important to provide a human touch and
              personalized interaction wherenecessary. Depending on the
              complexity of user queries or specific requests, it's valuable to
              have contact information readily available for users to reach out
              to you directly.
            </p>
          </>
        }
      />
    </div>
  );
};

export default Accordion;
