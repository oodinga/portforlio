import { Component } from '@angular/core';
import { Skill } from '../../models/models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
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

}
