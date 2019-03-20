<template>
  <div>
    <Triangles/>
    <div class="emotionStarter">
      <div class="RotateBackground"></div>
      <div class="textC">
        <h1>Traffy, dein Ort um Rabatte zu erhalten.</h1>
        <h3>Schaue einfach ein Video und erhalte einen Rabatt für diverse Produkte.</h3>
        <div class="btns">
          <router-link tag="button" to="/Rabatte">RABATT ERHALTEN</router-link>
          <router-link tag="button" to="/Partner">RABATT EINREICHEN</router-link>
        </div>
      </div>
      <div class="iphone">
        <div class="iphone_ext">
          <img class="iphone_img" src="@/assets/Iphone.png" alt="Demo vom Flow">
          <img class="demo_flow" src="@/assets/Anim-min.gif">
        </div>
      </div>
    </div>
    <div class="Abschnitt" id="AbschnittFlwo">
      <div class="TextC">
        <h1 class="Concept">Unser Konzept</h1>
        <h2>Einfach, Transparent, Vorteilhaft für alle.</h2>
        <p>Unser Konzept ist sehr einfach. Der User möchte einen Rabatt oder einen Gutschein erhalten und tritt entweder über die Webseite
          oder über Instagram in den Flow ein. Ihm wird nun automatisch ein kurzes Video angezeigt, gefolgt von einer Frage. Alternativ ist auch ein A/B Testing
          oder eine Umfrage möglich. So können wir überprüfen, ob er das Video wirklich geschaut
          hat. Anschliessend erhält er von uns den versprochenen Rabatt zugesendet, den er dann im entsprechenden Laden einlösen kann.</p>
          <router-link tag="button" to="/Partner">PARTNER WERDEN</router-link>
        </div>
        <div class="svgC">
          <img svg-inline id="Flow" src="@/assets/Flow.svg" alt="Flow">
        </div>
      </div>

      <div class="Abschnitt" id="Partners">
        <h1>Unsere Partner</h1>
        <router-link to="/Partner">
          <img id="partnersB" src="@/assets/Partners.png" alt="Unsere Partner in Bilder">
        </router-link>
      </div>
      <Footer/>
    </div>
  </template>

<script>
import Footer from '@/components/Footer.vue'
import Triangles from '@/components/Triangles.vue'

export default {
  name: 'home',
  components: {
    Footer,
    Triangles
  },
  props: {

  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.emotionStarter {
  height: 100vh;
  position: relative;
  .textC {
    padding: 50px;
    position: relative;
  }
 h1 {
   margin-top: 30px;
 }
 h3 {
   max-width: 65vw;
 }
 .iphone {
   max-width: 600px;
   position: absolute;
   right: 3vw;
   width: 550px;
   margin-top: -26vh;
   z-index: 1;
   .iphone_ext {
     position: relative;
     .iphone_img {
       position: relative;
       width: 100%;
       z-index: 1;
     }
     .demo_flow {
      position: absolute;
      width: 55.2%;
      left: 23%;
      top: 14.5%;
      z-index: 0;
    }
   }
 }
 .btns {
   margin-top: 50px;
 }
 button:first-child {
   margin-left: 0px;
 }
}

//Flow
#AbschnittFlwo {
  text-align: right;
  padding-right: 50vw;
  margin-top: 15vh;
  position: relative;
  .svgC {
    position: absolute;
    right: 0;
    top: -400px;
    width: 45vw;
    height: auto;
    margin: 0;
    padding: 0;
    max-width: 800px;
    z-index: -100;
  }
  .TextC {
    right: 0;
    margin-left: calc(50vw - 800px);
    max-width: 800px;
    z-index: 100;
  }
  svg {
    width: 100%;
  }
  h2 {
    margin-bottom: 20px;
  }
  p {
    right: 0px;

    // max-width: 600px;
  }
  button {
    margin-right: 0px;
  }
}

//Partners
#Partners {
  margin-top: 50vh;
  #partnersB {
    margin-left: -300px;
    width: calc(100vw + 300px);
    margin-top: -70px;
    max-width: 1700px;
  }
}

@media screen and (max-width: 1480px) {
  #AbschnittFlwo {
    margin-top: 0vh;
    .svgC {
      top: 260px;
    }
    .TextC {
      width: 45vw;
      margin-left: 5vw;
      margin-top: 250px;
    }
  }
  #Partners {
    margin-top: 600px;
  }
}

@media screen and (max-width: 1250px) {
  .emotionStarter {
    .iphone {
     right: -50px;
     margin-top: -17vh;
    }
  }
 #Partners {
   margin-top: 15vh;
 }
 #AbschnittFlwo {
  margin-top: 30vh;
  .svgC {
    top: 0px;
  }
 }
}

@media screen and (max-width: 900px) {
  .emotionStarter {
    height: unset;
    .iphone {
      margin-top: 0;
      position: relative;
      max-width: unset;
      width: 80vw;
      left: unset;
      right: unset;
      margin-left: 50vw;
      transform: translate(-50%);
    }
  }
  #AbschnittFlwo {
    margin: 0;
    padding: 0;
    .TextC {
      text-align: center;
      width: 80vw;
      margin-left: 10vw;
      max-width: unset;
      min-width: unset;
      h1 {
        line-height: 1.4;
      }
    }
    .svgC {
      max-width: unset;
      min-width: unset;
      position: relative;
      width: 95vw;
      margin: 100px 0px 80px 2.5vw;
      height: auto;
    }
  }
  #Partners {
    margin-top: -100px;
  }
}
// mobile
@media screen and (max-width: 600px) {
  h1{
    font-size: 2.4rem;
  }

  h2{
    font-size: 1.4rem;
  }

  .emotionStarter {
    overflow: hidden;
    .textC {
      padding: 20px;
      margin-bottom: 30px;
      h3, h1 {
        width: 100%;
        max-width: unset;
      }

      h3{
        font-size: 1.4rem;
      }
      h1 {
        line-height: 1.5;
        font-size: 2.4rem;
        margin-bottom: 20px;
      }
    }
    .btns {
      width: auto;

      button {
        display: block;
        margin: 10px auto;
      }
    }
  }
  #Partners {
    overflow: hidden;
    padding: 10px;

    h1 {
      text-align: center;
      font-size: 2.4rem;
    }

    #partnersB{
      margin-top: 0;
      margin-left: -120px;
      width: calc(100vw + 150px);
    }
  }

  #AbschnittFlwo{
    overflow: hidden;
  }

  #Flow{
    transform: scale(1.3);
    margin: 100px 0;
  }
}

@media screen and (min-width: 1480px) {
  #AbschnittFlwo {
    margin-top: 0px;
    .TextC {
      margin-top: 35vh;
    }
    .svgC {
      right: 10vw;
      top: 0vh;
    }
  }
  #Partners {
    margin-top: 600px;
  }
}

@media screen and (min-width: 1921px) {
  .emotionStarter {
    .textC {
      left: 200px;
    }
    .iphone {
      right: 375px;
    }
  }
}
</style>
