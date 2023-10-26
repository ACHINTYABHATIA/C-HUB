const sponsors = [
  {
    institution: "Indian Institute of Technology Bombay",
    fundingAmount: "₹5,000,000",
    spaceAllotted: "500 parking spots",
  },
  {
    institution: "Indian Institute of Technology Delhi",
    fundingAmount: "₹4,200,000",
    spaceAllotted: "450 parking spots",
  },
  {
    institution: "Indian Institute of Technology Madras",
    fundingAmount: "₹4,800,000",
    spaceAllotted: "480 parking spots",
  },
  {
    institution: "Indian Institute of Technology Kanpur",
    fundingAmount: "₹3,500,000",
    spaceAllotted: "400 parking spots",
  },
  {
    institution: "Indian Institute of Technology Kharagpur",
    fundingAmount: "₹3,200,000",
    spaceAllotted: "380 parking spots",
  },
  {
    institution: "Delhi University",
    fundingAmount: "₹2,500,000",
    spaceAllotted: "300 parking spots",
  },
  {
    institution: "Mumbai University",
    fundingAmount: "₹2,300,000",
    spaceAllotted: "280 parking spots",
  },
  {
    institution: "Jawaharlal Nehru University",
    fundingAmount: "₹2,800,000",
    spaceAllotted: "320 parking spots",
  },
  {
    institution: "Banaras Hindu University",
    fundingAmount: "₹2,000,000",
    spaceAllotted: "250 parking spots",
  },
  {
    institution: "University of Calcutta",
    fundingAmount: "₹1,800,000",
    spaceAllotted: "240 parking spots",
  },
  {
    institution: "Chitkara University",
    fundingAmount: "₹2,200,000",
    spaceAllotted: "260 parking spots",
  },
  {
    institution: "Panjab University",
    fundingAmount: "₹2,400,000",
    spaceAllotted: "280 parking spots",
  },
  {
    institution: "Chandigarh University",
    fundingAmount: "₹1,600,000",
    spaceAllotted: "200 parking spots",
  },
];

let inText = "";

sponsors.map((el, i) => {
  inText += `
    <div class="card">
    <h1>${el.institution}</h1>
    <h2 style="font-weight: 500;">Funding: ${el.fundingAmount}</h2>
    <h3 style="font-weight: 400">Spots: ${el.spaceAllotted}</h3>
  </div>
    `;
});

const container = document.querySelector(".row");
container.innerHTML = inText;
