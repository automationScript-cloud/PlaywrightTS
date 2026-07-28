

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         process.stdout.write("*" + " ");
//     }
//     console.log();

// }


// for (let i = 0; i < 5; i++) {
//     for (let j = i; j < 5; j++) {
//         process.stdout.write("*" + " ");
//     }
//     console.log();
// }


// for (let i = 1; i < 5; i++) {
//     for (let j = i; j < 5; j++) {
//         process.stdout.write(j + " ");
//     }
//     console.log();
// }


// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < i; j++) {
//         process.stdout.write(" * ");
//     }
//     console.log();
// }
// for (let i = 0; i < 5; i++) {
//     for (let j = i; j < 5; j++) {
//         process.stdout.write(" * ");
//     }
//     console.log();
// }


for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let table = 2; table <= 10; table++) {
        row += `${table}×${i}=${table * i}\t`;
    }
    console.log(row);
}