const faqs = [
    {
        question: "What is C Park?",
        answer: "C Park is a revolutionary parking reservation service that allows users to pre-book parking spaces in colleges and universities, ensuring a hassle-free parking experience."
    },
    {
        question: "How do I create an account on C Park?",
        answer: "To create an account on C Park, download our mobile app, click on 'Sign Up,' and provide your details. Once registered, you can start booking parking spaces right away."
    },
    {
        question: "Is C Park available in multiple cities?",
        answer: "Currently, C Park operates in select cities with a focus on college campuses. We are expanding, so please stay tuned for updates on new locations."
    },
    {
        question: "Can I reserve a parking spot for someone else?",
        answer: "Yes, you can reserve a parking spot for someone else. During the booking process, you can enter the vehicle details of the person who will be using the parking space."
    },
    {
        question: "What types of payment methods are accepted?",
        answer: "C Park accepts various payment methods, including credit cards, debit cards, and digital wallets. You can choose the most convenient option for you during the payment process."
    },
    {
        question: "Is there a loyalty program for frequent users?",
        answer: "Yes, C Park offers a loyalty program for frequent users. Earn points for every booking and enjoy exclusive discounts, free parking hours, and other exciting rewards."
    },
    {
        question: "What happens if I arrive late for my reservation?",
        answer: "If you arrive late for your reservation, your parking spot will still be available. However, please ensure that your reservation duration covers the entire period of your stay to avoid any additional charges."
    },
    {
        question: "Can I extend my reservation if I need more time?",
        answer: "Yes, you can extend your reservation through the C Park app if the parking spot is available for the desired duration. Extensions are subject to availability and additional charges based on the hourly rate."
    },
    {
        question: "Is there a customer support hotline?",
        answer: "Yes, our customer support team is available 24/7. You can reach us at our hotline number provided in the app or website. We are here to assist you with any queries or issues."
    },
    {
        question: "What should I do if I lose my QR code?",
        answer: "If you lose your QR code, please contact our customer support immediately. They will verify your identity and provide you with the necessary information to access your parking reservation."
    },
    {
        question: "Can I get a refund if I cancel my reservation?",
        answer: "Refund policies vary based on the cancellation notice period. Please refer to our cancellation policy for detailed information about refunds and any applicable cancellation fees."
    },
    {
        question: "Is my personal information secure?",
        answer: "Yes, your personal information is highly secure with us. We use advanced encryption techniques to protect your data, and we do not share your information with third parties without your consent."
    },
    {
        question: "Are the parking facilities monitored?",
        answer: "Yes, all our parking facilities are equipped with 24/7 surveillance cameras and security personnel. Your vehicle's safety is our top priority, and we ensure a secure environment for all parked cars."
    },
    {
        question: "Can I book a parking spot for multiple days?",
        answer: "Yes, you can book a parking spot for multiple days. During the booking process, select the start and end dates for your reservation. You will have access to the parking spot throughout the specified period."
    },
    {
        question: "Is there a limit to how many times I can extend my reservation?",
        answer: "There is no strict limit to the number of times you can extend your reservation. However, extensions are subject to availability. It's recommended to extend your reservation well in advance to secure your spot for the desired duration."
    },
    {
        question: "Can I change my vehicle information after making a reservation?",
        answer: "Yes, you can update your vehicle information in the app. Go to your reservation details, and you will find an option to edit your vehicle details. Ensure the information is accurate to avoid any issues during entry."
    },
    {
        question: "Is there a mobile app for C Park?",
        answer: "Yes, C Park offers a user-friendly mobile app available for both Android and iOS devices. Download the app from the respective app stores to start booking parking spaces conveniently from your smartphone."
    },
    {
        question: "What happens if there's a problem with my reserved parking spot?",
        answer: "If you encounter any issues with your reserved parking spot, please contact our customer support immediately. Our team will assist you in resolving the problem and, if necessary, provide an alternative parking arrangement."
    },
    {
        question: "Can I reserve parking for special events on campus?",
        answer: "Yes, you can reserve parking for special events on campus. It's advisable to book well in advance, especially during major events, to secure your parking spot. Check the app for availability and event-specific parking options."
    },
    {
        question: "Are there discounts for group bookings?",
        answer: "Yes, we offer special discounts for group bookings. If you plan to book parking spots for a group or an event, please contact our customer support to discuss group rates and customized parking solutions."
    },
    {
        question: "Is there a penalty for arriving early or leaving late?",
        answer: "There are no penalties for arriving a little early or leaving a bit late. However, please ensure that your reservation duration covers the entire period of your stay to avoid any additional charges. We understand that plans can change, and we aim to accommodate your needs as much as possible."
    },
    {
        question: "Can I reserve parking for my guests or visitors?",
        answer: "Yes, you can reserve parking for your guests or visitors using the C Park app. Enter their vehicle details during the booking process, and they can use the QR code provided to access the parking facility. It's a convenient way to ensure your guests have a designated parking spot upon arrival."
    },
    {
        question: "Is C Park environmentally friendly?",
        answer: "Yes, C Park promotes eco-friendly practices. By efficiently managing parking spaces, we reduce unnecessary vehicle emissions caused by circling for parking. Additionally, we encourage users to carpool and use public transportation to further minimize environmental impact."
    },
    {
        question: "Can I provide feedback or suggestions about my parking experience?",
        answer: "Absolutely! We value your feedback and suggestions. You can provide your input through the app or website. Your comments help us enhance our services and ensure that every user has a seamless and enjoyable parking experience with C Park."
    }
];

let inText = ""

faqs.map((faq, i) => {
    inText += `
    <div class="accordion-container">
    <div class="accordion-heading">
      <p class="accordion-title">${faq.question}</p>
      <i class="fa-solid fa-chevron-circle-right"> </i>
    </div>
    <div class="accordion-content">
      <p>
        ${faq.answer}
      </p>
    </div>
  </div>  `
})

const container = document.querySelector(".parent-accordion-container");
container.innerHTML = inText;