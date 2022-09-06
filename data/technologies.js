import { faCss3, faHtml5, faJava, faJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons"

const technologies = {
    Languages:
    [
        {
        name: "Javascript",
        color: "violet",
        icon: faJs,
        link: "/",
        description: "The one I have used the most to date. \n\n I have built many websites with this language using a wide variety of libraries such as three.js, jQuery or Animate.js.",
    },
    {
        name: "Java",
        color: "orange",
        icon: faJava,
        link: "/",
        description: "One of my first learned languages. \n\n With it I have built from complex web applications using Spring Boot to algorithms, for sorting or AI for example.",
    },
    {
        name: "Python",
        color: "gold",
        icon: faPython,
        link: "/",
        description: "My first language learned. I started by reading a book on big data treatment using python. Since then I have used data processing libraries like Pandas, Matplotlib, Numpy, Keras or Tensorflow.",
    },
    {
        name: "SQL",
        color: "red",
        img: "/technologies/sql.png",
        link: "/",
        description: "I have worked with mySQL, mariaDB and postgreSQL building multiple databases mainly for website backends.",
    },
    {
        name: "C",
        color: "dodgerblue",
        icon: null,
        img: "/technologies/c.png",
        link: "/",
        description: "I have implemented various algorithms in this language from Merge Sort to A*.",
    },
    {
        name: "R",
        color: "lightgreen",
        icon: null,
        img: "/technologies/r.png",
        link: "/",
        description: "I have worked on data statistics with this language.",
    },
    {
        name: "HTML",
        color: "darkorange",
        icon: faHtml5,
        link: "/",
        description: "I have worked on this language from the begginig building multiple webs and other applications.\n\n I have also worked a lot with html canvas for cool animations.",
    },
    {
        name: "CSS",
        color: "royalblue",
        icon: faCss3,
        link: "/",
        description: "I started using raw CSS3, then I have learnt to write it for preprocessors like Sass and LESS, as well as using methodologies like BEM. \n\n I have also used CSS frameworks such as Bootstrap, Tailwind and Chakra UI. \n\n In summary, I think have this language is one of my strengths becose I have mastered the great mayority of its branches.",
    },
    ],
    React:
    [  
    {
        name: "React",
        color: "cornflowerblue",
        icon: faReact,
        link: "/",
        description: "I have been learning react for over a year now, when I acquired an online course on Udemy. Since then I have fell in love with developing apps using his great variety of libraries.",
    },
    {
        name: "Next JS",
        color: "mediumseagreen",
        icon: null,
        img: "/technologies/next.png",
        link: "/",
        description: "I have learnt this framework in my first React course. \n\n Since then I liked it a lot because of the facilities it gave to build an app based on React.",
    },    
    {
        name: "Styled Components",
        color: "hotpink",
        icon: null,
        img: "/technologies/styled-components.png",
        link: "/",
        description: "I have learnt this framework in my first React course. \n\n Since then I have used this library in most of my React apps becouse of the facilities it gave me with styling.",
    },
    {
        name: "React Router",
        color: "orangered",
        icon: null,
        img: "/technologies/react-router.png",
        link: "/",
        description: "I have learnt this framework in my first React course. \n\n I have only used it in a few webs so I plan to practice it more in the near future.",
    },
    {
        name: "Redux",
        color: "palevioletred",
        icon: null,
        img: "/technologies/redux.png",
        link: "/",
        description: "I have learnt this framework in my first React course. \n\n I have used it very little although I have cool ideas for practicing it.",
    },
    ],
    Spring:
    [
    {
        name: "Spring",
        color: "mediumseagreen",
        img: "/technologies/spring.png",
        link: "/",
        description: "I have built many webs using Spring Boot from small to big scale, for instance a cool web board game with players accounts and social interactions. \n\n Also, my firsts teamworks were using this technology.",
        },
    ],
}

export default technologies