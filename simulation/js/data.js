// trapazium ----------------------------------------------------------------
let mat_c = [[7.2038], [-14.165], [71.985]];
let mat_a = [
    [96.8874, -4.023, 9.4841],
    [-35.4831, -92.0509, 4.4445],
    [4.0625, 55.0972, -51.2556],
];
//3 x 1 random numbers in [-100, 100]
function initialize_mat_c() {
    mat_c = [];
    let num1 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    let num2 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    let num3 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    mat_c.push([num1]);
    mat_c.push([num2]);
    mat_c.push([num3]);
}
//3 x 3 random numbers in [-100, 100]
function initialize_mat_a() {
    mat_a = [];
    for (let i = 0; i < 3; i++) {
        let num1 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        let num2 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        let num3 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        mat_a.push([num1, num2, num3]);
    }
    if (Math.abs(mat_a[0][0]) < 25) {
        mat_a[0][0] = 25;
    }
    mat_a[0][0] = mat_a[0][0] * 4;
}
initialize_mat_c();
initialize_mat_a();
let x_vals = [];
let y_vals = [];
let tb_data = [];
let tb2_data = [];
let I_val = 0;
//all variables
let X = [];
function initialize_X() {
    let ini = Math.round(Math.random() * 3 + 1);
    X = [ini, ini + 1, ini + 2, ini + 3];
}
initialize_X();
let Y = [];
let y = Y[0];
let x = X[0] + Math.round(Math.random() * 2) + 0.5;
console.log(`x => ${x}`);
let x_ex = X[3] + 0.5;
console.log(`x_ex => ${x_ex}`);
for (let i = 0; i < X.length; i++) {
    Y.push(Math.pow(X[i], 4) + Math.round(Math.random() * 3 + 2));
}
function load_tb2() {
    for (let i = 0; i < 4; i++) {
        tb2_data.push([`X<sub>${i + 1}</sub> = ` + X[i], Y[i]]);
    }
    //calculcate f(x0, x1)
    tb2_data[0].push((Y[1] - Y[0]) / (X[1] - X[0]));
    tb2_data[1].push((Y[2] - Y[1]) / (X[2] - X[1]));
    tb2_data[2].push((Y[3] - Y[2]) / (X[3] - X[2]));
    tb2_data[3].push('-');
    //calculcate f(x0, x1, x2)
    tb2_data[0].push((tb2_data[1][2] - tb2_data[0][2]) / (X[2] - X[0]));
    tb2_data[1].push((tb2_data[2][2] - tb2_data[1][2]) / (X[3] - X[1]));
    tb2_data[2].push('-');
    tb2_data[3].push('-');
    //calculcate f(x0, x1, x2, x3)
    tb2_data[0].push((tb2_data[1][3] - tb2_data[0][3]) / (X[3] - X[0]));
    tb2_data[1].push('-');
    tb2_data[2].push('-');
    tb2_data[3].push('-');
    console.log(tb2_data);
}
load_tb2();
//# sourceMappingURL=data.js.map