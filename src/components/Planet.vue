<template>
  <div
    class="skill"
    :style="{
      backgroundImage: `url(${skill.planet})`,
      animationDelay: `${delay}s`
    }"
    :data-id="skill.id"
  >
    <div class="skill-detail">
      <img :src="skill.language" :alt="skill.title" />
      <div class="skill-title">{{ skill.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: Object,
    theme: String,
    index: Number
  },
  computed: {
    delay() {
      return Math.floor(Math.random() * 100) / 100;
    }
  }
};
</script>

<style scoped>
.skill {
  position: relative;
  width: 60%;
  height: 100%;
  min-height: 250px;
  display: block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 75% 75%;
  transition: all 0.2s ease;
  animation: float 4s infinite ease-in-out;
}

.skill-detail {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%) translateY(-50%);
}

.skill-detail img {
  width: 40px;
  height: 40px;
}

.skill-title {
  width: 100%;
  margin-top: 4px;
  text-align: center;
  color: #040417;
  font-size: 1.1rem;
  font-family: "Gramatika";
  font-weight: bolder;
  font-variant-caps: all-small-caps;
}
@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(1rem);
  }

  100% {
    transform: translateY(0);
  }
}
@media screen and (max-width: 700px) {
  .skill {
    min-height: 90%;
    width: 90%;
    background-size: 90% 90%;
  }
  .skill-detail img {
    width: 25px;
    height: 25px;
  }
  .skill-title {
    font-size: 1rem;
  }
}
</style>
