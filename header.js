class  MyHeader extends HTMLElement {

     static observedAttributes = ["urlprepend"];

    constructor() {
      super();
      }

  connectedCallback() {
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });


    const headerdiv = document.createElement("div");
    headerdiv.setAttribute("class", "h1div");

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

    const imagedivider = document.createElement("span");
    imagedivider.setAttribute("class", "h1");
    imagedivider.textContent = "  ";

    const navbar = document.createElement("div");
    navbar.setAttribute("class", "navbar");

    const homelink = document.createElement("a");

    if (this.hasAttribute("urlprepend"))
     {
        homelink.setAttribute("href", this.getAttribute("urlprepend") + "index.html" );
    } 
    else 
    {
      homelink.setAttribute("href", "index.html");
    }


    homelink.textContent = "Projects";
    homelink.setAttribute("class", "headerlink");

    const aboutlink = document.createElement("a");
    if (this.hasAttribute("urlprepend"))
    {
      aboutlink.setAttribute("href", "About.html");
    } 
    else 
    {
      aboutlink.setAttribute("href", "Pages/About.html");
    }


    aboutlink.textContent = "About";
    aboutlink.setAttribute("class", "headerlink");

    const cvlink = document.createElement("a");

    if (this.hasAttribute("urlprepend"))
    {
      cvlink.setAttribute("href", "CV.html");
    } 
    else 
    {
      cvlink.setAttribute("href", "Pages/CV.html");
    }


    cvlink.textContent = "CV";
    cvlink.setAttribute("class", "headerlink");

    const linkdividerone = document.createElement("span");
    linkdividerone.setAttribute("class", "headerlink");
    linkdividerone.textContent = " | ";
    const linkdividertwo = document.createElement("span");
    linkdividertwo.setAttribute("class", "headerlink");
    linkdividertwo.textContent = " | ";

 // Apply external styles to the shadow dom
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");

    if (this.hasAttribute("urlprepend"))
      {
        linkElem.setAttribute("href", this.getAttribute("urlprepend") + "Style.css" );
      } 
    else 
    {
      linkElem.setAttribute("href", "Style.css" );
    }


    shadow.appendChild(linkElem);
    shadow.appendChild(headerdiv);
    headerdiv.appendChild(topdiv);
    topdiv.appendChild(breakdiv);

    topdiv.appendChild(linkedinHyperlink);
    linkedinHyperlink.appendChild(imgLinkedin);
    topdiv.appendChild(imagedivider);
    topdiv.appendChild(githubHyperlink);
    githubHyperlink.appendChild(imgGithub);

    shadow.appendChild(navbar);
    navbar.appendChild(homelink);
    navbar.appendChild(linkdividerone);
    navbar.appendChild(aboutlink);
    navbar.appendChild(linkdividertwo);
    navbar.appendChild(cvlink);

   
    }
  }


customElements.define('custom-header', MyHeader);


