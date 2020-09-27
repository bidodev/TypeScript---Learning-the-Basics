// Code goes here!
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionTextAreaElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

  constructor(projectInput: string, projectHost: string) {
      this.templateElement = document.querySelector(`${projectInput}`)! as HTMLTemplateElement;
      this.hostElement = document.querySelector(`${projectHost}`)! as HTMLDivElement;

      //second argument reffers to create a deep copy
      //https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode
      const importedNode = document.importNode(this.templateElement.content, true);
      this.element = importedNode.firstElementChild as HTMLFormElement;
      this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
      this.descriptionTextAreaElement = this.element.querySelector('#description') as HTMLInputElement;
      this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement; 

      this.configure();
      this.attach();
  }
    private configure() {
        this.element.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log(this.titleInputElement.value)
        })
    }
    private attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element)
    }
}

const prjInput = new ProjectInput('#project-input', '#app');
console.log(prjInput)