define(["./when-4bbc8319","./Matrix2-265d9610","./ArcType-fc72c06c","./Transforms-8b90e17c","./Color-cc989747","./ComponentDatatype-aad54330","./RuntimeError-5b082e8f","./GeometryAttribute-4bcb785f","./GeometryAttributes-7827a6c2","./IndexDatatype-6739e544","./PolylinePipeline-b9913663","./combine-e9466e32","./WebGLConstants-508b9636","./EllipsoidGeodesic-ed024f16","./EllipsoidRhumbLine-d09d563f","./IntersectionTests-596e31ec","./Plane-616c9c0a"],(function(e,o,t,r,l,n,i,a,s,c,p,d,f,y,u,h,C){"use strict";function g(e,o,t,r,n,i,a){const s=p.PolylinePipeline.numberOfPoints(e,o,n);let c;const d=t.red,f=t.green,y=t.blue,u=t.alpha,h=r.red,C=r.green,g=r.blue,T=r.alpha;if(l.Color.equals(t,r)){for(c=0;c<s;c++)i[a++]=l.Color.floatToByte(d),i[a++]=l.Color.floatToByte(f),i[a++]=l.Color.floatToByte(y),i[a++]=l.Color.floatToByte(u);return a}const m=(h-d)/s,E=(C-f)/s,b=(g-y)/s,P=(T-u)/s;let _=a;for(c=0;c<s;c++)i[_++]=l.Color.floatToByte(d+c*m),i[_++]=l.Color.floatToByte(f+c*E),i[_++]=l.Color.floatToByte(y+c*b),i[_++]=l.Color.floatToByte(u+c*P);return _}function T(r){const a=(r=e.defaultValue(r,e.defaultValue.EMPTY_OBJECT)).positions,s=r.colors,c=e.defaultValue(r.colorsPerVertex,!1);if(!e.defined(a)||a.length<2)throw new i.DeveloperError("At least two positions are required.");if(e.defined(s)&&(c&&s.length<a.length||!c&&s.length<a.length-1))throw new i.DeveloperError("colors has an invalid length.");this._positions=a,this._colors=s,this._colorsPerVertex=c,this._arcType=e.defaultValue(r.arcType,t.ArcType.GEODESIC),this._granularity=e.defaultValue(r.granularity,n.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=e.defaultValue(r.ellipsoid,o.Ellipsoid.WGS84),this._workerName="createSimplePolylineGeometry";let p=1+a.length*o.Cartesian3.packedLength;p+=e.defined(s)?1+s.length*l.Color.packedLength:1,this.packedLength=p+o.Ellipsoid.packedLength+3}T.pack=function(t,r,n){if(!e.defined(t))throw new i.DeveloperError("value is required");if(!e.defined(r))throw new i.DeveloperError("array is required");let a;n=e.defaultValue(n,0);const s=t._positions;let c=s.length;for(r[n++]=c,a=0;a<c;++a,n+=o.Cartesian3.packedLength)o.Cartesian3.pack(s[a],r,n);const p=t._colors;for(c=e.defined(p)?p.length:0,r[n++]=c,a=0;a<c;++a,n+=l.Color.packedLength)l.Color.pack(p[a],r,n);return o.Ellipsoid.pack(t._ellipsoid,r,n),n+=o.Ellipsoid.packedLength,r[n++]=t._colorsPerVertex?1:0,r[n++]=t._arcType,r[n]=t._granularity,r},T.unpack=function(t,r,n){if(!e.defined(t))throw new i.DeveloperError("array is required");let a;r=e.defaultValue(r,0);let s=t[r++];const c=new Array(s);for(a=0;a<s;++a,r+=o.Cartesian3.packedLength)c[a]=o.Cartesian3.unpack(t,r);s=t[r++];const p=s>0?new Array(s):void 0;for(a=0;a<s;++a,r+=l.Color.packedLength)p[a]=l.Color.unpack(t,r);const d=o.Ellipsoid.unpack(t,r);r+=o.Ellipsoid.packedLength;const f=1===t[r++],y=t[r++],u=t[r];return e.defined(n)?(n._positions=c,n._colors=p,n._ellipsoid=d,n._colorsPerVertex=f,n._arcType=y,n._granularity=u,n):new T({positions:c,colors:p,ellipsoid:d,colorsPerVertex:f,arcType:y,granularity:u})};const m=new Array(2),E=new Array(2),b={positions:m,height:E,ellipsoid:void 0,minDistance:void 0,granularity:void 0};return T.createGeometry=function(i){const d=i._positions,f=i._colors,y=i._colorsPerVertex,u=i._arcType,h=i._granularity,C=i._ellipsoid,T=n.CesiumMath.chordLength(h,C.maximumRadius),P=e.defined(f)&&!y;let _;const A=d.length;let B,w,k,D,G=0;if(u===t.ArcType.GEODESIC||u===t.ArcType.RHUMB){let o,r,i;u===t.ArcType.GEODESIC?(o=n.CesiumMath.chordLength(h,C.maximumRadius),r=p.PolylinePipeline.numberOfPoints,i=p.PolylinePipeline.generateArc):(o=h,r=p.PolylinePipeline.numberOfPointsRhumbLine,i=p.PolylinePipeline.generateRhumbArc);const a=p.PolylinePipeline.extractHeights(d,C),s=b;if(u===t.ArcType.GEODESIC?s.minDistance=T:s.granularity=h,s.ellipsoid=C,P){let t=0;for(_=0;_<A-1;_++)t+=r(d[_],d[_+1],o)+1;B=new Float64Array(3*t),k=new Uint8Array(4*t),s.positions=m,s.height=E;let n=0;for(_=0;_<A-1;++_){m[0]=d[_],m[1]=d[_+1],E[0]=a[_],E[1]=a[_+1];const o=i(s);if(e.defined(f)){const e=o.length/3;D=f[_];for(let o=0;o<e;++o)k[n++]=l.Color.floatToByte(D.red),k[n++]=l.Color.floatToByte(D.green),k[n++]=l.Color.floatToByte(D.blue),k[n++]=l.Color.floatToByte(D.alpha)}B.set(o,G),G+=o.length}}else if(s.positions=d,s.height=a,B=new Float64Array(i(s)),e.defined(f)){for(k=new Uint8Array(B.length/3*4),_=0;_<A-1;++_){G=g(d[_],d[_+1],f[_],f[_+1],T,k,G)}const e=f[A-1];k[G++]=l.Color.floatToByte(e.red),k[G++]=l.Color.floatToByte(e.green),k[G++]=l.Color.floatToByte(e.blue),k[G++]=l.Color.floatToByte(e.alpha)}}else{w=P?2*A-2:A,B=new Float64Array(3*w),k=e.defined(f)?new Uint8Array(4*w):void 0;let t=0,r=0;for(_=0;_<A;++_){const n=d[_];if(P&&_>0&&(o.Cartesian3.pack(n,B,t),t+=3,D=f[_-1],k[r++]=l.Color.floatToByte(D.red),k[r++]=l.Color.floatToByte(D.green),k[r++]=l.Color.floatToByte(D.blue),k[r++]=l.Color.floatToByte(D.alpha)),P&&_===A-1)break;o.Cartesian3.pack(n,B,t),t+=3,e.defined(f)&&(D=f[_],k[r++]=l.Color.floatToByte(D.red),k[r++]=l.Color.floatToByte(D.green),k[r++]=l.Color.floatToByte(D.blue),k[r++]=l.Color.floatToByte(D.alpha))}}const L=new s.GeometryAttributes;L.position=new a.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:B}),e.defined(f)&&(L.color=new a.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:4,values:k,normalize:!0})),w=B.length/3;const v=2*(w-1),V=c.IndexDatatype.createTypedArray(w,v);let x=0;for(_=0;_<w-1;++_)V[x++]=_,V[x++]=_+1;return new a.Geometry({attributes:L,indices:V,primitiveType:a.PrimitiveType.LINES,boundingSphere:r.BoundingSphere.fromPoints(d)})},function(t,r){return e.defined(r)&&(t=T.unpack(t,r)),t._ellipsoid=o.Ellipsoid.clone(t._ellipsoid),T.createGeometry(t)}}));
//# sourceMappingURL=createSimplePolylineGeometry.js.map
