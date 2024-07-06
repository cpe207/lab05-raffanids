// define interface for Student object
interface Student {
  name: string;
  score: number;
}

// assign interface/type to the function definition properly
function findTopNames(students: Student[]): string[] {
  return students
    .filter(student => student.score > 8)
    .map(student => student.name);
}

// assign interface/type to the students1 object properly
const students1: Student[] = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));
// Output: ["john", "jane"]

module.exports = findTopNames;
