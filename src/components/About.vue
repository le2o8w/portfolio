<template>
  <header>
    <article class="container">
      <h1 class="title">
        <span> Hello !</span>
        <span> Je suis Léonore.</span>
      </h1>
      <p>
        Développeuse front-end basée à Lyon, je réalise des sites web et des
        applications depuis 2 ans.
      </p>
      <p>
        J'apprécie surtout travailler avec Javascript, ses frameworks (notament
        Vue.js et Angular 2+) et ses librairies, qui permettent de rendre les
        pages plus interactives, fluides et attractives pour les utilisateurs.
      </p>
      <p>
        Je m'intéresse aussi au design et à l'UX, préférant les interfaces
        modernes et créatives. Je peux passer des heures à peaufiner une
        maquette ou une feuille de styles pour obtenir le rendu parfait que
        j'avais imaginé !
      </p>
      <ButtonCustom
        :text="`Faites moi signe !`"
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
  min-height: 60vh;
}

h1 {
  font-size: 3rem;
  margin: 0 0 20px 0;
}
.title span {
  display: block;
  line-height: 1.3;
}

p {
  width: 90%;
  margin: 0 0 10px 0;
}
article {
  padding: 20px 0;
}
.galaxy-about {
  position: absolute;
  top: 8%;
  right: 8%;
}

@media screen and (max-width: 1440px) {
  article {
    min-height: 80vh;
  }
  .galaxy-about {
    top: 0;
  }
}

@media screen and (max-width: 900px) {
  .galaxy-about {
    display: none;
  }
}

@media screen and (max-width: 700px) {
  article {
    min-height: 100vh;
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
