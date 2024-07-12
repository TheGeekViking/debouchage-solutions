class FAQ {
    #faq;

    constructor(el) {
        this.#faq = el;
    }
    init() {
        this.#faq.querySelectorAll(".question").forEach(question => {
            const btn = question.querySelector(".expand");
            const response = question.querySelector(".response");
            const plus = question.querySelector(".plus");
            const minus = question.querySelector(".minus");

            btn.addEventListener("click", () => {
                response.classList.toggle("hidden")
                plus.classList.toggle("hidden")
                minus.classList.toggle("hidden")
            })
        })
    }
}