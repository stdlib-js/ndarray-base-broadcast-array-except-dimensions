"use strict";var y=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var w=y(function(k,q){"use strict";var s=require("@stdlib/array-base-copy"),b=require("@stdlib/ndarray-base-ctor"),D=require("@stdlib/ndarray-base-shape"),j=require("@stdlib/ndarray-base-strides"),E=require("@stdlib/ndarray-base-offset"),x=require("@stdlib/ndarray-base-order"),z=require("@stdlib/ndarray-base-dtype"),A=require("@stdlib/ndarray-base-data-buffer"),I=require("@stdlib/ndarray-base-to-unique-normalized-indices"),p=require("@stdlib/array-base-join"),T=require("@stdlib/array-base-zeros"),c=require("@stdlib/string-format");function O(a,e,f){var o,i,d,t,g,m,u,v,h,r,n,l;if(e=s(e),i=s(f),t=D(a,!1),u=e.length,v=t.length,u<v)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");if(o=T(u),m=i.length,i=I(i,v-1),i===null)throw new RangeError(c("invalid argument. Third argument contains an out-of-bounds dimension index. Value: [%s].",p(f,",")));if(i.sort(),i.length!==m)throw new Error(c("invalid argument. Third argument must contain a list of unique dimension indices. Value: [%s].",p(f,",")));for(l=i.length-1,g=j(a,!1),r=u-1;r>=0;r--)if(n=v-u+r,!(n<0)){if(l>=0&&i[l]===n){e[r]=t[n],o[r]=g[n],l-=1;continue}if(h=t[n],d=e[r],d!==0&&d<h)throw new Error(c("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",s(t).join(", "),s(e).join(", "),r));if(h===d)o[r]=g[n];else if(h===1)o[r]=0;else throw new Error(c("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",s(t).join(", "),s(e).join(", "),r))}return b(z(a),A(a),e,o,E(a),x(a))}q.exports=O});var S=w();module.exports=S;
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
