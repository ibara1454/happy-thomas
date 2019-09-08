<template>
  <a-scene>
    <a-assets>
      <a-asset-item id="thomas" src="/assets/thomas/scene.gltf"></a-asset-item>
      <a-asset-item id="explosion" src="/assets/sphere_explosion/scene.gltf"></a-asset-item>
    </a-assets>
    <!-- Lights -->
    <a-entity light="type: ambient; intensity: 0.5; color: white;"></a-entity>
    <a-entity light="type: directional; color: blue; intensity: 0.6; castShadow: true;" position="-1 2 1"></a-entity>

    <a-entity id="sky" geometry="primitive: sphere; radius: 5000"
      material="shader: gradient; topColor: 235 235 245; bottomColor: 185 185 210"
      scale="-1 1 1"></a-entity>
    <!-- <a-entity id="ocean" ocean="density: 20; width: 200; depth: 200; speed: 4"
      position="0 -3 0"
      material="color: #9CE3F9; opacity: 0.75; metalness: 0; roughness: 1"
      rotation="-90 0 0"></a-entity> -->

    <a-entity class="thomas" gltf-model="url(/assets/sphere_explosion/scene.gltf)" scale="0.1 0.1 0.1" position="0 0 -3"
      animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1"></a-entity>
    <a-entity class="explosion" gltf-model="#explosion" position="1 5 -3" scale="0.005 0.005 0.005" animation-mixer></a-entity>

    <a-entity camera wasd-controls look-controls position="0 3 0">
      <a-cursor
        raycaster="objects: .thomas"
        ></a-cursor>
    </a-entity>
  </a-scene>
</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>
