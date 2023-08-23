class Tenis extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build() {
    const pai = document.createElement('section')
    
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "container");
    componentRoot.setAttribute('id','root')
    pai.appendChild(componentRoot)
    const imgBox = document.createElement("div");
    imgBox.setAttribute("class", "img");
    imgBox.style.backgroundImage = `url(${this.getAttribute('bg')})`
    const price = document.createElement("span");
    price.textContent = `R$${this.getAttribute('price')}`
    imgBox.appendChild(price);
    componentRoot.appendChild(imgBox);

    const infos = document.createElement("main");
    const product = document.createElement("p");
    product.textContent = this.getAttribute('produto')
    const type = document.createElement("span");
    type.textContent = this.getAttribute('tipo')
    infos.appendChild(product);
    infos.appendChild(type);
    

    componentRoot.appendChild(infos);
    return pai;
  }
  styles() {
    const link = document.createElement("link");
    link.setAttribute('rel','stylesheet')
    link.setAttribute('type','text/css')
    link.setAttribute('href','./tenis.css')
    return link
  }
}

customElements.define("tenis-card", Tenis);
