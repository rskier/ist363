//console.log('beatles!!!');

//Video Outline

//1. learn how to write an arrow function

    //old function syntax
    //function calculateAverage (a,b) {
    //    const result = (a+b)/2;
    //   return result;
    //}
    // function calculateAverage(a,b) {
    //     return (a+b)/2;
    // }
    // arrow function syntax
const calculateAverage = (a,b) => {
    return (a+b)/2;
}


console.log(calculateAverage(4,27));

const addTen = (num) => {
    return num+10;
}

    // const addTen = num => num + 10;

console.log(addTen(36));

//2. review forEach arraw method
    //const beatles = ['Paul', 'George', 'Ringo', 'John'];
    // console.log({beatles});
// beatles.forEach((beatle) => {
//     console.log({beatle});
// });
    //beatles.forEach(beatle => console.log({beatle}));


// 3. review sort array method
    //beatles.sort();
    //console.log({beatles});
    // const sortedBeatles = [...beatles].sort((a,b)=>{
    //     console.log({a,b});
    //     if (a > b) {
    //         return -1;
    //     }
    // })

    // console.log({sortedBeatles});

    const beatles = [
        {
            name: 'Paul',
            age: 78,
        },
        {
            name: 'Geroge',
            age: 75,
        },
        {
            name: 'Ringo',
            age: 88,
        },
        {
            name: 'john',
            age: 40,
        }
    ]

        const sortedBeatlesByAge = [...beatles].sort((a,b)=>{
            if (a.age > b.age) {
                return -1;
            }
        });

        console.log({sortedBeatlesByAge});
// 4. finish the sort functionality