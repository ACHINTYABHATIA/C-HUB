const benefits = [
  {
    title: "Hassle-Free Parking",
    description:
      "No more circling the campus; find and reserve parking spots effortlessly.",
  },
  {
    title: "Time-Saving Convenience",
    description:
      "Save valuable time with quick entry and exit from the parking facility.",
  },
  {
    title: "Secure Parking Facilities",
    description:
      "Park with confidence knowing your vehicle is under 24/7 surveillance.",
  },
  {
    title: "Real-Time Availability",
    description:
      "Check real-time parking space availability and book instantly through the app.",
  },
  {
    title: "Flexible Booking Options",
    description:
      "Choose daily, monthly, or hourly bookings based on your parking needs.",
  },
  {
    title: "Exclusive Discounts",
    description:
      "Enjoy special discounts and loyalty rewards for being a C Park user.",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Navigate the app easily with an intuitive interface for a seamless experience.",
  },
  {
    title: "Personalized Notifications",
    description:
      "Receive timely notifications about bookings, discounts, and upcoming events.",
  },
  {
    title: "Environmentally Responsible",
    description:
      "Reduce emissions by minimizing the time spent searching for parking spaces.",
  },
  {
    title: "Dedicated Customer Support",
    description:
      "Access 24/7 customer support for any queries or assistance you may need.",
  },
];

let inText = "";

benefits.map((el, i) => {
  inText += `
        <span>
            <b>${el.title}</b>
            ${el.description}
        </span>
    `;
});

const container = document.querySelector(".user-benefits");
container.innerHTML = inText;
