<template>
  <div class="triangles">
    <div v-for="triangle in triangles"
      :key="triangles.indexOf(triangle)"
      class="triangle"
      :style="{
        'z-index': triangle.Zindex,
        width: triangle.Size,
        height: triangle.Size,
        'margin-left': triangle.PositionX,
        'margin-top': triangle.PositionY,
        }"
    >
    <img v-if="triangle.Color == 'Pink' || triangle.Color == 'pink'" src="@/assets/Pink.svg">
    <img v-if="triangle.Color == 'Lila' || triangle.Color == 'lila'" src="@/assets/Lila.svg">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Triangles',
  props: {
    triangles: {
      type: Array,
      default: () => [
        {
          PositionX: '92vw',
          PositionY: '8vh',
          Color: 'Lila',
          Size: '100px'
        },
        {
          PositionX: '87vw',
          PositionY: '-3vh',
          Color: 'Lila',
          Size: '70px'
        },
        {
          PositionX: '5vh',
          PositionY: '70vh',
          Color: 'Pink',
          Size: '100px'
        },
        {
          PositionX: '8vw',
          PositionY: '85vh',
          Color: 'Pink',
          Size: '80px'
        },
        {
          PositionX: '-5vw',
          PositionY: '82vh',
          Color: 'Pink',
          Size: '120px'
        },
        {
          PositionX: '17vw',
          PositionY: '80vh',
          Color: 'Pink',
          Size: '40px'
        },
        {
          PositionX: '90vw',
          PositionY: '240vh',
          Color: 'Pink',
          Size: '110px'
        },
        {
          PositionX: '90vw',
          PositionY: '230vh',
          Color: 'Pink',
          Size: '60px'
        },
        {
          PositionX: '95vw',
          PositionY: '220vh',
          Color: 'Pink',
          Size: '90px'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.triangles {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  z-index: -1;
}

.triangles > div > img {
  transform: scale(1.7);
  height: 100%;
  width: 100%;
}

.triangle {
  background-color: none;
  position: absolute;
  transition-timing-function: ease-in-out;
}
@media screen and (max-width: 850px) {
  img {
    transform: scale(0.9) !important;
  }
}

//---------------------------------------------------
//Start of Animation
$AnimationName: hover;

@for $i from 0 through 11 {
  $tempAnimationName: $AnimationName+random(10);
  .triangle:nth-child(10n + #{$i}) {
    animation-name: $tempAnimationName;
    animation-duration: (random(25)+ 10) + s; //min 10 sec max 30
    animation-iteration-count: infinite;
    animation-delay: (random(20)-20) + s;
  }
  //!Achtung plus und Minus -> Max * 2 - max
  $tempx: (random(75)-37.5);
  $tempy: (random(100)-25);
  $tempr: (random(200)-100);
  $tempRP: (random(25) + 37.5); //Prozentsatz wo die maximale Drehung Erreicht wird von 25-75

  @keyframes #{$tempAnimationName} {
    0% {
      transform: rotate(0deg) translate(0px, 0px);
    }
    50% {
      transform: rotate(#{$tempr}deg) translate(#{$tempx}px, #{$tempy}px);
    }
    100% {
      transform: rotate(0deg) translate(0px, 0px);
    }
  }
}

</style>
