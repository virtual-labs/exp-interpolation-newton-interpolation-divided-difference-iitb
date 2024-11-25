let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Newton's Divided Difference Interpolation</h5>
        <p>Learning Objective: Calculate table values</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Calculate y values', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <div id='a1-tab' ></div>

        <br>

        <p style='text-align: center; font-size: 24px;'>Find <span style='display: inline-block;' >$$ f(${x}) $$</span> by Interpolation</p>
        <br>
        <p style='font-size: 24px;'>Fill table with the required values.</p>
        <br>
        <div id='a1-tab2'></div>

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        show_step('tb1-box');
    }, 150);
    show_xy();
    load_main_table();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function show_xy() {
    let div = document.getElementById('a1-tab');
    let header = ['x'];
    tb_data = [['y']];
    for (let i = 0; i < 4; i++) {
        header.push(`${X[i]}`);
        tb_data[0].push(Y[i]);
    }
    let tb = new Display_Table(header, tb_data, div);
    tb.load_table();
}
function load_main_table() {
    let div = (document.getElementById('a1-tab2'));
    let header = [
        'X',
        'Y',
        'f<sub>a</sub>(x<sub>1</sub>, x<sub>2</sub>)',
        'f<sub>b</sub>(x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>)',
        'f<sub>c</sub>(x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, x<sub>4</sub>)',
    ];
    // let tb = new Verify_Rows_Cols_Strings(
    // 	header,
    // 	tb2_data,
    // 	[0, 1, 2, 3],
    // 	[[2, 3, 4], [2, 3], [2], []],
    // 	'',
    // 	div,
    // 	true,
    // 	true,
    // 	activity2
    // );
    let tb = new Verify_Rows_Cols_Custom_Fixed_Update1(header, tb2_data, [0, 1, 2, 3], [[2, 3, 4], [2, 3], [2], []], '', div, true, true, activity2, 4);
    tb.load_table();
}
activity1();
//# sourceMappingURL=activity1.js.map