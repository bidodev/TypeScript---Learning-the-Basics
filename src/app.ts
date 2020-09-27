// Code goes here!
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

  constructor(projectInput: string, projectHost: string) {
      this.templateElement = document.querySelector(`${projectInput}`)! as HTMLTemplateElement;
      this.hostElement = document.querySelector(`${projectHost}`)! as HTMLDivElement;

      //second argument reffers to create a deep copy
      const importedNode = document.importNode(this.templateElement.content, true);
      this.element = importedNode.firstElementChild as HTMLFormElement;
      this.attach();
  }
    private attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element)
    }
}

const prjInput = new ProjectInput('#project-input', '#app');
const prInput = new ProjectInput('#project-input', '#app');
console.log(prjInput)