function activity2() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate the f(${x}) value</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate y values", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <p style='font-size: 24px;'>For finding f(x) where x = ${x}</p>

        <div style='text-align: center;'><span style='font-size: 18px; display: inline-block;'>$$ y = f(x) = y_1 + (x - x_1)f_{a1}(x_1, x_2) + (x - x_1)(x - x_2)f_{b1}(x_1, x_2, x_3) + (x - x_1)(x - x_2)(x - x_3)f_{c1}(x_1, x_2, x_3, x_4) $$</span></div>


        <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ y $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='y-inp' > <span id='y-val-sp'></span></div>

        <br>
        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a2();'  id='temp-btn-12' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    show_step('tb2-box');
    internal_calculations();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations() {
    y = Y[0];
    let u = (x - X[0]);
    let sumu = u;
    for (let i = 0; i < 3; i++) {
        y = y + sumu * tb2_data[0][2 + i];
        u = x - X[i + 1];
        sumu = sumu * u;
    }
    console.log(y);
}
function verify_a2() {
    let btn = document.getElementById('temp-btn-12');
    console.log(`y = ${y}`);
    let inp1 = document.getElementById('y-inp');
    let sp1 = document.getElementById('y-val-sp');
    if (!verify_values(parseFloat(inp1.value), y)) {
        alert('y value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${y}`;
    alert('You have entered values are correct!!');
    activity3();
}
activity1();
//# sourceMappingURL=activity2.js.map