define(["exports","./Matrix2-265d9610","./when-4bbc8319","./RuntimeError-5b082e8f","./Transforms-8b90e17c","./ComponentDatatype-aad54330"],(function(t,n,a,e,o,r){"use strict";const s=Math.cos,i=Math.sin,c=Math.sqrt,h={computePosition:function(t,n,e,o,r,h,g){const u=n.radiiSquared,l=t.nwCorner,C=t.boundingRectangle;let d=l.latitude-t.granYCos*o+r*t.granXSin;const M=s(d),S=i(d),w=u.z*S;let m=l.longitude+o*t.granYSin+r*t.granXCos;const p=M*s(m),R=M*i(m),X=u.x*p,Y=u.y*R,O=c(X*p+Y*R+w*S);if(h.x=X/O,h.y=Y/O,h.z=w/O,e){const n=t.stNwCorner;a.defined(n)?(d=n.latitude-t.stGranYCos*o+r*t.stGranXSin,m=n.longitude+o*t.stGranYSin+r*t.stGranXCos,g.x=(m-t.stWest)*t.lonScalar,g.y=(d-t.stSouth)*t.latScalar):(g.x=(m-C.west)*t.lonScalar,g.y=(d-C.south)*t.latScalar)}}},g=new n.Matrix2;let u=new n.Cartesian3;const l=new n.Cartographic;let C=new n.Cartesian3;const d=new o.GeographicProjection;function M(t,a,e,o,r,s,i){const c=Math.cos(a),h=o*c,l=e*c,M=Math.sin(a),S=o*M,w=e*M;u=d.project(t,u),u=n.Cartesian3.subtract(u,C,u);const m=n.Matrix2.fromRotation(a,g);u=n.Matrix2.multiplyByVector(m,u,u),u=n.Cartesian3.add(u,C,u),s-=1,i-=1;const p=(t=d.unproject(u,t)).latitude,R=p+s*w,X=p-h*i,Y=p-h*i+s*w,O=Math.max(p,R,X,Y),_=Math.min(p,R,X,Y),f=t.longitude,x=f+s*l,G=f+i*S,P=f+i*S+s*l;return{north:O,south:_,east:Math.max(f,x,G,P),west:Math.min(f,x,G,P),granYCos:h,granYSin:S,granXCos:l,granXSin:w,nwCorner:t}}h.computeOptions=function(t,a,o,s,i,c,h){let g,u=t.east,S=t.west,w=t.north,m=t.south,p=!1,R=!1;w===r.CesiumMath.PI_OVER_TWO&&(p=!0),m===-r.CesiumMath.PI_OVER_TWO&&(R=!0);const X=w-m;g=S>u?r.CesiumMath.TWO_PI-S+u:u-S;const Y=Math.ceil(g/a)+1,O=Math.ceil(X/a)+1,_=g/(Y-1),f=X/(O-1),x=n.Rectangle.northwest(t,c),G=n.Rectangle.center(t,l);0===o&&0===s||(G.longitude<x.longitude&&(G.longitude+=r.CesiumMath.TWO_PI),C=d.project(G,C));const P=f,W=_,y=n.Rectangle.clone(t,i),I={granYCos:P,granYSin:0,granXCos:W,granXSin:0,nwCorner:x,boundingRectangle:y,width:Y,height:O,northCap:p,southCap:R};if(0!==o){const t=M(x,o,_,f,0,Y,O);if(w=t.north,m=t.south,u=t.east,S=t.west,w<-r.CesiumMath.PI_OVER_TWO||w>r.CesiumMath.PI_OVER_TWO||m<-r.CesiumMath.PI_OVER_TWO||m>r.CesiumMath.PI_OVER_TWO)throw new e.DeveloperError("Rotated rectangle is invalid.  It crosses over either the north or south pole.");I.granYCos=t.granYCos,I.granYSin=t.granYSin,I.granXCos=t.granXCos,I.granXSin=t.granXSin,y.north=w,y.south=m,y.east=u,y.west=S}if(0!==s){o-=s;const t=n.Rectangle.northwest(y,h),a=M(t,o,_,f,0,Y,O);I.stGranYCos=a.granYCos,I.stGranXCos=a.granXCos,I.stGranYSin=a.granYSin,I.stGranXSin=a.granXSin,I.stNwCorner=t,I.stWest=a.west,I.stSouth=a.south}return I},t.RectangleGeometryLibrary=h}));
//# sourceMappingURL=RectangleGeometryLibrary-80323cc0.js.map
