import { useState } from "react";
import Collapsible from "./collapsible";

function Resume() {
    const [count, setCount] = useState(0)

    return(
        <div className="resume">
            <div className="summary">
            Adtech professional with several years of experience in both client facing roles and engineering roles. Special focus in web development and related technologies. Areas of expertise include Adtech, JavaScript, API development, client relations, and communicating high context technical concepts.
            </div>
            <div className="skills">
                <Collapsible label="Front-end Development" />
                <Collapsible label="Back-end Development" />
                <Collapsible label="Data Analysis" />
                <Collapsible label="Browser Automation/Testing" />
                <Collapsible label="Technical Documentation" />
                <Collapsible label="Troubleshooting Integrations" />
                <Collapsible label="Video & Audio Editing" />
            </div>
            <div className="work-history">
                <div className="wh-item">
                    <div className="wh-title">Senior Customer Success Engineer</div>
                    <div className="employer">Triplelift</div>
                    <div className="time-served">Jul 2022 - Feb 2023 • 8 mos</div>
                    <div className="wh-location">Greater NYC Area</div>
                    <div className="the-role">Onboarding new clients and serving as SME for the 1plusX platform. Full ownership of new integrations and opportunities for expansion/upsell, from a technical perspective. Supporting sales team as lead technical contact for new prospects.</div>
                </div>
                <div className="wh-item">
                    <div className="wh-title">Software Engineer</div>
                    <div className="employer">Criteo</div>
                    <div className="time-served">Jan 2020 - Jul 2022 • 2 yrs 7 mos</div>
                    <div className="wh-location">Greater NYC Area</div>
                    <div className="the-role">Maintain and develop code for web and mobile advertisements across 50-60 retailers; ensure solution is compatible with client websites. Translate ad layouts from the design team into front end code that fulfills client expectations; track ad views and clicks using the DOM, include functionality such as adding to cart or wishlist. Develop and contribute to internal applications for operational efficiency; fullstack and chrome extensions</div>
                </div>
                <div className="wh-item">
                    <div className="wh-title">Technical Account Manager</div>
                    <div className="employer">Criteo</div>
                    <div className="time-served">Jun 2018 - Jan 2020 • 1 yr 8 mos</div>
                    <div className="wh-location">Greater NYC Area</div>
                    <div className="the-role">The Technical Account Manager at Criteo is responsible for qualifying, integrating and maintaining accounts for some of the largest marketers in the world. This role serves as the main technical point of contact for Criteo’s clients as well as our Sales, Account Management, Product, Solutions Engineering, Analytics and Creative teams.</div>
                </div>
                <div className="wh-item">
                    <div className="wh-title">Customer Support Team Leader</div>
                    <div className="employer">Sonicbids</div>
                    <div className="time-served">Sep 2017 - Jun 2018 • 10 mos</div>
                    <div className="wh-location">Greater NYC Area</div>
                    <div className="the-role">Sonicbids is a promotional and booking platform for bands and artists. As Customer Support Team Leader, my primary goal is to ensure the user experience is smooth, flexible, and efficient. This involves traditional customer service roles; support ticket management, real-time customer service via Zendesk Chat, bug reporting/QA. In addition to this, I continuously review and report on user experience to identify ways we can improve our interface and workflow, as well as how we can improve our internal customer service practices. </div>
                </div>
                <div className="wh-item">
                    <div className="wh-title">Technical Analyst</div>
                    <div className="employer">LightSail Education</div>
                    <div className="time-served">Feb 2016 - Sep 2017 • 1 yr 8 mos</div>
                    <div className="wh-location">Greater NYC Area</div>
                    <div className="the-role">As a Technical Analyst, I am responsible for investigating any technical problems that customers experience and quickly providing a resolution. Primarily, this consists of communication through CRM systems (Zendesk, Salesforce) as well as phone and email. In the case of more complex issues or high priority customers, I am also responsible for traveling to schools to investigate details on-site; providing a warmer, more personal customer support experience. In addition to customer support, I am also responsible for producing and maintaining various instructional content, including documentation and video tutorials (voiceover, video editing, script writing). Finally, as one of the more experienced Technical Analysts at LightSail, I am responsible for training new hires to ensure they are well equipped both in their knowledge of LightSail’s technology, as well as the best practices in customer service. </div>
                </div>
                <div className="wh-item">
                    <div className="wh-title">Product Specialist</div>
                    <div className="employer">Adcade</div>
                    <div className="time-served">Jul 2015 - Dec 2015 • 6 mos</div>
                    <div className="wh-location">Greater NYC Area</div>
                    <div className="the-role">Customer facing SME for all things related to Adcade's adbuilding software, Epoch. This role focused on identifying and curating the resources necessary to facilitate a seamless onboarding experience for new customers. This was primarily accomplished through our tutorial video helpcenter, for which I managed the scripting, voiceover, video editing, and general production of new videos. </div>
                </div>
            </div>
        </div>
    )
}

export default Resume