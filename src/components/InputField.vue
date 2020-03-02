<template>
  <div class="field" v-if="question">
    <div class="input">
      <label :for="question.name">{{ question.label }}</label>
      <input
        v-if="question.fieldType === 'input' && question.type === 'text'"
        :name="question.name"
        type="text"
        @keyup="showNext = true"
        @keyup.enter="next"
        v-model="value"
      />
      <!--       <input
        v-if="question.fieldType === 'input' && question.type === 'email'"
        :name="question.name"
        type="email"
        autocorrect="false"
        autocapitalize="none"
        spellcheck="false"
        @keyup="showNext = true"
        @keyup.enter="next"
        v-model="value"
      /> -->
      <textarea
        v-if="question.fieldType === 'textarea'"
        rows="1"
        :name="question.name"
        @keyup.enter="space"
        v-model="value"
      />
      <a
        class="button-next"
        href="#"
        aria-label="Champ suivant"
        v-if="!isFinalStep"
        @click.prevent="next"
      >
        <img v-if="theme === 'dark'" :src="arrowLight" alt="" />
        <img v-else :src="arrowDark" alt="" />
      </a>
      <a
        class="button-send no-select"
        href="#"
        aria-label="Envoyer un message"
        v-if="isFinalStep"
        @click.prevent="next"
      >
        <img v-if="theme === 'dark'" class="end-icon" :src="sendLight" alt="" />
        <img v-else :src="sendDark" class="end-icon" alt="" />
      </a>
    </div>
    <div class="progress">
      <div class="progress-hide" :style="{ width: progress + '%' }"></div>
    </div>
    <span class="error">
      <template v-if="isEmpty && question.errors.empty">
        Champ requis.
      </template>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    question: Object,
    progress: Number,
    isFinalStep: Boolean,
    theme: String
  },
  data() {
    return {
      value: "",
      arrowDark: require(`@/assets/icons/next.svg`),
      arrowLight: require(`@/assets/icons/next-w.svg`),
      sendDark: require(`@/assets/icons/send.svg`),
      sendLight: require(`@/assets/icons/send-w.svg`),
      showNext: false,
      isEmpty: false,
      isInvalidEmail: false
    };
  },

  methods: {
    next() {
      if (this.question.errors.empty) {
        this.value ? (this.isEmpty = false) : (this.isEmpty = true);
      }
      if (!this.isEmpty) {
        if (this.isFinalStep) {
          document.querySelector(".progress-hide").style.width = 0;
          document.querySelector(".end-icon").classList.add("animate");
        }
        this.send();
      }
    },
    send() {
      const fieldValue = {};
      fieldValue[this.question.name] = this.value;
      this.$emit("stepComplete", fieldValue);
      this.value = "";
    },
    space() {
      const textarea = document.querySelector("textarea");
      const rows = parseInt(textarea.getAttribute("rows"));
      if (rows < 10) {
        textarea.setAttribute("rows", rows + 1);
      }
    }
  }
};
</script>
<style scoped>
.field label {
  font-variant-caps: all-small-caps;
  font-size: 1.2em;
  letter-spacing: 2px;
}
.field input,
.field textarea {
  display: block;
  font-family: "Gramatika";
  font-weight: 300;
  margin: 0.3em 0 0 0;
  padding: 20px 65px 20px 25px;
  width: 100%;
  border: none;
  color: var(--font-color);
  background: var(--bg-opacity-light);
  font-size: 1.2em;
  line-height: 1.2;
  outline: none;
}
.field textarea {
  resize: none;
  transition: all 0.4s ease-in-out;
  -ms-overflow-style: none;
}
.field textarea::-webkit-scrollbar {
  display: none;
}
.animate {
  animation: fly 2s;
}
.input {
  position: relative;
}
.button-next {
  position: absolute;
  padding: 0 20px;
  right: 0;
  bottom: 10px;
}
.button-send {
  position: absolute;
  padding: 0 20px;
  right: 0;
  bottom: 2px;
}
.button-send img {
  width: 40px;
}
.progress {
  position: relative;
  width: 100%;
  height: 4px;
  background-image: var(--gradient);
}
.progress-hide {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 4px;
  background: var(--bg-color);
  border: 1px solid var(--bg-opacity-light);
  transition: width 0.4s ease-in-out;
}
.error {
  font-size: 0.9em;
  margin: 5px;
}

@keyframes fly {
  100% {
    transform: translateX(500px) translateY(-500px) scale(1.05);
  }
}

@media screen and (max-width: 480px) {
  .field input,
  .field textarea {
    padding: 20px 50px 20px 20px;
  }
  .button-next {
    right: -10px;
  }
  .button-next img,
  .button-send img {
    width: 30px;
  }
  .button-send {
    right: -10px;
    bottom: 10px;
  }
}
</style>
