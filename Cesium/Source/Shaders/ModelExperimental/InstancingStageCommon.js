//This file is automatically rebuilt by the Cesium build process.
export default "mat4 getInstancingTransform()\n\
{\n\
mat4 instancingTransform;\n\
#ifdef HAS_INSTANCE_MATRICES\n\
instancingTransform = mat4(\n\
a_instancingTransformRow0.x, a_instancingTransformRow1.x, a_instancingTransformRow2.x, 0.0,\n\
a_instancingTransformRow0.y, a_instancingTransformRow1.y, a_instancingTransformRow2.y, 0.0,\n\
a_instancingTransformRow0.z, a_instancingTransformRow1.z, a_instancingTransformRow2.z, 0.0,\n\
a_instancingTransformRow0.w, a_instancingTransformRow1.w, a_instancingTransformRow2.w, 1.0\n\
);\n\
#else\n\
vec3 translation = vec3(0.0, 0.0, 0.0);\n\
vec3 scale = vec3(1.0, 1.0, 1.0);\n\
#ifdef HAS_INSTANCE_TRANSLATION\n\
translation = a_instanceTranslation;\n\
#endif\n\
#ifdef HAS_INSTANCE_SCALE\n\
scale = a_instanceScale;\n\
#endif\n\
instancingTransform = mat4(\n\
scale.x, 0.0, 0.0, 0.0,\n\
0.0, scale.y, 0.0, 0.0,\n\
0.0, 0.0, scale.z, 0.0,\n\
translation.x, translation.y, translation.z, 1.0\n\
);\n\
#endif\n\
return instancingTransform;\n\
}\n\
";
