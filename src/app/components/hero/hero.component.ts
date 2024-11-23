import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  fileUrl = 'assets/resume.pdf';
  downloadFile() {
    // Create an invisible anchor element
    const anchor = document.createElement('a');
    anchor.href = this.fileUrl;
    anchor.download = 'DavidOdinga_Resume.pdf';  // Set the file name for download
    document.body.appendChild(anchor);  // Attach the anchor to the DOM
    anchor.click();  // Programmatically trigger the click event
    document.body.removeChild(anchor);  // Remove the anchor after download
  }

}
