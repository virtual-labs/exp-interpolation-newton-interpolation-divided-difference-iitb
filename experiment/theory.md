<h3>Divided Differences</h3>

<p>There are two disadvantages to using the Lagrangian polynomial or Neville's method for interpolation. First, it involves more arithmetic operations than does the divided-difference method we now discuss. Second, and more importantly, if we desire to add or subtract a point from the set used to construct the polynomial, we essentially have to start over in the computations. Both the Lagrangian polynomials and Neville's method also must repeat all of the arithmetic if we must interpolate at a new x-value. The divided-difference method avoids all of this computation.</p>

<p>&emsp;Actually, we will not get a polynomial different from that obtained by Lagrange's technique. As we will show later on, every nth-degree polynomial that passes through the same n + 1 points is identical. Only the way that the polynomial is expressed is different.</p>

<p>&emsp;Our treatment of divided-difference tables assumes that the function, f(x), is known at several values for x:</p>

$$
x_0 \qquad f_0 \\
x_1 \qquad f_1 \\
x_2 \qquad f_2 \\
x_3 \qquad f_3 \\
$$

<p>We do not assume that the x's are evenly spaced or even that the values are arranged in any particular order (but some ordering may be advantageous).</p>

<p>&emsp;Consider the nth-degree polynomial written in a special way:</p>

$$
P_n(x) = a_0 + (x-x_0)a_1 + (x-x_0)(x-x_1)a_2 + ... + (x-x_0)(x-x_1) ...(x-x_{n-1})a_n \qquad  ...equ(1)
$$

<p>If we chose the a<sub>i</sub> so that P<sub>n</sub>(x) = f(x) at the n + 1 known points, (x<sub>i</sub>,f<sub>i</sub>),i = 0, . . . .n, then P<sub>n</sub>(x) is an interpolating polynomial. We will show that the a<sub>i</sub>'s are readily determined by using what are called the <i>divided differences of the tabulated values.</i></p>

<p>A special standard notation for divided differences is</p>

$$ f[x_0,x_1] = \frac{f_1-f_0}{x_1-x_0}, $$

<p>called the <i>first divided difference between x<sub>0</sub> and x<sub>1</sub></i>. The function</p>

$$ f[x_1,x_2] = \frac{f_2-f_1}{x_2-x_1}, $$

<p>is the first divided difference between x<sub>1</sub> and x<sub>2</sub> (We use f[x<sub>0</sub>] = f<sub>0</sub> = f(x<sub>0</sub>)).</p>

<p>In general,</p>

$$
\boxed{f[x_s,x_t] = \frac{f_t - f_s}{x_t - x_s}}
$$

<p>is the first divided difference between x<sub>s</sub> and x<sub>t</sub>. Observe that the order of the points is immaterial:</p>

$$ 
f[x_s,x_t] = \frac{f_t - f_s}{x_t -x_s} = \frac{f_s - f_t}{x_s - x_t} = f[x_t, x_s]
$$

<p>Second- and higher-order differences are defined in terms of lower-order differences. For example,</p>

$$
f[x_0, x_1, x_2] = \frac{f[x_1,x_2] - f[x_0, x_1]}{x_2 - x_0}
$$

$$
\boxed{
   f[x_0,x_1,...,x_n] = \frac{f[x_1,x_2,...x_n] - f[x_0,x_1,...x_{n-1}]}{x_n - x_0}
}
$$

<p>The concept is even extended to a zero-order difference:</p>

$$ f[x_s] = f_s $$

<p>Using the standard notation, a divided-difference table is shown in symbolic form in Table 3.1.</p>

$$
\begin{array}{|c|c|c|c|c|}
\hline \\
\mathbf{x_i} & \mathbf{f_i} & \mathbf{f[x_i, x_{i+1}]} & \mathbf{f[x_i,x_{i+1},x_{i+2}]} & \mathbf{f[x_i,x_{i+1},x_{i+2},x_{i+3}]} \\[4px]
\hline
\\
x_0 & f_0 & f[x_0,x_1] & f[x_0,x_1,x_2] & f[x_0,x_1,x_2,x_3] \\[4px]
\hline
\\
x_1 & f_1 & f[x_1,x_2] & f[x_1,x_2,x_3] & f[x_1,x_2,x_3,x_4] \\[4px]
\hline
\\
x_2 & f_2 & f[x_2,x_3] & f[x_2,x_3,x_4] & \\[4px]
\hline
\\
x_3 & f_3 & f[x_3,x_4]  &  &  \\[4px]
\hline \\
x_4 & f_4 & & & \\[4px]
\hline
\end{array}
$$

$$Table\ 3.1$$

<br>
<br>

<p>&emsp; We are now ready to establish that the a<sub>i</sub> of Eq.(1) are given by these divided differences. We write Eq.(1) with x set equal to x<sub>0</sub>, x<sub>1</sub>, ..., x<sub>n</sub> in succession, giving</p>

$$
\begin{aligned}
   x = x_0: \qquad &P_n(x_0) = a_0, \\
   x = x_1: \qquad &P_n(x_1) = a_0 + (x_1 - x_0)a_1, \\
   x = x_2: \qquad &P_n(x_2) = a_0 + (x_2-x_0)a_1 + (x_2-x_0)(x_2-x_1)a_2, \\
   ⋮ \\
   x = x_n: \qquad &P_n(x_n) = a_0 + (x_n-x_0)a_1 + (x_n-x_0)(x_n-x_1)a_2 + ... + (x_n - x_0)...(x_n-x_{n-1})a_n
\end{aligned}
$$

<p>If P<sub>n</sub>(x) is to be an interpolating polynomial, it must match the table for all n + 1 entries:</p>

$$ P_n(x_i) = f_i \quad for\ i =0,1,2,...,n $$

<p>If the P<sub>n</sub>(x<sub>i</sub>) in each equation is replaced by f<sub>i</sub>, we get a triangular system, and each a<sub>i</sub>, can be computed in turn.</p>

<p>&emsp; From the first equation,</p>

$$ a_0 = f_0 = f[x_0] \quad makes \quad P_n(x_0) = f_0 $$

<p>If a<sub>1</sub> = f[x<sub>0</sub>, x<sub>1</sub>], then</p>

$$ P_n(x_1) = f_0 + (x_1 - x_0)\frac{f_1 - f_0}{x_1 - x_0} = f_1 $$

<p>If a<sub>2</sub> = f[x<sub>0</sub>, x<sub>1</sub>, x<sub>2</sub>], then</p>

$$
P_n(x_2) = f_0 + (x_2 - x_0)\frac{f_1 - f_0}{x_1 - x_0} + (x_2 - x_0)(x_2 - x_1)\frac{(f_2 - f_1)/(x_2 - x_1) - (f_1 - f_0)/(x_1 - x_0)}{x_2 - x_0} = f_2
$$

<p>One can show in similar fashion that each P<sub>n</sub>(x<sub>i</sub>) will equal f<sub>i</sub> if a<sub>i</sub> = f[x<sub>0</sub>, x<sub>1</sub>, ..., x<sub>i</sub>].</p>

<p>We then can write:</p>

$$\boxed{
   \begin{aligned}
      P_n(x) = &f[x_0] + (x-x_0)f[x_0, x_1] + (x-x_0)(x-x_1)f[x_0...x_2] \\
      &+ (x-x_0)(x-x_1)(x-x_2)f[x_0...x_3] + ...  \\
      &+ (x-x_0)(x-x_1)... (x-x_{n-1})f[x_0...x_n]
   \end{aligned}
} \qquad \qquad ...equ(2)$$

<script type="text/javascript" id="MathJax-script" async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
      </script>

   <script>
      setTimeout(() => {
         MathJax.typeset();
      }, 800);
   </script>