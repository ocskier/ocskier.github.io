class Project {
  constructor(url, pic, name, ghlink) {
    this.Url = url;
    this.Pic = pic;
    this.Name = name;
    this.GHLink = ghlink;
  }
}

const Proj1 = new Project(
  "http://pouracle-basic.herokuapp.com/",
  "images/gonzalo-remy-JCIJnIXv7SE-unsplash.jpg",
  "Pouracle",
  "https://github.com/ocskier/Pouracle-Basic"
);
const Proj2 = new Project(
  "https://ocskier.github.io/Train-Station/",
  "images/railway-station-619082_1280.jpg",
  "Train Station",
  "https://github.com/ocskier/Train-Station"
);
// const Proj3=new Project("https://ocskier.github.io/BLS-Website/","images/christine-mendoza-527612-unsplash.jpg","Brightleaf","https://github.com/ocskier/BLS-Website");
const Proj4 = new Project(
  "https://ocskier.github.io/Trivia-Game/",
  "images/question-mark-1872665_1280.jpg",
  "Trivia Game",
  "https://github.com/ocskier/Trivia-Game"
);
const Proj5 = new Project(
  "https://ocskier.github.io/Star-Wars-Battle/",
  "images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg",
  "Star Wars Battle",
  "https://github.com/ocskier/Star-Wars-Battle"
);
const Proj6 = new Project(
  "https://ocskier.github.io/Tithe/",
  "images/tithe-favicon.1.png",
  "Tithe App",
  "https://github.com/ocskier/Tithe"
);
const Proj7 = new Project(
  "https://ocskier.github.io/Api-Ajax/",
  "images/window-615427_1920.jpg",
  "Api Demo",
  "https://github.com/ocskier/Api-Ajax"
);
const Proj8 = new Project(
  null,
  "images/bot.jpg",
  "LIRI Bot",
  "https://github.com/ocskier/LIRI-Node-App"
);
const Proj9 = new Project(
  "https://my-match-maker.herokuapp.com/",
  "images/love-logo-hi.png",
  "Match Maker",
  "https://github.com/ocskier/Match-Maker"
);
// const Proj10=new Project("https://intense-wildwood-45271.herokuapp.com/","images/fabio-alves-773406-unsplash.jpg","Burger App","https://github.com/ocskier/Burger-App");
const Proj11 = new Project(
  "https://fierce-basin-24175.herokuapp.com/",
  "images/fabio-alves-773406-unsplash.jpg",
  "Serialize Burger",
  "https://github.com/ocskier/sequelizedBurger"
);
const Proj12 = new Project(
  "https://aristotle-app.herokuapp.com/",
  "images/jeshoots-com-436787-unsplash.jpg",
  "Aristotle",
  "https://github.com/ocskier/Aristotle"
);
// const Proj13=new Project("http://mongoscraps.herokuapp.com/","images/hannah_gibbs_1067876.jpg","Mongo Scraper","https://github.com/ocskier/Mongo-Scraper");
const Proj14 = new Project(
  "https://search-react-app.herokuapp.com/",
  "images/hannah_gibbs_1067876.jpg",
  "NPR-Music-React",
  "https://github.com/ocskier/NPR-Music-Search-React"
);
const Proj15 = new Project(
  "https://wishlist-p3t6-app.herokuapp.com/",
  "images/Screenshot_Proj.png",
  "WishList",
  "https://github.com/ocskier/WishList"
);
const Proj16 = new Project(
  "https://ocskier.github.io/Word-Guess-Game/",
  "images/Screenshot5.png",
  "Word Game",
  "https://github.com/ocskier/Word-Guess-Game"
);
const Proj17 = new Project(
  "https://repl.it/@ocskier/Bamazon",
  "images/fancycrave.jpg",
  "Bamazon",
  "https://github.com/ocskier/Bamazon"
);
const Proj18 = new Project(
  "https://ocskier.github.io/Memory/",
  "images/BN-XN.jpg",
  "Memory",
  "https://github.com/ocskier/Memory"
);

const projectsArray = [];
projectsArray.push(
  Proj1,
  Proj2,
  Proj4,
  Proj5,
  Proj6,
  Proj7,
  Proj8,
  Proj9,
  Proj11,
  Proj12,
  Proj14,
  Proj15,
  Proj16,
  Proj17,
  Proj18
);

$.each(projectsArray, function(index, project) {
  $("#portfolio-content").append(`
    <li class="full-thumb f-photo">
        <img src=${project.Pic} width=220 height=165 alt=${project.Name}/>
        <div class="div-info" style="display: flex;">
        <div style="display: inline-flex;">
          <a href=${project.Url} class="fancybox" rel="group" title=${project.Name} target="_blank">
            <div class="thumb-icon-photo"></div>
          </a>
          <div class="thumb-icon-github">
            <a id="logo-container" href=${project.GHLink} class="brand-logo" target="_blank">
              <img src="images/GitHub-Mark-Light-120px-plus.png" style="margin: 3px 0 0 0;" width="25px" height="25px">
            </a>
          </div>
        </div>
        <div class="thumb-name">${project.Name}</div>
        </div>
    </li>`)
});
