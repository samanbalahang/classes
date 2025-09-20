window.addEventListener("load", () => {
    /*------------------------------------------------------
    |
    |          reduce fibo
    |
    -------------------------------------------------------*/
    // const numbers = [1, 2, 3, 4, 5];

    // // بدون مقدار اولیه
    // const sum = numbers.reduce((acc, curr) => {
    //     console.log("acc:", acc);
    //     console.log("curr:", curr);
    //     return acc + curr
    // });
    // console.log("sum:", sum); // 15

    // // با مقدار اولیه
    // const sumWithInitial = numbers.reduce((acc, curr) => acc + curr, 10);
    // console.log(sumWithInitial); // 25

    // var fibo = (maxValue = 610) => {
    //     let stopped = false;

    //     return Array(100).fill(0).reduce((acc, _, index) => {
    //         console.log("acc" , acc);
    //         console.log("__" , _);
    //         console.log("index:" , index);

            
    //         if (stopped) return acc;

    //         if (index === 0) return [0];
    //         if (index === 1) return [0, 1];

    //         console.log("acc[index - 1]" , acc[index - 1]);
    //         console.log("acc[index - 2]" ,  acc[index - 2]);
    //         const nextValue = acc[index - 1] + acc[index - 2];
    //         console.log("nextValue" , nextValue);

            
    //         if (nextValue > maxValue) {
    //             stopped = true;
    //             return acc;
    //         }
    //         return [...acc, nextValue];
    //     }, []);
    // }

    // console.log(fibo(10));

    
})