const myProjects = [
    {
        id: 1,
        title: 'Multi-Functional Calculator',
        images: [
            '/images/Multi-functional-Calculator/Calculator.png',
            '/images/Multi-functional-Calculator/cal1.png',
            '/images/Multi-functional-Calculator/cal2.png',
            '/images/Multi-functional-Calculator/cal3.png',
            '/images/Multi-functional-Calculator/cal4.png',
            '/images/Multi-functional-Calculator/cal5.png',
            '/images/Multi-functional-Calculator/cal6.png',
            '/images/Multi-functional-Calculator/cal7.png',

        ],
        sourceUrl: 'https://github.com/YourUsername/CalculatorRepo',
        status: 'completed',
        description:
            'A versatile calculator offering basic arithmetic, advanced geometry, currency conversion, and scientific functions, built with HTML, CSS, and JavaScript.',
        tools: ['HTML', 'CSS', 'JavaScript']
    }
,

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
