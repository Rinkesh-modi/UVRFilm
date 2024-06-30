import React from "react";
import FooterVideo from "../../assets/videos/footerVideo.mp4";
import "./footer.css";

function Footer() {
  return (
    <div className="footerSection video-container">
      <video src={FooterVideo} autoPlay loop muted></video>
      <div className="footerContent p-20 pb-0 w-full h-fit text-white absolute bottom-0">
        <div className="grid sm:grid-cols-12 gap-x-10">
          <div className="col-span-3">
            <h1 className="text-xl font-normal tracking-wider mb-8 custom-border pb-4">
              Services
            </h1>
            <ul className="text-sm font-light tracking-wide leading-7">
              <li>Comprehensive Channel Assistance</li>
              <li>YouTube Video Production</li>
              <li>Custom Ads Creation and Management </li>
              <li>YouTube Channel Mentorship</li>
              <li>Music Distribution Solutions</li>
            </ul>
          </div>
          <div className="col-span-3">
            <h1 className="text-xl font-normal tracking-wider mb-8 custom-border pb-4">
              Office
            </h1>
            <p className="text-sm font-light tracking-wide leading-6 mb-3 w-4/5">
              Luby Circular Rd, Jay Prakash Nagar, Jharudih, Dhanbad, Jharkhand
              826001
            </p>

            <a
              className="text-sm font-light tracking-wide leading-6 border-b-2 border-rose-500"
              href="mailto:thegreatuttam@gmail.com"
            >
              thegreatuttam@gmail.com
            </a>
            <p className="mt-3">
              <a
                className="text-sm font-light tracking-wide leading-6"
                href="tel:+ 0123456789"
              >
                +91-0123456789
              </a>
            </p>
          </div>
          <div className="col-span-2">
            <h1 className="text-xl font-normal tracking-wider mb-8 custom-border pb-4">
              Links
            </h1>
            <ul className="text-sm font-light tracking-wide leading-7 uppercase">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-span-4">
            <h1 className="text-xl font-normal tracking-wider mb-8 custom-border pb-4">
              Newsletter
            </h1>
            <div className="relative mb-10">
              <input
                type="email"
                placeholder="Email address"
                autocomplete="email"
                aria-label="Email address"
                class="block w-full rounded-2xl border border-neutral-300 bg-slate py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
              />
              <div class="absolute inset-y-1 right-1 flex justify-end">
                <button
                  type="submit"
                  aria-label="Submit"
                  class="flex aspect-square h-full items-center justify-center rounded-xl bg-neon-blue text-white transition hover:bg-neutral-800"
                >
                  <svg viewBox="0 0 16 6" aria-hidden="true" class="w-4">
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div class="lg:flex items-center gap-10">
              <a href="https://www.facebook.com">
                <div class="text-base text-white duration-300 ease-linear transition-all hover:text-rose">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 320 512"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </div>
              </a>
              <a href="https://twitter.com">
                <div class="text-base text-white duration-300 ease-linear transition-all hover:text-rose">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </div>
              </a>
              <a href="https://www.instagram.com">
                <div class="text-base text-white duration-300 ease-linear transition-all hover:text-rose">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </div>
              </a>
              <a href="https://www.pinterest.com">
                <div class="text-base text-white duration-300 ease-linear transition-all hover:text-rose">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 384 512"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright border-t-2 border-white p-7 text-center tracking-wide mt-14">
          <p className="text-sm">UVR Film &copy; 2024 - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
