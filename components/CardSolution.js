class CardSolution extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        /* get atributtes
            this.var = this.getAttribute('attribute');
        */

        this.img = this.getAttribute('img');
        this.title = this.getAttribute('title');
        this.subtitle = this.getAttribute('subtitle')
        this.url = this.getAttribute('url');
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
        <div class="card-container">

            <div class="img-card"></div>
            <div class="info-card">
                <h1>${this.title}</h1>
                <h4>${this.subtitle}</h4>
                <p><slot></slot></p>
            </div>
            <span>
                <a href="${this.url}" target="_Blank">Go to Page</a>
            </span>
        </div>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
        :host{
            --primary: #de703c;
            --secondary: #2f3c4f;
            display:inline;
        }
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        .card-container{
            width: 300px;
            height: 400px;
            background: linear-gradient(var(--secondary), var(--primary));
            border-radius: 10px;
            padding: 10px;
            color: azure;
        }
        
        .img-card{
            width: 100%;
            height: 200px;
            overflow: hidden;
            border-radius: 10px;
            background-image: url(${this.img});
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom:8px;
        }

        .info-card h1{
            font-size: 1.4rem;
        }

        .info-card h4{
            font-size: 1rem;
            margin-bottom:8px;
            color: yellow;
        }

        .info-card p{
            width:100%;
            height:80px;
            overflow: scroll;
            
            margin-bottom:10px;
        }
        
        span{
            width:fit-content;
            display:block;
            text-align:center;
            margin:auto;
        }
        
        span a{
            
            background: var(--secondary);
            padding:5px 12px;
            color: azure;
            text-decoration: none;
            border-radius:5px;

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

customElements.define('card-solution', CardSolution);