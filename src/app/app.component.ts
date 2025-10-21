import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedPersonIndex: number | undefined;
  listPessoas = [
    { nome: 'Ana', idade: 28, cidade: 'São Paulo' },
    { nome: 'Bruno', idade: 34, cidade: 'Rio de Janeiro' },
    { nome: 'Carla', idade: 22, cidade: 'Belo Horizonte' },
    { nome: 'Daniel', idade: 45, cidade: 'Curitiba' },
    { nome: 'Elisa', idade: 30, cidade: 'Porto Alegre' }
  ];

  selectPerson(index: number) {
    console.log(index);
    this.selectedPersonIndex = index;
  }
}
