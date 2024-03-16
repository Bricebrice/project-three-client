import { useState } from "react";
import contactService from "../services/contact.service";

function ContactForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    subject: "",
    message: "",
    firstName: "",
    lastName: "",
  });
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await contactService.sendEmail(form);
      console.log("Send email response:", response.data);
      setSuccessMessage("Your message has been sent succesfully!");
      setForm({
        email: "",
        password: "",
        subject: "",
        message: "",
        firstName: "",
        lastName: "",
      });
      // reset error  message to avoid both of them to be displayed at the same time
      setErrorMessage(undefined);
    } catch (error) {
      if (error.response) {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
        // reset success message to avoid both of them to be displayed at the same time
        setSuccessMessage(undefined);
        return;
      }
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
        <div className="max-w-screen-xl mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
            Contact us
          </h2>
        </div>
        {successMessage && (
          <div className="flex justify-center">
            <div
              className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Success!</span> {successMessage}
              </div>
            </div>
          </div>
        )}{" "}
        <form
          onSubmit={handleContactFormSubmit}
          className="max-w-sm mx-auto flex flex-col items-center mb-5 rounded p-7"
        >
          <div className="mb-5 flex gap-3">
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium"
              >
                First name:
              </label>
              <input
                className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5 "
                type="text"
                name="firstName"
                id="firstName"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium"
              >
                Last name:
              </label>
              <input
                className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5 "
                id="lastName"
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email:
            </label>
            <input
              className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5 "
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-5">
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">
              Subject:
            </label>
            <input
              className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5 "
              id="subject"
              type="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-5">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message:
            </label>
            <textarea
              rows="4"
              className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5 "
              id="message"
              type="message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            className="bg-orange-400 border-2 shadow border-orange-500 rounded w-full py-2.5 hover:bg-orange-600 hover:border-orange-700 hover:border-2"
            type="submit"
          >
            Send
          </button>
        </form>
        {errorMessage && (
          <div className="flex justify-center">
            <div
              className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Error:</span> {errorMessage}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
