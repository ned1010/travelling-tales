import React, { useState } from "react";
import "./Contact.css";

function ContactForm() {
  const [data, setData] = useState({
    fName: "",
    lName: "",
    phone: "",
    email: "",
    question: "",
  });

  const [isSubmited, setIsSubmitted] = useState(false);

  const { fName, lName, phone, email, question } = data;

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (fName.length && lName.length > 4 && question.length>15){
        const response = await fetch(
          "https://v1.nocodeapi.com/padma/google_sheets/WSDhelWQVYRJFcCu?tabId=Sheet1",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([
              [fName, lName, phone, email, question, new Date().toLocaleString()],
            ]),
          }
        );
  
        await response.json();
        setData({
          ...data,
          fName: "",
          lName: "",
          phone: "",
          email: "",
          question: "",
        });
        setIsSubmitted(true);
      } else {
        alert("Send a Valid Question");
      }
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3 className="contact-title">Contact Us</h3>
      <div className="input-control">
        <input
          className="input-item"
          name="fName"
          type="text"
          placeholder="First Name"
          autoComplete="off"
          value={fName}
          onChange = {handleChange}
        />
        <input
          className="input-item"
          name="lName"
          type="text"
          placeholder="Second Name"
          autoComplete="off"
          value={lName}
          onChange = {handleChange}
        />
        <input
          className="input-item"
          name="phone"
          type="phone"
          placeholder="Phone Number"
          autoComplete="off"
          value={phone}
          onChange = {handleChange}
        />
        <input
          className="input-item"
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange = {handleChange}
        />
        <textarea
          className="input-item"
          name="question"
          type="text"
          rows="4"
          placeholder="Send us your questions"
          autoComplete="off"
          value={question}
          onChange = {handleChange}
        ></textarea>
      </div>
      <div className="contact-btns">
        <input type="submit" name="submit" class="btn" value={isSubmited ? "Sent" : "Send"} />
      </div>
    </form>
  );
}

export default ContactForm;
