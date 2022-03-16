//This file is automatically rebuilt by the Cesium build process.
export default "#ifdef LIGHTING_PBR\n\
vec3 computePbrLighting(czm_modelMaterial inputMaterial)\n\
{\n\
czm_pbrParameters pbrParameters;\n\
pbrParameters.diffuseColor = inputMaterial.diffuse;\n\
pbrParameters.f0 = inputMaterial.specular;\n\
pbrParameters.roughness = inputMaterial.roughness;\n\
vec3 lightColorHdr = czm_lightColorHdr;\n\
vec3 color = inputMaterial.diffuse;\n\
#ifdef HAS_NORMALS\n\
color = czm_pbrLighting(\n\
v_positionEC,\n\
inputMaterial.normalEC,\n\
czm_lightDirectionEC,\n\
lightColorHdr,\n\
pbrParameters\n\
);\n\
#endif\n\
color *= inputMaterial.occlusion;\n\
color += inputMaterial.emissive;\n\
#ifndef HDR\n\
color = czm_acesTonemapping(color);\n\
#endif\n\
return color;\n\
}\n\
#endif\n\
void lightingStage(inout czm_modelMaterial material)\n\
{\n\
vec3 color = vec3(0.0);\n\
#ifdef LIGHTING_PBR\n\
color = computePbrLighting(material);\n\
#else // unlit\n\
color = material.diffuse;\n\
#endif\n\
#ifndef HDR\n\
color = czm_linearToSrgb(color);\n\
#endif\n\
material.diffuse = color;\n\
}\n\
";
