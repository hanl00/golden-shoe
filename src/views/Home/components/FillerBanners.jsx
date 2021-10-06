import React from "react";

import ItemBanners from "./ItemBanners";

import high_heels_horse_riding from './../../../assets/images/high_heels_horse_riding.jpg';
import bill_nye from './../../../assets/images/bill_nye.jpg';
import money from './../../../assets/images/money.jpg';
import dr_martens from './../../../assets/images/dr_martens.jpg';
import lorem_ipsum from './../../../assets/images/lorem_ipsum.png';

const FillerBanners = () => {
  let shoeFactRow1 = [
    {
      image: high_heels_horse_riding,
      title: "Women were not the first humans to wear high heels, it was men.",
      description:
        "According to fashion historians, in the 10th century men wore high heels to stay in their stirrups while riding their horses. Since having a horse was a sign of wealth in this period, having heels also confirmed the high social status of the men.",
    },
    {
      image: lorem_ipsum,
      title:
        "Content displayed in these boxes are customisable to Golden Shoe needs.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum, neque sit amet maximus euismod, erat urna varius neque, vitae imperdiet velit sem non nisl. Nulla sagittis mollis porttitor.",
    },
  ];

  let shoeFactRow2 = [
    {
      image: dr_martens,
      title:
        "‘Dr Martens’ were originally created for work men because of their air-cushioned soles.",
      description:
        "When Dr Martens were first released in the 1960s, they were marketed at labourers and working-class men. However, the rise of punk culture, and Britain’s counterculture made these shoes popular with wider audiences.",
    },
  ];

  let shoeFactRow3 = [
    {
      image: money,
      title:
        "The most expensive shoes ever sold cost: $660,000! And were sold in 2000.",
      description:
        "These shoes were the iconic ruby red slippers, that belonged to Dorothy in the Wizard of Oz. They were the original pair worn by the actress.",
    },
    {
      image: bill_nye,
      title:
        "Bill Nye was not only a science guy, but he also invented a shoe for ballet dancers.",
      description:
        "    He married his scientific knowledge, with the problems ballet dancers had, and came up with a solution. He invented a slipper to protect ballet dancers’ feet.",
    },
  ];

  function generateFillerCards(shoeFact) {
    return shoeFact.map((card, index) => {
      return (
        <div className="card filler-card card-body shadow" key={index}>
          <img
            className="filler-banner-image"
            src={card.image}
            alt="img"
          />
          <div className="mt-3 text-center">
            <h5 className="filler-title">{card.title}</h5>
            <p className="text-muted">{card.description}</p>
          </div>
        </div>
      );
    });
  }
  return (
    <>
      <div className="container filler-section mb-4">
        {generateFillerCards(shoeFactRow1)}
      </div>
      <ItemBanners/>
      <div className="container filler-section mb-4">
        {generateFillerCards(shoeFactRow2)}
      </div>
      <div className="container filler-section mb-4">
        {generateFillerCards(shoeFactRow3)}
      </div>
    </>
  );
};

export default FillerBanners;
