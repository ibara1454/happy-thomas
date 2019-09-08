<script>
import ThomasTrain from '@/components/ThomasTrain.vue';
import Explosion from '@/components/Explosion.vue';

export default {
  name: 'ThomasOrExplosion',
  components: { ThomasTrain, Explosion },
  data() {
    return { isExploded: false, dPosition: this.position };
  },
  props: {
    scale: { type: Number, default: 1.0 },
    position: { type: String, required: true },
    rotation: { type: String, default: '0 0 0' },
    speed: { type: Number, default: 1.0 },
  },
  render(createElement) {
    if (this.isExploded) {
      return (<explosion scale={this.scale} position={this.dPosition} rotation={this.rotation} />);
    } else {
      return (<thomas-train scale={this.scale} position={this.dPosition} rotation={this.rotation} speed={this.speed} onClick={this.onClick} />);
    }
  },
  methods: {
    onClick(event) {
      const {x, y, z} = event.target.getAttribute('position');
      this.dPosition = `${x} ${y} ${z}`;
      this.isExploded = true;
      this.$emit('explode', this);
    },
  },
}
</script>
