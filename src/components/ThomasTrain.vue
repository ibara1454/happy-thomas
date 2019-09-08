<template>
  <!-- <a-entity gltf-model="url(/assets/thomas/scene.gltf)" :scale="(this.scale + ' ').repeat(3)" position="0 0 -3"
      animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1" /> -->
  <a-entity gltf-model="#thomas-train"
    class="thomas"
    :scale="(this.scale + ' ').repeat(3)"
    :position="this.position"
    :rotation="this.rotation"
    :animation="'property: position; to: ' + this.dest + '; dur: 100000'"
    @click="$emit('click', $event);" />
</template>

<script>
export default {
  name: 'ThomasTrain',
  props: {
    scale: { type: Number, default: 1.0 },
    position: { type: String, required: true },
    rotation: { type: String, default: '0 0 0' },
    speed: { type: Number, default: 1.0 },
  },
  computed: {
    dest() {
      const [px, py, pz] = this.position.split(' ').map(parseFloat);
      const [rx, ry, _] = this.rotation.split(' ').map((v) => parseFloat(v) / 180 * Math.PI);
      // 0 0 0 -> z+
      // 0 0 90 -> z+
      // 0 90 0 -> x+
      // 0 -90 0 -> x-
      // 90 0 0 -> y+
      // -90 0 0 -> y-
      // 180 0 0 -> z-
      // 0 180 0 -> z-
      const [vx, vy, vz] = [Math.sin(ry), -Math.sin(rx), Math.cos(rx) * Math.cos(ry)];
      return `${px + vx * 1000 * this.speed} ${py + vy * 1000 * this.speed} ${pz + vz * 1000 * this.speed}`;
    },
  },
};
</script>
