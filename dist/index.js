"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=u(function(m,f){
function g(e,r){var i=0,t;if(e===0)return r;if(r===0)return e;for(;(e&1)===0&&(r&1)===0;)e>>>=1,r>>>=1,i+=1;for(;(e&1)===0;)e>>>=1;for(;r;){for(;(r&1)===0;)r>>>=1;e>r&&(t=r,r=e,e=t),r-=e}return e<<i}f.exports=g
});var v=u(function(A,s){
function I(e,r){var i=1,t;if(e===0)return r;if(r===0)return e;for(;e%2===0&&r%2===0;)e/=2,r/=2,i*=2;for(;e%2===0;)e/=2;for(;r;){for(;r%2===0;)r/=2;e>r&&(t=r,r=e,e=t),r-=e}return i*e}s.exports=I
});var o=u(function(M,q){
var c=require('@stdlib/math-base-assert-is-nanf/dist'),N=require('@stdlib/math-base-assert-is-integerf/dist'),l=require('@stdlib/constants-float32-pinf/dist'),w=require('@stdlib/constants-float32-ninf/dist'),h=require('@stdlib/constants-int32-max/dist'),p=n(),x=v();function d(e,r){return c(e)||c(r)?NaN:e===l||r===l||e===w||r===w?NaN:N(e)&&N(r)?(e<0&&(e=-e),r<0&&(r=-r),e<=h&&r<=h?p(e,r):x(e,r)):NaN}q.exports=d
});var k=o();module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
