<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# gcdf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [greatest common divisor][gcd] (gcd) of two single-precision floating point numbers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [greatest common divisor][gcd] (gcd) of two non-zero integers `a` and `b` is the largest positive integer which divides both `a` and `b` without a remainder. The gcd is also known as the **greatest common factor** (gcf), **highest common factor** (hcf), **highest common divisor**, and **greatest common measure** (gcm).

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import gcdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gcdf@deno/mod.js';
```

#### gcdf( a, b )

Computes the [greatest common divisor][gcd] (gcd).

```javascript
var v = gcdf( 48, 18 );
// returns 6
```

If both `a` and `b` are `0`, the function returns `0`.

```javascript
var v = gcdf( 0, 0 );
// returns 0
```

Both `a` and `b` must have integer values; otherwise, the function returns `NaN`.

```javascript
var v = gcdf( 3.14, 18 );
// returns NaN

v = gcdf( 48, 3.14 );
// returns NaN

v = gcdf( NaN, 18 );
// returns NaN

v = gcdf( 48, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import gcdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gcdf@deno/mod.js';

var a = discreteUniform( 100, 0, 50 );
var b = discreteUniform( a.length, 0, 50 );

var i;
for ( i = 0; i < a.length; i++ ) {
    console.log( 'gcdf(%d,%d) = %d', a[ i ], b[ i ], gcdf( a[ i ], b[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

## References

-   Stein, Josef. 1967. "Computational problems associated with Racah algebra." _Journal of Computational Physics_ 1 (3): 397–405. doi:[10.1016/0021-9991(67)90047-2][@stein:1967].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-gcdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-gcdf

[test-image]: https://github.com/stdlib-js/math-base-special-gcdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-gcdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-gcdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-gcdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-gcdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-gcdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-gcdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-gcdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-gcdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-gcdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-gcdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-gcdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-gcdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-gcdf/main/LICENSE

[gcd]: https://en.wikipedia.org/wiki/Greatest_common_divisor

[@stein:1967]: https://doi.org/10.1016/0021-9991(67)90047-2

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->