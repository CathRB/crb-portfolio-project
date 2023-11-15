import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import BlackPadBackground from "../assets/BlackPadBackground.jpg";
import { useState } from "react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);

  const [formInfo, setFormInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleChange = (key, value) => {
    setFormInfo({
      ...formInfo,
      [key]: value,
    });
  };

  return (
    <FormContainer>
      <form
        onSubmit={handleSubmit}
        style={{
          background: `url(${BlackPadBackground})`,
          backgroundSize: "cover",
        }}
      >
        <p>CONTACT</p>
        <p>Let’s work together</p>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@hotmail.com"
          value={formInfo.email}
          required
          onChange={(event) =>
            handleChange(event.target.id, event.target.value)
          }
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <input
          id="firstName"
          type="text"
          name="firstName"
          placeholder="Your first name"
          value={formInfo.firstName}
          required
          onChange={(event) =>
            handleChange(event.target.id, event.target.value)
          }
        />
        <ValidationError
          prefix="FristName"
          field="firstName"
          errors={state.errors}
        />

        <input
          id="lastName"
          type="text"
          name="lastName"
          placeholder="Your last name"
          value={formInfo.lastName}
          required
          onChange={(event) =>
            handleChange(event.target.id, event.target.value)
          }
        />
        <ValidationError
          prefix="LastName"
          field="lastName"
          errors={state.errors}
        />

        <textarea
          id="message"
          type="text"
          name="message"
          placeholder="Your message"
          value={formInfo.message}
          required
          onChange={(event) =>
            handleChange(event.target.id, event.target.value)
          }
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting}
          onClick={(event) => {
            event.preventDefault();
            setFormInfo({
              email: "",
              firstName: "",
              lastName: "",
              message: "",
            });
          }}
        >
          {" "}
          <span>📧</span> Send
        </button>
      </form>
    </FormContainer>
  );
};

export default ContactForm;

const FormContainer = styled.main`
  & form {
    @media (max-width: 1200px) {
      height: 900px;
      width: 850px;
      margin-top: 50px;
    }

    @media (max-width: 670px) {
      height: 430px;
      width: 300px;
      margin-top: 25px;
    }

    position: absolute;
    top: 61%;
    left: 52.5%;
    transform: translate(-50%, -50%);
    height: 720px;
    width: 500px;
    text-align: center;
  }

  & input {
    @media (max-width: 1200px) {
      width: 600px;
      height: 50px;
    }

    @media (max-width: 670px) {
      width: 250px;
      height: 25px;
    }

    border: none;
    margin-bottom: 10px;
    margin-top: 10px;
    width: 400px;
    height: 35px;
    padding-left: 5px;
  }

  & textarea {
    @media (max-width: 1200px) {
      width: 600px;
      height: 450px;
    }

    @media (max-width: 670px) {
      width: 250px;
      height: 130px;
    }
    border-top: none;
    border-left: none;
    border-right: none;
    margin-bottom: 10px;
    margin-top: 10px;
    width: 450px;
    height: 375px;
  }

  & p {
    @media (max-width: 1200px) {
      font-size: 3em;
      margin-left: 5px;
      width: 850px;
    }

    @media (max-width: 670px) {
      font-size: 1.5em;
      width: 300px;
    }
    width: 300px;
    color: pink;
    font-size: 1.9em;
    font-style: bold;
    margin-left: 105px;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  & button {
    @media (max-width: 1200px) {
      width: 250px;
      height: 50px;
      margin-top: 2px;
      font-size: 1.5em;
    }

    @media (max-width: 670px) {
      width: 120px;
      height: 35px;
      margin-top: 2px;
      font-size: 1em;
    }

    width: 115px;
    height: 35px;
    margin-top: 2px;
    font-size: 1.1em;
    border-radius: 12px;
    background-color: #57d1c9;
    opacity: 0.9;
  }

  & span {
    @media (max-width: 1200px) {
      font-size: 1.3em;
    }

    font-size: 1.1em;
  }
`;
