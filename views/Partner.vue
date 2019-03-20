<template>
  <div>
    <div class='emotionStarter'>
      <div class='RotateBackground'>
        <img src='@/assets/Dreick-background.svg'>
      </div>
      <div class='textC'>
        <h1>Erreiche Menschen, schaffe Erlebnisse.</h1>
        <h3>Traffy wächst stetig. Nutze unsere Plattform um Neukunden zu erreichen oder Feedback von Ihnen zu erhalten.</h3>
      </div>
    </div>
    <div class='Abschnitt' id='Hole'>
      <img id='Bhole' src='@/assets/blackHole.png' alt='Hole'>
      <div class='TextC'>
        <h1>Was bringt es mir, einen Rabatt aufzuschalten?</h1>
        <p>Täglich benutzen etliche Personen unsere Plattform und es werden von Tag zu Tag mehr! Diese Personen sind unteranderem Menschen, welche Sie als Geschäft noch nicht wahrgenommen haben. Egal in welchem Bereich Sie tätig sind, versuchen Sie es mit Traffy! Bieten Sie einen Rabatt für potenzielle Käufer an, werden Sie ein Teil unserer Plattform und erreichen Sie so neue Kunden. Profitieren Sie von unserer Werbeplattform!</p>
      </div>
    </div>
    <div class='Abschnitt' id='Dashboard'>
      <div class='TextC'>
        <h1>Rabatte: Besser als jede Werbung.</h1>
        <p>Diverse Studien haben bewiesen, dass Rabatte einer der besten Werbeformen ist. Doch wir bieten mehr als nur simple Rabatt Verteilung. Dank unserer standortbezogenen Verteilung und den umfassenden Analyse- und Verwaltungstools können Sie nicht nur selbst sehen was, wie am meisten Erfolg hat, sondern auch in Echtzeit Anpassungen vornehmen.</p>
      </div>
      <img id='DashboardPng' src='@/assets/DashboardPresentation.png' alt='Hole'>
    </div>
    <div class='Abschnitt' id='Flow'>
      <div class='FlowConcept'>
        <div class='Arguement'>
          <div class='flowarguement s1'>AUFMERKSAMKEIT</div>
          <div
            class='Text'
          >Unserer breiten Masse an Nutzern wird Ihr Rabatt angezeigt. Dies funktioniert wie Werbung auf einem Plakat am Bahnhof. Damit erreichen Sie alle möglichen Zielgruppen. Diese werden in einem nächsten Schritt selektiert.</div>
        </div>
        <div class='Arguement'>
          <div class='flowarguement s2'>SELEKTION</div>
          <div
            class='Text'
          >Die interessierten Nutzer werden sich Ihren Rabatt genauer ansehen. Dabei entsteht eine Selektion. So werden schliesslich nur die stark interessierten Kunden auf ihren Rabatt zugreifen, womit Sie Ihre Zielgruppe sehr genau verfeinert haben. Somit haben Sie durch uns die Möglichkeit erhalten, potenzielle Kunden zu identifizieren.</div>
        </div>
        <div class='Arguement'>
          <div class='flowarguement s3'>INTERAKTION</div>
          <div class='Text'>
            Damit die Kunden den erhaltenen Rabatt nun einlösen können, müssen diese zwangsweise Ihren Laden besuchen. Dabei entsteht eine wertvolle Interaktion im realen Leben.
            Nun da der Kunde in ihrem Laden ist, wird er sich umsehen und mit ziemlicher Sicherheit das vergünstigte Produkt kaufen. Durch die ortsbezogene Rabattanzeige handelt es sich hier meistens um einen sogenannten Spontankauf. Diese sind meist Personen die nicht regelmässig bei Ihnen einkaufen. Im Optimalfall generieren sie also einen Neukunden, der nicht nur den Rabatt einlöst sondern auch etwas anders konsumiert.
          </div>
        </div>
        <div class='Arguement'>
          <div class='flowarguement s4'>ERLEBNIS</div>
          <div
            class='Text'
          >Beim Einkaufen mit einem Rabatt wird der Kunde ein positives Gefühl entwickeln. Er hat schliesslich gerade etwas günstiger oder sogar gratis erhalten. Dabei verbindet er ihren Laden mit einem positiven Erlebnis, was wiederum zu einem erneuten Einkauf führen kann.</div>
        </div>
      </div>
    </div>
    <div class='Abschnitt' id='more'>
      <div class='moreComingSonn'>
        <span class='t'>More Coming soon.
          <br>
        </span>
        <span
          class='Entwicklung'
        >Im Moment sind wir noch in Entwicklung. Viele Ideen wie Umfragen, Quiz usw. sind noch in der Konzeptphase.</span>
      </div>
    </div>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Partner',
  components: {
    Footer,
    Contact
  }
}
</script>

<style scoped lang='scss'>
.emotionStarter {
  height: 100vh;
  position: relative;
  .RotateBackground {
    background-color: #313334;
    overflow: hidden;
    img {
      transform: rotate(14deg);
      right: 0;
      position: absolute;
      top: 10vw;
      right: 20vw;
    }
  }
  .textC {
    padding: 50px;
    position: relative;
  }
  h1 {
    margin-top: 30px;
    color: $pink !important;
  }
  h3 {
    max-width: 65vw;
    color: $pink !important;
  }
}

#Hole {
  max-width: 1920px;
  @media (min-width: 1920px) {
    transform: translate(-50%);
    margin-left: 50%;
  }
  .TextC {
    display: inline-block;
    width: 50%;
    vertical-align: top;
    padding-top: 50px;
    z-index: 10;
    @media screen and (max-width: 900px) {
      & {
        display: block;
        width: 100%;
        margin-left: 0%;
        padding: 5%;
      }
    }
  }
  img {
    display: inline-block;
    width: 30%;
    margin-left: 10%;
    margin-right: 10%;
    animation: rotate 20s infinite linear;
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @media screen and (max-width: 900px) {
      & {
        z-index: -1;
        position: relative;
        display: block;
        width: 60%;
        margin-left: 20%;
      }
    }
  }
}

#Flow {
  width: 100%;
  background-color: #e9f0f7;
  border-radius: 5px;
  height: auto;
  margin-top: 5vh;
  @media screen and (max-width: 900px) {
    & {
      width: 100%;
    }
  }
  * {
    transition: 0.5s !important;
  }
  .flowarguement.s1,
  .flowarguement.s1::after {
    background: #e36ecc;
  }
  .flowarguement.s2,
  .flowarguement.s2::after {
    background: #c760e1;
  }
  .flowarguement.s3,
  .flowarguement.s3::after {
    background: #af54f3;
  }
  .flowarguement.s4,
  .flowarguement.s4::after {
    background: #a04cff;
  }
  .flowarguement.s1::before {
    display: none;
  }
  .flowarguement.s4::after {
    display: none;
  }
  .flowarguement {
    letter-spacing: normal;
    text-transform: uppercase;
    color: #fff;
    font-weight: 500;
    text-align: center;
    font-size: 25px;
    vertical-align: super;
    line-height: 3.6;
    height: 90px;
    border-radius: 5px;
    position: relative;
    box-shadow: 0px 10px 15px -4px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 1200px) {
      & {
        display: inline-block;
        width: 30%;
        vertical-align: top;
        height: 100%;
        font-size: 20px;
      }
    }
  }
  .flowarguement::after {
    content: '';
    position: absolute;
    z-index: 11;
    // margin-left: 6%;
    right: -8px;
    margin-top: 26px;
    transform: rotate(45deg);
    width: 40px;
    border-radius: 2px;
    height: 40px;
    @media screen and (max-width: 1200px) {
      & {
        bottom: 0;
        margin-bottom: -20px;
        transform: rotate(45deg);
        width: 40px;
        border-radius: 2px;
        height: 40px;
        left: 0;
        margin-left: calc(50% - 20px);
      }
    }
  }
  .flowarguement::before {
    content: '';
    position: absolute;
    left: 0;
    margin-top: 30px;
    width: 15px;
    height: 32px;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSAzMiI+PHBhdGggZD0iTTAgMGwxNC4yOSAxNC4yOGMuOTUuOTUuOTUgMi40OSAwIDMuNDNMMCAzMlYweiIgZmlsbD0iI2U2ZWJmMSIvPjwvc3ZnPg==) !important;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSAzMiI+PHBhdGggZD0iTTAgMGwxNC4yOSAxNC4yOGMuOTUuOTUuOTUgMi40OSAwIDMuNDNMMCAzMlYweiIgZmlsbD0iI2U2ZWJmMSIvPjwvc3ZnPg==) !important;
    @media screen and (max-width: 1200px) {
      & {
        top: 0;
        margin-top: -15px;
        width: 22px;
        height: 48px;
        transform: rotate(90deg);
        border-radius: 2px;
        left: 0;
        margin-left: calc(50% - 11px);
      }
    }
  }
  .Arguement {
    vertical-align: top;
    display: inline-block;
    width: 25%;
    padding: 7px;
    box-sizing: border-box;
    .Text {
      background-color: #fff;
      margin-top: 15px;
      border-radius: 5px;
      padding: 20px;
      font-size: 18px;
      line-height: 1.8;
      @media screen and (max-width: 1200px) {
        & {
          display: inline-block;
          width: 65%;
          margin-left: 5%;
          vertical-align: top;
          margin-top: 0px;
        }
      }
    }
    @media screen and (max-width: 1200px) {
      & {
        display: block;
        width: 90%;
        margin-left: 5%;
      }
    }
    @media screen and (max-width: 900px) {
      & {
        display: block;
        width: 100%;
        margin-left: 0%;
      }
    }
  }
}

#more {
  .moreComingSonn {
    transform: translate(-50%);
    margin-left: 50%;
    width: 400px;
    height: 50px;
    box-sizing: border-box;
    color: rgb(93, 93, 93);
    text-align: center;
    margin-top: 20vh;
    margin-bottom: 20vh;
  }

  .t {
    display: block;
    box-sizing: border-box;
    border-radius: 5px;
    border: 4px solid $pink;
    text-transform: uppercase;
    line-height: 3;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
  }
  .Entwicklung {
    text-transform: none;
    font-size: 14px;
    line-height: 1;
  }
}

#Dashboard {
  max-width: 1920px;
  .TextC {
    display: inline-block;
    width: 50%;
    vertical-align: top;
    padding-top: 100px;
    @media screen and (max-width: 900px) {
      & {
        display: block;
        width: 100%;
        margin-left: 0%;
        padding: 5%;
      }
    }
  }
  img {
    display: inline-block;
    width: 30%;
    transform: translateY(20%) scale(1.5);
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 80px;
    @media screen and (max-width: 900px) {
      & {
        z-index: -1;
        position: relative;
        display: block;
        width: 60%;
        margin-bottom: 200px;
        margin-left: 20%;
      }
    }
  }
}
@media (min-width: 1920px) {
  #Dashboard {
    transform: translate(-50%);
    margin-left: 50%;
  }
  #Dashboard > img {
    transform: translate(0%) translateY(0%) scale(1.5);
    margin-left: 20%;
    margin-right: 0px;
  }
}

@media screen and (max-width: 1200px) {
  #Flow{
    padding: 5%;
    padding-top: 50px;

    .flowarguement {
      width: 100%;
      display: block;

      &::before{
        display: none;
      }

      &.s4::after {
        display: block;
      }
    }

    .Arguement .Text{
      width: 90%;
      margin-top: 20px;
    }
  }
}

@media screen and (max-width: 1800px) {
  .emotionStarter .RotateBackground img {
    opacity: 0.5;
  }
}

// Mobile
@media screen and (max-width: 700px) {
  h1 {
    font-size: 2.4rem;
    line-height: 1.3em;
    margin-bottom: 10px;
  }
  .emotionStarter {
    overflow-x: hidden;
    height: 80vh;

    .textC {
      padding: 20px;
    }

    h1 {
      font-size: 2.4rem;
      line-height: 1.3em;
      margin-bottom: 30px;
      margin-top: 0;
    }
    h3 {
      font-size: 1.4rem;
      max-width: 100%;
    }
  }

  .Abschnitt {
    padding: 20px;
  }

  #Hole {
    .TextC {
      padding: 0;
    }
  }

  #Dashboard {
    .TextC {
      padding: 0;
    }

    img{
      margin-bottom: 60px;
    }
  }
  #more {
    .moreComingSonn {
      transform: translate(0);
      margin-left: 0;
      width: 90%;
      margin: 30px auto 100px auto;
    }

    .Entwicklung {
      position: relative;
    }
  }
}
</style>
