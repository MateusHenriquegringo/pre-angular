class CardNews extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");
    const card_left = document.createElement("div");
    card_left.setAttribute("class", "card-left");

    const autor = document.createElement("span");
    autor.textContent =
      "By " + (this.getAttribute("autor") || "Autor Dsconhecido");
    const linkTitle = document.createElement("a");
    linkTitle.href = this.getAttribute("link");
    linkTitle.textContent = this.getAttribute("title");
    const content = document.createElement("p");
    content.textContent = this.getAttribute("content");

    card_left.appendChild(autor);
    card_left.appendChild(linkTitle);
    card_left.appendChild(content);
    const card_right = document.createElement("div");
    const newsImg = document.createElement("img");
    newsImg.src = this.getAttribute("photo") || "assets/OIP.jpeg";
    newsImg.alt = "imagem da noticia";
    card_right.appendChild(newsImg);
    card_right.setAttribute("class", "card-right");
    componentRoot.appendChild(card_left);
    componentRoot.appendChild(card_right);

    return componentRoot;
  }
  styles() {
    const style = document.createElement("style");
    style.textContent = `
  .card {
    width: 50vw;
    -webkit-box-shadow: 19px 17px 14px -11px rgba(15, 14, 14, 0.51);
    -moz-box-shadow: 19px 17px 14px -11px rgba(15, 14, 14, 0.51);
    box-shadow: 19px 17px 14px -11px rgba(15, 14, 14, 0.51);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .card-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
  }
  
  .card-right img {
    max-height: 250px;
  }
  .card-left > h1 {
    margin-top: 15px;
    font-size: 25px;
  }
  .card-left > p {
    color: rgb(67, 66, 66);
  }
  .card-left > span {
    font-weight: 500;
  }
  .card-left > a{
    font-size: 30px;
    text-decoration: none;
    color: black;
    font-weight:bolder;
  }
    `;
    return style;
  }
}
customElements.define("card-news", CardNews);
