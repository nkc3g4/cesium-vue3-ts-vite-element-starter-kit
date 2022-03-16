define(["./when-4bbc8319","./Matrix2-265d9610","./GeometryOffsetAttribute-7e016332","./Transforms-8b90e17c","./ComponentDatatype-aad54330","./RuntimeError-5b082e8f","./GeometryAttribute-4bcb785f","./GeometryAttributes-7827a6c2","./IndexDatatype-6739e544","./PolygonPipeline-5fd67ae2","./RectangleGeometryLibrary-80323cc0","./combine-e9466e32","./WebGLConstants-508b9636","./EllipsoidRhumbLine-d09d563f"],(function(e,t,i,n,o,r,a,l,s,u,c,d,p,f){"use strict";const g=new n.BoundingSphere,h=new n.BoundingSphere,y=new t.Cartesian3,m=new t.Rectangle;function b(e,t){const i=e._ellipsoid,n=t.height,r=t.width,u=t.northCap,d=t.southCap;let p=n,f=2,g=0,h=4;u&&(f-=1,p-=1,g+=1,h-=2),d&&(f-=1,p-=1,g+=1,h-=2),g+=f*r+2*p-h;const m=new Float64Array(3*g);let b,_=0,E=0;const A=y;if(u)c.RectangleGeometryLibrary.computePosition(t,i,!1,E,0,A),m[_++]=A.x,m[_++]=A.y,m[_++]=A.z;else for(b=0;b<r;b++)c.RectangleGeometryLibrary.computePosition(t,i,!1,E,b,A),m[_++]=A.x,m[_++]=A.y,m[_++]=A.z;for(b=r-1,E=1;E<n;E++)c.RectangleGeometryLibrary.computePosition(t,i,!1,E,b,A),m[_++]=A.x,m[_++]=A.y,m[_++]=A.z;if(E=n-1,!d)for(b=r-2;b>=0;b--)c.RectangleGeometryLibrary.computePosition(t,i,!1,E,b,A),m[_++]=A.x,m[_++]=A.y,m[_++]=A.z;for(b=0,E=n-2;E>0;E--)c.RectangleGeometryLibrary.computePosition(t,i,!1,E,b,A),m[_++]=A.x,m[_++]=A.y,m[_++]=A.z;const w=m.length/3*2,G=s.IndexDatatype.createTypedArray(m.length/3,w);let v=0;for(let e=0;e<m.length/3-1;e++)G[v++]=e,G[v++]=e+1;G[v++]=m.length/3-1,G[v++]=0;const R=new a.Geometry({attributes:new l.GeometryAttributes,primitiveType:a.PrimitiveType.LINES});return R.attributes.position=new a.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m}),R.indices=G,R}function _(i){const n=(i=e.defaultValue(i,e.defaultValue.EMPTY_OBJECT)).rectangle,a=e.defaultValue(i.granularity,o.CesiumMath.RADIANS_PER_DEGREE),l=e.defaultValue(i.ellipsoid,t.Ellipsoid.WGS84),s=e.defaultValue(i.rotation,0);if(!e.defined(n))throw new r.DeveloperError("rectangle is required.");if(t.Rectangle.validate(n),n.north<n.south)throw new r.DeveloperError("options.rectangle.north must be greater than options.rectangle.south");const u=e.defaultValue(i.height,0),c=e.defaultValue(i.extrudedHeight,u);this._rectangle=t.Rectangle.clone(n),this._granularity=a,this._ellipsoid=l,this._surfaceHeight=Math.max(u,c),this._rotation=s,this._extrudedHeight=Math.min(u,c),this._offsetAttribute=i.offsetAttribute,this._workerName="createRectangleOutlineGeometry"}_.packedLength=t.Rectangle.packedLength+t.Ellipsoid.packedLength+5,_.pack=function(i,n,o){if(!e.defined(i))throw new r.DeveloperError("value is required");if(!e.defined(n))throw new r.DeveloperError("array is required");return o=e.defaultValue(o,0),t.Rectangle.pack(i._rectangle,n,o),o+=t.Rectangle.packedLength,t.Ellipsoid.pack(i._ellipsoid,n,o),o+=t.Ellipsoid.packedLength,n[o++]=i._granularity,n[o++]=i._surfaceHeight,n[o++]=i._rotation,n[o++]=i._extrudedHeight,n[o]=e.defaultValue(i._offsetAttribute,-1),n};const E=new t.Rectangle,A=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),w={rectangle:E,ellipsoid:A,granularity:void 0,height:void 0,rotation:void 0,extrudedHeight:void 0,offsetAttribute:void 0};_.unpack=function(i,n,o){if(!e.defined(i))throw new r.DeveloperError("array is required");n=e.defaultValue(n,0);const a=t.Rectangle.unpack(i,n,E);n+=t.Rectangle.packedLength;const l=t.Ellipsoid.unpack(i,n,A);n+=t.Ellipsoid.packedLength;const s=i[n++],u=i[n++],c=i[n++],d=i[n++],p=i[n];return e.defined(o)?(o._rectangle=t.Rectangle.clone(a,o._rectangle),o._ellipsoid=t.Ellipsoid.clone(l,o._ellipsoid),o._surfaceHeight=u,o._rotation=c,o._extrudedHeight=d,o._offsetAttribute=-1===p?void 0:p,o):(w.granularity=s,w.height=u,w.rotation=c,w.extrudedHeight=d,w.offsetAttribute=-1===p?void 0:p,new _(w))};const G=new t.Cartographic;return _.createGeometry=function(t){const r=t._rectangle,l=t._ellipsoid,d=c.RectangleGeometryLibrary.computeOptions(r,t._granularity,t._rotation,0,m,G);let p,f;if(o.CesiumMath.equalsEpsilon(r.north,r.south,o.CesiumMath.EPSILON10)||o.CesiumMath.equalsEpsilon(r.east,r.west,o.CesiumMath.EPSILON10))return;const y=t._surfaceHeight,_=t._extrudedHeight;let E;if(!o.CesiumMath.equalsEpsilon(y,_,0,o.CesiumMath.EPSILON2)){if(p=function(e,t){const i=e._surfaceHeight,n=e._extrudedHeight,o=e._ellipsoid,r=n,a=i,l=b(e,t),c=t.height,d=t.width,p=u.PolygonPipeline.scaleToGeodeticHeight(l.attributes.position.values,a,o,!1);let f=p.length;const g=new Float64Array(2*f);g.set(p);const h=u.PolygonPipeline.scaleToGeodeticHeight(l.attributes.position.values,r,o);g.set(h,f),l.attributes.position.values=g;const y=t.northCap,m=t.southCap;let _=4;y&&(_-=1),m&&(_-=1);const E=2*(g.length/3+_),A=s.IndexDatatype.createTypedArray(g.length/3,E);f=g.length/6;let w,G=0;for(let e=0;e<f-1;e++)A[G++]=e,A[G++]=e+1,A[G++]=e+f,A[G++]=e+f+1;if(A[G++]=f-1,A[G++]=0,A[G++]=f+f-1,A[G++]=f,A[G++]=0,A[G++]=f,y)w=c-1;else{const e=d-1;A[G++]=e,A[G++]=e+f,w=d+c-2}if(A[G++]=w,A[G++]=w+f,!m){const e=d+w-1;A[G++]=e,A[G]=e+f}return l.indices=A,l}(t,d),e.defined(t._offsetAttribute)){const e=p.attributes.position.values.length/3;let n=new Uint8Array(e);t._offsetAttribute===i.GeometryOffsetAttribute.TOP?n=i.arrayFill(n,1,0,e/2):(E=t._offsetAttribute===i.GeometryOffsetAttribute.NONE?0:1,n=i.arrayFill(n,E)),p.attributes.applyOffset=new a.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}const c=n.BoundingSphere.fromRectangle3D(r,l,y,h),m=n.BoundingSphere.fromRectangle3D(r,l,_,g);f=n.BoundingSphere.union(c,m)}else{if(p=b(t,d),p.attributes.position.values=u.PolygonPipeline.scaleToGeodeticHeight(p.attributes.position.values,y,l,!1),e.defined(t._offsetAttribute)){const e=p.attributes.position.values.length,n=new Uint8Array(e/3);E=t._offsetAttribute===i.GeometryOffsetAttribute.NONE?0:1,i.arrayFill(n,E),p.attributes.applyOffset=new a.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}f=n.BoundingSphere.fromRectangle3D(r,l,y)}return new a.Geometry({attributes:p.attributes,indices:p.indices,primitiveType:a.PrimitiveType.LINES,boundingSphere:f,offsetAttribute:t._offsetAttribute})},function(i,n){return e.defined(n)&&(i=_.unpack(i,n)),i._ellipsoid=t.Ellipsoid.clone(i._ellipsoid),i._rectangle=t.Rectangle.clone(i._rectangle),_.createGeometry(i)}}));
//# sourceMappingURL=createRectangleOutlineGeometry.js.map
