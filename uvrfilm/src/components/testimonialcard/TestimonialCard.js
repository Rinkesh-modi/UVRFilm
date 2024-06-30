import React from "react";
import "./TestimonialCard.css";
import t1 from "../../assets/images/t1-modified.png";

class TestimonialCard extends React.Component {
  componentDidMount() {
    this.commentCards();
  }

  commentCards() {
    const cards = document.querySelectorAll(".card");
    let current = document.querySelector(".card--current");
    let next;

    const handleCardClick = (card) => {
      return () => {
        const { current } = this.state;
        if (!current || !current.isEqualNode(card)) {
          cards.forEach((card) => {
            card.classList.remove("card--current", "card--out", "card--next");
          });
          if (current) current.classList.add("card--out");
          this.setState({ current: card });
          card.classList.add("card--current");
          next = card.nextElementSibling || cards[0];
          next.classList.add("card--next");
        }
      };
    };

    const buttons = document.querySelectorAll(".custom-card-button");
    buttons.forEach((button, index) => {
      button.addEventListener("click", handleCardClick(cards[index]));
    });

    if (!current && cards.length > 0) {
      current = cards[cards.length - 1];
      cards[0].click();
      this.setState({ current });
    }

    document.querySelector(".cards").classList.add("cards--active");
  }

  componentWillUnmount() {
    const buttons = document.querySelectorAll(".custom-card-button");
    buttons.forEach((button, index) => {
      button.removeEventListener("click", this.handleCardClick);
    });
  }

  render() {
    return (
      <div>
        <div className="w-10/12 mx-auto flex justify-evenly mt-12">
          <div className="">
            <button
              className="t-button border-2 w-fit h-fit p-2 px-10 rounded-full bg-gray-200 hover:bg-gray-300 hover:border-gray-400 border-gray-300  duration-300 transition-all ease-linear m-5 mx-3 flex custom-card-button"
              data-card="0"
            >
              <div className="testimonial-img t-25y">
                <img src={t1} alt="" />
              </div>
              <div className="py-2 w-fit t-10y text-left">
                <h1 className="text-lg font-bold">Ben Tenison</h1>
                <h2 className="text-sm text-cyan font-bold">Youtuber</h2>
              </div>
            </button>
          </div>
          <div className="">
            <button
              className="t-button border-2 w-fit h-fit p-2 px-10 rounded-full bg-gray-200 hover:bg-gray-300 hover:border-gray-400 border-gray-300  duration-300 transition-all ease-linear m-5 mx-3 flex custom-card-button"
              data-card="1"
            >
              <div className="testimonial-img t-25y">
                <img src={t1} alt="" />
              </div>
              <div className="py-2 w-fit t-10y text-left">
                <h1 className="text-lg font-bold">Max Tenison</h1>
                <h2 className="text-sm text-cyan font-bold">Youtuber</h2>
              </div>
            </button>
          </div>
          <div className="">
            <button
              className="t-button border-2 w-fit h-fit p-2 px-10 rounded-full bg-gray-200 hover:bg-gray-300 hover:border-gray-400 border-gray-300  duration-300 transition-all ease-linear m-5 mx-3 flex custom-card-button"
              data-card="2"
            >
              <div className="testimonial-img t-25y">
                <img src={t1} alt="" />
              </div>
              <div className="py-2 w-fit t-10y text-left">
                <h1 className="text-lg font-bold">Gwen Tenison</h1>
                <h2 className="text-sm text-cyan font-bold">Youtuber</h2>
              </div>
            </button>
          </div>
          <div className="">
            <button
              className="t-button border-2 w-fit h-fit p-2 px-10 rounded-full bg-gray-200 hover:bg-gray-300 hover:border-gray-400 border-gray-300  duration-300 transition-all ease-linear m-5 mx-3 flex custom-card-button"
              data-card="3"
            >
              <div className="testimonial-img t-25y">
                <img src={t1} alt="" />
              </div>
              <div className="py-2 w-fit t-10y text-left">
                <h1 className="text-lg font-bold">Kevin Eleven</h1>
                <h2 className="text-sm text-cyan font-bold">Youtuber</h2>
              </div>
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-12">
          <div className="sm:col-span-6">
            <ul className="cards">
              <li className="card">
                <div className="border-2 w-full h-fit p-2 px-10 bg-gray-200 hover:bg-gray-300 hover:border-gray-400 border-gray-300 duration-300 transition-all ease-linear flex rounded-lg">
                  <div className="testimonial-img t-25y">
                    <img src={t1} alt="" />
                  </div>
                  <div className="py-2 w-fit t-10y text-left">
                    <h1 className="text-lg font-bold">Ben Tenison</h1>
                    <h2 className="text-sm text-rose-500 font-bold">
                      Youtuber
                    </h2>
                  </div>
                </div>
                <hr className="hr-margin" />
                <p className="text-wrap text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae harum asperiores veritatis fugiat, tempora a! Amet
                  dolore voluptate quas facilis, labore tempore iusto beatae vel
                  accusantium provident similique at dolor doloribus tempora
                  placeat esse voluptatum debitis! Fuga blanditiis maiores
                  labore minus exercitationem ullam ipsum suscipit unde nobis
                  enim? Incidunt, omnis.
                </p>
              </li>
              <li className="card">
                <div className="border-2 w-full h-fit p-2 px-10 bg-gray-200 hover:bg-gray-300 hover:border-gray-400 border-gray-300 duration-300 transition-all ease-linear flex rounded-lg">
                  <div className="testimonial-img t-25y">
                    <img src={t1} alt="" />
                  </div>
                  <div className="py-2 w-fit t-10y text-left">
                    <h1 className="text-lg font-bold">Max Tenison</h1>
                    <h2 className="text-sm text-rose-500 font-bold">
                      Youtuber
                    </h2>
                  </div>
                </div>
                <hr className="hr-margin" />
                <p className="text-wrap text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae harum asperiores veritatis fugiat, tempora a! Amet
                  dolore voluptate quas facilis, labore tempore iusto beatae vel
                  accusantium provident similique at dolor doloribus tempora
                  placeat esse voluptatum debitis! Fuga blanditiis maiores
                  labore minus exercitationem ullam ipsum suscipit unde nobis
                  enim? Incidunt, omnis.
                </p>
              </li>
              <li className="card">
                <div className="border-2 w-full h-fit p-2 px-10 bg-gray-200 hover:bg-gray-300 hover:border-gray-400 border-gray-300 duration-300 transition-all ease-linear flex rounded-lg">
                  <div className="testimonial-img t-25y">
                    <img src={t1} alt="" />
                  </div>
                  <div className="py-2 w-fit t-10y text-left">
                    <h1 className="text-lg font-bold">Gwen Tenison</h1>
                    <h2 className="text-sm text-rose-500 font-bold">
                      Youtuber
                    </h2>
                  </div>
                </div>
                <hr className="hr-margin" />
                <p className="text-wrap text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae harum asperiores veritatis fugiat, tempora a! Amet
                  dolore voluptate quas facilis, labore tempore iusto beatae vel
                  accusantium provident similique at dolor doloribus tempora
                  placeat esse voluptatum debitis! Fuga blanditiis maiores
                  labore minus exercitationem ullam ipsum suscipit unde nobis
                  enim? Incidunt, omnis.
                </p>
              </li>
              <li className="card">
                <div className="border-2 w-full h-fit p-2 px-10 bg-gray-200 hover:bg-gray-300 hover:border-gray-400 border-gray-300 duration-300 transition-all ease-linear flex rounded-lg">
                  <div className="testimonial-img t-25y">
                    <img src={t1} alt="" />
                  </div>
                  <div className="py-2 w-fit t-10y text-left">
                    <h1 className="text-lg font-bold">Kevin Eleven</h1>
                    <h2 className="text-sm text-rose-500 font-bold">
                      Youtuber
                    </h2>
                  </div>
                </div>
                <hr className="hr-margin" />
                <p className="text-wrap text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae harum asperiores veritatis fugiat, tempora a! Amet
                  dolore voluptate quas facilis, labore tempore iusto beatae vel
                  accusantium provident similique at dolor doloribus tempora
                  placeat esse voluptatum debitis! Fuga blanditiis maiores
                  labore minus exercitationem ullam ipsum suscipit unde nobis
                  enim? Incidunt, omnis.
                </p>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-6 relative">
            <div className="testimonial-text"></div>
            <div className="h-full flex items-center justify-center text-left">
              <div className="p-24">
                <h1 className="text-3xl mt-5 font-medium">
                  Strengthening online <br /> reputation supports success
                </h1>
                <h2 className="w-4/5 mt-3 text-sm text-cyan font-extralight tracking-normal">
                  Online reputation is the key to success. A strong online
                  reputation increases customer trust.And open up more
                  opportunity for your business.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialCard;
