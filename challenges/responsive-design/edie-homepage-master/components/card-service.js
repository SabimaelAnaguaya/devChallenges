class CardService extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        /* get atributtes
            this.var = this.getAttribute('attribute');
        */

        this.img = this.getAttribute('img');
        this.title = this.getAttribute('title');

    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
        <article>
            <picture>
                <img src=${this.img} />
            </picture>
            <h3>${this.title}</h3>
            <p><slot></slot></p>
            <button>Get Started</button>
        </article>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
            :host{

                --primary:#2D9CDB;
                display: block;
                width:320px;

            }
            article{
                width:100%;
                box-shadow:0 0 10px -5px gray;
                border-radius:20px;
                padding:20px;
                
                
            }
            
            article picture{
                width: 67px;
                height:67px;
                margin: 20px 0;
                background:var(--primary);
                border-radius:10px;
                display:flex;
                justify-content:center;
                align-items:center;
            }

            article picture img{
                height:70%;
            }
            article h3{
                text-transform:uppercase;
            }
            article p{
                width:90%;
            }

            article button{
                width:120px;
                height:45px;
                border-radius:10px;
                border:none;
                cursor:pointer;
                margin:20px 0;
                color:azure;
                font-weight:bold;
                background:var(--primary);
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

customElements.define('card-service', CardService);