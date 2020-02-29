<template>
  <header>
    <article class="container">
      <h1 class="title">
        <span> Hello !</span>
        <span> Je suis Léonore.</span>
      </h1>
      <p>Développeuse front-end basée à Lyon,</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione libero
        exercitationem, laboriosam minus quod veritatis, corporis cupiditate
        autem quibusdam fuga eos natus nisi praesentium tempora iure ipsa quia
        molestiae nulla voluptate sit adipisci! Delectus, veniam illum aut
        voluptatum porro sit.
      </p>
      <ButtonCustom
        :text="`M'envoyer un message`"
        :href="'#'"
        @action="$scrollTop('contact')"
      />
    </article>
    <Galaxy class="galaxy-about" />
  </header>
</template>
<script>
import ButtonCustom from "@/components/ButtonCustom";
import Galaxy from "@/components/Galaxy";

export default {
  components: {
    ButtonCustom,
    Galaxy
  }
};
</script>
<style scoped>
article {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
h1 {
  font-size: 3rem;
}
h1,
p {
  margin: 0 0 50px 0;
}
article {
  padding: 20px 0;
}
.title span {
  display: block;
  position: relative;
  overflow: hidden;
  line-height: 1.3;
}

.title span::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-color);
  animation: after 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
  transform: translateX(-101%);
}

.title span::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-color);
  animation: before 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
  transform: translateX(0);
}

.title span:nth-of-type(1)::before,
.title span:nth-of-type(1)::after {
  animation-delay: 0.25s;
}

.title span:nth-of-type(2)::before,
.title span:nth-of-type(2)::after {
  animation-delay: 0.5s;
}

@keyframes after {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(101%);
  }
}

@keyframes before {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200%);
  }
}

@media screen and (max-width: 700px) {
  .galaxy-about {
    display: none;
  }
  h1 {
    font-size: 2rem;
  }
  h1,
  p {
    margin: 0 0 20px 0;
  }
}
</style>
