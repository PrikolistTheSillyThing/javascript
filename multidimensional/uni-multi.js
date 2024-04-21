let grades_ = [
    [
        [9, 10, 9, 8, 10],
        [8, 8, 8, 8, 8]
    ],
    [
        [7, 10, 9, 8, 10],
        [8, 7, 8, 8, 6],
        [8, 8, 5, 8, 8]
    ]
]

let group_index = +prompt("Choose group index (0,1) : ")
let student_index = +prompt("Choose student index: ")

// for (let i = 0; i < 5; i++) {
//     console.log( grades_[group_index][student_index][i])
// }

for (let i = 0; i < 5; i++) {
    let mark = +prompt("Choose student's mark: ")
    grades_[group_index][student_index][i] = mark
    console.log( grades_[group_index][student_index][i] )
}

///////////////////////////////////////

let matrix = [
    [-1, 2, 1],
    [ 1,-2, 1],
    [-1,-2,-1],
]
