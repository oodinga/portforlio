import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Project, Skill } from './models/models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  fileUrl = 'assets/resume.pdf';

  skills: Skill[] = [
    {
      languages: ["Node.js", "Python", "Go", "Java"],
      name: "Backend"
    },
    {
      languages: ["HTML", "CSS", "JS", "Angular"],
      name: "Frontend"
    },
    {
      languages: ["MySQL", "SQL", "MongoDB", "PostgreSql"],
      name: "Database"
    }
  ]

  projects: Project[] =[
    {
      description: "A full-stack social media platform built with Angular and Node.js.",
      imageUrl: "assets/bg.avif",
      link: "",
      title: "Social Media Platform"
    },
    {
      description: "An e-commerce application with payment gateway integration.",
      imageUrl: "assets/bg.avif",
      link: "",
      title: "E-commerce Store"
    },
    {
      description: "A real-time chat application using WebSockets and Node.js.",
      imageUrl: "assets/bg.avif",
      link: "",
      title: "Real-Time Chat App"
    },
  ]
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
