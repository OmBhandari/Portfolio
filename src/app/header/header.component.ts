import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private renderer: Renderer2) {}

  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.href = 'assets/pdf/OmBhandari.pdf';
    link.setAttribute('download', `OmBhandari.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}

}
