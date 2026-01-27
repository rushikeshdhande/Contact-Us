import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);


    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message || "Submission failed");
        setResult("");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      toast.error("Something went wrong!");
      setResult("");
    }
  };

return (
  <div
    id="Contact"
    className="w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-gray-100"
  >
    <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
      Contact{" "}
      <span className="underline underline-offset-4 decoration-1 font-light">
        With Us
      </span>
    </h1>
    <p className="text-center text-gray-500 mb-8 max-w-md">
      Ready to Make a Move? Let's Build Your Future Together
    </p>

    <form
      onSubmit={onSubmit}
      className="w-full max-w-2xl text-gray-600 px-4"
    >
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-sm font-medium">Your Name</label>
          <input
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="text"
            name="Name"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-sm font-medium">Your Email</label>
          <input
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="email"
            name="Email"
            placeholder="Your Email"
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none focus:outline-none focus:ring-1 focus:ring-blue-200"
          name="Message"
          placeholder="Message"
          required
        ></textarea>
      </div>

      <div className="flex justify-center">
        <button className="bg-blue-600 text-white py-2 px-12 rounded">
          {result ? result : "Send Message"}
        </button>
      </div>
    </form>
  </div>
);

};

export default Contact;
