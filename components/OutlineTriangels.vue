<template>
  <div class="TriangelsContainer">
    <svg v-for="x in n" class="svgS" :class="'svg' + x" viewBox="0 0 83 83" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M50.4106982,15.0894879 L75.6655596,58.5068772 C78.5284002,63.4285858 76.859358,69.7392097 71.9376495,72.6020504 C70.3635598,73.5176608 68.5750344,74 66.754018,74 L16.2442951,74 C10.5505204,74 5.9348039,69.3842836 5.9348039,63.6905088 C5.9348039,61.8694924 6.41714307,60.0809669 7.33275354,58.5068772 L32.5876149,15.0894879 C35.4504556,10.1677794 41.7610796,8.49873721 46.6827881,11.3615779 C48.2275219,12.2601127 49.5121633,13.5447541 50.4106982,15.0894879 Z" id="Triangle-2-Copy-294" stroke="#A04CFF" stroke-width="4.89599937" fill-rule="nonzero" transform="translate(41.500000, 42.000000) rotate(-360.000000) translate(-41.500000, -42.000000) "></path>
      </g>
    </svg>
  </div>
</template>

<script>

export default {
  name: 'OutlineTriangels',
  props: {
    n: Number
  }
}
</script>

<style scoped lang="scss">
.TriangelsContainer {
  position: absolute;
  display: inline-block;
  box-sizing: border-box;
  padding-left: 60%;
  right: 0px;
}
.Line {
  display: block;
}
svg {
  display: inline-block;
  margin: 15px;
  width: 25px;
}

//---------------------------------------------------
//Start of Animation
$AnimationName: tryangle;

@for $i from 0 through 25 {
  $tempAnimationName: $AnimationName+$i;
    .svgS:nth-child(25n + #{$i}) {
    animation-name: $tempAnimationName;
    animation-duration: (random(25)+ 10) + s; //min 10 sec max 30
    animation-iteration-count: infinite;
    animation-delay: (random(20)-20) + s;
  }
  //!Achtung plus und Minus -> Max * 2 - max
  $scale: ((random(25) + 75)/ 100);
  $opacity: (random(50)+ 50);
  $tempr: (random(600)-300);

  @keyframes #{$tempAnimationName} {
    0% {
      opacity: 0.2;
      transform: rotate(0deg) scale(0);
    }
    50% {
      transform: rotate(#{$tempr}deg) scale(#{$scale});
      opacity: $opacity;
    }
    100% {
      transform: rotate(0deg) scale(0);
      opacity: 0.2;
    }
  }
}
</style>
