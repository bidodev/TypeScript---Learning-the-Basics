"use strict";
class ProjectInput {
    constructor(projectInput, projectHost) {
        this.templateElement = document.querySelector(`${projectInput}`);
        this.hostElement = document.querySelector(`${projectHost}`);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
}
const prjInput = new ProjectInput('#project-input', '#app');
const prInput = new ProjectInput('#project-input', '#app');
console.log(prjInput);
//# sourceMappingURL=app.js.map