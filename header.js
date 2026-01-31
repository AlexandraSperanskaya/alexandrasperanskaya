class  MyHeader extends HTMLElement {

     

    constructor() {
      super();
      
    }

  connectedCallback() {
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });


    const headerdiv = document.createElement("div");
    headerdiv.setAttribute("class", "h1-div");

    const topdiv = document.createElement("h1");
    topdiv.setAttribute("class", "h1");
    topdiv.textContent = "Alexandra Speranskaya";

    const breakdiv = document.createElement("br");

    const linkedinHyperlink = document.createElement("a");
    linkedinHyperlink.setAttribute("href", "www.linkedin.com/in/alexandra-speranskaya-48758a198");

    const githubHyperlink = document.createElement("a");
    githubHyperlink.setAttribute("href", "https://github.com/AlexandraSperanskaya");
    
    const imgLinkedin = document.createElement("img");
    imgLinkedin.src = "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg";
    imgLinkedin.alt = this.getAttribute("LinkedIn");
    imgLinkedin.width = 25;
    imgLinkedin.height = 25;

    imgLinkedin.style = "filter: invert(1);";
    const imgGithub = document.createElement("img");
    imgGithub.src = "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png";
    imgGithub.alt = this.getAttribute("GitHub");
    imgGithub.width = 25;
    imgGithub.height = 25;

    const navbar = document.createElement("div");
    navbar.setAttribute("class", "nav-bar");

    const homelink = document.createElement("a");
    homelink.setAttribute("href", "#");
    homelink.textContent = "Projects";
    homelink.setAttribute("class", "ab");

    const aboutlink = document.createElement("a");
    aboutlink.setAttribute("href", "Pages/About.html");
    aboutlink.textContent = "About";
    aboutlink.setAttribute("class", "ab");

    const cvlink = document.createElement("a");
    cvlink.setAttribute("href", "Pages/CV.html");
    cvlink.textContent = "CV";
    cvlink.setAttribute("class", "ab");

 // Apply external styles to the shadow dom
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "Resources/Style.css" );

    shadow.appendChild(linkElem);
    shadow.appendChild(headerdiv);
    headerdiv.appendChild(topdiv);
    topdiv.appendChild(breakdiv);

    topdiv.appendChild(linkedinHyperlink);
    linkedinHyperlink.appendChild(imgLinkedin);
    topdiv.appendChild(githubHyperlink);
    githubHyperlink.appendChild(imgGithub);

    shadow.appendChild(navbar);
    navbar.appendChild(homelink);
    navbar.appendChild(aboutlink);
    navbar.appendChild(cvlink);

   
    }
  }


customElements.define('custom-header', MyHeader);


