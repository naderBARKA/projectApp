import React from "react";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";

import "./Home.css";
const Home = () => {
  return (
    <div>
      <div>
        <div className="header" style={{ backgroundImage: `url(${image2})` }}>
          <h1 className="psychiatry"> Psychiatry</h1>
          <marquee>
            <h1 className="PsyApp">PsyApp</h1>
          </marquee>
          <h2 className="Welcom">WELCOME TO A NEW ERA IN PSYCHIATRY</h2>
        </div>
        <div>
          <div>
            <div className="h1">
              
              <h1 className="OurSev">our services</h1>
            </div>
            <div>
            <div className="container-services">
              <img className="image1" src={image3} />
            </div>
            <div className="Services">
              <h4 className="text1">
                <h2 className="title">PSYCHIATRIC DIAGNOSIS</h2>A psychiatric
                disorder is a mental illness diagnosed by a mental health
                professional that greatly disturbs your thinking, moods, and/or
                behavior and seriously increases your risk of disability, pain,
                death, or loss of freedom. Psychiatric Services recognizes that
                provision of high-quality care involves collaboration among a
                variety of professionals, frequently working as a team. Authors
                of research reports published in the journal include
                psychiatrists, psychologists, nurses, social
                workers, drug and alcohol treatment counselors, economists,
                policy analysts, and professionals in related systems such as
                criminal justice and welfare systems. In the mental health
                field, the current focus on patient-centered, recovery-oriented
                care and on dissemination of evidence-based practices is
                transforming service delivery systems at all levels. Research
                published in Psychiatric Services contributes to this
                transformation.
              </h4>
            </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img className="image4" src={image4} />
          </div>
          <div className="Medical">
            <h4 className="text1">
              <h2 className="title">
                PSYCHOPHARMACOLOGY (MEDICATION MANAGEMENT)
              </h2>
              Psychopharmacology is the study of the use of medications in
              treating mental disorders. The complexity of this field requires
              continuous study in order to keep current with new advances.
              Psychopharmacologists need to understand all the clinically
              relevant principles of pharmacokinetics (what the body does to
              medication) and pharmacodynamics (what the medications do to the
              body).
            </h4>
          </div>
        </div>
        <div>
          <div>
            <img className="image5" src={image5} />
          </div>
          <div className="DoctorSevice">
            <h4 className="text1">
              <h2 className="title">
                OUR DOCTORS INTERVENTION/CARE COORDINATION
              </h2>
              Eating disorders often do not occur in isolation, but in the
              context of multiple complex issues, such as medical illness,
              substance abuse, or severe mental illness. In our current system
              of highly specialized and fragmented care, many families receive
              conflicting advice on the best treatment plan for their loved
              ones. we have several years of experience working across all
              levels of care from high acuity Inpatient Units at the University
              of Iowa and the Eating Recovery Center to Outpatient treatment.
              For families unsure of what to do in a crisis, wewill review the
              clinical information, speak with the relevant treatment providers,
              and formulate a comprehensive treatment plan at the appropriate
              level of care.
            </h4>
          </div>
        </div>

        <div>
          <img className="image6" src={image6}></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
