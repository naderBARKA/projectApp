import React from "react";
import img11 from "./drugs/img11.jpg";
import img22 from "./drugs/img22.jpg";
import img33 from "./drugs/img33.jpg";
import img44 from "./drugs/img44.jpg";
import "./Medecament.css";

const Medecament = () => {
  return (
    <div className="body-m">
      <div className="med">
        <h1 className="title2">why we need drugs ? </h1>
        <h4 className="text2">
          Psychotropic drugs are one of the ways to treat mental disorders.
          Their goal is to reduce the person's suffering and lessen the
          disorder, so that they can have the best possible life
          <h2 className="title2">
            {" "}
            The twelve proposals of the Institut Montaigne Short term
          </h2>
          <h4 className="text2">
            <h2 className="title2">Proposal 1:</h2> implement the drug
            evaluation reform
          </h4>
          <h4 className="text2">
            <h2 className="title2">Proposal 2:</h2> set up a priority evaluation
            procedure from the marketing authorization (AMM), for products that
            have benefited from a temporary authorization for use (ATU)
          </h4>
          <h4 className="text2">
            <h2 className="title2">Proposal 3:</h2> reform the criteria for
            inclusion on the “extra list” in hospitals and more regularly adapt
            the prices of homogeneous groups of stays
          </h4>
          <h4 className="text2">
            <h2 className="title2">Proposal 4: </h2>make the attractiveness of
            France in terms of clinical research and biopharmaceutical
            production an economic priority Medium term
          </h4>
          <h4 className="text2">
            {" "}
            <h2 className="title2">Proposal 5:</h2> improve the functioning of
            the High Authority for Health (HAS)
          </h4>
          <h4>
            <h2 className="title2">Proposal 6:</h2> ensure multi-annual
            management of the national objective for health insurance
            expenditure (ONDAM)
          </h4>
          <h4 className="text2">
            <h2 className="title2">Proposal 7:</h2> experiment with new funding
            models based on real-life registers with, in particular, the
            development of a European Health Data Hub.multi-annual age of the
            national objective for health insurance expenditure
          </h4>
          <h4 className="text2">
            <h2 className="title2">Proposal 8:</h2> ensure the reimbursement of
            medicinal products which claim to be innovative as soon as the
            marketing authorization (AMM) is grantedmulti-annual age of the
            national objective for health insurance expenditure (ONDAM)
          </h4>
          <h4 className="text2">
            <h2 className="title2">Proposal 9:</h2> promote the development of
            digital prescription assistance tools in order to improve the proper
            use of therapeutic innovations Long-term
          </h4>
          <h4 className="text2">
            <h2 className="title2">Proposal 10:</h2> bring together political
            and administrative officials, health authorities, patients, health
            professionals and pharmaceutical companies once a year to promote
            political arbitration
          </h4>
          <h4 className="text2">
            <h2 className="title2">Proposal 11:</h2> create an ecosystem and
            funding favorable to the emergence of large French biotechnology
            companies capable of taking over from public research to develop
            innovations
          </h4>
          <h4 className="text2">
            <h2 className="title2">Proposal 12:</h2> acquire coherent health
            innovation management tools at European level by pooling evaluation
            and sharing information
          </h4>
        </h4>
      </div>
      <div>
        <img src={img11} className="images" />
      </div>
      <div>
        <img src={img22} className="images" />
      </div>
      <div>
        <img src={img33} className="images" />
      </div>
      <div>
        <img src={img44} className="images" />
      </div>
    </div>
  );
};

export default Medecament;
