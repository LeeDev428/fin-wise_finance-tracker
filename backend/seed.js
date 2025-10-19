const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Module = require('./models/Module');
const Quiz = require('./models/Quiz');

dotenv.config();

const modules = [
  {
    moduleNumber: 1,
    title: 'Module #1',
    category: 'Knowledge',
    icon: '✏️',
    content: 'Introduction to Financial Literacy: Understanding the basics of personal finance, budgeting, and financial planning.',
    isActive: true,
  },
  {
    moduleNumber: 2,
    title: 'Module #2',
    category: 'Knowledge',
    icon: '📈',
    content: 'Saving and Investing: Learn the fundamentals of saving money and making smart investment decisions for your future.',
    isActive: true,
  },
  {
    moduleNumber: 3,
    title: 'Module #3',
    category: 'Knowledge',
    icon: '💼',
    content: 'Managing Debt and Credit: Understanding credit scores, loans, and how to manage debt responsibly.',
    isActive: true,
  },
  {
    moduleNumber: 4,
    title: 'Module #1',
    category: 'Attitude',
    icon: '✏️',
    content: 'Developing a Healthy Money Mindset: Building positive attitudes towards money management and financial goals.',
    isActive: true,
  },
  {
    moduleNumber: 5,
    title: 'Module #2',
    category: 'Attitude',
    icon: '📈',
    content: 'Financial Confidence: Overcoming money anxiety and building confidence in financial decision-making.',
    isActive: true,
  },
  {
    moduleNumber: 6,
    title: 'Module #3',
    category: 'Attitude',
    icon: '💼',
    content: 'Long-term Financial Planning: Developing patience and discipline for achieving long-term financial goals.',
    isActive: true,
  },
  {
    moduleNumber: 7,
    title: 'Module #1',
    category: 'Behavior',
    icon: '✏️',
    content: 'Creating and Sticking to a Budget: Practical steps for creating a budget and developing healthy spending habits.',
    isActive: true,
  },
  {
    moduleNumber: 8,
    title: 'Module #2',
    category: 'Behavior',
    icon: '📈',
    content: 'Smart Shopping and Saving: Techniques for reducing expenses and maximizing savings in daily life.',
    isActive: true,
  },
  {
    moduleNumber: 9,
    title: 'Module #3',
    category: 'Behavior',
    icon: '💼',
    content: 'Building Wealth Habits: Daily practices and behaviors that lead to long-term financial success.',
    isActive: true,
  },
];

const quizzes = [
  {
    quizNumber: 1,
    title: 'Quiz #1',
    category: 'Knowledge',
    icon: '✏️',
    questions: [
      {
        question: 'What is a budget?',
        options: [
          'A plan for spending and saving money',
          'A type of bank account',
          'A credit card',
          'A loan from a bank',
        ],
        correctAnswer: 0,
        points: 10,
      },
      {
        question: 'What does APR stand for?',
        options: [
          'Annual Payment Rate',
          'Annual Percentage Rate',
          'Average Payment Ratio',
          'Accumulated Payment Return',
        ],
        correctAnswer: 1,
        points: 10,
      },
      {
        question: 'What is compound interest?',
        options: [
          'Interest paid only on the principal',
          'Interest paid on both principal and accumulated interest',
          'A fixed interest rate',
          'Interest that decreases over time',
        ],
        correctAnswer: 1,
        points: 10,
      },
    ],
    isActive: true,
  },
  {
    quizNumber: 2,
    title: 'Quiz #2',
    category: 'Knowledge',
    icon: '📈',
    questions: [
      {
        question: 'What is an emergency fund?',
        options: [
          'Money for vacation',
          'Savings for unexpected expenses',
          'Investment account',
          'Retirement savings',
        ],
        correctAnswer: 1,
        points: 10,
      },
      {
        question: 'What is diversification in investing?',
        options: [
          'Putting all money in one stock',
          'Spreading investments across different assets',
          'Only investing in bonds',
          'Keeping all money in cash',
        ],
        correctAnswer: 1,
        points: 10,
      },
    ],
    isActive: true,
  },
  {
    quizNumber: 3,
    title: 'Quiz #3',
    category: 'Knowledge',
    icon: '💼',
    questions: [
      {
        question: 'What affects your credit score?',
        options: [
          'Only your income',
          'Payment history and credit utilization',
          'Your age',
          'Your job title',
        ],
        correctAnswer: 1,
        points: 10,
      },
      {
        question: 'What is the 50/30/20 budgeting rule?',
        options: [
          '50% savings, 30% needs, 20% wants',
          '50% needs, 30% wants, 20% savings',
          '50% wants, 30% savings, 20% needs',
          '50% income, 30% expenses, 20% debt',
        ],
        correctAnswer: 1,
        points: 10,
      },
    ],
    isActive: true,
  },
  {
    quizNumber: 4,
    title: 'Quiz #1',
    category: 'Attitude',
    icon: '✏️',
    questions: [
      {
        question: 'What is a positive money mindset?',
        options: [
          'Avoiding all financial discussions',
          'Believing money is evil',
          'Viewing money as a tool for achieving goals',
          'Spending without thinking',
        ],
        correctAnswer: 2,
        points: 10,
      },
    ],
    isActive: true,
  },
  {
    quizNumber: 5,
    title: 'Quiz #2',
    category: 'Attitude',
    icon: '📈',
    questions: [
      {
        question: 'Why is financial confidence important?',
        options: [
          'It helps make better financial decisions',
          'It guarantees wealth',
          'It eliminates all risks',
          'It allows unlimited spending',
        ],
        correctAnswer: 0,
        points: 10,
      },
    ],
    isActive: true,
  },
  {
    quizNumber: 6,
    title: 'Quiz #3',
    category: 'Attitude',
    icon: '💼',
    questions: [
      {
        question: 'What is delayed gratification?',
        options: [
          'Never spending money',
          'Waiting to buy something you want to achieve bigger goals',
          'Buying everything on credit',
          'Avoiding all purchases',
        ],
        correctAnswer: 1,
        points: 10,
      },
    ],
    isActive: true,
  },
  {
    quizNumber: 7,
    title: 'Quiz #1',
    category: 'Behavior',
    icon: '✏️',
    questions: [
      {
        question: 'How often should you review your budget?',
        options: [
          'Never',
          'Once a year',
          'Monthly',
          'Every 5 years',
        ],
        correctAnswer: 2,
        points: 10,
      },
    ],
    isActive: true,
  },
  {
    quizNumber: 8,
    title: 'Quiz #2',
    category: 'Behavior',
    icon: '📈',
    questions: [
      {
        question: 'What is impulse buying?',
        options: [
          'Planned purchases',
          'Buying without thinking or planning',
          'Buying necessities',
          'Comparison shopping',
        ],
        correctAnswer: 1,
        points: 10,
      },
    ],
    isActive: true,
  },
  {
    quizNumber: 9,
    title: 'Quiz #3',
    category: 'Behavior',
    icon: '💼',
    questions: [
      {
        question: 'What is the best way to build wealth?',
        options: [
          'Get rich quick schemes',
          'Consistent saving and investing over time',
          'Lottery tickets',
          'High-risk gambling',
        ],
        correctAnswer: 1,
        points: 10,
      },
    ],
    isActive: true,
  },
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Module.deleteMany({});
    await Quiz.deleteMany({});
    console.log('🗑️  Cleared existing modules and quizzes');

    // Insert modules
    await Module.insertMany(modules);
    console.log(`✅ Inserted ${modules.length} modules`);

    // Insert quizzes
    await Quiz.insertMany(quizzes);
    console.log(`✅ Inserted ${quizzes.length} quizzes`);

    console.log('🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
