define(["exports","./AttributeCompression-442278a0","./Matrix2-265d9610","./RuntimeError-5b082e8f","./when-4bbc8319","./ComponentDatatype-aad54330","./Transforms-8b90e17c","./EncodedCartesian3-da8f96bc","./GeometryAttribute-4bcb785f","./IndexDatatype-6739e544","./IntersectionTests-596e31ec","./Plane-616c9c0a"],(function(e,t,r,n,i,a,o,s,u,l,p,c){"use strict";const d=new r.Cartesian3,f=new r.Cartesian3,m=new r.Cartesian3;const y={calculateACMR:function(e){const t=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).indices;let r=e.maximumIndex;const a=i.defaultValue(e.cacheSize,24);if(!i.defined(t))throw new n.DeveloperError("indices is required.");const o=t.length;if(o<3||o%3!=0)throw new n.DeveloperError("indices length must be a multiple of three.");if(r<=0)throw new n.DeveloperError("maximumIndex must be greater than zero.");if(a<3)throw new n.DeveloperError("cacheSize must be greater than two.");if(!i.defined(r)){r=0;let e=0,n=t[e];for(;e<o;)n>r&&(r=n),++e,n=t[e]}const s=[];for(let e=0;e<r+1;e++)s[e]=0;let u=a+1;for(let e=0;e<o;++e)u-s[t[e]]>a&&(s[t[e]]=u,++u);return(u-a+1)/(o/3)}};y.tipsify=function(e){const t=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).indices,r=e.maximumIndex,a=i.defaultValue(e.cacheSize,24);let o;function s(e,t,r,n,i,a,s){let u,l=-1,p=-1,c=0;for(;c<r.length;){const e=r[c];n[e].numLiveTriangles&&(u=0,i-n[e].timeStamp+2*n[e].numLiveTriangles<=t&&(u=i-n[e].timeStamp),(u>p||-1===p)&&(p=u,l=e)),++c}return-1===l?function(e,t,r,n){for(;t.length>=1;){const r=t[t.length-1];if(t.splice(t.length-1,1),e[r].numLiveTriangles>0)return r}for(;o<n;){if(e[o].numLiveTriangles>0)return++o,o-1;++o}return-1}(n,a,0,s):l}if(!i.defined(t))throw new n.DeveloperError("indices is required.");const u=t.length;if(u<3||u%3!=0)throw new n.DeveloperError("indices length must be a multiple of three.");if(r<=0)throw new n.DeveloperError("maximumIndex must be greater than zero.");if(a<3)throw new n.DeveloperError("cacheSize must be greater than two.");let l=0,p=0,c=t[p];const d=u;if(i.defined(r))l=r+1;else{for(;p<d;)c>l&&(l=c),++p,c=t[p];if(-1===l)return 0;++l}const f=[];let m;for(m=0;m<l;m++)f[m]={numLiveTriangles:0,timeStamp:0,vertexTriangles:[]};p=0;let y=0;for(;p<d;)f[t[p]].vertexTriangles.push(y),++f[t[p]].numLiveTriangles,f[t[p+1]].vertexTriangles.push(y),++f[t[p+1]].numLiveTriangles,f[t[p+2]].vertexTriangles.push(y),++f[t[p+2]].numLiveTriangles,++y,p+=3;let h=0,v=a+1;o=1;let C=[];const b=[];let w,g,T=0;const A=[],E=u/3,D=[];for(m=0;m<E;m++)D[m]=!1;let x,P;for(;-1!==h;){C=[],g=f[h],P=g.vertexTriangles.length;for(let e=0;e<P;++e)if(y=g.vertexTriangles[e],!D[y]){D[y]=!0,p=y+y+y;for(let e=0;e<3;++e)x=t[p],C.push(x),b.push(x),A[T]=x,++T,w=f[x],--w.numLiveTriangles,v-w.timeStamp>a&&(w.timeStamp=v,++v),++p}h=s(0,a,C,f,v,b,l)}return A};const h={};function v(e,t,r,n,i){e[t++]=r,e[t++]=n,e[t++]=n,e[t++]=i,e[t++]=i,e[t]=r}function C(e){const t={};for(const r in e)if(e.hasOwnProperty(r)&&i.defined(e[r])&&i.defined(e[r].values)){const n=e[r];t[r]=new u.GeometryAttribute({componentDatatype:n.componentDatatype,componentsPerAttribute:n.componentsPerAttribute,normalize:n.normalize,values:[]})}return t}function b(e,t,r){for(const n in t)if(t.hasOwnProperty(n)&&i.defined(t[n])&&i.defined(t[n].values)){const i=t[n];for(let t=0;t<i.componentsPerAttribute;++t)e[n].values.push(i.values[r*i.componentsPerAttribute+t])}}h.toWireframe=function(e){if(!i.defined(e))throw new n.DeveloperError("geometry is required.");const t=e.indices;if(i.defined(t)){switch(e.primitiveType){case u.PrimitiveType.TRIANGLES:e.indices=function(e){const t=e.length,r=t/3*6,n=l.IndexDatatype.createTypedArray(t,r);let i=0;for(let r=0;r<t;r+=3,i+=6)v(n,i,e[r],e[r+1],e[r+2]);return n}(t);break;case u.PrimitiveType.TRIANGLE_STRIP:e.indices=function(e){const t=e.length;if(t>=3){const r=6*(t-2),n=l.IndexDatatype.createTypedArray(t,r);v(n,0,e[0],e[1],e[2]);let i=6;for(let r=3;r<t;++r,i+=6)v(n,i,e[r-1],e[r],e[r-2]);return n}return new Uint16Array}(t);break;case u.PrimitiveType.TRIANGLE_FAN:e.indices=function(e){if(e.length>0){const t=e.length-1,r=6*(t-1),n=l.IndexDatatype.createTypedArray(t,r),i=e[0];let a=0;for(let r=1;r<t;++r,a+=6)v(n,a,i,e[r],e[r+1]);return n}return new Uint16Array}(t);break;default:throw new n.DeveloperError("geometry.primitiveType must be TRIANGLES, TRIANGLE_STRIP, or TRIANGLE_FAN.")}e.primitiveType=u.PrimitiveType.LINES}return e},h.createLineSegmentsForVectors=function(e,t,r){if(t=i.defaultValue(t,"normal"),!i.defined(e))throw new n.DeveloperError("geometry is required.");if(!i.defined(e.attributes.position))throw new n.DeveloperError("geometry.attributes.position is required.");if(!i.defined(e.attributes[t]))throw new n.DeveloperError(`geometry.attributes must have an attribute with the same name as the attributeName parameter, ${t}.`);r=i.defaultValue(r,1e4);const s=e.attributes.position.values,l=e.attributes[t].values,p=s.length,c=new Float64Array(2*p);let d,f=0;for(let e=0;e<p;e+=3)c[f++]=s[e],c[f++]=s[e+1],c[f++]=s[e+2],c[f++]=s[e]+l[e]*r,c[f++]=s[e+1]+l[e+1]*r,c[f++]=s[e+2]+l[e+2]*r;const m=e.boundingSphere;return i.defined(m)&&(d=new o.BoundingSphere(m.center,m.radius+r)),new u.Geometry({attributes:{position:new u.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:c})},primitiveType:u.PrimitiveType.LINES,boundingSphere:d})},h.createAttributeLocations=function(e){if(!i.defined(e))throw new n.DeveloperError("geometry is required.");const t=["position","positionHigh","positionLow","position3DHigh","position3DLow","position2DHigh","position2DLow","pickColor","normal","st","tangent","bitangent","extrudeDirection","compressedAttributes"],r=e.attributes,a={};let o,s=0;const u=t.length;for(o=0;o<u;++o){const e=t[o];i.defined(r[e])&&(a[e]=s++)}for(const e in r)r.hasOwnProperty(e)&&!i.defined(a[e])&&(a[e]=s++);return a},h.reorderForPreVertexCache=function(e){if(!i.defined(e))throw new n.DeveloperError("geometry is required.");const t=u.Geometry.computeNumberOfVertices(e),r=e.indices;if(i.defined(r)){const n=new Int32Array(t);for(let e=0;e<t;e++)n[e]=-1;const o=r,s=o.length,u=l.IndexDatatype.createTypedArray(t,s);let p,c=0,d=0,f=0;for(;c<s;)p=n[o[c]],-1!==p?u[d]=p:(p=o[c],n[p]=f,u[d]=f,++f),++c,++d;e.indices=u;const m=e.attributes;for(const e in m)if(m.hasOwnProperty(e)&&i.defined(m[e])&&i.defined(m[e].values)){const r=m[e],i=r.values;let o=0;const s=r.componentsPerAttribute,u=a.ComponentDatatype.createTypedArray(r.componentDatatype,f*s);for(;o<t;){const e=n[o];if(-1!==e)for(let t=0;t<s;t++)u[s*e+t]=i[s*o+t];++o}r.values=u}}return e},h.reorderForPostVertexCache=function(e,t){if(!i.defined(e))throw new n.DeveloperError("geometry is required.");const r=e.indices;if(e.primitiveType===u.PrimitiveType.TRIANGLES&&i.defined(r)){const n=r.length;let i=0;for(let e=0;e<n;e++)r[e]>i&&(i=r[e]);e.indices=y.tipsify({indices:r,maximumIndex:i,cacheSize:t})}return e},h.fitToUnsignedShortIndices=function(e){if(!i.defined(e))throw new n.DeveloperError("geometry is required.");if(i.defined(e.indices)&&e.primitiveType!==u.PrimitiveType.TRIANGLES&&e.primitiveType!==u.PrimitiveType.LINES&&e.primitiveType!==u.PrimitiveType.POINTS)throw new n.DeveloperError("geometry.primitiveType must equal to PrimitiveType.TRIANGLES, PrimitiveType.LINES, or PrimitiveType.POINTS.");const t=[],r=u.Geometry.computeNumberOfVertices(e);if(i.defined(e.indices)&&r>=a.CesiumMath.SIXTY_FOUR_KILOBYTES){let r=[],n=[],o=0,s=C(e.attributes);const l=e.indices,p=l.length;let c;e.primitiveType===u.PrimitiveType.TRIANGLES?c=3:e.primitiveType===u.PrimitiveType.LINES?c=2:e.primitiveType===u.PrimitiveType.POINTS&&(c=1);for(let d=0;d<p;d+=c){for(let t=0;t<c;++t){const a=l[d+t];let u=r[a];i.defined(u)||(u=o++,r[a]=u,b(s,e.attributes,a)),n.push(u)}o+c>=a.CesiumMath.SIXTY_FOUR_KILOBYTES&&(t.push(new u.Geometry({attributes:s,indices:n,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV})),r=[],n=[],o=0,s=C(e.attributes))}0!==n.length&&t.push(new u.Geometry({attributes:s,indices:n,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV}))}else t.push(e);return t};const w=new r.Cartesian3,g=new r.Cartographic;h.projectTo2D=function(e,t,s,l,p){if(!i.defined(e))throw new n.DeveloperError("geometry is required.");if(!i.defined(t))throw new n.DeveloperError("attributeName is required.");if(!i.defined(s))throw new n.DeveloperError("attributeName3D is required.");if(!i.defined(l))throw new n.DeveloperError("attributeName2D is required.");if(!i.defined(e.attributes[t]))throw new n.DeveloperError(`geometry must have attribute matching the attributeName argument: ${t}.`);if(e.attributes[t].componentDatatype!==a.ComponentDatatype.DOUBLE)throw new n.DeveloperError("The attribute componentDatatype must be ComponentDatatype.DOUBLE.");const c=e.attributes[t],d=(p=i.defined(p)?p:new o.GeographicProjection).ellipsoid,f=c.values,m=new Float64Array(f.length);let y=0;for(let e=0;e<f.length;e+=3){const t=r.Cartesian3.fromArray(f,e,w),a=d.cartesianToCartographic(t,g);if(!i.defined(a))throw new n.DeveloperError(`Could not project point (${t.x}, ${t.y}, ${t.z}) to 2D.`);const o=p.project(a,w);m[y++]=o.x,m[y++]=o.y,m[y++]=o.z}return e.attributes[s]=c,e.attributes[l]=new u.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m}),delete e.attributes[t],e};const T={high:0,low:0};h.encodeAttribute=function(e,t,r,o){if(!i.defined(e))throw new n.DeveloperError("geometry is required.");if(!i.defined(t))throw new n.DeveloperError("attributeName is required.");if(!i.defined(r))throw new n.DeveloperError("attributeHighName is required.");if(!i.defined(o))throw new n.DeveloperError("attributeLowName is required.");if(!i.defined(e.attributes[t]))throw new n.DeveloperError(`geometry must have attribute matching the attributeName argument: ${t}.`);if(e.attributes[t].componentDatatype!==a.ComponentDatatype.DOUBLE)throw new n.DeveloperError("The attribute componentDatatype must be ComponentDatatype.DOUBLE.");const l=e.attributes[t],p=l.values,c=p.length,d=new Float32Array(c),f=new Float32Array(c);for(let e=0;e<c;++e)s.EncodedCartesian3.encode(p[e],T),d[e]=T.high,f[e]=T.low;const m=l.componentsPerAttribute;return e.attributes[r]=new u.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:m,values:d}),e.attributes[o]=new u.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:m,values:f}),delete e.attributes[t],e};let A=new r.Cartesian3;function E(e,t){if(i.defined(t)){const n=t.values,i=n.length;for(let t=0;t<i;t+=3)r.Cartesian3.unpack(n,t,A),r.Matrix4.multiplyByPoint(e,A,A),r.Cartesian3.pack(A,n,t)}}function D(e,t){if(i.defined(t)){const n=t.values,i=n.length;for(let t=0;t<i;t+=3)r.Cartesian3.unpack(n,t,A),r.Matrix3.multiplyByVector(e,A,A),A=r.Cartesian3.normalize(A,A),r.Cartesian3.pack(A,n,t)}}const x=new r.Matrix4,P=new r.Matrix3;h.transformToWorldCoordinates=function(e){if(!i.defined(e))throw new n.DeveloperError("instance is required.");const t=e.modelMatrix;if(r.Matrix4.equals(t,r.Matrix4.IDENTITY))return e;const a=e.geometry.attributes;E(t,a.position),E(t,a.prevPosition),E(t,a.nextPosition),(i.defined(a.normal)||i.defined(a.tangent)||i.defined(a.bitangent))&&(r.Matrix4.inverse(t,x),r.Matrix4.transpose(x,x),r.Matrix4.getMatrix3(x,P),D(P,a.normal),D(P,a.tangent),D(P,a.bitangent));const s=e.geometry.boundingSphere;return i.defined(s)&&(e.geometry.boundingSphere=o.BoundingSphere.transform(s,t,s)),e.modelMatrix=r.Matrix4.clone(r.Matrix4.IDENTITY),e};const I=new r.Cartesian3;function S(e,t){const s=e.length;let p,c,d,f;const m=e[0].modelMatrix,y=i.defined(e[0][t].indices),h=e[0][t].primitiveType;for(c=1;c<s;++c){if(!r.Matrix4.equals(e[c].modelMatrix,m))throw new n.DeveloperError("All instances must have the same modelMatrix.");if(i.defined(e[c][t].indices)!==y)throw new n.DeveloperError("All instance geometries must have an indices or not have one.");if(e[c][t].primitiveType!==h)throw new n.DeveloperError("All instance geometries must have the same primitiveType.")}const v=function(e,t){const r=e.length,n={},o=e[0][t].attributes;let s;for(s in o)if(o.hasOwnProperty(s)&&i.defined(o[s])&&i.defined(o[s].values)){const l=o[s];let p=l.values.length,c=!0;for(let n=1;n<r;++n){const r=e[n][t].attributes[s];if(!i.defined(r)||l.componentDatatype!==r.componentDatatype||l.componentsPerAttribute!==r.componentsPerAttribute||l.normalize!==r.normalize){c=!1;break}p+=r.values.length}c&&(n[s]=new u.GeometryAttribute({componentDatatype:l.componentDatatype,componentsPerAttribute:l.componentsPerAttribute,normalize:l.normalize,values:a.ComponentDatatype.createTypedArray(l.componentDatatype,p)}))}return n}(e,t);let C,b,w,g;for(p in v)if(v.hasOwnProperty(p))for(C=v[p].values,f=0,c=0;c<s;++c)for(b=e[c][t].attributes[p].values,w=b.length,d=0;d<w;++d)C[f++]=b[d];if(y){let r=0;for(c=0;c<s;++c)r+=e[c][t].indices.length;const n=u.Geometry.computeNumberOfVertices(new u.Geometry({attributes:v,primitiveType:u.PrimitiveType.POINTS})),i=l.IndexDatatype.createTypedArray(n,r);let a=0,o=0;for(c=0;c<s;++c){const r=e[c][t].indices,n=r.length;for(f=0;f<n;++f)i[a++]=o+r[f];o+=u.Geometry.computeNumberOfVertices(e[c][t])}g=i}let T,A=new r.Cartesian3,E=0;for(c=0;c<s;++c){if(T=e[c][t].boundingSphere,!i.defined(T)){A=void 0;break}r.Cartesian3.add(T.center,A,A)}if(i.defined(A))for(r.Cartesian3.divideByScalar(A,s,A),c=0;c<s;++c){T=e[c][t].boundingSphere;const n=r.Cartesian3.magnitude(r.Cartesian3.subtract(T.center,A,I))+T.radius;n>E&&(E=n)}return new u.Geometry({attributes:v,indices:g,primitiveType:h,boundingSphere:i.defined(A)?new o.BoundingSphere(A,E):void 0})}h.combineInstances=function(e){if(!i.defined(e)||e.length<1)throw new n.DeveloperError("instances is required and must have length greater than zero.");const t=[],r=[],a=e.length;for(let n=0;n<a;++n){const a=e[n];i.defined(a.geometry)?t.push(a):i.defined(a.westHemisphereGeometry)&&i.defined(a.eastHemisphereGeometry)&&r.push(a)}const o=[];return t.length>0&&o.push(S(t,"geometry")),r.length>0&&(o.push(S(r,"westHemisphereGeometry")),o.push(S(r,"eastHemisphereGeometry"))),o};const N=new r.Cartesian3,O=new r.Cartesian3,L=new r.Cartesian3,z=new r.Cartesian3;h.computeNormal=function(e){if(!i.defined(e))throw new n.DeveloperError("geometry is required.");if(!i.defined(e.attributes.position)||!i.defined(e.attributes.position.values))throw new n.DeveloperError("geometry.attributes.position.values is required.");if(!i.defined(e.indices))throw new n.DeveloperError("geometry.indices is required.");if(e.indices.length<2||e.indices.length%3!=0)throw new n.DeveloperError("geometry.indices length must be greater than 0 and be a multiple of 3.");if(e.primitiveType!==u.PrimitiveType.TRIANGLES)throw new n.DeveloperError("geometry.primitiveType must be PrimitiveType.TRIANGLES.");const t=e.indices,o=e.attributes,s=o.position.values,l=o.position.values.length/3,p=t.length,c=new Array(l),d=new Array(p/3),f=new Array(p);let m;for(m=0;m<l;m++)c[m]={indexOffset:0,count:0,currentCount:0};let y=0;for(m=0;m<p;m+=3){const e=t[m],n=t[m+1],i=t[m+2],a=3*e,o=3*n,u=3*i;O.x=s[a],O.y=s[a+1],O.z=s[a+2],L.x=s[o],L.y=s[o+1],L.z=s[o+2],z.x=s[u],z.y=s[u+1],z.z=s[u+2],c[e].count++,c[n].count++,c[i].count++,r.Cartesian3.subtract(L,O,L),r.Cartesian3.subtract(z,O,z),d[y]=r.Cartesian3.cross(L,z,new r.Cartesian3),y++}let h,v=0;for(m=0;m<l;m++)c[m].indexOffset+=v,v+=c[m].count;for(y=0,m=0;m<p;m+=3){h=c[t[m]];let e=h.indexOffset+h.currentCount;f[e]=y,h.currentCount++,h=c[t[m+1]],e=h.indexOffset+h.currentCount,f[e]=y,h.currentCount++,h=c[t[m+2]],e=h.indexOffset+h.currentCount,f[e]=y,h.currentCount++,y++}const C=new Float32Array(3*l);for(m=0;m<l;m++){const e=3*m;if(h=c[m],r.Cartesian3.clone(r.Cartesian3.ZERO,N),h.count>0){for(y=0;y<h.count;y++)r.Cartesian3.add(N,d[f[h.indexOffset+y]],N);r.Cartesian3.equalsEpsilon(r.Cartesian3.ZERO,N,a.CesiumMath.EPSILON10)&&r.Cartesian3.clone(d[f[h.indexOffset]],N)}r.Cartesian3.equalsEpsilon(r.Cartesian3.ZERO,N,a.CesiumMath.EPSILON10)&&(N.z=1),r.Cartesian3.normalize(N,N),C[e]=N.x,C[e+1]=N.y,C[e+2]=N.z}return e.attributes.normal=new u.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:C}),e};const G=new r.Cartesian3,M=new r.Cartesian3,q=new r.Cartesian3;h.computeTangentAndBitangent=function(e){if(!i.defined(e))throw new n.DeveloperError("geometry is required.");const t=e.attributes,o=e.indices;if(!i.defined(t.position)||!i.defined(t.position.values))throw new n.DeveloperError("geometry.attributes.position.values is required.");if(!i.defined(t.normal)||!i.defined(t.normal.values))throw new n.DeveloperError("geometry.attributes.normal.values is required.");if(!i.defined(t.st)||!i.defined(t.st.values))throw new n.DeveloperError("geometry.attributes.st.values is required.");if(!i.defined(o))throw new n.DeveloperError("geometry.indices is required.");if(o.length<2||o.length%3!=0)throw new n.DeveloperError("geometry.indices length must be greater than 0 and be a multiple of 3.");if(e.primitiveType!==u.PrimitiveType.TRIANGLES)throw new n.DeveloperError("geometry.primitiveType must be PrimitiveType.TRIANGLES.");const s=e.attributes.position.values,l=e.attributes.normal.values,p=e.attributes.st.values,c=e.attributes.position.values.length/3,d=o.length,f=new Array(3*c);let m,y,h,v;for(m=0;m<f.length;m++)f[m]=0;for(m=0;m<d;m+=3){const e=o[m],t=o[m+1],r=o[m+2];y=3*e,h=3*t,v=3*r;const n=2*e,i=2*t,a=2*r,u=s[y],l=s[y+1],c=s[y+2],d=p[n],C=p[n+1],b=p[i+1]-C,w=p[a+1]-C,g=1/((p[i]-d)*w-(p[a]-d)*b),T=(w*(s[h]-u)-b*(s[v]-u))*g,A=(w*(s[h+1]-l)-b*(s[v+1]-l))*g,E=(w*(s[h+2]-c)-b*(s[v+2]-c))*g;f[y]+=T,f[y+1]+=A,f[y+2]+=E,f[h]+=T,f[h+1]+=A,f[h+2]+=E,f[v]+=T,f[v+1]+=A,f[v+2]+=E}const C=new Float32Array(3*c),b=new Float32Array(3*c);for(m=0;m<c;m++){y=3*m,h=y+1,v=y+2;const e=r.Cartesian3.fromArray(l,y,G),t=r.Cartesian3.fromArray(f,y,q),n=r.Cartesian3.dot(e,t);r.Cartesian3.multiplyByScalar(e,n,M),r.Cartesian3.normalize(r.Cartesian3.subtract(t,M,t),t),C[y]=t.x,C[h]=t.y,C[v]=t.z,r.Cartesian3.normalize(r.Cartesian3.cross(e,t,t),t),b[y]=t.x,b[h]=t.y,b[v]=t.z}return e.attributes.tangent=new u.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:C}),e.attributes.bitangent=new u.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:b}),e};const R=new r.Cartesian2,B=new r.Cartesian3,V=new r.Cartesian3,k=new r.Cartesian3;let F=new r.Cartesian2;function _(e){switch(e.primitiveType){case u.PrimitiveType.TRIANGLE_FAN:return function(e){const t=u.Geometry.computeNumberOfVertices(e);if(t<3)throw new n.DeveloperError("The number of vertices must be at least three.");const r=l.IndexDatatype.createTypedArray(t,3*(t-2));r[0]=1,r[1]=0,r[2]=2;let i=3;for(let e=3;e<t;++e)r[i++]=e-1,r[i++]=0,r[i++]=e;return e.indices=r,e.primitiveType=u.PrimitiveType.TRIANGLES,e}(e);case u.PrimitiveType.TRIANGLE_STRIP:return function(e){const t=u.Geometry.computeNumberOfVertices(e);if(t<3)throw new n.DeveloperError("The number of vertices must be at least 3.");const r=l.IndexDatatype.createTypedArray(t,3*(t-2));r[0]=0,r[1]=1,r[2]=2,t>3&&(r[3]=0,r[4]=2,r[5]=3);let i=6;for(let e=3;e<t-1;e+=2)r[i++]=e,r[i++]=e-1,r[i++]=e+1,e+2<t&&(r[i++]=e,r[i++]=e+1,r[i++]=e+2);return e.indices=r,e.primitiveType=u.PrimitiveType.TRIANGLES,e}(e);case u.PrimitiveType.TRIANGLES:return function(e){if(i.defined(e.indices))return e;const t=u.Geometry.computeNumberOfVertices(e);if(t<3)throw new n.DeveloperError("The number of vertices must be at least three.");if(t%3!=0)throw new n.DeveloperError("The number of vertices must be a multiple of three.");const r=l.IndexDatatype.createTypedArray(t,t);for(let e=0;e<t;++e)r[e]=e;return e.indices=r,e}(e);case u.PrimitiveType.LINE_STRIP:return function(e){const t=u.Geometry.computeNumberOfVertices(e);if(t<2)throw new n.DeveloperError("The number of vertices must be at least two.");const r=l.IndexDatatype.createTypedArray(t,2*(t-1));r[0]=0,r[1]=1;let i=2;for(let e=2;e<t;++e)r[i++]=e-1,r[i++]=e;return e.indices=r,e.primitiveType=u.PrimitiveType.LINES,e}(e);case u.PrimitiveType.LINE_LOOP:return function(e){const t=u.Geometry.computeNumberOfVertices(e);if(t<2)throw new n.DeveloperError("The number of vertices must be at least two.");const r=l.IndexDatatype.createTypedArray(t,2*t);r[0]=0,r[1]=1;let i=2;for(let e=2;e<t;++e)r[i++]=e-1,r[i++]=e;return r[i++]=t-1,r[i]=0,e.indices=r,e.primitiveType=u.PrimitiveType.LINES,e}(e);case u.PrimitiveType.LINES:return function(e){if(i.defined(e.indices))return e;const t=u.Geometry.computeNumberOfVertices(e);if(t<2)throw new n.DeveloperError("The number of vertices must be at least two.");if(t%2!=0)throw new n.DeveloperError("The number of vertices must be a multiple of 2.");const r=l.IndexDatatype.createTypedArray(t,t);for(let e=0;e<t;++e)r[e]=e;return e.indices=r,e}(e)}return e}function U(e,t){Math.abs(e.y)<a.CesiumMath.EPSILON6&&(e.y=t?-a.CesiumMath.EPSILON6:a.CesiumMath.EPSILON6)}h.compressVertices=function(e){if(!i.defined(e))throw new n.DeveloperError("geometry is required.");const o=e.attributes.extrudeDirection;let s,l;if(i.defined(o)){const n=o.values;l=n.length/3;const i=new Float32Array(2*l);let p=0;for(s=0;s<l;++s)r.Cartesian3.fromArray(n,3*s,B),r.Cartesian3.equals(B,r.Cartesian3.ZERO)?p+=2:(F=t.AttributeCompression.octEncodeInRange(B,65535,F),i[p++]=F.x,i[p++]=F.y);return e.attributes.compressedAttributes=new u.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:i}),delete e.attributes.extrudeDirection,e}const p=e.attributes.normal,c=e.attributes.st,d=i.defined(p),f=i.defined(c);if(!d&&!f)return e;const m=e.attributes.tangent,y=e.attributes.bitangent,h=i.defined(m),v=i.defined(y);let C,b,w,g;d&&(C=p.values),f&&(b=c.values),h&&(w=m.values),v&&(g=y.values);l=(d?C.length:b.length)/(d?3:2);let T=l,A=f&&d?2:1;A+=h||v?1:0,T*=A;const E=new Float32Array(T);let D=0;for(s=0;s<l;++s){f&&(r.Cartesian2.fromArray(b,2*s,R),E[D++]=t.AttributeCompression.compressTextureCoordinates(R));const e=3*s;d&&i.defined(w)&&i.defined(g)?(r.Cartesian3.fromArray(C,e,B),r.Cartesian3.fromArray(w,e,V),r.Cartesian3.fromArray(g,e,k),t.AttributeCompression.octPack(B,V,k,R),E[D++]=R.x,E[D++]=R.y):(d&&(r.Cartesian3.fromArray(C,e,B),E[D++]=t.AttributeCompression.octEncodeFloat(B)),h&&(r.Cartesian3.fromArray(w,e,B),E[D++]=t.AttributeCompression.octEncodeFloat(B)),v&&(r.Cartesian3.fromArray(g,e,B),E[D++]=t.AttributeCompression.octEncodeFloat(B)))}return e.attributes.compressedAttributes=new u.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:A,values:E}),d&&delete e.attributes.normal,f&&delete e.attributes.st,v&&delete e.attributes.bitangent,h&&delete e.attributes.tangent,e};const Y=new r.Cartesian3;function Z(e,t,n,i){r.Cartesian3.add(e,r.Cartesian3.multiplyByScalar(r.Cartesian3.subtract(t,e,Y),e.y/(e.y-t.y),Y),n),r.Cartesian3.clone(n,i),U(n,!0),U(i,!1)}const H=new r.Cartesian3,W=new r.Cartesian3,$=new r.Cartesian3,X=new r.Cartesian3,j={positions:new Array(7),indices:new Array(9)};function J(e,t,r){if(e.x>=0||t.x>=0||r.x>=0)return;!function(e,t,r){if(0!==e.y&&0!==t.y&&0!==r.y)return U(e,e.y<0),U(t,t.y<0),void U(r,r.y<0);const n=Math.abs(e.y),i=Math.abs(t.y),o=Math.abs(r.y);let s;s=n>i?n>o?a.CesiumMath.sign(e.y):a.CesiumMath.sign(r.y):i>o?a.CesiumMath.sign(t.y):a.CesiumMath.sign(r.y);const u=s<0;U(e,u),U(t,u),U(r,u)}(e,t,r);const n=e.y<0,i=t.y<0,o=r.y<0;let s=0;s+=n?1:0,s+=i?1:0,s+=o?1:0;const u=j.indices;1===s?(u[1]=3,u[2]=4,u[5]=6,u[7]=6,u[8]=5,n?(Z(e,t,H,$),Z(e,r,W,X),u[0]=0,u[3]=1,u[4]=2,u[6]=1):i?(Z(t,r,H,$),Z(t,e,W,X),u[0]=1,u[3]=2,u[4]=0,u[6]=2):o&&(Z(r,e,H,$),Z(r,t,W,X),u[0]=2,u[3]=0,u[4]=1,u[6]=0)):2===s&&(u[2]=4,u[4]=4,u[5]=3,u[7]=5,u[8]=6,n?i?o||(Z(r,e,H,$),Z(r,t,W,X),u[0]=0,u[1]=1,u[3]=0,u[6]=2):(Z(t,r,H,$),Z(t,e,W,X),u[0]=2,u[1]=0,u[3]=2,u[6]=1):(Z(e,t,H,$),Z(e,r,W,X),u[0]=1,u[1]=2,u[3]=1,u[6]=0));const l=j.positions;return l[0]=e,l[1]=t,l[2]=r,l.length=3,1!==s&&2!==s||(l[3]=H,l[4]=W,l[5]=$,l[6]=X,l.length=7),j}function K(e,t){const r=e.attributes;if(0===r.position.values.length)return;for(const e in r)if(r.hasOwnProperty(e)&&i.defined(r[e])&&i.defined(r[e].values)){const t=r[e];t.values=a.ComponentDatatype.createTypedArray(t.componentDatatype,t.values)}const n=u.Geometry.computeNumberOfVertices(e);return e.indices=l.IndexDatatype.createTypedArray(n,e.indices),t&&(e.boundingSphere=o.BoundingSphere.fromVertices(r.position.values)),e}function Q(e){const t=e.attributes,r={};for(const e in t)if(t.hasOwnProperty(e)&&i.defined(t[e])&&i.defined(t[e].values)){const n=t[e];r[e]=new u.GeometryAttribute({componentDatatype:n.componentDatatype,componentsPerAttribute:n.componentsPerAttribute,normalize:n.normalize,values:[]})}return new u.Geometry({attributes:r,indices:[],primitiveType:e.primitiveType})}function ee(e,t,r){const n=i.defined(e.geometry.boundingSphere);t=K(t,n),r=K(r,n),i.defined(r)&&!i.defined(t)?e.geometry=r:!i.defined(r)&&i.defined(t)?e.geometry=t:(e.westHemisphereGeometry=t,e.eastHemisphereGeometry=r,e.geometry=void 0)}function te(e,t){const r=new e,n=new e,i=new e;return function(a,o,s,u,l,p,c,d){const f=e.fromArray(l,a*t,r),m=e.fromArray(l,o*t,n),y=e.fromArray(l,s*t,i);e.multiplyByScalar(f,u.x,f),e.multiplyByScalar(m,u.y,m),e.multiplyByScalar(y,u.z,y);const h=e.add(f,m,f);e.add(h,y,h),d&&e.normalize(h,h),e.pack(h,p,c*t)}}const re=te(r.Cartesian4,4),ne=te(r.Cartesian3,3),ie=te(r.Cartesian2,2),ae=new r.Cartesian3,oe=new r.Cartesian3,se=new r.Cartesian3,ue=new r.Cartesian3;function le(e,t,o,s,u,l,p,c,y,h,v,C,b,w,g,T){if(!(i.defined(l)||i.defined(p)||i.defined(c)||i.defined(y)||i.defined(h)||0!==w))return;const A=function(e,t,o,s,u){let l,p,c,y,h,v,C,b;if(n.Check.defined("point",e),n.Check.defined("p0",t),n.Check.defined("p1",o),n.Check.defined("p2",s),i.defined(u)||(u=new r.Cartesian3),i.defined(t.z)){if(r.Cartesian3.equalsEpsilon(e,t,a.CesiumMath.EPSILON14))return r.Cartesian3.clone(r.Cartesian3.UNIT_X,u);if(r.Cartesian3.equalsEpsilon(e,o,a.CesiumMath.EPSILON14))return r.Cartesian3.clone(r.Cartesian3.UNIT_Y,u);if(r.Cartesian3.equalsEpsilon(e,s,a.CesiumMath.EPSILON14))return r.Cartesian3.clone(r.Cartesian3.UNIT_Z,u);l=r.Cartesian3.subtract(o,t,d),p=r.Cartesian3.subtract(s,t,f),c=r.Cartesian3.subtract(e,t,m),y=r.Cartesian3.dot(l,l),h=r.Cartesian3.dot(l,p),v=r.Cartesian3.dot(l,c),C=r.Cartesian3.dot(p,p),b=r.Cartesian3.dot(p,c)}else{if(r.Cartesian2.equalsEpsilon(e,t,a.CesiumMath.EPSILON14))return r.Cartesian3.clone(r.Cartesian3.UNIT_X,u);if(r.Cartesian2.equalsEpsilon(e,o,a.CesiumMath.EPSILON14))return r.Cartesian3.clone(r.Cartesian3.UNIT_Y,u);if(r.Cartesian2.equalsEpsilon(e,s,a.CesiumMath.EPSILON14))return r.Cartesian3.clone(r.Cartesian3.UNIT_Z,u);l=r.Cartesian2.subtract(o,t,d),p=r.Cartesian2.subtract(s,t,f),c=r.Cartesian2.subtract(e,t,m),y=r.Cartesian2.dot(l,l),h=r.Cartesian2.dot(l,p),v=r.Cartesian2.dot(l,c),C=r.Cartesian2.dot(p,p),b=r.Cartesian2.dot(p,c)}u.y=C*v-h*b,u.z=y*b-h*v;const w=y*C-h*h;if(0!==w)return u.y/=w,u.z/=w,u.x=1-u.y-u.z,u}(s,r.Cartesian3.fromArray(u,3*e,ae),r.Cartesian3.fromArray(u,3*t,oe),r.Cartesian3.fromArray(u,3*o,se),ue);if(i.defined(A)){if(i.defined(l)&&ne(e,t,o,A,l,C.normal.values,T,!0),i.defined(h)){const n=r.Cartesian3.fromArray(h,3*e,ae),i=r.Cartesian3.fromArray(h,3*t,oe),a=r.Cartesian3.fromArray(h,3*o,se);let s;r.Cartesian3.multiplyByScalar(n,A.x,n),r.Cartesian3.multiplyByScalar(i,A.y,i),r.Cartesian3.multiplyByScalar(a,A.z,a),r.Cartesian3.equals(n,r.Cartesian3.ZERO)&&r.Cartesian3.equals(i,r.Cartesian3.ZERO)&&r.Cartesian3.equals(a,r.Cartesian3.ZERO)?(s=ae,s.x=0,s.y=0,s.z=0):(s=r.Cartesian3.add(n,i,n),r.Cartesian3.add(s,a,s),r.Cartesian3.normalize(s,s)),r.Cartesian3.pack(s,C.extrudeDirection.values,3*T)}if(i.defined(v)&&function(e,t,r,n,i,o,s){const u=i[e]*n.x,l=i[t]*n.y,p=i[r]*n.z;o[s]=u+l+p>a.CesiumMath.EPSILON6?1:0}(e,t,o,A,v,C.applyOffset.values,T),i.defined(p)&&ne(e,t,o,A,p,C.tangent.values,T,!0),i.defined(c)&&ne(e,t,o,A,c,C.bitangent.values,T,!0),i.defined(y)&&ie(e,t,o,A,y,C.st.values,T),w>0)for(let r=0;r<w;r++){const n=b[r];pe(e,t,o,A,T,g[n],C[n])}}}function pe(e,t,r,n,i,a,o){const s=a.componentsPerAttribute,u=a.values,l=o.values;switch(s){case 4:re(e,t,r,n,u,l,i,!1);break;case 3:ne(e,t,r,n,u,l,i,!1);break;case 2:ie(e,t,r,n,u,l,i,!1);break;default:l[i]=u[e]*n.x+u[t]*n.y+u[r]*n.z}}function ce(e,t,r,n,i,a){const o=e.position.values.length/3;if(-1!==i){const s=n[i],u=r[s];return-1===u?(r[s]=o,e.position.values.push(a.x,a.y,a.z),t.push(o),o):(t.push(u),u)}return e.position.values.push(a.x,a.y,a.z),t.push(o),o}const de={position:!0,normal:!0,bitangent:!0,tangent:!0,st:!0,extrudeDirection:!0,applyOffset:!0};function fe(e){const t=e.geometry,n=t.attributes,a=n.position.values,o=i.defined(n.normal)?n.normal.values:void 0,s=i.defined(n.bitangent)?n.bitangent.values:void 0,u=i.defined(n.tangent)?n.tangent.values:void 0,l=i.defined(n.st)?n.st.values:void 0,p=i.defined(n.extrudeDirection)?n.extrudeDirection.values:void 0,c=i.defined(n.applyOffset)?n.applyOffset.values:void 0,d=t.indices,f=[];for(const e in n)n.hasOwnProperty(e)&&!de[e]&&i.defined(n[e])&&f.push(e);const m=f.length,y=Q(t),h=Q(t);let v,C,b,w,g;const T=[];T.length=a.length/3;const A=[];for(A.length=a.length/3,g=0;g<T.length;++g)T[g]=-1,A[g]=-1;const E=d.length;for(g=0;g<E;g+=3){const e=d[g],t=d[g+1],E=d[g+2];let D=r.Cartesian3.fromArray(a,3*e),x=r.Cartesian3.fromArray(a,3*t),P=r.Cartesian3.fromArray(a,3*E);const I=J(D,x,P);if(i.defined(I)&&I.positions.length>3){const r=I.positions,i=I.indices,D=i.length;for(let x=0;x<D;++x){const D=i[x],P=r[D];P.y<0?(v=h.attributes,C=h.indices,b=T):(v=y.attributes,C=y.indices,b=A),w=ce(v,C,b,d,D<3?g+D:-1,P),le(e,t,E,P,a,o,u,s,l,p,c,v,f,m,n,w)}}else i.defined(I)&&(D=I.positions[0],x=I.positions[1],P=I.positions[2]),D.y<0?(v=h.attributes,C=h.indices,b=T):(v=y.attributes,C=y.indices,b=A),w=ce(v,C,b,d,g,D),le(e,t,E,D,a,o,u,s,l,p,c,v,f,m,n,w),w=ce(v,C,b,d,g+1,x),le(e,t,E,x,a,o,u,s,l,p,c,v,f,m,n,w),w=ce(v,C,b,d,g+2,P),le(e,t,E,P,a,o,u,s,l,p,c,v,f,m,n,w)}ee(e,h,y)}const me=c.Plane.fromPointNormal(r.Cartesian3.ZERO,r.Cartesian3.UNIT_Y),ye=new r.Cartesian3,he=new r.Cartesian3;function ve(e,t,n,o,s,u,l){if(!i.defined(l))return;const p=r.Cartesian3.fromArray(o,3*e,ae);r.Cartesian3.equalsEpsilon(p,n,a.CesiumMath.EPSILON10)?u.applyOffset.values[s]=l[e]:u.applyOffset.values[s]=l[t]}function Ce(e){const t=e.geometry,n=t.attributes,o=n.position.values,s=i.defined(n.applyOffset)?n.applyOffset.values:void 0,u=t.indices,l=Q(t),c=Q(t);let d;const f=u.length,m=[];m.length=o.length/3;const y=[];for(y.length=o.length/3,d=0;d<m.length;++d)m[d]=-1,y[d]=-1;for(d=0;d<f;d+=2){const e=u[d],t=u[d+1],n=r.Cartesian3.fromArray(o,3*e,ae),f=r.Cartesian3.fromArray(o,3*t,oe);let h;Math.abs(n.y)<a.CesiumMath.EPSILON6&&(n.y<0?n.y=-a.CesiumMath.EPSILON6:n.y=a.CesiumMath.EPSILON6),Math.abs(f.y)<a.CesiumMath.EPSILON6&&(f.y<0?f.y=-a.CesiumMath.EPSILON6:f.y=a.CesiumMath.EPSILON6);let v=l.attributes,C=l.indices,b=y,w=c.attributes,g=c.indices,T=m;const A=p.IntersectionTests.lineSegmentPlane(n,f,me,se);if(i.defined(A)){const i=r.Cartesian3.multiplyByScalar(r.Cartesian3.UNIT_Y,5*a.CesiumMath.EPSILON9,ye);n.y<0&&(r.Cartesian3.negate(i,i),v=c.attributes,C=c.indices,b=m,w=l.attributes,g=l.indices,T=y);const p=r.Cartesian3.add(A,i,he);h=ce(v,C,b,u,d,n),ve(e,t,n,o,h,v,s),h=ce(v,C,b,u,-1,p),ve(e,t,p,o,h,v,s),r.Cartesian3.negate(i,i),r.Cartesian3.add(A,i,p),h=ce(w,g,T,u,-1,p),ve(e,t,p,o,h,w,s),h=ce(w,g,T,u,d+1,f),ve(e,t,f,o,h,w,s)}else{let r,i,a;n.y<0?(r=c.attributes,i=c.indices,a=m):(r=l.attributes,i=l.indices,a=y),h=ce(r,i,a,u,d,n),ve(e,t,n,o,h,r,s),h=ce(r,i,a,u,d+1,f),ve(e,t,f,o,h,r,s)}}ee(e,c,l)}const be=new r.Cartesian2,we=new r.Cartesian2,ge=new r.Cartesian3,Te=new r.Cartesian3,Ae=new r.Cartesian3,Ee=new r.Cartesian3,De=new r.Cartesian3,xe=new r.Cartesian3,Pe=new r.Cartesian4;function Ie(e){const t=e.attributes,n=t.position.values,i=t.prevPosition.values,a=t.nextPosition.values,o=n.length;for(let e=0;e<o;e+=3){const t=r.Cartesian3.unpack(n,e,ge);if(t.x>0)continue;const s=r.Cartesian3.unpack(i,e,Te);(t.y<0&&s.y>0||t.y>0&&s.y<0)&&(e-3>0?(i[e]=n[e-3],i[e+1]=n[e-2],i[e+2]=n[e-1]):r.Cartesian3.pack(t,i,e));const u=r.Cartesian3.unpack(a,e,Ae);(t.y<0&&u.y>0||t.y>0&&u.y<0)&&(e+3<o?(a[e]=n[e+3],a[e+1]=n[e+4],a[e+2]=n[e+5]):r.Cartesian3.pack(t,a,e))}}const Se=5*a.CesiumMath.EPSILON9,Ne=a.CesiumMath.EPSILON6;h.splitLongitude=function(e){if(!i.defined(e))throw new n.DeveloperError("instance is required.");const t=e.geometry,s=t.boundingSphere;if(i.defined(s)){if(s.center.x-s.radius>0||o.BoundingSphere.intersectPlane(s,c.Plane.ORIGIN_ZX_PLANE)!==o.Intersect.INTERSECTING)return e}if(t.geometryType!==u.GeometryType.NONE)switch(t.geometryType){case u.GeometryType.POLYLINES:!function(e){const t=e.geometry,n=t.attributes,o=n.position.values,s=n.prevPosition.values,u=n.nextPosition.values,l=n.expandAndWidth.values,c=i.defined(n.st)?n.st.values:void 0,d=i.defined(n.color)?n.color.values:void 0,f=Q(t),m=Q(t);let y,h,v,C=!1;const b=o.length/3;for(y=0;y<b;y+=4){const e=y,t=y+2,n=r.Cartesian3.fromArray(o,3*e,ge),b=r.Cartesian3.fromArray(o,3*t,Te);if(Math.abs(n.y)<Ne)for(n.y=Ne*(b.y<0?-1:1),o[3*y+1]=n.y,o[3*(y+1)+1]=n.y,h=3*e;h<3*e+12;h+=3)s[h]=o[3*y],s[h+1]=o[3*y+1],s[h+2]=o[3*y+2];if(Math.abs(b.y)<Ne)for(b.y=Ne*(n.y<0?-1:1),o[3*(y+2)+1]=b.y,o[3*(y+3)+1]=b.y,h=3*e;h<3*e+12;h+=3)u[h]=o[3*(y+2)],u[h+1]=o[3*(y+2)+1],u[h+2]=o[3*(y+2)+2];let w=f.attributes,g=f.indices,T=m.attributes,A=m.indices;const E=p.IntersectionTests.lineSegmentPlane(n,b,me,Ee);if(i.defined(E)){C=!0;const o=r.Cartesian3.multiplyByScalar(r.Cartesian3.UNIT_Y,Se,De);n.y<0&&(r.Cartesian3.negate(o,o),w=m.attributes,g=m.indices,T=f.attributes,A=f.indices);const p=r.Cartesian3.add(E,o,xe);w.position.values.push(n.x,n.y,n.z,n.x,n.y,n.z),w.position.values.push(p.x,p.y,p.z),w.position.values.push(p.x,p.y,p.z),w.prevPosition.values.push(s[3*e],s[3*e+1],s[3*e+2]),w.prevPosition.values.push(s[3*e+3],s[3*e+4],s[3*e+5]),w.prevPosition.values.push(n.x,n.y,n.z,n.x,n.y,n.z),w.nextPosition.values.push(p.x,p.y,p.z),w.nextPosition.values.push(p.x,p.y,p.z),w.nextPosition.values.push(p.x,p.y,p.z),w.nextPosition.values.push(p.x,p.y,p.z),r.Cartesian3.negate(o,o),r.Cartesian3.add(E,o,p),T.position.values.push(p.x,p.y,p.z),T.position.values.push(p.x,p.y,p.z),T.position.values.push(b.x,b.y,b.z,b.x,b.y,b.z),T.prevPosition.values.push(p.x,p.y,p.z),T.prevPosition.values.push(p.x,p.y,p.z),T.prevPosition.values.push(p.x,p.y,p.z),T.prevPosition.values.push(p.x,p.y,p.z),T.nextPosition.values.push(b.x,b.y,b.z,b.x,b.y,b.z),T.nextPosition.values.push(u[3*t],u[3*t+1],u[3*t+2]),T.nextPosition.values.push(u[3*t+3],u[3*t+4],u[3*t+5]);const D=r.Cartesian2.fromArray(l,2*e,be),x=Math.abs(D.y);w.expandAndWidth.values.push(-1,x,1,x),w.expandAndWidth.values.push(-1,-x,1,-x),T.expandAndWidth.values.push(-1,x,1,x),T.expandAndWidth.values.push(-1,-x,1,-x);let P=r.Cartesian3.magnitudeSquared(r.Cartesian3.subtract(E,n,Ae));if(P/=r.Cartesian3.magnitudeSquared(r.Cartesian3.subtract(b,n,Ae)),i.defined(d)){const n=r.Cartesian4.fromArray(d,4*e,Pe),i=r.Cartesian4.fromArray(d,4*t,Pe),o=a.CesiumMath.lerp(n.x,i.x,P),s=a.CesiumMath.lerp(n.y,i.y,P),u=a.CesiumMath.lerp(n.z,i.z,P),l=a.CesiumMath.lerp(n.w,i.w,P);for(h=4*e;h<4*e+8;++h)w.color.values.push(d[h]);for(w.color.values.push(o,s,u,l),w.color.values.push(o,s,u,l),T.color.values.push(o,s,u,l),T.color.values.push(o,s,u,l),h=4*t;h<4*t+8;++h)T.color.values.push(d[h])}if(i.defined(c)){const n=r.Cartesian2.fromArray(c,2*e,be),i=r.Cartesian2.fromArray(c,2*(y+3),we),o=a.CesiumMath.lerp(n.x,i.x,P);for(h=2*e;h<2*e+4;++h)w.st.values.push(c[h]);for(w.st.values.push(o,n.y),w.st.values.push(o,i.y),T.st.values.push(o,n.y),T.st.values.push(o,i.y),h=2*t;h<2*t+4;++h)T.st.values.push(c[h])}v=w.position.values.length/3-4,g.push(v,v+2,v+1),g.push(v+1,v+2,v+3),v=T.position.values.length/3-4,A.push(v,v+2,v+1),A.push(v+1,v+2,v+3)}else{let e,t;for(n.y<0?(e=m.attributes,t=m.indices):(e=f.attributes,t=f.indices),e.position.values.push(n.x,n.y,n.z),e.position.values.push(n.x,n.y,n.z),e.position.values.push(b.x,b.y,b.z),e.position.values.push(b.x,b.y,b.z),h=3*y;h<3*y+12;++h)e.prevPosition.values.push(s[h]),e.nextPosition.values.push(u[h]);for(h=2*y;h<2*y+8;++h)e.expandAndWidth.values.push(l[h]),i.defined(c)&&e.st.values.push(c[h]);if(i.defined(d))for(h=4*y;h<4*y+16;++h)e.color.values.push(d[h]);v=e.position.values.length/3-4,t.push(v,v+2,v+1),t.push(v+1,v+2,v+3)}}C&&(Ie(m),Ie(f)),ee(e,m,f)}(e);break;case u.GeometryType.TRIANGLES:fe(e);break;case u.GeometryType.LINES:Ce(e)}else _(t),t.primitiveType===u.PrimitiveType.TRIANGLES?fe(e):t.primitiveType===u.PrimitiveType.LINES&&Ce(e);return e},e.GeometryPipeline=h}));
//# sourceMappingURL=GeometryPipeline-e93f6439.js.map
