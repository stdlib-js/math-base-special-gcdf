/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var isIntegerf = require( '@stdlib/math-base-assert-is-integerf' );
var PINF = require( '@stdlib/constants-float32-pinf' );
var NINF = require( '@stdlib/constants-float32-ninf' );
var INT32_MAX = require( '@stdlib/constants-int32-max' );
var bitwisef = require( './bitwise_binary_gcd.js' );
var largeIntegersf = require( './binary_gcd.js' );


// MAIN //

/**
* Computes the greatest common divisor (gcd) of two single-precision floating-point numbers.
*
* @param {integer} a - first number
* @param {integer} b - second number
* @returns {integer} greatest common divisor
*
* @example
* var v = gcdf( 48, 18 );
* // returns 6
*
* @example
* var v = gcdf( 3.14, 18 );
* // returns NaN
*
* @example
* var v = gcdf( NaN, 18 );
* // returns NaN
*/
function gcdf( a, b ) {
	if ( isnanf( a ) || isnanf( b ) ) {
		return NaN;
	}
	if (
		a === PINF ||
		b === PINF ||
		a === NINF ||
		b === NINF
	) {
		return NaN;
	}
	if ( !( isIntegerf( a ) && isIntegerf( b ) ) ) {
		return NaN;
	}
	if ( a < 0 ) {
		a = -a;
	}
	if ( b < 0 ) {
		b = -b;
	}
	if ( a <= INT32_MAX && b <= INT32_MAX ) {
		return bitwisef( a, b );
	}
	return largeIntegersf( a, b );
}


// EXPORTS //

module.exports = gcdf;
