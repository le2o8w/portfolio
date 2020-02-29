<template>
  <div class="home">
    <Menu @currentTheme="setTheme" />
    <div></div>
    <main>
      <About id="about" />
      <Skills id="skills" :theme="theme" />
      <Projects id="projects" :theme="theme" />
      <Contact id="contact" :theme="theme" />
    </main>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default {
  name: "Home",
  components: {
    Menu,
    About,
    Skills,
    Projects,
    Contact
  },
  data() {
    return {
      theme: ""
    };
  },

  methods: {
    setTheme(theme) {
      this.theme = theme;
      this.$emit("syncTheme", theme);
    }
  }
};
</script>
<style>
section,
header {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin: 5vh 0 10vh 0;
}
#contact {
  padding-bottom: 0;
}
.home {
  display: grid;
  grid-template-columns: 75px calc(100% - 75px);
  grid-template-rows: 100%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

@media screen and (max-width: 480px) {
  .home {
    grid-template-columns: 50px calc(100% - 50px);
  }
  section,
  header {
    margin: 2vh 0 15vh 0;
  }
}
</style>
