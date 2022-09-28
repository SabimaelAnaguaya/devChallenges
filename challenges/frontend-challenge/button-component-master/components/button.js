class BtnComp extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        /* get atributtes
            this.var = this.getAttribute('attribute');
        */

       this.title = this.getAttribute('title');
       this.subtitle = this.getAttribute('subtitle');
       this.icoLeft = this.getAttribute('icoleft');
       this.icoRight = this.getAttribute('icoright');
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
        <div class="btn-container">
            <p>< ${this.title} /></p>

            <div class="btn">
                <img src="${this.icoLeft}" />
                <p>Default</p>
                <img src="${this.icoRight}"/>
            </div>

            <p>${this.subtitle}</p>
        </div>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
        :host{
            --primary: #E0E0E0; 
            --secondary: #AEAEAE;
            --font-color: black;
            --border: none;
            --shadow: 0px 2px 3px rgba(51, 51, 51, 0.2); 

        }
        .btn{
            width: 120px;
            height: 40px;
            border-radius: 6px;
            border: var(--border);
            color:var(--font-color);
            cursor: pointer;
            font-weight: 500;
            font-size: 14px;
            background-color: var(--primary);
            box-shadow: var(--shadow);
            transition: .5s all ease-out
            display: flex;
            align-items: center;
            justify-content: center;

        }
            
        .btn img{
            width: 20px;
            height: 20px;
            margin: 0;
        }

        .btn-container{
            display: flex;
            flex-direction: column;
            padding: 0 20px;
            align-items: center;
            border:1px solid #828282;
            border-radius: 20px;
            width: fit-content;
        }
        
        .btn-container > p{
            font-size: 12px;
            color: #828282;
            opacity: 0;
            transition: .5s all ease-out;
        }

        .btn-container:hover > p{
            opacity: 1;
            transition: .5s all ease-in;
        }

        .btn:hover, .btn:focus{
            background-color: var(--secondary);
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

customElements.define('btn-comp', BtnComp );