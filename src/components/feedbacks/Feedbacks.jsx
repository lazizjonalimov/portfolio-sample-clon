import React from "react";
import "./feedbacks.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const Feedbacks = () => {
    return (
        <section id="feedbacks">
            <h5>Review From Clients</h5>
            <h2>Feedbacks</h2>
            <div className="container feedbacks__container">
                <article className="feedback">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Avatar One" />
                        <h5 className="client__name">Julia Johns</h5>
                        <small className="client__review">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Numquam facere officia rem, ex maxime eius
                            dolores ipsa impedit non! Sapiente porro aliquid
                            modi consequatur voluptatibus impedit ad quas culpa
                            suscipit?
                        </small>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Feedbacks;
