class  MyProjectSlot extends HTMLElement {

     static observedAttributes = ["projecturl","projectname","imageurl","imagealt","projectdescription", "tag1", "tag2", "tag3", "tag4", "tag5"];


    constructor() {
      super();
      
    }

  connectedCallback() {
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });


    const gridwrapper = document.createElement("div");
    gridwrapper.setAttribute("class", "grid-item-main");

    const titlewrapper = document.createElement("div");
    titlewrapper.setAttribute("class", "grid-item-header");

    const titlesection = document.createElement("div");
    titlesection.setAttribute("class", "ac");

    const titlehyperlink = document.createElement("a");
    titlehyperlink.setAttribute("class", "ab");

    titlehyperlink.textContent = this.getAttribute("projectname");
    titlehyperlink.href = this.getAttribute("projecturl");

    const tagsetwrapper = document.createElement("div");
    tagsetwrapper.setAttribute("class", "tagset");

    let imgUrl;
    if (this.hasAttribute("imageurl")) {
      imgUrl = this.getAttribute("imageurl");
    } else {
      imgUrl = "Resources/RaccNRun.gif";
    }

    const imagewrapper = document.createElement("div");
    imagewrapper.setAttribute("class", "image-margins");

    const imagehyperlink = document.createElement("a");
    imagehyperlink.href = this.getAttribute("projecturl");

    const img = document.createElement("img");
    img.setAttribute("class", "image-wrapper");
    img.src = imgUrl;
    img.alt = this.getAttribute("imagealt");


    const finaltext = document.createElement("p");
    finaltext.textContent = this.getAttribute("projectdescription");
    finaltext.setAttribute("class", "p");

   
 // Apply external styles to the shadow dom
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "Resources/Style.css" );

    shadow.appendChild(linkElem);
    shadow.appendChild(gridwrapper);
    gridwrapper.appendChild(titlewrapper);
    titlewrapper.appendChild(titlesection);
    titlesection.appendChild(titlehyperlink);
    titlewrapper.appendChild(tagsetwrapper);

    gridwrapper.appendChild(imagewrapper);
    imagewrapper.appendChild(imagehyperlink);
    imagehyperlink.append(img);

    gridwrapper.appendChild(finaltext);

    if (this.hasAttribute("tag1")) 
      {
      const tagtext = document.createElement("span");
      tagtext.textContent = this.getAttribute("tag1");
      tagtext.setAttribute("class", "tag");
      tagsetwrapper.appendChild(tagtext);

      } 
    if (this.hasAttribute("tag2")) 
      {
      const tagtext = document.createElement("span");
      tagtext.textContent = this.getAttribute("tag2");
      tagtext.setAttribute("class", "tag");
      tagsetwrapper.appendChild(tagtext);

      } 
      if (this.hasAttribute("tag3")) 
      {
      const tagtext = document.createElement("span");
      tagtext.textContent = this.getAttribute("tag3");
      tagtext.setAttribute("class", "tag");
      tagsetwrapper.appendChild(tagtext);

      } 
      if (this.hasAttribute("tag4")) 
      {
      const tagtext = document.createElement("span");
      tagtext.textContent = this.getAttribute("tag4");
      tagtext.setAttribute("class", "tag");
      tagsetwrapper.appendChild(tagtext);

      } 
      if (this.hasAttribute("tag5")) 
      {
      const tagtext = document.createElement("span");
      tagtext.textContent = this.getAttribute("tag5");
      tagtext.setAttribute("class", "tag");
      tagsetwrapper.appendChild(tagtext);

      } 
    }
  }


customElements.define('my-projectslot', MyProjectSlot);


