import { Component,ChangeDetectionStrategy } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {ImmaginePropertyBindingComponent} from './immagine-property-binding/immagine-property-binding.component';
import {ButtonProvaComponent} from './button-prova/button-prova.component';


@Component({
  selector: 'app-root',
  imports: [
    MatProgressBarModule, MatChipsModule,
    MatCardModule, MatIconModule, MatDividerModule, MatButtonModule, ImmaginePropertyBindingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'corso-angular';

  onclick() {
    console.log("click");
  }
}

