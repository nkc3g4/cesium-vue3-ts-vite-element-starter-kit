//This file is automatically rebuilt by the Cesium build process.
export default "vec3 czm_linearToSrgb(vec3 linearIn)\n\
{\n\
return pow(linearIn, vec3(1.0/2.2));\n\
}\n\
vec4 czm_linearToSrgb(vec4 linearIn)\n\
{\n\
vec3 srgbOut = pow(linearIn.rgb, vec3(1.0/2.2));\n\
return vec4(srgbOut, linearIn.a);\n\
}\n\
";
