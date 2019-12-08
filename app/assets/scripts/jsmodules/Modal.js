class Modal {
    constructor(){
        this.insertModalHTML()
        this.modalPage = document.querySelector(".modal");
        this.closeButton = document.querySelector(".modal__close");
        // this.openModalButtons = document.querySelectorAll(".btn");
        this.events();
    }

    insertModalHTML() {
        document.body.insertAdjacentHTML("beforeend", `
            <div class="modal">
                <div class="modal__inner">
                <h2 class="heading heading--centered heading--large u--no-margin"><img src="assets/images/icons/mail.svg" class="heading__icon"> Get in <strong>Touch</strong></h2>
                <div class="wrapper wrapper--narrow">
                    <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
                </div>

                <div class="modal-social-icons">
                    <a href="#" class="modal-social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
                    <a href="#" class="modal-social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
                    <a href="#" class="modal-social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
                    <a href="#" class="modal-social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
                </div>
                </div>
                <div class="modal__close">X</div>
            </div>
        `)
    }

    events(){
        this.closeButton.addEventListener("click", ()=>this.closeModal());
        // console.log(this.openModalButtons);
        // this.openModalButtons.forEach(button => this.runModalEvents(button));

        document.addEventListener("keyup", e => this.closeModal(e))
    }

    runModalEvents(button) {
        // button.addEventListener("click", (e)=>{
        //     e.preventDefault();
            this.modalPage.classList.add("toggle-modal")
        // })
    }

    closeModal(e){
        if(!e){
            this.modalPage.classList.remove("toggle-modal");
        } else if(e.keyCode == 27) {
            this.modalPage.classList.remove("toggle-modal");
        }
        return;
    }
}

export default Modal;