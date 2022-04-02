//This file is automatically rebuilt by the Cesium build process.
export default "vec2 computeSt(float featureId)\n\
{\n\
float stepX = model_textureStep.x;\n\
float centerX = model_textureStep.y;\n\
#ifdef MULTILINE_BATCH_TEXTURE\n\
float stepY = model_textureStep.z;\n\
float centerY = model_textureStep.w;\n\
float xId = mod(featureId, model_textureDimensions.x);\n\
float yId = floor(featureId / model_textureDimensions.x);\n\
return vec2(centerX + (xId * stepX), centerY + (yId * stepY));\n\
#else\n\
return vec2(centerX + (featureId * stepX), 0.5);\n\
#endif\n\
}\n\
void selectedFeatureIdStage(out SelectedFeature feature, FeatureIds featureIds)\n\
{\n\
int featureId = featureIds.SELECTED_FEATURE_ID;\n\
if (featureId < model_featuresLength)\n\
{\n\
vec2 featureSt = computeSt(float(featureId));\n\
feature.id = featureId;\n\
feature.st = featureSt;\n\
feature.color = texture2D(model_batchTexture, featureSt);\n\
}\n\
else\n\
{\n\
feature.id = model_featuresLength + 1;\n\
feature.st = vec2(0.0);\n\
feature.color = vec4(1.0);\n\
}\n\
#ifdef HAS_NULL_FEATURE_ID\n\
if (featureId == model_nullFeatureId) {\n\
feature.id = featureId;\n\
feature.st = vec2(0.0);\n\
feature.color = vec4(1.0);\n\
}\n\
#endif\n\
}\n\
";
