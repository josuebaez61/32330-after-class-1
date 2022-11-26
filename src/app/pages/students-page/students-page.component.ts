import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit {
  loading = true
  students: Student[] = []

  constructor() { }

  ngOnInit(): void {
    this.loadStudents()
  }

  addStudent() {
    this.students.push(new Student(this.students.length + 2, 'Alumno', 'Agregado', true, new Date('2022/09/24')))
  }

  loadStudents() {
    setTimeout(() => {
      this.loading = false
      this.students = [
        new Student(1, 'Josué', 'Baez', true, new Date('2022/09/24')),
        new Student(2, 'Marcos', 'Peña', false, new Date('2021/09/08/')),
        new Student(3, 'Marina', 'Pereyra', true, new Date('2021/05/03')),
      ]
    }, 1000);
  }

  removeStudent(id: number) {
    if (confirm('¿Está seguro?')) {
      this.students = this.students.filter((stu) => stu.id !== id);
    }
  }

}
