class HobbiesCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        /* get atributtes
            this.var = this.getAttribute('attribute');
        */

            this.img = this.getAttribute('img');
            this.title =  this.getAttribute('title')
            console.log(this.title);
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
        <picture>
            <img src= "${this.img}" />
        </picture>
        <h4>${this.title}</h4>
        <p><slot></slot></p>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
        
        *{
            padding:0;
            margin: 0;
            box-sizing: border-box;
        }
        
        :host{
            display: flex;
            flex-direction: column;
            overflow: hiddern;
        }
        picture{
            width: 100%;
            height: 200px;
            overflow: hidden;
            border-radius:20px;
        }
        img{
            width: 100%;
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

customElements.define('card-hobbie',HobbiesCard );