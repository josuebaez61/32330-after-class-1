export class Student {
  id: number;
  firstName: string;
  lastName: string;
  isTop10: boolean;
  createdAt: Date;
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    isTop10: boolean,
    createdAt: Date
  ) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.isTop10 = isTop10
    this.createdAt = createdAt
  }

  toggleTop10() {
    this.isTop10 = !this.isTop10
  }
}


// El constructor es similar a esto ->
// function createStudent(id: number, firstName: string, lastName: string, isTop10: boolean, score: number, createdAt: Date) {
//   const student = {}
//   student.id = id
//   student.firstName = firstName
//   student.lastName = lastName
//   student.isTop10 = isTop10
//   student.score = score
//   student.createdAt = createdAt
//   return student;
// }
