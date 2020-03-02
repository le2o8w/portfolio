<template>
  <section>
    <article class="container">
      <div class="grid-skills">
        <div class="skills-description">
          <h2>C'est quoi ta recette ?</h2>
          <p>
            Évidemment, la base, c'est le <span class="underlined">HTML</span>.
            Certains grogneront <em>"c'est pas de la programmation"</em>, mais
            c'est vachement plus compliqué de concevoir un site web sans markup.
            Grâce aux merveilles du <span class="underlined">CSS</span>, le
            contenu s'illumine, se pare de ses plus beaux atours et s'anime sous
            nos yeux ébahis. Consécration, le
            <span class="underlined">Javascript</span> permet à tout ce beau
            monde d'intéragir avec l'utilisateur.
          </p>
          <p>
            On peut s'arrêter là. Ou ajouter des librairies, un framework (CSS
            ou JS), consommer des APIs, façonner un back-end, établir une base
            de données. Et c'est fantastique : tout est possible pour réaliser
            un projet sur-mesure. J'apprends continuellement des nouvelles
            méthodes, des <span class="underlined">bonnes pratiques</span> qui
            me premettent d'implémenter de nouvelles architectures, d'intégrer
            de nouveaux outils à mes projets. Être développeur c'est faire
            partie d'une communauté d'esprits brillants, inventifs,
            <span class="underlined">innovants</span>, qui vous inspirent et
            vous permettent d'évoluer constamment et d'apprendre tous les jours.
          </p>
          <p>
            Au gré de mon apprentissage et des projets que j'ai développés, j'ai
            pu acquérir de bonnes connaissances pratiques en
            <span class="underlined">Javascript et Typescript</span>. À mon
            poste actuel, je manie quotidiennement
            <span class="underlined">Angular</span> et sur mon temps libre,
            j'aime particulièrement utiliser
            <span class="underlined">Vue.js</span> pour mes projets. J'ai aussi
            implémentés quelques fonctionnalités avec
            <span class="underlined">PHP, natif ou Symfony</span>. Je ne suis
            pas totalement allergique au back-end ! D'ailleurs, récemment, je
            m'initie à Node.js pour pouvoir maîtriser les fonctionnalités de mes
            applications d'un bout à l'autre. Je m'intéresse aussi au rendu 3D
            et suis particulièrement attentive aux chefs-d'œuvre réalisés avec
            WebGL. Un jour <span class="underlined">Three.js</span> n'aura plus
            de secrets pour moi !
          </p>
        </div>
        <Planet
          v-for="skill in skills"
          :theme="theme"
          :skill="skill"
          :key="skill.id"
        />
      </div>
    </article>
  </section>
</template>
<script>
import Planet from "@/components/Planet";
export default {
  components: {
    Planet
  },
  props: {
    theme: String
  },
  data() {
    return {
      skills: [
        {
          id: 1,
          language: require(`@/assets/icons/skills/languages/javascript.svg`),
          planet: require(`@/assets/icons/skills/planets/mars.svg`),
          title: "ES6-7-8"
        },
        {
          id: 2,
          language: require(`@/assets/icons/skills/languages/angular.svg`),
          planet: require(`@/assets/icons/skills/planets/mercury.svg`),
          title: "Angular"
        },
        {
          id: 3,
          language: require(`@/assets/icons/skills/languages/vuejs.svg`),
          planet: require(`@/assets/icons/skills/planets/pluto.svg`),
          title: "Vue.js"
        },
        {
          id: 4,
          language: require(`@/assets/icons/skills/languages/html.svg`),
          planet: require(`@/assets/icons/skills/planets/saturn.svg`),
          title: "HTML/CSS"
        },
        {
          id: 5,
          language: require(`@/assets/icons/skills/languages/github.svg`),
          planet: require(`@/assets/icons/skills/planets/uranus.svg`),
          title: "Github"
        },
        {
          id: 6,
          language: require(`@/assets/icons/skills/languages/adobexd.svg`),
          planet: require(`@/assets/icons/skills/planets/earth.svg`),
          title: "Adobe XD"
        },
        {
          id: 7,
          language: require(`@/assets/icons/skills/languages/php.svg`),
          planet: require(`@/assets/icons/skills/planets/neptune.svg`),
          title: "PHP"
        },
        {
          id: 8,
          language: require(`@/assets/icons/skills/languages/sass.svg`),
          planet: require(`@/assets/icons/skills/planets/jupiter.svg`),
          title: "SASS"
        },
        {
          id: 9,
          language: require(`@/assets/icons/skills/languages/mysql.svg`),
          planet: require(`@/assets/icons/skills/planets/planet.svg`),
          title: "MySQL"
        }
      ]
    };
  }
};
</script>
<style scoped>
.grid-skills {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 50vh repeat(5, 24vh);
  grid-column-gap: 0px;
  grid-row-gap: 20px;
  width: 100%;
  padding-bottom: 150px;
}

.skills-description {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  grid-area: 1 / 1 / 2 / 5;
}
.skill[data-id="1"] {
  grid-area: 3 / 1 / 5 / 3;
  justify-self: center;
}
.skill[data-id="2"] {
  grid-area: 2 / 3 / 4 / 5;
}
.skill[data-id="3"] {
  grid-area: 5 / 2 / 7 / 4;
  justify-self: center;
}
.skill[data-id="4"] {
  grid-area: 2 / 1 / 3 / 2;
}
.skill[data-id="5"] {
  grid-area: 6 / 2 / 7 / 3;
  justify-self: flex-start;
}
.skill[data-id="6"] {
  grid-area: 4 / 4 / 5 / 5;
  align-self: flex-end;
  justify-self: flex-end;
}
.skill[data-id="7"] {
  grid-area: 6 / 4 / 7 / 5;
  align-self: center;
}
.skill[data-id="8"] {
  grid-area: 4 / 3 / 5 / 4;
  justify-self: flex-end;
}
.skill[data-id="9"] {
  grid-area: 5 / 1 / 6 / 2;
}
@media screen and (max-width: 1440px) {
  .grid-skills {
    grid-template-rows: 75vh repeat(5, 24vh);
  }
}
@media screen and (max-width: 1100px) {
  .skill {
    width: 90%;
  }
}
@media screen and (max-width: 700px) {
  .skills-description {
    grid-area: 1 / 1 / 2 / 3;
  }
  .grid-skills {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 125vh repeat(11, 20vh);
    padding-bottom: 50px;
  }
  .skill[data-id="1"] {
    grid-area: 2 / 1 / 4 / 3;
    align-self: center;
    background-size: 90% 90%;
  }
  .skill[data-id="2"] {
    grid-area: 9 / 1 / 11 / 3;
  }
  .skill[data-id="3"] {
    grid-area: 6 / 1 / 8 / 3;
    align-self: flex-start;
  }
  .skill[data-id="4"] {
    grid-area: 5 / 2 / 6 / 3;
    align-self: flex-end;
  }
  .skill[data-id="5"] {
    grid-area: 5 / 1 / 6 / 2;
    height: 250px;
    align-self: flex-end;
  }
  .skill[data-id="6"] {
    grid-area: 8 / 1 / 9 / 2;
  }
  .skill[data-id="7"] {
    grid-area: 4 / 2 / 5 / 3;

    justify-self: flex-end;
  }
  .skill[data-id="8"] {
    grid-area: 12 / 1 / 13 / 2;
  }
  .skill[data-id="9"] {
    grid-area: 11 / 2 / 12 / 3;
  }
}
@media screen and (max-width: 420px) {
  .grid-skills {
    grid-template-rows: 175vh repeat(11, 20vh);
  }
}
@media screen and (max-width: 350px) {
  .grid-skills {
    grid-template-rows: 225vh repeat(11, 20vh);
  }
}
</style>
