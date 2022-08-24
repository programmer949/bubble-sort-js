const bubbleSort = (a) => {
    const l = a.length;
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
            }
        }
    }
    return a;
};

console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
