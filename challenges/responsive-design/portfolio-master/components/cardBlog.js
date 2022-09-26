class CardBlog extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        /* get atributtes
            this.var = this.getAttribute('attribute');
        */

        this.img = this.getAttribute('img');
        this.title = this.getAttribute('title')
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
        <h2>${this.title}</h2>
        <picture>
          <img src="${this.img}" alt="">
        </picture>
        <p><slot></slot></p>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
            :host{
                width: 100%;

            }

            picture{
                width:100%;
                overflow: hidden;
                border-radius: 20px;
            }

            img{
                width:100%;
                border-radius: 20px;
            }
        </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define('card-blog', CardBlog);