// assign interface/type to the function definition properly
function findTopNames(students) {
    return students
        .filter(function (student) { return student.score > 8; })
        .map(function (student) { return student.name; });
}
// assign interface/type to the students1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
// Output: ["john", "jane"]
module.exports = findTopNames;
