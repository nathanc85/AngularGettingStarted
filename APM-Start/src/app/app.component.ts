import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `<div>
    <h1>{{pageTitle}}</h1>
    <!-- <h2>{{randomWord()}}</h2> -->
    <div>My First Component</div>
  </div>`
})
export class AppComponent {
  pageTitle: string = "Acme Product Management";

  randomWord():string {
    let words = ["house", "table", "light", "bed"];
    return words[Math.floor(Math.random() * words.length)];
  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'pm-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Angular: Getting Started Now';
//   weekDay: string = 'Friday';
// }
