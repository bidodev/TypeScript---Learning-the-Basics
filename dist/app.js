"use strict";
class ProjectInput {
    constructor(projectInput, projectHost) {
        this.templateElement = document.querySelector(`${projectInput}`);
        this.hostElement = document.querySelector(`${projectHost}`);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionTextAreaElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.configure();
        this.attach();
    }
    configure() {
        this.element.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log(this.titleInputElement.value);
        });
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
}
const prjInput = new ProjectInput('#project-input', '#app');
console.log(prjInput);
//# sourceMappingURL=app.js.map