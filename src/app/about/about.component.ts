import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet,ContactComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
