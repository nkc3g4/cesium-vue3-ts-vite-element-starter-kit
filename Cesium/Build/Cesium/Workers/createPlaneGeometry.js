define(["./when-4bbc8319","./Transforms-8b90e17c","./Matrix2-265d9610","./RuntimeError-5b082e8f","./ComponentDatatype-aad54330","./GeometryAttribute-4bcb785f","./GeometryAttributes-7827a6c2","./VertexFormat-07539138","./combine-e9466e32","./WebGLConstants-508b9636"],(function(e,t,n,r,a,o,i,m,u,c){"use strict";function p(t){t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT);const n=e.defaultValue(t.vertexFormat,m.VertexFormat.DEFAULT);this._vertexFormat=n,this._workerName="createPlaneGeometry"}p.packedLength=m.VertexFormat.packedLength,p.pack=function(t,n,a){return r.Check.typeOf.object("value",t),r.Check.defined("array",n),a=e.defaultValue(a,0),m.VertexFormat.pack(t._vertexFormat,n,a),n};const s=new m.VertexFormat,y={vertexFormat:s};p.unpack=function(t,n,a){r.Check.defined("array",t),n=e.defaultValue(n,0);const o=m.VertexFormat.unpack(t,n,s);return e.defined(a)?(a._vertexFormat=m.VertexFormat.clone(o,a._vertexFormat),a):new p(y)};const b=new n.Cartesian3(-.5,-.5,0),l=new n.Cartesian3(.5,.5,0);return p.createGeometry=function(e){const r=e._vertexFormat,m=new i.GeometryAttributes;let u,c;if(r.position){if(c=new Float64Array(12),c[0]=b.x,c[1]=b.y,c[2]=0,c[3]=l.x,c[4]=b.y,c[5]=0,c[6]=l.x,c[7]=l.y,c[8]=0,c[9]=b.x,c[10]=l.y,c[11]=0,m.position=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:c}),r.normal){const e=new Float32Array(12);e[0]=0,e[1]=0,e[2]=1,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=1,e[9]=0,e[10]=0,e[11]=1,m.normal=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e})}if(r.st){const e=new Float32Array(8);e[0]=0,e[1]=0,e[2]=1,e[3]=0,e[4]=1,e[5]=1,e[6]=0,e[7]=1,m.st=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:e})}if(r.tangent){const e=new Float32Array(12);e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e[6]=1,e[7]=0,e[8]=0,e[9]=1,e[10]=0,e[11]=0,m.tangent=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e})}if(r.bitangent){const e=new Float32Array(12);e[0]=0,e[1]=1,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=1,e[8]=0,e[9]=0,e[10]=1,e[11]=0,m.bitangent=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e})}u=new Uint16Array(6),u[0]=0,u[1]=1,u[2]=2,u[3]=0,u[4]=2,u[5]=3}return new o.Geometry({attributes:m,indices:u,primitiveType:o.PrimitiveType.TRIANGLES,boundingSphere:new t.BoundingSphere(n.Cartesian3.ZERO,Math.sqrt(2))})},function(t,n){return e.defined(n)&&(t=p.unpack(t,n)),p.createGeometry(t)}}));
//# sourceMappingURL=createPlaneGeometry.js.map