<template>
  <section>
    <article class="container">
      <h2>Let's get in touch</h2>
      <div class="contact-details">
        <div>
          <h3>Blabla</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
            laborum nisi eligendi asperiores blanditiis beatae cupiditate sed
            provident molestiae officiis.
          </p>
        </div>
        <div>
          <h3>Blibli</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            iure esse amet, error reiciendis laborum.
          </p>
        </div>
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
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.contact-details > div {
  width: 45%;
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
  .contact-details {
    flex-direction: column;
    margin-bottom: 20px;
  }
  .contact-details > div {
    width: 100%;
  }
}
</style>
