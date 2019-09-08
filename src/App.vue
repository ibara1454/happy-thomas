<template>
  <a-scene>
    <a-assets>
      <audio id="bgm" src="/assets/thomas.mp3" loop autoplay controls="controls" type="audio/mp3"></audio>
      <a-assets-item id="explosion" src="/assets/sphere_explosion/scene.gltf" />
      <a-assets-item id="thomas-train" src="/assets/thomas/scene.gltf" />
    </a-assets>
    <a-entity camera look-controls wasd-controls>
      <a-cursor raycaster="objects: .thomas"></a-cursor>
    </a-entity>
    <!-- Lights -->
    <a-entity light="type: ambient; intensity: 0.5; color: white;" />
    <a-entity light="type: directional; color: blue; intensity: 0.6; castShadow: true;" position="-1 2 1" />

    <a-entity id="sky" geometry="primitive: sphere; radius: 5000"
      material="shader: gradient; topColor: 235 235 245; bottomColor: 185 185 210"
      scale="-1 1 1" />
    <a-entity id="ocean" ocean="density: 20; width: 200; depth: 200; speed: 4"
      position="0 -3 0"
      material="color: #9CE3F9; opacity: 0.75; metalness: 0; roughness: 1"
      rotation="-90 0 0" />
    <sandbox />

  </a-scene>
</template>

<script>
import Sandbox from '@/components/Sandbox.vue';

export default {
  name: 'app',
  components: { Sandbox },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
