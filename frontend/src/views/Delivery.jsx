import React from "react";

import { generatePageContent } from "../Utility/pageContentGenerator";

const Delivery = () => {
  let DeliveryContent = [
    {
      question: "Use service data to identify your most common questions.",
      answer:
        "Your FAQ page should address the most common questions customers have about your products, services,  and brand as a whole. The best way to identify those questions is to tap into your customer service data and see which problems customers are consistently reaching out to you with.",
    },
    {
      question: "Decide how you'll organize the FAQ page.",
      answer:
        "As you'll see from the examples below, not every FAQ page looks the same. Depending on what your company is selling and how many products it offers, your FAQ page might consist of a single page with a list of questions or several pages linked together. What's best for your business will vary based on the needs of your customers and how easy it is to troubleshoot your products.",
    },
    {
      question: "Monitor the FAQ page's performance",
      answer:
        "With your page up and running, customers should be more successful in finding solutions to common problems. To find out if that's the case, you'll need to revisit the customer data that you used to create your FAQ page in the first place.",
    },
    {
      question:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu magna, efficitur quis leo vel, fermentum lobortis enim. Ut bibendum nunc non mauris tempor semper. Integer id quam ut nulla molestie laoreet. Fusce in mi sollicitudin turpis scelerisque efficitur ut sed magna. Morbi nunc ipsum, rhoncus non neque id, elementum hendrerit urna. Praesent ornare aliquam neque vel volutpat. Nullam sit amet diam tincidunt, pulvinar lectus ut, porta ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
    },
    {
      question:
        "Morbi nunc ipsum, rhoncus non neque id, elementum hendrerit urna.",
      answer:
        "Cras pellentesque sem nec libero pretium, a fringilla lectus feugiat. Donec id nibh commodo, varius est non, venenatis mauris. Cras nunc arcu, malesuada in tempor ac, rhoncus eu odio. Cras eget elementum quam, ut pretium eros. Curabitur aliquet, augue sed bibendum dictum, quam eros luctus diam, in congue metus quam sit amet dui. Donec ut consequat lacus. Phasellus pulvinar, tellus nec tincidunt dignissim, mi nibh suscipit elit, a vestibulum dolor mauris ut erat. In id porttitor felis. Sed quis elit eget nibh mattis elementum vitae id tellus. Vivamus sed lobortis massa. Vivamus a massa et sapien lobortis facilisis. ",
    },
  ];

  return (
    <>
      <div className="container shop-container py-4">
        <div className={"p-4 shop-div"}>
          <div className="page-header">
            <h2>Delivery</h2>
          </div>
          {generatePageContent(DeliveryContent)}
        </div>
      </div>
    </>
  );
};

export default Delivery;
