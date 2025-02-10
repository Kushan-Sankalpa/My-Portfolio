const myProjects = [
    {
        id: 1,
        title: 'Multi-Functional Calculator',
        image: '/images/Calculator.png', // This will look for public/images/calc.png
        sourceUrl: 'https://github.com/YourUsername/CalculatorRepo',
        status: 'completed',
        description:
            'A versatile calculator supporting standard arithmetic, scientific operations, and more.',
        tools: ['React', 'JavaScript', 'CSS'],
    },
    {
        id: 2,
        title: 'Real-Time Ticket Pool System',
        images: ['/images/Ticketpool.png', '/images/Sinhala.png', '/images/Ticketpool.png'],
        sourceUrl: 'https://github.com/YourUsername/TicketPoolSystem',
        status: 'development',
        description:
            'A real-time system for managing and tracking tickets across multiple queues.',
        tools: ['Node.js', 'Express', 'Socket.io', 'MongoDB'],
    },
    {
        id: 3,
        title: 'Wali Pilla Sinhala Learning App',
        image: '/images/Sinhala.png',
        sourceUrl: 'https://github.com/YourUsername/WaliPillaSinhalaApp',
        status: 'completed',
        description:
            'An interactive app designed to teach Sinhala basics through lessons, quizzes, and speech recognition exercises.',
        tools: ['React Native', 'Firebase', 'Speech API'],
    },
    {
        id: 4,
        title: 'Hotel Management System',
        image: '/images/Hotel.png',
        sourceUrl: 'https://github.com/YourUsername/HotelManagementSystem',
        status: 'completed',
        description:
            'A comprehensive hotel management platform featuring room reservations, staff scheduling, billing, and analytics dashboards for easy administration.',
        tools: ['Java', 'Spring Boot', 'MySQL'],
    },
];

export default myProjects;
