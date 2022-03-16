define(["./AxisAlignedBoundingBox-2a0ca7ef","./Matrix2-265d9610","./when-4bbc8319","./TerrainEncoding-82b55fe0","./IndexDatatype-6739e544","./ComponentDatatype-aad54330","./RuntimeError-5b082e8f","./Transforms-8b90e17c","./WebMercatorProjection-d67afe4b","./createTaskProcessorWorker","./AttributeCompression-442278a0","./WebGLConstants-508b9636","./combine-e9466e32"],(function(e,t,r,n,o,i,a,s,c,h,d,u,l){"use strict";function I(){a.DeveloperError.throwInstantiationError()}Object.defineProperties(I.prototype,{errorEvent:{get:a.DeveloperError.throwInstantiationError},credit:{get:a.DeveloperError.throwInstantiationError},tilingScheme:{get:a.DeveloperError.throwInstantiationError},ready:{get:a.DeveloperError.throwInstantiationError},readyPromise:{get:a.DeveloperError.throwInstantiationError},hasWaterMask:{get:a.DeveloperError.throwInstantiationError},hasVertexNormals:{get:a.DeveloperError.throwInstantiationError},availability:{get:a.DeveloperError.throwInstantiationError}});const m=[];I.getRegularGridIndices=function(e,t){if(e*t>=i.CesiumMath.FOUR_GIGABYTES)throw new a.DeveloperError("The total number of vertices (width * height) must be less than 4,294,967,296.");let n=m[e];r.defined(n)||(m[e]=n=[]);let o=n[t];return r.defined(o)||(o=e*t<i.CesiumMath.SIXTY_FOUR_KILOBYTES?n[t]=new Uint16Array((e-1)*(t-1)*6):n[t]=new Uint32Array((e-1)*(t-1)*6),f(e,t,o,0)),o};const g=[];I.getRegularGridIndicesAndEdgeIndices=function(e,t){if(e*t>=i.CesiumMath.FOUR_GIGABYTES)throw new a.DeveloperError("The total number of vertices (width * height) must be less than 4,294,967,296.");let n=g[e];r.defined(n)||(g[e]=n=[]);let o=n[t];if(!r.defined(o)){const r=I.getRegularGridIndices(e,t),i=E(e,t),a=i.westIndicesSouthToNorth,s=i.southIndicesEastToWest,c=i.eastIndicesNorthToSouth,h=i.northIndicesWestToEast;o=n[t]={indices:r,westIndicesSouthToNorth:a,southIndicesEastToWest:s,eastIndicesNorthToSouth:c,northIndicesWestToEast:h}}return o};const T=[];function E(e,t){const r=new Array(t),n=new Array(e),o=new Array(t),i=new Array(e);let a;for(a=0;a<e;++a)i[a]=a,n[a]=e*t-1-a;for(a=0;a<t;++a)o[a]=(a+1)*e-1,r[a]=(t-a-1)*e;return{westIndicesSouthToNorth:r,southIndicesEastToWest:n,eastIndicesNorthToSouth:o,northIndicesWestToEast:i}}function f(e,t,r,n){let o=0;for(let i=0;i<t-1;++i){for(let t=0;t<e-1;++t){const t=o,i=t+e,a=i+1,s=t+1;r[n++]=t,r[n++]=i,r[n++]=s,r[n++]=s,r[n++]=i,r[n++]=a,++o}++o}}function p(e,t,r,n){let o=e[0];const i=e.length;for(let a=1;a<i;++a){const i=e[a];r[n++]=o,r[n++]=i,r[n++]=t,r[n++]=t,r[n++]=i,r[n++]=t+1,o=i,++t}return n}I.getRegularGridAndSkirtIndicesAndEdgeIndices=function(e,t){if(e*t>=i.CesiumMath.FOUR_GIGABYTES)throw new a.DeveloperError("The total number of vertices (width * height) must be less than 4,294,967,296.");let n=T[e];r.defined(n)||(T[e]=n=[]);let s=n[t];if(!r.defined(s)){const r=e*t,i=(e-1)*(t-1)*6,a=2*e+2*t,c=r+a,h=i+6*Math.max(0,a-4),d=E(e,t),u=d.westIndicesSouthToNorth,l=d.southIndicesEastToWest,m=d.eastIndicesNorthToSouth,g=d.northIndicesWestToEast,T=o.IndexDatatype.createTypedArray(c,h);f(e,t,T,0),I.addSkirtIndices(u,l,m,g,r,T,i),s=n[t]={indices:T,westIndicesSouthToNorth:u,southIndicesEastToWest:l,eastIndicesNorthToSouth:m,northIndicesWestToEast:g,indexCountWithoutSkirts:i}}return s},I.addSkirtIndices=function(e,t,r,n,o,i,a){let s=o;a=p(e,s,i,a),s+=e.length,a=p(t,s,i,a),s+=t.length,a=p(r,s,i,a),s+=r.length,p(n,s,i,a)},I.heightmapTerrainQuality=.25,I.getEstimatedLevelZeroGeometricErrorForAHeightmap=function(e,t,r){return 2*e.maximumRadius*Math.PI*I.heightmapTerrainQuality/(t*r)},I.prototype.requestTileGeometry=a.DeveloperError.throwInstantiationError,I.prototype.getLevelMaximumGeometricError=a.DeveloperError.throwInstantiationError,I.prototype.getTileDataAvailable=a.DeveloperError.throwInstantiationError,I.prototype.loadTileDataAvailability=a.DeveloperError.throwInstantiationError;const w=32767,y=new t.Cartesian3,N=new t.Cartesian3,b=new t.Cartesian3,S=new t.Cartographic,M=new t.Cartesian2;function x(e,r,n,o,a,s,c,h,d){let u=Number.POSITIVE_INFINITY;const l=a.north,I=a.south;let m=a.east;const g=a.west;m<g&&(m+=i.CesiumMath.TWO_PI);const T=e.length;for(let a=0;a<T;++a){const T=e[a],E=n[T],f=o[T];S.longitude=i.CesiumMath.lerp(g,m,f.x),S.latitude=i.CesiumMath.lerp(I,l,f.y),S.height=E-r;const p=s.cartographicToCartesian(S,y);t.Matrix4.multiplyByPoint(c,p,p),t.Cartesian3.minimumByComponent(p,h,h),t.Cartesian3.maximumByComponent(p,d,d),u=Math.min(u,S.height)}return u}function A(e,t,n,o,a,s,h,d,u,l,I,m,g,T){const E=r.defined(h),f=u.north,p=u.south;let w=u.east;const N=u.west;w<N&&(w+=i.CesiumMath.TWO_PI);const b=n.length;for(let r=0;r<b;++r){const u=n[r],b=a[u],x=s[u];S.longitude=i.CesiumMath.lerp(N,w,x.x)+g,S.latitude=i.CesiumMath.lerp(p,f,x.y)+T,S.height=b-l;const A=d.cartographicToCartesian(S,y);if(E){const e=2*u;M.x=h[e],M.y=h[e+1]}let C,v;o.hasWebMercatorT&&(C=(c.WebMercatorProjection.geodeticLatitudeToMercatorAngle(S.latitude)-I)*m),o.hasGeodeticSurfaceNormals&&(v=d.geodeticSurfaceNormal(A)),t=o.encode(e,t,A,x,S.height,M,C,v)}}function C(e,t){let n;return"function"==typeof e.slice&&(n=e.slice(),"function"!=typeof n.sort&&(n=void 0)),r.defined(n)||(n=Array.prototype.slice.call(e)),n.sort(t),n}return h((function(a,h){const d=a.quantizedVertices,u=d.length/3,l=a.octEncodedNormals,m=a.westIndices.length+a.eastIndices.length+a.southIndices.length+a.northIndices.length,g=a.includeWebMercatorT,T=a.exaggeration,E=a.exaggerationRelativeHeight,f=1!==T,p=t.Rectangle.clone(a.rectangle),v=p.west,W=p.south,D=p.east,P=p.north,G=t.Ellipsoid.clone(a.ellipsoid),F=a.minimumHeight,_=a.maximumHeight,k=a.relativeToCenter,Y=s.Transforms.eastNorthUpToFixedFrame(k,G),H=t.Matrix4.inverseTransformation(Y,new t.Matrix4);let O,B;g&&(O=c.WebMercatorProjection.geodeticLatitudeToMercatorAngle(W),B=1/(c.WebMercatorProjection.geodeticLatitudeToMercatorAngle(P)-O));const V=d.subarray(0,u),R=d.subarray(u,2*u),L=d.subarray(2*u,3*u),U=r.defined(l),j=new Array(u),z=new Array(u),q=new Array(u),Q=g?new Array(u):[],K=f?new Array(u):[],X=N;X.x=Number.POSITIVE_INFINITY,X.y=Number.POSITIVE_INFINITY,X.z=Number.POSITIVE_INFINITY;const Z=b;Z.x=Number.NEGATIVE_INFINITY,Z.y=Number.NEGATIVE_INFINITY,Z.z=Number.NEGATIVE_INFINITY;let J=Number.POSITIVE_INFINITY,$=Number.NEGATIVE_INFINITY,ee=Number.POSITIVE_INFINITY,te=Number.NEGATIVE_INFINITY;for(let e=0;e<u;++e){const r=V[e],n=R[e],o=r/w,a=n/w,s=i.CesiumMath.lerp(F,_,L[e]/w);S.longitude=i.CesiumMath.lerp(v,D,o),S.latitude=i.CesiumMath.lerp(W,P,a),S.height=s,J=Math.min(S.longitude,J),$=Math.max(S.longitude,$),ee=Math.min(S.latitude,ee),te=Math.max(S.latitude,te);const h=G.cartographicToCartesian(S);j[e]=new t.Cartesian2(o,a),z[e]=s,q[e]=h,g&&(Q[e]=(c.WebMercatorProjection.geodeticLatitudeToMercatorAngle(S.latitude)-O)*B),f&&(K[e]=G.geodeticSurfaceNormal(h)),t.Matrix4.multiplyByPoint(H,h,y),t.Cartesian3.minimumByComponent(y,X,X),t.Cartesian3.maximumByComponent(y,Z,Z)}const re=C(a.westIndices,(function(e,t){return j[e].y-j[t].y})),ne=C(a.eastIndices,(function(e,t){return j[t].y-j[e].y})),oe=C(a.southIndices,(function(e,t){return j[t].x-j[e].x})),ie=C(a.northIndices,(function(e,t){return j[e].x-j[t].x}));let ae;if(F<0){ae=new n.EllipsoidalOccluder(G).computeHorizonCullingPointPossiblyUnderEllipsoid(k,q,F)}let se=F;se=Math.min(se,x(a.westIndices,a.westSkirtHeight,z,j,p,G,H,X,Z)),se=Math.min(se,x(a.southIndices,a.southSkirtHeight,z,j,p,G,H,X,Z)),se=Math.min(se,x(a.eastIndices,a.eastSkirtHeight,z,j,p,G,H,X,Z)),se=Math.min(se,x(a.northIndices,a.northSkirtHeight,z,j,p,G,H,X,Z));const ce=new e.AxisAlignedBoundingBox(X,Z,k),he=new n.TerrainEncoding(k,ce,se,_,Y,U,g,f,T,E),de=he.stride,ue=new Float32Array(u*de+m*de);let le=0;for(let e=0;e<u;++e){if(U){const t=2*e;M.x=l[t],M.y=l[t+1]}le=he.encode(ue,le,q[e],j[e],z[e],M,Q[e],K[e])}const Ie=Math.max(0,2*(m-4)),me=a.indices.length+3*Ie,ge=o.IndexDatatype.createTypedArray(u+m,me);ge.set(a.indices,0);const Te=1e-4,Ee=($-J)*Te,fe=(te-ee)*Te,pe=-Ee,we=Ee,ye=fe,Ne=-fe;let be=u*de;return A(ue,be,re,he,z,j,l,G,p,a.westSkirtHeight,O,B,pe,0),be+=a.westIndices.length*de,A(ue,be,oe,he,z,j,l,G,p,a.southSkirtHeight,O,B,0,Ne),be+=a.southIndices.length*de,A(ue,be,ne,he,z,j,l,G,p,a.eastSkirtHeight,O,B,we,0),be+=a.eastIndices.length*de,A(ue,be,ie,he,z,j,l,G,p,a.northSkirtHeight,O,B,0,ye),I.addSkirtIndices(re,oe,ne,ie,u,ge,a.indices.length),h.push(ue.buffer,ge.buffer),{vertices:ue.buffer,indices:ge.buffer,westIndicesSouthToNorth:re,southIndicesEastToWest:oe,eastIndicesNorthToSouth:ne,northIndicesWestToEast:ie,vertexStride:de,center:k,minimumHeight:F,maximumHeight:_,occludeePointInScaledSpace:ae,encoding:he,indexCountWithoutSkirts:a.indices.length}}))}));
//# sourceMappingURL=createVerticesFromQuantizedTerrainMesh.js.map