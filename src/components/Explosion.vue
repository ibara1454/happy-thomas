<template>
  <a-entity gltf-model="#explosion"
    :scale="(this.scale * 0.04 + ' ').repeat(3)"
    :position="this.position"
    :rotation="this.rotation"
    animation-mixer />
</template>

<script>
export default {
  name: 'Explosion',
  props: {
    scale: { type: Number, default: 1.0 },
    position: { type: String, required: true },
    rotation: { type: String, default: '0 0 0' },
  },
}
</script>
