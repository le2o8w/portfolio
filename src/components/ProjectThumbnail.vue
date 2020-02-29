<template>
  <article class="container">
    <div class="thumbnails-grid">
      <div class="thumbnails-intro">
        <h2>What I'm up to these days</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam
          asperiores voluptatem voluptate atque itaque provident odit saepe!
          Possimus incidunt nesciunt qui ipsam beatae, reiciendis voluptas
          voluptatum quasi inventore repellat?
        </p>
      </div>
      <template v-for="project in projects">
        <div
          :key="project.name"
          :data-id="project.id"
          :ref="`thumbnail${project.id}`"
          class="thumbnail"
          :style="
            theme === 'dark'
              ? { backgroundImage: `url(${project.iconDark})` }
              : { backgroundImage: `url(${project.iconLight})` }
          "
          @mouseover="hoverOn(project.id)"
          @mouseleave="hoverOff()"
        >
          <div class="thumbnail-background"></div>
          <div class="thumbnail-text">
            <div class="thumbnail-year">{{ project.year }}</div>
            <div>
              <h3 class="thumbnail-title">{{ project.name }}</h3>
              <p class="thumbnail-description">{{ project.description }}</p>
            </div>
            <div class="to-project-details" @click="showProject(project.id)">
              Voir projet
            </div>
          </div>
        </div>
      </template>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    projects: Array,
    theme: String
  },
  data() {
    return {
      hover: false,
      id: ""
    };
  },
  watch: {
    hover: {
      handler: "effect"
    }
  },
  methods: {
    hoverOn(id) {
      this.hover = true;
      this.id = id;
    },
    hoverOff() {
      this.hover = false;
    },
    showProject(id) {
      this.$emit("showProject", id);
    },
    effect() {
      const thumbnail = this.$refs[`thumbnail${this.id}`][0];
      if (this.hover) {
        var halfW = thumbnail.clientWidth / 2;
        var halfH = thumbnail.clientHeight / 2;

        var coorX = halfW - (event.pageX - thumbnail.offsetLeft);
        var coorY = halfH - (event.pageY - thumbnail.offsetTop);

        var degX = (coorY / halfH) * 15 + "deg";
        var degY = (coorX / halfW) * -15 + "deg";

        thumbnail.style.transform = `perspective(1600px) translate3d(0, 0px, 0) rotateX(${degX}) rotateY(${degY})`;
      } else {
        thumbnail.style.transform = `perspective(1600px) translate3d(0, 0px, 0) rotateX(0deg) rotateY(0deg)`;
      }
    }
  }
};
</script>
<style scoped>
.thumbnails-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 15vh repeat(4, 25vh);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 100%;
  padding-bottom: 150px;
}
.thumbnails-intro {
  grid-area: 1 / 1 / 2 / 5;
}
.thumbnail[data-id="1"] {
  grid-area: 2 / 1 / 4 / 3;
}
.thumbnail[data-id="2"] {
  grid-area: 2 / 3 / 3 / 5;
}
.thumbnail[data-id="3"] {
  grid-area: 3 / 3 / 4 / 5;
}
.thumbnail[data-id="4"] {
  grid-area: 4 / 3 / 6 / 5;
}
.thumbnail[data-id="5"] {
  grid-area: 4 / 1 / 5 / 2;
}
.thumbnail[data-id="6"] {
  grid-area: 4 / 2 / 5 / 3;
}
.thumbnail[data-id="7"] {
  grid-area: 5 / 1 / 6 / 3;
}

.thumbnail {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-color: var(--bg-opacity-light);
  transition: all 0.8s cubic-bezier(0.42, 0, 0, 1);
  transform: perspective(1600px) translate3d(0, 0px, 0) rotateX(0deg)
    rotateY(0deg);
  will-change: transform;
}

.thumbnail-background {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-thumbnail);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.42, 0, 0, 1);
}
.thumbnail-text {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 80%;
  width: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-50%) translateY(-50%);
  transition: all 0.8s cubic-bezier(0.42, 0, 0, 1);
  cursor: default;
}
.thumbnail:hover {
  background-size: 60% 60%;
}
.thumbnail:hover .thumbnail-background {
  opacity: 1;
}
.thumbnail:hover .thumbnail-text {
  opacity: 1;
  visibility: visible;
}
.thumbnail-year,
.to-project-details {
  font-size: 1.3em;
  letter-spacing: 4px;
  font-family: "Gramatika";
  font-weight: 700;
}
.thumbnail-title h3 {
  font-size: 1.5em;
  margin-bottom: -10px;
}
.to-project-details {
  cursor: pointer;
  font-variant-caps: all-small-caps;
}
@media screen and (max-width: 1400px) {
  .thumbnails-grid {
    grid-template-rows: 25vh repeat(4, 30vh);
  }
  .thumbnail-text {
    width: 70%;
  }
}
@media screen and (max-width: 1200px) {
  .thumbnail-description {
    display: none;
  }
}

@media screen and (max-width: 700px) {
  .thumbnails-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 50vh repeat(10, 20vh);
    grid-column-gap: 0;
    grid-row-gap: 20px;
    width: 100%;
    padding-bottom: 50px;
  }
  .thumbnail-intro {
    grid-area: 1 / 1 / 2 / 3;
  }
  .thumbnail[data-id="1"] {
    grid-area: 2 / 1 / 4 / 3;
  }
  .thumbnail[data-id="2"] {
    grid-area: 4 / 1 / 5 / 3;
  }
  .thumbnail[data-id="3"] {
    grid-area: 5 / 1 / 6 / 3;
  }
  .thumbnail[data-id="4"] {
    grid-area: 6 / 1 / 8 / 3;
  }
  .thumbnail[data-id="5"] {
    grid-area: 8 / 1 / 9 / 3;
  }
  .thumbnail[data-id="6"] {
    grid-area: 9 / 1 / 10 / 3;
  }
  .thumbnail[data-id="7"] {
    grid-area: 10 / 1 / 12 / 3;
  }

  .thumbnail-text {
    width: 90%;
    height: 50%;
  }
  .thumbnail-title {
    font-size: 1em;
  }
  .to-project-details {
    font-size: 1em;
    line-height: 1;
  }
  .thumbnail-year {
    display: none;
  }
}
@media screen and (max-height: 600px) and (max-width: 700px) {
  .thumbnails-grid {
    grid-template-rows: 60vh repeat(10, 20vh);
  }
}
</style>
