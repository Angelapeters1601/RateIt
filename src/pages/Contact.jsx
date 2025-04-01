import { useState, useRef } from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
import Button from "../ui/Button";

function ContactUs (){
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log("Submitting form...");

    emailjs
      .sendForm(
        "service_qhkkbzp", 
        "template_rvcihgf", 
        e.target, 
        "1rD7rvESdpGFoWWTN"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setStatus(`Failed to send message: ${error.text || "Please try again."}`);
      });
  };

  return (
    <div className="max-w-3xl mx-auto font-serif tracking-wide p-6 border border-gray-200 rounded-lg shadow-sm my-10">
      <h1 className="text-l uppercase font-bold text-center text-gray-900 mb-6">Contact Us</h1>
      <p className="text-center text-sm text-gray-600 mb-6">
        Have any questions or feedback? Feel free to reach out to us using the details below or send us a message through the contact form.
      </p>

      <div className="space-y-4 text-gray-700">
        <div className="flex items-center space-x-3">
          <MapPinIcon className="h-6 w-6 text-primary text-sm" />
          <span className="text-sm">Lagos, Nigeria</span>
        </div>
        <div className="flex items-center space-x-3">
         <PhoneIcon className="h-6 w-6 text-primary text-sm" />
        <a href="tel:+2348104352294" className="text-sm">+234 810 435 2294</a>
        </div>
        <div className="flex items-center space-x-3">
            <EnvelopeIcon className="h-6 w-6 text-primary text-sm" />
            <a href="mailto:angelnwattah@gmail.com" className="text-sm underline">angelnwattah@gmail.com</a>
        </div>

      </div>

      <p className="text-gray-600 mt-6 text-sm">Fill out the form below and we will get back to you as soon as possible.</p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full text-sm p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full text-sm p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full text-sm p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
        <Button
          type="primary"
          className=" w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition"
        >
          Send Message
        </Button>
      </form>

      {status && <p className="text-center text-sm mt-4 text-gray-700">{status}</p>}
    </div>
  );
};

export default ContactUs;
