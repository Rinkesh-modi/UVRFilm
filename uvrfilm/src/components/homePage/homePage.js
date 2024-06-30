import React from "react";
import VideoBg from "../../assets/videos/heroVideo.mp4";
import serviceImg from "../../assets/images/img.png";
import serimg from "../../assets/images/ser-img.jpg";
import t1 from "../../assets/images/t1-modified.png";
import TestimonialCard from "../testimonialcard/TestimonialCard";

function HomePage() {
  return (
    <div>
      <div className="heroSection">
        <video src={VideoBg} autoPlay loop muted></video>
        <div className="w-full absolute top-80">
          <div className="flex flex-col justify-center align-middle text-center text-white text-poppins">
            <h1 className="text-6xl font-bold">
              Your All-in-One Music and <br /> YouTube Agency
            </h1>
            <h2 className="m-5 font-medium">
              From Resolving Complex Channel Issues and Offering Professional
              Video Production to Comprehensive Ad Creation and
              <br /> Strategic Music Distribution, We Provide All the Services
              You Need for Your Success
            </h2>
          </div>
        </div>
      </div>
      <div className="aboutUsSection bg-black min-h-screen">
        <div className="w-10/12 min-h-screen mx-auto grid sm:grid-cols-12 pt-40">
          <div className="sm:col-span-6">
            <div className="flex flex-col justify-center align-middle text-left text-white text-poppins">
              <h1 className="m-5 mb-0 text-5xl font-bold">Our Story</h1>
              <h2 className="m-5 text-cyan max-w-[533px] font-extralight tracking-wide">
                Founded with a passion for music and digital content, our agency
                offers end-to-end solutions for YouTube creators and musicians.
                From troubleshooting channel issues to producing professional
                videos and distributing your music globally, we provide the
                expertise and support you need to thrive.
              </h2>
              <a
                class="m-5 font-medium text-rose-500 hover:text-white duration-300 transition-all ease-linear"
                href="/"
              >
                MORE ABOUT US
              </a>
            </div>
          </div>
          <div className="sm:col-span-6">
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VLdx-vgLQZ0?si=ETajDA9nVse6e2oE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="serviceSection bg-service min-h-screen pb-20 relative">
        <div className="bg-black w-full rounded-sm flex flex-col justify-center align-middle text-center text-white text-poppins">
          <h1 className="m-5 mb-0 text-5xl font-bold text-white pt-20">
            Our Services
          </h1>
          <h2 className="m-5 text-cyan font-extralight tracking-wide mb-100">
            our team of experts is dedicated to helping you achieve your
            creative goals
          </h2>
          <div className="w-8/12 mx-auto rounded bg-white mt-10 pt-10 z-20">
            <div className="service-card rounded l-bg-rose w-10/12 mx-auto h-80 m-10 mb-2 grid sm:grid-cols-12">
              <div className="sm:col-span-5">
                <img src={serimg} className="service-l-img" alt="" />
              </div>
              <div className="sm:col-span-7 text-left">
                <h1 className="m-2 mb-0 text-2xl font-bold text-black pt-10">
                  Comprehensive Channel Assistance
                </h1>
                <h2 className="m-2 text-sm text-cyan font-extralight tracking-wide">
                  At UVR Film, we provide dedicated support to resolve any
                  issues your YouTube channel faces, ensuring seamless operation
                  with our expert guidance and solutions. Count on us for
                  thorough technical troubleshooting and strategic advice
                  tailored to optimize your platform's performance. Our goal is
                  to empower you with the confidence and tools to navigate
                  challenges effectively, fostering sustained growth and success
                  in the dynamic digital landscape.
                </h2>
                <button className="m-2 p-2 border bg-blue-500 rounded text-sm hover:bg-blue-600  duration-300 transition-all ease-linear">
                  <a href="/">Read more</a>
                </button>
              </div>
            </div>
            <div className="service-card rounded r-bg-rose w-10/12 mx-auto h-80 m-10 mb-2 grid sm:grid-cols-12">
              <div className="sm:col-span-7 text-left">
                <h1 className="m-2 mb-0 text-2xl font-bold text-black pt-10">
                  Comprehensive Channel Assistance
                </h1>
                <h2 className="m-2 text-sm text-cyan font-extralight tracking-wide">
                  At UVR Film, we provide dedicated support to resolve any
                  issues your YouTube channel faces, ensuring seamless operation
                  with our expert guidance and solutions. Count on us for
                  thorough technical troubleshooting and strategic advice
                  tailored to optimize your platform's performance. Our goal is
                  to empower you with the confidence and tools to navigate
                  challenges effectively, fostering sustained growth and success
                  in the dynamic digital landscape.
                </h2>
                <button className="m-2 p-2 border bg-blue-500 rounded text-sm hover:bg-blue-600  duration-300 transition-all ease-linear">
                  <a href="/">Read more</a>
                </button>
              </div>
              <div className="sm:col-span-5">
                <img src={serimg} className="service-r-img" alt="" />
              </div>
            </div>
            <div className="service-card rounded l-bg-rose w-10/12 mx-auto h-80 rounded-l-full m-10 mb-2 grid sm:grid-cols-12">
              <div className="sm:col-span-5">
                <img src={serviceImg} className="service-l-img" alt="" />
              </div>
              <div className="sm:col-span-7 text-left">
                <h1 className="m-2 mb-0 text-2xl font-bold text-black pt-10">
                  Comprehensive Channel Assistance
                </h1>
                <h2 className="m-2 text-sm text-cyan font-extralight tracking-wide">
                  At UVR Film, we provide dedicated support to resolve any
                  issues your YouTube channel faces, ensuring seamless operation
                  with our expert guidance and solutions. Count on us for
                  thorough technical troubleshooting and strategic advice
                  tailored to optimize your platform's performance. Our goal is
                  to empower you with the confidence and tools to navigate
                  challenges effectively, fostering sustained growth and success
                  in the dynamic digital landscape.
                </h2>
                <button className="m-2 p-2 border bg-blue-500 rounded text-sm hover:bg-blue-600  duration-300 transition-all ease-linear">
                  <a href="/">Read more</a>
                </button>
              </div>
            </div>
            <div className="service-card rounded r-bg-rose w-10/12 mx-auto h-80 rounded-r-full m-10 mb-20 grid sm:grid-cols-12">
              <div className="sm:col-span-7 text-left">
                <h1 className="m-2 mb-0 text-2xl font-bold text-black pt-10">
                  Comprehensive Channel Assistance
                </h1>
                <h2 className="m-2 text-sm text-cyan font-extralight tracking-wide">
                  At UVR Film, we provide dedicated support to resolve any
                  issues your YouTube channel faces, ensuring seamless operation
                  with our expert guidance and solutions. Count on us for
                  thorough technical troubleshooting and strategic advice
                  tailored to optimize your platform's performance. Our goal is
                  to empower you with the confidence and tools to navigate
                  challenges effectively, fostering sustained growth and success
                  in the dynamic digital landscape.
                </h2>
                <button className="m-2 p-2 border bg-blue-500 rounded text-sm hover:bg-blue-600  duration-300 transition-all ease-linear">
                  <a href="/">Read more</a>
                </button>
              </div>
              <div className="sm:col-span-5">
                <img src={serviceImg} className="service-r-img" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-under"></div>
      </div>
      <div className="testimonialSection w-full p-5">
        <div className="w-full h-auto rounded-xl border-dashed border-grey border-2 p-5">
          <div className="border-4 w-full h-fit rounded-lg bg-gray-50 px-5 py-20 text-center">
            <div className="flex flex-col justify-items-center items-center ">
              <p className="testimonial border-2 w-fit h-fit p-1 px-10 rounded-full bg-white border-gray-300">
                Testimonials
              </p>
              <h1 className="text-4xl mt-5 font-medium">
                Customer Experiences <br /> and&nbsp;
                <span className="text-rose-500">Feedback</span>
              </h1>
              <h2 className="mt-5 text-cyan font-extralight tracking-wide">
                Ready to leaverage our extensive media lists, build your
                personal brand or dive into <br /> corporate PR tactics? We have
                a plan for you.
              </h2>
            </div>
            <div className="">
              <TestimonialCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
