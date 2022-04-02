define(["./GeometryOffsetAttribute-2bff0974","./arrayRemoveDuplicates-1a15bd09","./Transforms-4ee811db","./Matrix2-c430e55a","./RuntimeError-8952249c","./ComponentDatatype-9e86ac8f","./PolylineVolumeGeometryLibrary-d36d4567","./CorridorGeometryLibrary-4ded89a5","./defaultValue-81eec7ed","./GeometryAttribute-51ed9bde","./GeometryAttributes-32b29525","./IndexDatatype-bed3935d","./PolygonPipeline-0605b100","./_commonjsHelpers-3aae1032-26891ab7","./combine-3c023bda","./WebGLConstants-508b9636","./EllipsoidTangentPlane-0152c019","./AxisAlignedBoundingBox-52bc7e5b","./IntersectionTests-4d132f79","./Plane-7e828ad8","./PolylinePipeline-b3067570","./EllipsoidGeodesic-22d2f504","./EllipsoidRhumbLine-c86f0674"],(function(e,t,i,r,o,n,s,a,l,d,u,p,c,f,h,y,b,g,m,A,_,C,E){"use strict";const G=new r.Cartesian3,T=new r.Cartesian3,P=new r.Cartesian3;function v(e,t){const i=[],o=e.positions,c=e.corners,f=e.endPositions,h=new u.GeometryAttributes;let y,b,g,m=0,A=0,_=0;for(b=0;b<o.length;b+=2)g=o[b].length-3,m+=g,_+=g/3*4,A+=o[b+1].length-3;for(m+=3,A+=3,b=0;b<c.length;b++){y=c[b];const e=c[b].leftPositions;l.defined(e)?(g=e.length,m+=g,_+=g/3*2):(g=c[b].rightPositions.length,A+=g,_+=g/3*2)}const C=l.defined(f);let E;C&&(E=f[0].length-3,m+=E,A+=E,E/=3,_+=4*E);const v=m+A,w=new Float64Array(v);let L,D,k,O,x,V,H=0,N=v-1;const I=E/2,S=p.IndexDatatype.createTypedArray(v/3,_+4);let B=0;if(S[B++]=H/3,S[B++]=(N-2)/3,C){i.push(H/3),V=G,x=T;const e=f[0];for(b=0;b<I;b++)V=r.Cartesian3.fromArray(e,3*(I-1-b),V),x=r.Cartesian3.fromArray(e,3*(I+b),x),a.CorridorGeometryLibrary.addAttribute(w,x,H),a.CorridorGeometryLibrary.addAttribute(w,V,void 0,N),D=H/3,O=D+1,L=(N-2)/3,k=L-1,S[B++]=L,S[B++]=k,S[B++]=D,S[B++]=O,H+=3,N-=3}let M=0,R=o[M++],U=o[M++];for(w.set(R,H),w.set(U,N-U.length+1),g=U.length-3,i.push(H/3,(N-2)/3),b=0;b<g;b+=3)D=H/3,O=D+1,L=(N-2)/3,k=L-1,S[B++]=L,S[B++]=k,S[B++]=D,S[B++]=O,H+=3,N-=3;for(b=0;b<c.length;b++){let e;y=c[b];const n=y.leftPositions,d=y.rightPositions;let u,p=P;if(l.defined(n)){for(N-=3,u=k,i.push(O),e=0;e<n.length/3;e++)p=r.Cartesian3.fromArray(n,3*e,p),S[B++]=u-e-1,S[B++]=u-e,a.CorridorGeometryLibrary.addAttribute(w,p,void 0,N),N-=3;i.push(u-Math.floor(n.length/6)),t===s.CornerType.BEVELED&&i.push((N-2)/3+1),H+=3}else{for(H+=3,u=O,i.push(k),e=0;e<d.length/3;e++)p=r.Cartesian3.fromArray(d,3*e,p),S[B++]=u+e,S[B++]=u+e+1,a.CorridorGeometryLibrary.addAttribute(w,p,H),H+=3;i.push(u+Math.floor(d.length/6)),t===s.CornerType.BEVELED&&i.push(H/3-1),N-=3}for(R=o[M++],U=o[M++],R.splice(0,3),U.splice(U.length-3,3),w.set(R,H),w.set(U,N-U.length+1),g=U.length-3,e=0;e<U.length;e+=3)O=H/3,D=O-1,k=(N-2)/3,L=k+1,S[B++]=L,S[B++]=k,S[B++]=D,S[B++]=O,H+=3,N-=3;H-=3,N+=3,i.push(H/3,(N-2)/3)}if(C){H+=3,N-=3,V=G,x=T;const e=f[1];for(b=0;b<I;b++)V=r.Cartesian3.fromArray(e,3*(E-b-1),V),x=r.Cartesian3.fromArray(e,3*b,x),a.CorridorGeometryLibrary.addAttribute(w,V,void 0,N),a.CorridorGeometryLibrary.addAttribute(w,x,H),O=H/3,D=O-1,k=(N-2)/3,L=k+1,S[B++]=L,S[B++]=k,S[B++]=D,S[B++]=O,H+=3,N-=3;i.push(H/3)}else i.push(H/3,(N-2)/3);return S[B++]=H/3,S[B++]=(N-2)/3,h.position=new d.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:w}),{attributes:h,indices:S,wallIndices:i}}function w(e){const t=(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).positions,i=e.width;o.Check.typeOf.object("options.positions",t),o.Check.typeOf.number("options.width",i);const a=l.defaultValue(e.height,0),d=l.defaultValue(e.extrudedHeight,a);this._positions=t,this._ellipsoid=r.Ellipsoid.clone(l.defaultValue(e.ellipsoid,r.Ellipsoid.WGS84)),this._width=i,this._height=Math.max(a,d),this._extrudedHeight=Math.min(a,d),this._cornerType=l.defaultValue(e.cornerType,s.CornerType.ROUNDED),this._granularity=l.defaultValue(e.granularity,n.CesiumMath.RADIANS_PER_DEGREE),this._offsetAttribute=e.offsetAttribute,this._workerName="createCorridorOutlineGeometry",this.packedLength=1+t.length*r.Cartesian3.packedLength+r.Ellipsoid.packedLength+6}w.pack=function(e,t,i){o.Check.typeOf.object("value",e),o.Check.typeOf.object("array",t),i=l.defaultValue(i,0);const n=e._positions,s=n.length;t[i++]=s;for(let e=0;e<s;++e,i+=r.Cartesian3.packedLength)r.Cartesian3.pack(n[e],t,i);return r.Ellipsoid.pack(e._ellipsoid,t,i),i+=r.Ellipsoid.packedLength,t[i++]=e._width,t[i++]=e._height,t[i++]=e._extrudedHeight,t[i++]=e._cornerType,t[i++]=e._granularity,t[i]=l.defaultValue(e._offsetAttribute,-1),t};const L=r.Ellipsoid.clone(r.Ellipsoid.UNIT_SPHERE),D={positions:void 0,ellipsoid:L,width:void 0,height:void 0,extrudedHeight:void 0,cornerType:void 0,granularity:void 0,offsetAttribute:void 0};return w.unpack=function(e,t,i){o.Check.typeOf.object("array",e),t=l.defaultValue(t,0);const n=e[t++],s=new Array(n);for(let i=0;i<n;++i,t+=r.Cartesian3.packedLength)s[i]=r.Cartesian3.unpack(e,t);const a=r.Ellipsoid.unpack(e,t,L);t+=r.Ellipsoid.packedLength;const d=e[t++],u=e[t++],p=e[t++],c=e[t++],f=e[t++],h=e[t];return l.defined(i)?(i._positions=s,i._ellipsoid=r.Ellipsoid.clone(a,i._ellipsoid),i._width=d,i._height=u,i._extrudedHeight=p,i._cornerType=c,i._granularity=f,i._offsetAttribute=-1===h?void 0:h,i):(D.positions=s,D.width=d,D.height=u,D.extrudedHeight=p,D.cornerType=c,D.granularity=f,D.offsetAttribute=-1===h?void 0:h,new w(D))},w.createGeometry=function(o){let s=o._positions;const u=o._width,f=o._ellipsoid;s=function(e,t){for(let i=0;i<e.length;i++)e[i]=t.scaleToGeodeticSurface(e[i],e[i]);return e}(s,f);const h=t.arrayRemoveDuplicates(s,r.Cartesian3.equalsEpsilon);if(h.length<2||u<=0)return;const y=o._height,b=o._extrudedHeight,g=!n.CesiumMath.equalsEpsilon(y,b,0,n.CesiumMath.EPSILON2),m={ellipsoid:f,positions:h,width:u,cornerType:o._cornerType,granularity:o._granularity,saveAttributes:!1};let A;if(g)m.height=y,m.extrudedHeight=b,m.offsetAttribute=o._offsetAttribute,A=function(t){const i=t.ellipsoid,r=v(a.CorridorGeometryLibrary.computePositions(t),t.cornerType),o=r.wallIndices,s=t.height,u=t.extrudedHeight,f=r.attributes,h=r.indices;let y=f.position.values,b=y.length,g=new Float64Array(b);g.set(y);const m=new Float64Array(2*b);if(y=c.PolygonPipeline.scaleToGeodeticHeight(y,s,i),g=c.PolygonPipeline.scaleToGeodeticHeight(g,u,i),m.set(y),m.set(g,b),f.position.values=m,b/=3,l.defined(t.offsetAttribute)){let i=new Uint8Array(2*b);if(t.offsetAttribute===e.GeometryOffsetAttribute.TOP)i=e.arrayFill(i,1,0,b);else{const r=t.offsetAttribute===e.GeometryOffsetAttribute.NONE?0:1;i=e.arrayFill(i,r)}f.applyOffset=new d.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}let A;const _=h.length,C=p.IndexDatatype.createTypedArray(m.length/3,2*(_+o.length));C.set(h);let E,G,T=_;for(A=0;A<_;A+=2){const e=h[A],t=h[A+1];C[T++]=e+b,C[T++]=t+b}for(A=0;A<o.length;A++)E=o[A],G=E+b,C[T++]=E,C[T++]=G;return{attributes:f,indices:C}}(m);else{if(A=v(a.CorridorGeometryLibrary.computePositions(m),m.cornerType),A.attributes.position.values=c.PolygonPipeline.scaleToGeodeticHeight(A.attributes.position.values,y,f),l.defined(o._offsetAttribute)){const t=A.attributes.position.values.length,i=new Uint8Array(t/3),r=o._offsetAttribute===e.GeometryOffsetAttribute.NONE?0:1;e.arrayFill(i,r),A.attributes.applyOffset=new d.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}}const _=A.attributes,C=i.BoundingSphere.fromVertices(_.position.values,void 0,3);return new d.Geometry({attributes:_,indices:A.indices,primitiveType:d.PrimitiveType.LINES,boundingSphere:C,offsetAttribute:o._offsetAttribute})},function(e,t){return l.defined(t)&&(e=w.unpack(e,t)),e._ellipsoid=r.Ellipsoid.clone(e._ellipsoid),w.createGeometry(e)}}));
//# sourceMappingURL=createCorridorOutlineGeometry.js.map
