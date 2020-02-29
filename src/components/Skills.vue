<template>
  <section>
    <article class="container">
      <div class="grid-skills">
        <div class="skills-description">
          <h2>How do I do all this stuff ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quam asperiores voluptatem voluptate atque itaque provident odit
            saepe! Possimus incidunt nesciunt qui ipsam beatae, reiciendis
            voluptas voluptatum quasi inventore repellat?
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
  grid-template-rows: 15vh repeat(5, 15vh);
  grid-column-gap: 0px;
  grid-row-gap: 20px;
  width: 100%;
  padding-bottom: 150px;
}

.skills-description {
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
    grid-template-rows: 50vh repeat(11, 20vh);
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
</style>
