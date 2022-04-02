define(["./Matrix2-c430e55a","./RuntimeError-8952249c","./defaultValue-81eec7ed","./EllipseOutlineGeometry-e8bb826f","./ComponentDatatype-9e86ac8f","./WebGLConstants-508b9636","./GeometryOffsetAttribute-2bff0974","./Transforms-4ee811db","./_commonjsHelpers-3aae1032-26891ab7","./combine-3c023bda","./EllipseGeometryLibrary-688714cd","./GeometryAttribute-51ed9bde","./GeometryAttributes-32b29525","./IndexDatatype-bed3935d"],(function(e,i,t,r,n,l,s,o,a,u,c,d,m,p){"use strict";function y(e){const n=(e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT)).radius;i.Check.typeOf.number("radius",n);const l={center:e.center,semiMajorAxis:n,semiMinorAxis:n,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,numberOfVerticalLines:e.numberOfVerticalLines};this._ellipseGeometry=new r.EllipseOutlineGeometry(l),this._workerName="createCircleOutlineGeometry"}y.packedLength=r.EllipseOutlineGeometry.packedLength,y.pack=function(e,t,n){return i.Check.typeOf.object("value",e),r.EllipseOutlineGeometry.pack(e._ellipseGeometry,t,n)};const f=new r.EllipseOutlineGeometry({center:new e.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),G={center:new e.Cartesian3,radius:void 0,ellipsoid:e.Ellipsoid.clone(e.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,numberOfVerticalLines:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0};return y.unpack=function(i,n,l){const s=r.EllipseOutlineGeometry.unpack(i,n,f);return G.center=e.Cartesian3.clone(s._center,G.center),G.ellipsoid=e.Ellipsoid.clone(s._ellipsoid,G.ellipsoid),G.height=s._height,G.extrudedHeight=s._extrudedHeight,G.granularity=s._granularity,G.numberOfVerticalLines=s._numberOfVerticalLines,t.defined(l)?(G.semiMajorAxis=s._semiMajorAxis,G.semiMinorAxis=s._semiMinorAxis,l._ellipseGeometry=new r.EllipseOutlineGeometry(G),l):(G.radius=s._semiMajorAxis,new y(G))},y.createGeometry=function(e){return r.EllipseOutlineGeometry.createGeometry(e._ellipseGeometry)},function(i,r){return t.defined(r)&&(i=y.unpack(i,r)),i._ellipseGeometry._center=e.Cartesian3.clone(i._ellipseGeometry._center),i._ellipseGeometry._ellipsoid=e.Ellipsoid.clone(i._ellipseGeometry._ellipsoid),y.createGeometry(i)}}));
//# sourceMappingURL=createCircleOutlineGeometry.js.map
