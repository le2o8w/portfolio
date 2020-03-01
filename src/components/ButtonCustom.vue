<template>
  <a class="btn" :href="href" v-on:click.prevent="action">
    <div>
      <span>{{ text }}</span>
    </div>
  </a>
</template>
<script>
export default {
  name: "ButtonCustom",
  props: {
    text: String,
    href: String
  },
  methods: {
    action() {
      this.$emit("action");
    }
  }
};
</script>
<style scoped>
.btn {
  display: block;
  max-width: 300px;
  width: 100%;
  height: 50px;
  padding: 3px;
  background-image: var(--gradient);
  font: 1.125em "Gramatika", Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-variant-caps: all-small-caps;
  color: var(--font-color);
  text-decoration: none;
}
.btn div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--bg-color);
}
.btn span {
  padding-bottom: 4px;
  transition: all 0.2s ease-in-out;
}
.btn:hover span {
  transform: scale(1.05);
}
@media screen and (max-width: 950px) {
  .btn {
    width: 50%;
  }
}
@media screen and (max-width: 600px) {
  .btn {
    width: 90%;
  }
}
</style>
