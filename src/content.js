import ans_121_cow from "./assets/ans-121-cow.gif";
import ans_121_egg from "./assets/ans-121-egg.gif";

export default [
    {
        type: 'post',
        title: 'Super Tile Clicker',
        text: `A clone of one of my favorite games, Minesweeper. Written in Java using the Java Swing framework. <br/><br/>This is an ongoing pet project that is planned to have a rich feature set that caters towards competitive players.
The MinesweeperBoard class pre-populates the board with mines, and replaces up to 8 mines surrounding the players first click coordinates. This allows for a guaranteed "0" first click while also not having to generate an entire board upon the games initial click.
The MinesweeperBoard class uses a higher order function evalNeighbors() to conditionally apply functions to each of a tiles neighbors. This is used throughout the class from counting the number of mines surrounding a tile to recursively revealing all neighbor tiles.
This project is meant as a first step into learning how to structure complex games, and as more general experience with object oriented design. `,
        link: 'https://github.com/IanBand/super-tile-clicker',
        route: 'SuperTileClicker',


    },
    {
        type: 'section',
        title: 'OSU Ecampus Projects',
        route: 'Ecampus',
    },
    {
        type: 'post',
        title: 'FES 526',
        text: `FES 520 is a small data visualization project written in ReactJS. It uses <a href=" https://www.npmjs.com/package/react-vis">react-vis</a> and <a href="https://www.npmjs.com/package/react-animated-number">react-animated-number</a> to smoothly animate between different years in the dataset. <br> 
            The application reads data from one json file and automatically scales with the number of years supplied, and number of key value pairs in each year. `,
        route: 'FES526',

    },
    {
        type: 'post',
        title: 'SOIL 360',
        text: `SOIL 360 is a crop rotation planner for agriculture students. <br/><br/> Its data hierarchy is as follows: Crops (internally referred to as Events) are the blue and cyan boxes take up space on the calendar, they have a start, end, and a type. Examples of crops are Carrots or Winter Squash.
          Each type of crop can have a different number of Actions available to it. The possible actions that can be taken on a crop are the Primary Tillage, Secondary Tillage, Incorporation, and Termination.
          The Actions appear as the colorful squares on either side of each Event. Each Action can take the value of a list of Options. For example, some of the Options for the Termination action are Flail, where one would use a flail on the crops, or my personal favorite, "Winter Kill," where one simply lets the crops die over the winter and turn to mulch.
          The Snapshot panel is in the bottom left. This feature allows users to save snapshots of their board states that have a unique URL associated with them. When viewed, the snapshots cannot be edited. Their purpose is for users to be able to share their crop rotations with other students and with the instructor for manual grading.`,
        route: 'SOIL360',
    },
    {
        type: 'post',
        title: 'ANS 121',
        text: `ANS 121 is a data driven interactive quiz application written in ReactJS. Answers to quiz questions can be mapped SVG paths, images, and text boxes. A users progress in the quiz is kept track of on a backend, allowing the application to remember a users place in the quiz upon reloading the page.`,
        route: 'ANS121',
        images: [
            {
                src: ans_121_cow,
                alt: 'Interactive Cow'
            },
            {
                src: ans_121_egg,
                alt: 'Interactive Egg'
            }
        ],

    }
]