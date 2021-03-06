<template>
  <article class="container">
    <div class="details-grid">
      <img
        class="details-close no-select"
        @click="closeView"
        :src="close"
        alt=""
      />
      <div
        class="details-image"
        :class="{ 'details-image pop': animatedImage }"
        @animationend="animatedImage = false"
        :style="{ backgroundImage: `url(${project.image})` }"
      />
      <h2
        class="details-title"
        :class="{ 'details-title slide': animatedText }"
        @animationend="animatedText = false"
        v-html="project.title"
      ></h2>
      <img
        class="details-previous no-select"
        @click="paginate(false)"
        :src="previous"
        alt=""
      />
      <img
        class="details-next no-select"
        @click="paginate(true)"
        :src="next"
        alt=""
      />
      <div
        class="details-description"
        :class="{ 'details-description slide': animatedText }"
        @animationend="animatedText = false"
      >
        <h3 class="details-summary">{{ project.summary }}</h3>
        <div class="details-more">{{ project.more }}</div>
        <div class="details-technologies">
          <span>Technologies : </span>
          {{ project.technologies }}
        </div>
      </div>
      <div class="details-link">
        <ButtonCustom
          v-if="link"
          :text="'Voir le site'"
          :href="project.link"
          @action="visitUrl"
        />
        <span v-else>{{ project.link }}</span>
      </div>
    </div>
  </article>
</template>
<script>
import ButtonCustom from "@/components/ButtonCustom";

export default {
  components: {
    ButtonCustom
  },
  props: {
    theme: String,
    project: Object
  },
  data() {
    return {
      animatedText: true,
      animatedImage: true,
      viewWidth: window.innerWidth
    };
  },
  computed: {
    previous() {
      return this.theme === "dark"
        ? require(`@/assets/icons/previous-w.svg`)
        : require(`@/assets/icons/previous.svg`);
    },
    next() {
      return this.theme === "dark"
        ? require(`@/assets/icons/next-w.svg`)
        : require(`@/assets/icons/next.svg`);
    },
    close() {
      return this.theme === "dark"
        ? require(`@/assets/icons/close-w.svg`)
        : require(`@/assets/icons/close.svg`);
    },
    link() {
      return this.project.link.match(/^http/i) !== null ? true : false;
    }
  },
  methods: {
    visitUrl() {
      window.open(this.project.link, "_blank");
    },
    closeView() {
      this.$emit("close");
    },
    paginate(next) {
      this.$emit("paginate", { id: this.project.id, next: next });
      this.animatedImage = true;
      this.animatedText = true;
    }
  }
};
</script>
<style scoped>
.details-grid {
  display: grid;
  grid-template-columns: 15% repeat(2, 35%) 15%;
  grid-template-rows: repeat(4, 16%) 25% 11%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
  min-height: 90vh;
}
.details-title {
  grid-area: 2 / 1 / 3 / 2;
  width: min-content;
  min-width: 250px;
  height: min-content;
  margin: 80px 0 0 0;
  align-self: center;
  padding: 2.5rem;
  background: var(--bg-opacity-light);
  font-size: 2em;
  color: var(--font-color);
  transition: 0.3s ease-in-out;
  z-index: 10;
}
.details-image {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  grid-area: 1 / 2 / 5 / 5;
  justify-self: flex-end;
  transition: 0.3s cubic-bezier(0.77, 0, 0.18, 1);
}
.details-description {
  grid-area: 5 / 1 / 6 / 5;
  padding: 2.5rem 0 0 2.5rem;
  align-self: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  transition: 0.3s ease-in-out;
}
.details-link {
  grid-area: 6 / 1 / 7 / 3;
  padding-left: 2.5em;
  align-self: flex-end;
}
.details-summary {
  margin: 0px;
}
.details-technologies span {
  font-weight: bold;
}
.details-close {
  grid-area: 1 / 1 / 2 / 2;
  z-index: 10;
  cursor: pointer;
}
.details-previous {
  grid-area: 4 / 1 / 5 / 2;
  align-self: flex-end;
  width: 80px;
  z-index: 10;
  cursor: pointer;
}
.details-next {
  grid-area: 6 / 4 / 7 / 5;
  align-self: flex-end;
  justify-self: flex-end;
  width: 80px;
  z-index: 10;
  cursor: pointer;
}

@media screen and (max-width: 700px) {
  .details-grid {
    grid-template-columns: 15% 70% 15%;
    grid-template-rows: 8% 15% 15% 23% 23% 10%;
    min-height: 95vh;
  }
  .details-image {
    grid-area: 2 / 1 / 4 / 4;
    background-position: top center;
  }
  .details-previous,
  .details-next {
    width: 40px;
  }
  .details-previous {
    grid-area: 3 / 1 / 4 / 2;
    align-self: flex-end;
  }
  .details-next {
    grid-area: 6 / 3 / 7 / 4;
    align-self: flex-end;
  }
  .details-close {
    grid-area: 1 / 3 / 2 / 4;
    align-self: center;
    justify-self: flex-end;
    width: 20px;
  }
  .details-title {
    margin: 0 -2px 0 0;
    align-self: flex-start;
    justify-self: flex-end;
    padding: 0.8em;
    font-size: 1.4em;
    min-width: 75%;
    grid-area: 3 / 2 / 4 / 4;
    line-height: 1.4;
    text-align: right;
  }
  .details-link {
    grid-area: 6 / 1 / 7 / 3;
    padding-left: 10px;
  }
  .details-link span {
    font-size: 0.8em;
  }
  .details-description {
    grid-area: 4 / 1 / 6 / 4;
    justify-content: space-around;
    padding: 0.5em;
  }
  .details-summary {
    font-size: 1em;
  }
}
</style>
