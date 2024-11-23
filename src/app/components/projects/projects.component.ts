import { Component } from '@angular/core';
import { Project } from '../../models/models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
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
}
