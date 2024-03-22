import logo from "../../src/assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                className="h-8 me-2"
                alt="VeganEase Planner Logo"
              />
              <span className="self-center text-2xl whitespace-nowrap text-white">
                VeganEase Planner
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
            <div className="pl-2 border-s">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Ricardo Bonilla
              </h2>
              <ul className="text-gray-400 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/ric-vazq"
                    target="_blank"
                    className="text-gray-400 hover:text-green-500 dark:hover:text-white flex items-center"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ms-1"> Github </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ric-vazq/"
                    target="_blank"
                    className="text-gray-400 hover:text-green-500 dark:hover:text-white flex items-center"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
                        clipRule="evenodd"
                      />
                      <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
                    </svg>

                    <span className="ms-1"> Linkedin </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="ml-4 pl-2 border-s">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Brice Cabioch
              </h2>
              <ul className="text-gray-400 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/Bricebrice"
                    target="_blank"
                    className="text-gray-400 hover:text-green-500 dark:hover:text-white flex items-center"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ms-1"> Github </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/bricecabiochdasilva/"
                    target="_blank"
                    className="text-gray-400 hover:text-green-500 dark:hover:text-white flex items-center"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
                        clipRule="evenodd"
                      />
                      <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
                    </svg>

                    <span className="ms-1"> Linkedin </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
        <div className="text-center ">
          <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              VeganEase Planner™
            </a>
            . All rights reserved. Made with love 💚.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
