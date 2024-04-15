const powFunc = (num, deg) => (deg !== 1 ? num * powFunc(num, deg - 1) : num);

console.log("powFunc():", powFunc(2, 4));
