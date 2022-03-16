//This file is automatically rebuilt by the Cesium build process.
export default "vec3 czm_srgbToLinear(vec3 srgbIn)\n\
{\n\
return pow(srgbIn, vec3(2.2));\n\
}\n\
vec4 czm_srgbToLinear(vec4 srgbIn)\n\
{\n\
vec3 linearOut = pow(srgbIn.rgb, vec3(2.2));\n\
return vec4(linearOut, srgbIn.a);\n\
}\n\
";
