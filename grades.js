let grades = [0, 0, 0 ]

for (let i=0; i<3; i++) {
    let grade = +prompt("Enter the grade")
    
    if (grade < 1 || grade > 10) {
        alert("Wrong numbers!")
        grades[i] = NaN
    } else {
        grades[i] = grade
    }
}

let avg_grade = (grades[0] + grades[1] + grades[2])/3

console.log(`average grade = ${avg_grade.toFixed(2)}`)