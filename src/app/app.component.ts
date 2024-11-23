import { Component } from '@angular/core';
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroComponent } from "./components/hero/hero.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactUsComponent, FooterComponent, ProjectsComponent, SkillsComponent, AboutComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
 
}
