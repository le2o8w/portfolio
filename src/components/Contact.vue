<template>
  <section>
    <article class="container">
      <h2>Vous avez envie de travailler avec moi ?</h2>
      <div class="contact-details">
        <p>
          Merci pour votre intérêt ! J'étudierai votre proposition avec le plus
          grand sérieux. Envoyez moi un e-mail et nous pourrons échanger à ce
          sujet :)
        </p>
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
        <h3>Si vous avez encore des doutes...</h3>
        <p>
          Vous avez besoin d'en savoir plus sur moi ? <br />
          Ce qui me rend heureuse : mes chats, voyager, la Thaïlande et le Laos,
          le thé à la vanille et le ชาเย็น, regarder des séries de
          science-fiction / des dystopies (ne me lancez pas sur The Leftovers,
          Legion, Black Mirror, Utopia, Mr. Robot, Misfits, Rick and Morty...),
          écouter Bonobo, Superpoze, Thylacine, Ben Khan, les Arctic Monkeys.
          <br />
          Ce que je déteste: les températures en dessous de 20°C agrémentées de
          pluie, les bananes, les scolopendres, les pieds.
        </p>
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
          name: "email",
          label: "Email",
          type: "email",
          errors: {
            empty: true,
            invalidEmail: true
          },
          fieldType: "input"
        },
        {
          step: 2,
          name: "message",
          label: "Message",
          errors: {
            empty: true,
            invalidEmail: false
          },
          fieldType: "textarea"
        }
      ],
      progress: 100,
      result: []
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
        //TODO ajax sendbymail
        this.initForm();
        setTimeout(() => {
          this.showMessage = false;
        }, 5000);
      }
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
}
</style>
