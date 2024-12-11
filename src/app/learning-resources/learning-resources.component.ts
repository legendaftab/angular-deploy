import { Component } from '@angular/core';
import { SaftLinkDirective } from './safe-link.directive';
import { LogDirective } from '../log.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports:[SaftLinkDirective,LogDirective]
})
export class LearningResourcesComponent {}
