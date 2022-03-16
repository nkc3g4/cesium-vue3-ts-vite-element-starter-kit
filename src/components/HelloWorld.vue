<template>
  <div id="cesiumContainer" class="fullSize" />
  <div id="main-menu">
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
/**
 * You can also import Cesium Object like this
 *
 * import * as Cesium from 'cesium';
 * const viewer = new Cesium.Viewer('cesiumContainer');
 */
import * as Cesium from "cesium";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    // const mapRef = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      // if (mapRef.value)
      window.viewer = new Cesium.Viewer("cesiumContainer", {
        imageryProvider: new Cesium.TileMapServiceImageryProvider({
          url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
        }),
      });
    });
    // return { mapRef };
  },
});
declare global {
  interface Window {
    viewer: any; // turn off type checking
  }
}
</script>

<style>
/* @import url(../templates/bucket.css);  */
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.cesium-container {
  /* width: 500px;
  height: 250px; */
  margin: 0 auto;
}
#cesiumContainer{
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  width: 100%;
  height: 100%;
}
#main-menu {
  position: absolute;
  padding: 4px;
  margin: 5px;
  left: 15px;
  top: 15px;
}
</style>
