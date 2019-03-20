<template>
  <div>
      <div class="wrapper">
        <div class="title">
          Interessiert? Dann los!
        </div>
        <div v-if="contactFormSuccess" class="success">
          Vielen Dank für deine Nachricht!<br />
          Wir werden uns so bald als möglich bei dir melden.
        </div>
        <div v-if="contactFormError" class="error">
          Überprüfe deine Eingaben und versuche es erneut.
        </div>
        <div v-if="contactFormUnkownError" class="error">
          Ein unbekannter Fehler ist aufgetreten. Bitte versuche es erneut.
        </div>
        <form class="form" ref="form">
          <input v-model="form.name" type="text" name="NAME" class="name field-in font" placeholder="Your Name" required/>
          <input v-model="form.email" type="email" name="EMAIL" class="email field-in font" placeholder="Email" required/>
          <textarea v-model="form.msg" name="MSG" class="message field-in font" placeholder="Message" required></textarea>
          <button @click="submit" type="button" value="Subscribe" name="subscribe" class="submit font">Submit</button>
        </form>
        <div class="shadow"></div>
      </div>
  </div>
</template>

<script>
let FROM_ENDPOINTS = [
  'https://hooks.zapier.com/hooks/catch/3488849/0orvlh/',
  'https://hooks.zapier.com/hooks/catch/3488849/0osmbj/'
]

export default {
  name: 'Contact',
  components: {

  },
  props: {

  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        msg: ''
      },
      contactFormSuccess: false,
      contactFormError: false,
      contactFormUnkownError: false
    }
  },
  methods: {
    submit () {
      this.contactFormUnkownError = false
      if (this.$refs.form.checkValidity()) {
        this.contactFormError = false
        let options = {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        }
        Promise.all(FROM_ENDPOINTS.map(e => fetch(e, options))).then(response => {
          this.contactFormSuccess = true
          this.form.name = ''
          this.form.email = ''
          this.form.msg = ''
          setTimeout(() => {
            this.contactFormSuccess = false
          }, 5000)
        }).catch(e => {
          this.contactFormUnkownError = true
        })
      } else {
        this.contactFormError = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.hidden {
  display: none;
}
.title {
  margin: 0 auto;
  width: 50%;
  text-align: center;
  padding-bottom: 10px;
  // font-family: Rajdhani;
  font-size: 32px;
  color: #2E4B62;
}
.success, .error {
  font-weight: 500;
  text-align: center;
  padding-bottom: 10px;
  color: $darkGreen;
}
.error {
  color: $red;
}
.wrapper {
  width: 50%;
  height: 60vh;
  margin: 5% auto 0 auto;
}
.font {
  font-size: 16px;
  font-family: Helvetica, sans-serif;
  color: white;
}
$animLengh: 2s;
.form {
  text-align: center;
  -webkit-animation: bounce $animLengh infinite;
  -moz-animation: bounce $animLengh infinite;
  animation: bounce $animLengh infinite;
}
.shadow{
  box-shadow: 0px 0px 20px 5px #AAA;
  opacity: 0.5;
  border-radius: 100px;
  width: 45%;
  margin: 40px auto 0 auto;
  padding: 0 10px;
  -webkit-animation: shadow $animLengh infinite;
}
.field-in {
  display: block;
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
  border: none;
  width: 50%;
  -webkit-transition: all 0.5s ease 0s;
  -moz-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.name {
  background-color: $pink;
  border-bottom: 5px solid #CB64B2;
}
.name:hover{
  background-color: mix($pink, #000000, 80%);;
  border-bottom: 5px solid #B2175F;
}
.name:focus, .email:focus, .message:focus{
  outline: none;
  padding:15px;
}
.email {
  background-color: $violett;
  border-bottom: 5px solid #502789;
}
.email:hover {
  background-color: mix($violett, #000000, 80%);
  border-bottom: 5px solid #18108E;
}
.message {
  background-color: #0F9BE6;
  border-bottom: 5px solid #1185C3;
  overflow: hidden;
  height: 50px;
}
.message:hover, .message:focus {
  background-color: #2DD7BB;
  border-bottom: 5px solid #2BB09A;
  height: 150px;
}
.submit {
  border-radius:5px;
  padding:10px;
  background-color: #EE78D1;
  border: none;
  border-bottom: 5px solid #CB64B2;
  -webkit-transition: all 0.5s ease 0s;
  -moz-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.submit:hover {
  -webkit-transform: translate(0, 4px);
  border-bottom: 2px solid #CB64B2;
  box-shadow: inset 0px 0px 10px 10px #CF5DB2;
  cursor: pointer;
}
::-webkit-input-placeholder {
   color: white;
}

:-moz-placeholder {
   color: white;
}

::-moz-placeholder {
   color: white;
}

:-ms-input-placeholder {
   color: white;
}

@-webkit-keyframes bounce{
  0%{

  }
  50%{
    -webkit-transform: translate(0, 8px);
  }
}
@-moz-keyframes bounce{
  0%{

  }
  50%{
    -moz-transform: translate(0, 8px);
  }
}
@keyframes bounce{
  0%{

  }
  50%{
    transform: translate(0, 8px);
  }
}
@-webkit-keyframes shadow{
  0%{

  }
  50%{
    opacity: 0.8;
    width: 50%;
  }
}
@-moz-keyframes shadow{
  0%{

  }
  50%{
    opacity: 0.8;
    width: 50%;
  }
}
@keyframes shadow{
  0%{

  }
  50%{
    opacity: 0.8;
    width: 50%;
  }
}

@media screen and (max-width: 1100px) {
  .field-in, .title {
    width: 75%;
  }
}
@media screen and (max-width: 750px) {
  .field-in, .title {
    width: 100%;
  }
}
@media screen and (max-width: 600px) {
  .wrapper {
    width: 90%;
    height: 400px;
  }

  .title{
    width: 100%;
  }
}

</style>
