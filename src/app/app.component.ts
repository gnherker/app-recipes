import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes';
  page = 'recipes';

  onChangeNavigation(page: string) {
    this.page = page;
  }
}
