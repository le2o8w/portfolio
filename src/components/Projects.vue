<template>
  <section id="projects">
    <transition name="slide" mode="out-in">
      <ProjectThumbnail
        v-if="showGrid"
        :projects="projects"
        :theme="theme"
        @showProject="showProject"
      />
      <ProjectDetails
        v-else
        :project="projectDetails"
        :theme="theme"
        @close="openGrid"
        @paginate="paginate"
      />
    </transition>
  </section>
</template>
<script>
import ProjectDetails from "@/components/ProjectDetails";
import ProjectThumbnail from "@/components/ProjectThumbnail";

export default {
  name: "Project",
  props: {
    theme: String
  },
  components: {
    ProjectDetails,
    ProjectThumbnail
  },
  methods: {
    showProject(project) {
      this.showGrid = false;
      const index = this.projects.findIndex(el => el.id === project);
      this.projectDetails = this.projects[index];
      setTimeout(() => {
        this.$scrollTop("projects");
      }, 600);
    },
    openGrid() {
      this.showGrid = true;
      setTimeout(() => {
        this.$scrollTop("projects");
      }, 600);
    },
    paginate(data) {
      let index = data.next ? data.id + 1 : data.id - 1;
      if (index === 0) {
        index = this.projects.length;
      }
      if (index > this.projects.length) {
        index = 1;
      }
      const id = this.projects.findIndex(el => el.id === index);
      this.projectDetails = this.projects[id];
      setTimeout(() => {
        this.$scrollTop("projects");
      }, 600);
    }
  },
  data() {
    return {
      showGrid: true,
      projectDetails: {},
      projects: [
        {
          id: 1,
          link: "(Application interne Fiducial)",
          name: "Espace GED",
          year: "2018",
          title: "Espace GED <br> Alfresco",
          description: "Interface de consultation et upload de documents",
          summary: "Refonte du site de l'association de ski nautique de Macon.",
          more: "Site vitrine, formulaire de contact, Google Map custom.",
          technologies: "Angular 6, Alfresco ADF, APIs REST, Ansible",
          iconLight: require(`@/assets/icons/projects/ged.svg`),
          iconDark: require(`@/assets/icons/projects/ged-w.svg`),
          image: ""
        },
        {
          id: 2,
          link: "http://www.ski-nautique-macon.com",
          name: "Ski Nautique Macon",
          year: "2018",
          title: "Club de <br> Ski-nautique",
          description: "Club de ski-nautique de Macon",
          summary: "Refonte du site de l'association de ski nautique de Macon.",
          more: "Site vitrine, formulaire de contact, Google Map custom.",
          technologies: "HTML5, CSS3, Javascript, PHP",
          iconLight: require(`@/assets/icons/projects/skiing.svg`),
          iconDark: require(`@/assets/icons/projects/skiing-w.svg`),
          image: ""
        },
        {
          id: 3,
          link: "https://www.nambo.fr",
          title: "Nambo <br> Restaurant",
          name: "Nambo",
          year: "2018",
          summary:
            "Projet de validation de formation pour un restaurant de spécialités asiatiques à Lyon.",
          more:
            " Site vitrine, back office pour la modification du menu et des horaires, formulaire de contact, Google Map custom.",
          technologies: "HTML5, CSS3, Javascript, PHP, MySQL",
          description: "Restaurant de spécialités asiatique",
          iconLight: require(`@/assets/icons/projects/sushi.svg`),
          iconDark: require(`@/assets/icons/projects/sushi-w.svg`),
          image: ""
        },
        {
          id: 4,
          link: "https://le2o8w-weather.netlify.com",
          title: "Weather <br> App",
          summary: "Refonte du site de l'association de ski nautique de Macon.",
          more: "Site vitrine, formulaire de contact, Google Map custom.",
          technologies: "Vue.js",
          name: "Weather",
          year: "2019",
          description: "Météo géolocalisée",
          iconLight: require(`@/assets/icons/projects/weather.svg`),
          iconDark: require(`@/assets/icons/projects/weather-w.svg`),
          image: ""
        },
        {
          id: 5,
          link: "https://le2o8w-phone.netlify.com",
          title: "CSS <br> Phone",
          summary: "Refonte du site de l'association de ski nautique de Macon.",
          more: "Site vitrine, formulaire de contact, Google Map custom.",
          technologies: "HTML5, CSS3, Javascript",
          name: "CSS Phone",
          year: "2018",
          description: "Playground",
          iconLight: require(`@/assets/icons/projects/phone.svg`),
          iconDark: require(`@/assets/icons/projects/phone-w.svg`),
          image: ""
        },
        {
          id: 6,
          link: "https://le2o8w-template.netlify.com",
          title: "Blog<br> Template",
          summary: "Refonte du site de l'association de ski nautique de Macon.",
          more: "Site vitrine, formulaire de contact, Google Map custom.",
          technologies: "HTML5, CSS3, SASS, Javascript",
          name: "Blog template",
          year: "2018",
          description: "Intégration d'une maquette",
          iconLight: require(`@/assets/icons/projects/blog.svg`),
          iconDark: require(`@/assets/icons/projects/blog-w.svg`),
          image: ""
        },
        {
          id: 7,
          link: "https://le2o8w-notebook.netlify.com",
          title: "Notebook <br>App",
          summary: "Refonte du site de l'association de ski nautique de Macon.",
          more: "Site vitrine, formulaire de contact, Google Map custom.",
          technologies: "Vue.js",
          name: "Notebook",
          year: "2018",
          description: "Application de notes",
          iconLight: require(`@/assets/icons/projects/notes.svg`),
          iconDark: require(`@/assets/icons/projects/notes-w.svg`),
          image: ""
        }
      ]
    };
  }
};
</script>
<style scoped>
.slide-leave-active,
.slide-enter-active {
  transition: all 0.4s ease-in-out;
  pointer-events: none;
}
.slide-enter {
  transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}
</style>
