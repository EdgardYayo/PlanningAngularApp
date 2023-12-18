import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'planning-app';
  loadedFeature = 'recipe';

  onNavigation(selectedView: string){
    this.loadedFeature = selectedView;
  }
}
