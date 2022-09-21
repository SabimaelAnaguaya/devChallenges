class CardDesign extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        /* get atributtes
            this.var = this.getAttribute('attribute');
        */
       this.img = this.getAttribute('img');
       this.title = this.getAttribute('title');
       this.subtitle = this.getAttribute('subtitle')
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
        <article>
            <img src=${this.img} />
            
            <p>${this.subtitle}</p>
            <h3>${this.title}</h3>
        </article>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
        :host{

        }

        img{
            width:350px;
            height:350px;
            border-radius:20px;
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

customElements.define('card-design', CardDesign);