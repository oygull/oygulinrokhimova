let portfolioArr= [
  {
    projectId: 1,
    projectName: "Case Nova",
    category: "JavaScript",
    githubLink: "https://github.com/oygull/Case-Nova",
    netlifyLink: "https://case-nova.netlify.app/",
    projectImg: "images/case-nova.png"
  },
  {
    projectId: 2,
     projectName: "Side Minds",
    category: "JavaScript",
    githubLink: "https://github.com/oygull/side-minds",
    netlifyLink: "https://side-minds.netlify.app/",
    projectImg: "images/maari-cosmetics.png"
  },
  {
    projectId: 3,
     projectName: "MAARI Cosmetics",
    category: "React",
    githubLink: "https://github.com/oygull/maari",
    netlifyLink: "https://maari-cosmetics.netlify.app/",
    projectImg: "images/maari-cosmetics.png"
  },
  {
    projectId: 4,
    projectName: "Freshioweb",
    category: "HTML&CSS",
    githubLink: "https://github.com/oygull/Freshio",
    netlifyLink: "https://freshioweb.netlify.app/",
    projectImg: "images/freshio.png"
  },
  {
    projectId: 5,
    projectName: "Baltic Home",
    category: "React",
    githubLink: "https://github.com/oygull/Baltic-Home",
    netlifyLink: "https://baltic-home.netlify.app/",
    projectImg: "images/baltic-home.png"
  },
  {
    projectId: 5,
    projectName: "Medium",
    category: "React",
    githubLink: "https://github.com/oygull/exam-6",
    netlifyLink: "https://medium-react-app.netlify.app/",
    projectImg: "images/medium.png"
  },
  {
    projectId: 6,
    projectName: "Pizza Menu",
    category: "JavaScript",
    githubLink: "https://github.com/oygull/menuJs",
    netlifyLink: "https://pizzamenujs.netlify.app/",
    projectImg: "images/pizzaMenu-min.png"
  },
  {
    projectId: 7,
    projectName: "Calculator",
    category: "JavaScript",
    githubLink: "https://github.com/oygull/JsCalculator",
    netlifyLink: "https://calculatorjss.netlify.app/",
    projectImg: "images/calculator.png"
  },
  {
    projectId: 8,
    projectName: "Nightingale",
    category: "HTML&CSS",
    githubLink: "https://github.com/oygull/Nightingale",
    netlifyLink: "https://venerable-licorice-ac1fc0.netlify.app/",
    projectImg: "images/nightingale.png"
  }
]

let portfolio = document.getElementById("projectsBox");

function renderItems(wrapper, array){
  array.forEach(element => {
    let li = document.createElement('li');
    li.innerHTML= `
        <a href="${element.netlifyLink}" class="portfilo__link">
          <div class="potfolio__imgbox">
           <img src="${element.projectImg}" alt="alex-spancer">
          </div>
          <div class="portfolio__desc">
            <h2 class="portfolio__name">${element.projectName}</h2>
            <a class="gitcode" href="${element.githubLink}"> <span><i class='bx bxl-github' ></i></span> code</a>
          </div>
         </a>
    `
    li.classList='portfolio__item col-xs-12 col-sm-6 col-md-4';
    wrapper.appendChild(li)
  });
}

renderItems(portfolio,portfolioArr);

const filterByCategory = (arr, category) => {
  return arr.filter(item => item.category === category);
};

const htmlProjects = filterByCategory(portfolioArr, 'HTML&CSS');
const javaScriptProjects = filterByCategory(portfolioArr, 'JavaScript');
const reactProducts = filterByCategory(portfolioArr, 'React');

let all = document.getElementById('all')
let htmlcss = document.getElementById('html&css')
let javascript = document.getElementById('javascript')
let react = document.getElementById('react')

function clickElement(element,filteredArr){
  element.onclick = function() {
    portfolio.innerHTML= ''
    renderItems(portfolio,filteredArr);
  };
}

clickElement(htmlcss,htmlProjects );
clickElement(javascript,javaScriptProjects );
clickElement(react,reactProducts );
clickElement(all, portfolioArr );

const links = document.querySelectorAll('.categories__name');


links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(link => link.classList.remove('active-category'));
    this.classList.add('active-category');
  });
});
