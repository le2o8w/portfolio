<template>
  <section>
    <article class="container">
      <div class="contact-details">
        <div class="title">
          <h2>
            Vous avez envie de travailler avec moi ?
          </h2>
          <p>Envoyez moi un e-mail et nous pourrons en parler ensemble :)</p>
        </div>

        <transition name="fade" mode="out-in">
          <InputField
            :question="questions[currentStep]"
            :progress="progress"
            :theme="theme"
            :isFinalStep="isFinalStep"
            @stepComplete="nextStep"
          />
        </transition>
        <Astronaut :showMessage="showMessage" />
      </div>
      <div>
        <h3>Vous voulez en savoir plus sur moi ?</h3>
        <div class="about-details">
          <img v-if="theme === 'dark'" :src="likeLight" alt="" />
          <img v-else :src="likeDark" alt="" />
          <p>
            J'aime mes chats, voyager, la
            <span class="underlined">Thaïlande</span> et le Laos, le thé à la
            vanille et le <span class="underlined">ชาเย็น</span>, regarder des
            séries de science-fiction ou fantastiques comme
            <span class="underlined">The Leftovers</span>, Legion, Black Mirror,
            Utopia, Mr. Robot, Misfits, Rick and Morty, écouter
            <span class="underlined">Bonobo</span>, Superpoze, Thylacine, Ben
            Khan, les <span class="underlined">Arctic Monkeys</span>.
          </p>
        </div>
        <div class="about-details">
          <img v-if="theme === 'dark'" :src="dislikeLight" alt="" />
          <img v-else :src="dislikeDark" alt="" />
          <p>
            Je ne suis pas vraiment fan des températures
            <span class="underlined">en dessous de 15°C</span>, des bananes, des
            scolopendres.
          </p>
        </div>
      </div>
    </article>
  </section>
</template>
<script>
import InputField from "@/components/InputField";
import Astronaut from "@/components/Astronaut";

export default {
  components: {
    InputField,
    Astronaut
  },
  props: {
    theme: String
  },
  data() {
    return {
      currentStep: 0,
      isFinalStep: false,
      showMessage: false,
      questions: [
        {
          step: 0,
          name: "name",
          label: "Nom & prénom",
          type: "text",
          errors: {
            empty: true,
            invalidEmail: false
          },
          fieldType: "input"
        },
        {
          step: 1,
          name: "subject",
          label: "Sujet",
          type: "text",
          errors: {
            empty: true,
            invalidEmail: false
          },
          fieldType: "input"
        },
        {
          step: 2,
          name: "body",
          label: "Message",
          errors: {
            empty: true,
            invalidEmail: false
          },
          fieldType: "textarea"
        }
      ],
      progress: 100,
      result: [],
      likeDark: require(`@/assets/icons/like.svg`),
      likeLight: require(`@/assets/icons/like-w.svg`),
      dislikeDark: require(`@/assets/icons/alien.svg`),
      dislikeLight: require(`@/assets/icons/alien-w.svg`)
    };
  },

  methods: {
    nextStep(result) {
      this.currentStep += 1;
      this.progress = this.progress - 100 / this.questions.length;
      this.result.push(result);
      if (this.currentStep === this.questions.length - 1) {
        this.isFinalStep = true;
      }
      if (this.currentStep === this.questions.length) {
        this.showMessage = true;
        this.result = Object.assign({}, ...this.result);
        this.mailBody();
        this.initForm();
        setTimeout(() => {
          this.showMessage = false;
        }, 10000);
      }
    },
    mailBody() {
      const subject = encodeURIComponent(
        `${this.result.name} - ${this.result.subject}`
      );
      const body = encodeURIComponent(
        `Bonjour Léonore, \r\n\r\nJe viens de visiter ton portfolio... \r\n\r\n${this.result.body} \r\n\r\nÀ bientôt ! \r\n\r\n${this.result.name}`
      );
      window.location.href = `mailto:lrousville@gmail.com?subject=${subject}&body=${body}`;
    },
    initForm() {
      this.progress = 100;
      this.currentStep = 0;
      this.isFinalStep = false;
      this.result = [];
    }
  }
};
</script>
<style scoped>
.contact-details {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
}
.title {
  margin-bottom: 50px;
}

.about-details {
  display: flex;
  align-items: center;
}
.about-details img {
  max-width: 40px;
  margin-right: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}

@media screen and (max-width: 480px) {
  .about-details {
    flex-direction: column;
  }
}
</style>
