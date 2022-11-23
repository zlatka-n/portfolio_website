export const projectCardConfig = [
  {
    imgSrc: '/screens/bookstore1.png',
    imgWidth: 814,
    imgHeight: 460,
    projectLink: 'https://eshop-redux-zlatka-n.vercel.app/',
    githubLink: 'https://github.com/zlatka-n/eshop_redux',
    name: 'Book Store'
  },
  {
    imgSrc: '/screens/typicode1.png',
    imgWidth: 709.67,
    imgHeight: 401.04,
    projectLink: 'https://typicode-json.vercel.app',
    githubLink: 'https://github.com/zlatka-n/typicode_json',
    name: 'JSON Placeholder'
  },
  {
    imgSrc: '/screens/todo_redux2.png',
    imgWidth: 514,
    imgHeight: 460,
    projectLink: 'https://todo-redux-liart.vercel.app/',
    githubLink: 'https://github.com/zlatka-n/todo_redux/tree/master',
    name: 'CRUD Todo List'
  },

];

export const portfolioCardConfig = [
  {
    imgSrc: '/screens/bookstore1.png',
    imgWidth: 620,
    imgHeight: 345,
    name: 'Book Store',
    description: 'This book store lets a user to add items to the basket. Each item (book) comes with its own page with description.In the basket, user can also modify quantity or remove items.In checkout, user must submit delivery information.',
    techStack: ["ReactJS", "Redux"],
    challenges: "The most challenging thing I faced was configuration of the Redux store. Firstly, I struggled with the data structure setup and secondly, with updating the amount of an item, if the item was already in the basket. Also, I spent a considerable amount of time with website responsiveness, as it was the first time I used media queries.",
    projectLink: 'https://eshop-redux-zlatka-n.vercel.app/',
    githubLink: 'https://github.com/zlatka-n/eshop_redux',
  },
  {
    imgSrc: '/screens/bookstore1.png',
    imgWidth: 620,
    imgHeight: 345,
    name: 'JSON Placeholder',
    description: "This project fetches data from JSON Placeholder - GET request was performed. The data I fetched, I used for showing all posts, user search, and user's profile rendering. The layout of the website was inspired heavily by Facebook and Twitter.",
    techStack: ['ReactJS'],
    challenges: "The most difficult part for me was the user search functionality. I came up with setting up a hook for searched value(typed in the form input), which I later used for filtering the result.From Stack Overflow, I learnt how to make case insensitive search.",
    projectLink: 'https://typicode-json.vercel.app',
    githubLink: 'https://github.com/zlatka-n/typicode_json',
  },
  {
    imgSrc: '/screens/todo_redux2.png',
    imgWidth: 420,
    imgHeight: 345,
    name: 'Todo List',
    description: "This project was probably the first one that I created in Redux. The todo list is capable of CRUD (create, read, update, delete) operations.",
    techStack: ['ReactJS', "Redux"],
    challenges: "The most time I spent on was the update operation. I struggled most with writing edit todo reducer.",
    projectLink: 'https://todo-redux-liart.vercel.app/',
    githubLink: 'https://github.com/zlatka-n/todo_redux/tree/master',
  },
  {
    imgSrc: "/screens/website_portfolio.png",
    imgWidth: 620,
    imgHeight: 375,
    name: 'Website Portfolio',
    description: "The reason I created this website was for job search. My potential employer can see my portfolio here and evaluate my tech skills.",
    techStack: ["Next.js"],
    challenges: " <li> website layout choice</li><li>web responsivness for 4k screen's dimensions (3840px X 2160px) - solved withcustom breakpoint in Tailwind</li><li>contact page - I had to combine libraries React Hook Form and EmailJs for inputvalidation and sending a message to my email</li>",
    projectLink: '',
    githubLink: "https://github.com/zlatka-n/portfolio_website",
  },
]
