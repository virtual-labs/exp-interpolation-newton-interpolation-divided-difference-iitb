function activity3() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate the f(${x_ex})</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-23' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act3() {
    let temp_btn = document.getElementById('temp-btn-23');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate y values", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>


    <p style='text-align: center; font-size: 24px;'>Find <span style='display: inline-block;' >$$ f(${x_ex}) $$</span> by Interpolation</p>

        <p style='font-size: 24px;'>For finding f(x) where x = ${x_ex}</p>


        <div style='text-align: center;'><span style='font-size: 18px; display: inline-block;'>$$ y = f(x) = y_1 + (x - x_1)f_{a1}(x_1, x_2) + (x - x_1)(x - x_2)f_{b1}(x_1, x_2, x_3) + (x - x_1)(x - x_2)(x - x_3)f_{c1}(x_1, x_2, x_3, x_4) $$</span></div>


        <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ y $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='y2-inp' > <span id='y2-val-sp'></span></div>

        <br>
        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a3();'  id='temp-btn-121' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    show_step('tb3-box');
    internal_calculations2();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations2() {
    // y = Y[0];
    // let u = (x_ex - X[0]);
    // let fact = 1;
    // let sumu = u;
    // for(let i=0; i<3; i++) {
    //     y = y + sumu*tb2_data[0][2+i] / fact;
    //     u = u-1;
    //     sumu = sumu*u;
    //     fact = fact*(i+2);
    // }
    // console.log(y);
    y = Y[0];
    let u = (x_ex - X[0]);
    let sumu = u;
    for (let i = 0; i < 3; i++) {
        y = y + sumu * tb2_data[0][2 + i];
        u = x_ex - X[i + 1];
        sumu = sumu * u;
    }
    console.log(y);
}
function verify_a3() {
    let btn = document.getElementById('temp-btn-121');
    console.log(`y = ${y}`);
    let inp1 = document.getElementById('y2-inp');
    let sp1 = document.getElementById('y2-val-sp');
    if (!verify_values(parseFloat(inp1.value), y)) {
        alert('y value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${y}`;
    alert('Your entered values are correct!!');
}
activity1();
//# sourceMappingURL=activity3.js.map