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
  min-height: 80vh;
}

h1 {
  font-size: 3rem;
}
.title span {
  display: block;
  line-height: 1.3;
}
h1,
p {
  margin: 0 0 50px 0;
}

article {
  padding: 20px 0;
}

@media screen and (max-width: 900px) {
  .galaxy-about {
    display: none;
  }
}

@media screen and (max-width: 700px) {
  h1 {
    font-size: 2rem;
  }
  h1,
  p {
    margin: 0 0 20px 0;
  }
}
</style>
