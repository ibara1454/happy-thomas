<template>
  <a-entity ref="container">
  </a-entity>
</template>

<script>
import Vue from 'vue';
import ThomasOrExplosion from '@/components/ThomasOrExplosion.vue';
import ThomasOrExplosionVue from './ThomasOrExplosion.vue';

function rand(a, b) {
  return Math.random() * (b - a) + a;
}

function shuffle(xs) {
  const size = xs.length
  return xs[Math.floor(rand(0, size))];
}

const ComponentClass = Vue.extend(ThomasOrExplosionVue)

function createThomas(props) {
  if (!props) {
    props = {
      scale: rand(0.5, 1.0),
      position: `${rand(-20, 20) + shuffle([-25, 25])} ${rand(0, 20)} ${rand(-20, 20) + shuffle([-25, 25])}`,
      rotation: `${rand(-45, 45)} ${rand(-180, 180)} ${rand(-30, 30)}`,
      speed: rand(0.5, 2),
    }
  }
  return new ComponentClass({
    propsData: props,
  });
}

export default {
  name: 'Sandbox',
  components: { ThomasOrExplosion },
  mounted() {
    const container = this.$refs.container;
    const create = (props) => {
      const instance = createThomas(props);
      // Append instance
      instance.$mount()
      container.appendChild(instance.$el);

      // Remove instance after exploded
      instance.$on('explode', () => {
        const handler = setTimeout(() => {
          container.removeChild(instance.$el);
          clearTimeout(handler);
        }, 3500);
      });

      // Remove instance if it exist after 100 seconds
      const handler = setTimeout(() => {
        if (container.contains(instance.$el)) {
          container.removeChild(instance.$el);
        }
        clearTimeout(handler);
      }, 100000);
    }

    // Place first thomas in front of player
    // <thomas-or-explosion :scale="0.5" position="'0 3 -20'" />
    create({
      scale: 0.5,
      position: "0 3 -20",
    })

    // Generate Thomas every 3 seconds
    setInterval(create, 3000);
  },
};
</script>
