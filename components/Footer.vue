<template>
  <footer>
    <div class="conntent">
      <div class="Adress">
        <h1>Kontakt</h1>
        <span><a href="mailto:info@traffy.ch">info@traffy.ch</a></span>
        <span>Traffy A3.R09</span>
        <span>Ey 10</span>
        <span>3063  Ittigen</span>
        <span>079 334 75 01</span>
      </div>
      <div class="Newsletter">
        <h1>Newsletter abonnieren um Rabatte zu erhalten</h1>
        <p v-if="formSuccess" class="success">Yayy. Vielen Dank für die Anmeldung bei unserem Newsletter!</p>
        <p v-if="formError" class="error">Überprüfe deine Eingabe und versuche es erneut.</p>
        <p v-if="formUnkownError" class="error">Ein unbekannter Fehler ist aufgetreten. Bitte versuche es erneut.</p>
        <input ref="emailInput" v-model="email" type="email" name="mail" placeholder="Deine E-Mail Adresse">
        <input @click="submit" type="button" value="Anmelden">
      </div>
      <div class="Links">
        <h1>Links</h1>
        <span><a href="/Rabatte">Rabatte</a></span>
        <span><a href="/Partner">Partner</a></span>
        <span><a href="/">Home</a></span>
        <span><a href="/Impressum">Impressum</a></span>
        <a class="linkC" href="https://www.instagram.com/traffyapp/">
          <img class="Instagam" src="@/assets/instagram-logo.svg" alt="Instagram">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
let FROM_ENDPOINTS = [
  'https://hooks.zapier.com/hooks/catch/3488849/02d0a7/'
]

export default {
  name: 'Footer',
  components: {

  },
  props: {

  },
  data () {
    return {
      email: '',
      formSuccess: false,
      formError: false,
      formUnkownError: false
    }
  },
  methods: {
    submit () {
      this.formUnkownError = false
      if (this.email && this.$refs.emailInput.checkValidity()) {
        this.formError = false
        let options = {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: this.email })
        }
        Promise.all(FROM_ENDPOINTS.map(e => fetch(e, options))).then(response => {
          this.formSuccess = true
          this.email = ''
          setTimeout(() => {
            this.formSuccess = false
          }, 5000)
        }).catch(e => {
          this.formUnkownError = true
        })
      } else {
        this.formError = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
footer {
  width: 100%;
  border-top: 2px $pink dashed;
  height: 25vh;
  position: relative;
  .conntent {
    width: 50%;
    margin-top: 60px;
    max-width: 1250px;
    min-width: 900px;
    margin-left: 50%;
    transform: translateX(-50%);
    height: 100%;
    * {
      display: inline-block;
      box-sizing: border-box;
    }
    * > * {
      display: block;
    }
  }
  h1 {
    color: $fontColorimportant;
    font-size: 20px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 900px) {
    height: auto;

    .conntent {
      width: 100%;
      height: 100%;
      max-width: unset;
      min-width: unset;
      margin: 0px;
      padding: 0px;
      transform: translate(0%);
    }
    .Adress, .Links, .Newsletter {
      width: 100%;
      padding: 5%;
      left: 0px;
      right: unset;
      bottom: unset;
      top: 0px;
      text-align: left;
      margin: 0px;
      margin-bottom: 20px;
      display: block;
    }
    .Newsletter input {
      width: 70% !important;
      right: unset;
      left: 0px;
      position: relative !important;
      margin-bottom: 20px;
      display: block;
      float: left;
    }
    .Newsletter > input[type="button"] {
      width: 20% !important;
      float: right;
    }

    .Links h1 {
      text-align: left;
    }
    .Links > span {
      display: inline-block;
      padding-right: 9px;
    }
    .Links > a {
      margin-top: 10px;
      img {
        left: 0;
      }
    }
  }

  @media screen and (max-width: 460px) {
    .Newsletter > input[type="button"] {
      width: 28% !important;
      float: right;
    }
  }
}
.Adress, .Links, .Newsletter {
  height: 100%;
  color: $fontColorUnimportant;
  vertical-align: top;
  position: relative;
}

.Adress, .Links {
  width: 25%;
}
.Adress {
  a:hover {
    color: $pink;
  }
}
.Links {
  * {
    box-sizing: border-box;
  }
  & > * {
    right: 0;
    text-align: right;
  }
  .linkC {
    position: relative;
    height: 40px;
  }
  .Instagam {
    right: 0;
    position: absolute;
    height: 100%;
    width: auto;
    margin-bottom: 20px;
  }
  span {
    margin-bottom: 10px;
    line-height: 1;
    position: relative;
    transition: 0.2s;
    &:hover {
      color: $pink;
      transition: 0.2s;
    }
  }
}
.Newsletter {
  width: 50%;
  input {
    display: inline-block;
    height: 40px;
    box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 2px solid $pink;
    background: none;
    background-color: none;
    transition: 0.2s;
    &[type="button"] {
      right: 0;
      position: absolute;
    }
    &:not([type="button"]) {
      width: 70%;
    }
    &:hover {
      color: $pink;
      transition: 0.2s;
    }
  }
  p {
    margin-top: 10px;
    font-size: 1rem;

    &.success {
      color: $green;
    }
    &.error {
      color: $red;
    }
  }
}

</style>
