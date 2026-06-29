"use strict";var y=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(o){throw e=0,o}}};var w=y(function(k,q){"use strict";var s=require("@stdlib/array-base-copy"),b=require("@stdlib/ndarray-base-ctor"),D=require("@stdlib/ndarray-base-shape"),j=require("@stdlib/ndarray-base-strides"),E=require("@stdlib/ndarray-base-offset"),x=require("@stdlib/ndarray-base-order"),z=require("@stdlib/ndarray-base-dtype"),A=require("@stdlib/ndarray-base-data-buffer"),I=require("@stdlib/ndarray-base-to-unique-normalized-indices"),p=require("@stdlib/array-base-join"),T=require("@stdlib/array-base-zeros"),f=require("@stdlib/string-format");function O(a,e,o){var u,i,v,t,g,m,d,h,l,r,n,c;if(e=s(e),i=s(o),t=D(a,!1),d=e.length,h=t.length,d<h)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");if(u=T(d),m=i.length,i=I(i,h-1),i===null)throw new RangeError(f("invalid argument. Third argument contains an out-of-bounds dimension index. Value: [%s].",p(o,",")));if(i.sort(),i.length!==m)throw new Error(f("invalid argument. Third argument must contain a list of unique dimension indices. Value: [%s].",p(o,",")));for(c=i.length-1,g=j(a,!1),r=d-1;r>=0;r--)if(n=h-d+r,!(n<0)){if(c>=0&&i[c]===n){e[r]=t[n],u[r]=g[n],c-=1;continue}if(l=t[n],v=e[r],v!==0&&v<l)throw new Error(f("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",s(t).join(", "),s(e).join(", "),r));if(l===v)u[r]=g[n];else if(l===1)u[r]=0;else throw new Error(f("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",s(t).join(", "),s(e).join(", "),r))}return b(z(a),A(a),e,u,E(a),x(a))}q.exports=O});var S=w();module.exports=S;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
//# sourceMappingURL=index.js.map
