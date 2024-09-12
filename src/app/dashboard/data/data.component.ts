import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { courses } from '../../shared/data';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {

  public courses = courses;

  ngOnInit(): void {
    console.log(courses);
  }

}
