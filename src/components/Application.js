import React from "react";
import Star from "./Star";
import InpSpec from "./InpSpec";
import SelSpec from "./SelSpec";

function Application() {
  return (
    <div id="container">
      <div id="formHeading">
        <b>
          Type 6:
          <br /> [See rule 13(1) and 26]
        </b>
      </div>
      <div className="description">
        Application for inclusion of name in the electoral roll for the first
        time due to the transfer of voter or any other constituency from any one
        constituency
      </div>
      In service <br />
      Electoral Registration Officer,
      <br />
      <br />
      <div className="row">
        <SelSpec text={"State"} options={["India", "Other"]} />
        <span className="space" />
        <SelSpec
          text={"District"}
          options={["East Godavari", "West Godavari", "Other"]}
        />
      </div>
      <br />
      <div className="row">
        Legislative Assembly / Parlimentary
        <br /> constituency
        <Star />
        <select className="sel">
          <option>East Godavari</option>
          <option>Other</option>
        </select>
      </div>
      <br /> I request that my name be included in electoral rolls for all the
      aforesaid areas. <br />
      <br />
      <ul className="radio">
        <li>
          <input type="radio" />
          First time voter
        </li>
        <li>
          <input type="radio" />
          Due to transfer from other meeting areas.
        </li>
      </ul>
      <br />
      <br />
      <p>
        Below are specifications in support of my claim to be included in the
        electoral rolls.
      </p>
      <br />
      <p className="description">Mandatory specifications:</p>
      <div className="specs">
        <InpSpec text={"(A) First Name"} pt="Enter First Name" />
        <br />
        <InpSpec text={"(B) Last Name"} pt="Enter Last Name" />
        <br />
        <InpSpec
          text={"(C) Name of Applicant's Relative"}
          pt="Enter Relative Name"
        />
        <br />
        <InpSpec
          text={"Nick Name of Applicant's Relative"}
          pt="Enter Nick Name"
        />
        <br />
        <SelSpec
          text={"(D) Type of the relationship"}
          options={["Daughter", "Son", "Nephew", "Niece", "Other"]}
        />
        <br />
        <div>
          (E) Date of birth (in the form of day/ month/ year) (if known)
          <Star />
          <input type="date" className="inp" />
        </div>
        <br />
        <SelSpec
          text={"(G) Applicant's gender"}
          options={["Male", "Female", "Other"]}
        />
      </div>
      <br />
      <br />
      <div className="description">
        (H) Current address, whose applicant is nominally resident
      </div>
      <div className="specs">
        <InpSpec text={"House Number"} pt="Enter House No." />
        <br />
        <InpSpec text={"Street / area / location"} pt="Enter location" />
        <br />
        <InpSpec text={"City / Village"} pt="Enter City / Village" />
        <br />
        <InpSpec text={"Post Office"} pt="Enter Post Office" />
        <br />
        <InpSpec text={"Pincode"} pt="Enter pincode" />
        <br />
        <SelSpec
          text={"State / Union Territory"}
          options={["India", "Other"]}
        />
        <br />
        <SelSpec
          text={"District"}
          options={["East Godavari", "West Godavari"]}
        />
        <br />
        Family / Neighbour Epic No.
        <input placeholder="Enter family number" className="inp" />
      </div>
      <br />
      <br />
      <div className="description">Optional specialties</div>
      <div className="specs">
        <span>(T) Disability (if any)</span>
        <br />
        <br />
        <div id="field">
          <span>
            <input type="checkbox" />
            Visual impairment
          </span>
          <span>
            <input type="checkbox" />
            Speech and hearing impairment
          </span>
          <span>
            <input type="checkbox" />
            Motion disabling
          </span>
          <span>
            <input type="checkbox" />
            Other
          </span>
          <input type="text" />
        </div>
        <br />
        (Th) Email ID (optional)
        <input placeholder="Enter mail" className="inp" />
        <br />
        <br />
        (D) mobile number (optional)
        <span>+91</span>
        <input placeholder="Enter phone number" className="inp" />
        <br />
      </div>
      <br />
      <br />
      <div className="description">
        Upload supporting documents (Supported formats .jpg, .png, .bmp, .jpeg)
        (max. 2MB)
        <span id="sup-doc">
          <a href="https://voterportal.eci.gov.in/faq" target="_blank" rel="noreferrer">List of supported documents</a>
        </span>
      </div>
      <div className="specs upload">
        <div>
          Your photo
          <Star />
          <br />
          <input type="file" />
        </div>
        <div>
          Age Proof
          <Star />
          <br />
          <input type="file" />
          Document Type
          <Star />
          <select className="sel">
            <option>Picture</option>
            <option>Pdf</option>
          </select>
        </div>
        <div>
          Address Proof
          <Star />
          <br />
          <input type="file" />
          Document Type
          <Star />
          <select className="sel">
            <option>Picture</option>
            <option>Pdf</option>
          </select>
        </div>
        <br />
      </div>
      <br />
      <br />
      <p className="description">Declaration</p>
      I declare that according to my best knowledge and belief <br /> I am a
      citizen of India and of my birth.
      <br />
      <br />
      <div className="specs">
        City / Village:
        <input type="text" className="inp" required={true} />
        <br />
        <br />
        <div className="specss">
          <SelSpec text={"State"} options={["India", "Other"]} />
          <span className="space" />
          <SelSpec
            text={"District"}
            options={["East Godavari", "West Godavari", "Other"]}
          />
        </div>
        <br />
        Date
        <Star />
        <input type="date" className="inp" />
      </div>
      <br />
      <p>
        (ii) I am a nominally resident in the address given in the above (date,
        month, year) above:
      </p>
      <br />
      <p>
        I have not applied to include my name in the electoral roll for any
        other constituency.
      </p>
      <br />
      <div className="specs">
        <ul className="radio">
          <li>
            <input type="radio" />
            (iv) My name has not been already included in the electoral roll for
            this or any other assembly / parliamentary constituency
          </li>
          <br />
          Or
          <br />
          <br />
          <li>
            <input type="radio" />
            My name would have been included in electoral rolls of the State's
            constituency, in which I was already residing in the address
            mentioned below, and if so, then I request that it be removed from
            that electoral roll. Go.
          </li>
        </ul>
      </div>
      <br />
      <br />
      <div className="row">
        <InpSpec text={"Location"} pt={"Enter Location"} />
        <span className="space" />
        Date:
        <input type="date" className="inp" />
      </div>
      <br />
      <br />
      <p>
        I am afraid that the statement or declaration, which is false, to whom I
        know it or believe that it is false or I do not believe in being true,
        the People's Representation Act, 1950 (43 of 1950 ) Is punishable under
        section 31
      </p>
      <br />
      <br />
      <div className="row xspec">
        Captcha
        <span className="llspace" />
        <button className="btn lrspace">Refreshhhhhhhhh</button>
        <button className="btn">Refresh</button>
        <input type="text" className="inp" required={true} />
      </div>
      <br />
      <br />
      <div className="centered">
        <input type="reset" className="gbtn lrspace" value="Reset" />
        <input type="submit" className="gbtn" value="Submit" />
      </div>
    </div>
  );
}

export default Application;
