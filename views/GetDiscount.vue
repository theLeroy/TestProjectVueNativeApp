<template>
  <div>
    <div class="emotionStarter">
      <div class="textC">
        <h1>Rabatte</h1>
        <h3>Auf dieser Seite findest du jeden verfügbaren Rabatt,</h3>
        <h3>scrolle runter und finde den passenden Rabatt für dich!</h3>
        <!-- <div class="gears">
        </div> -->
      </div>
    </div>
      <div class="coupons-container">
        <a class="coupons" target="_blank" :href="appUrl + 'new/' + coupon.hash" v-for="(coupon, index) of validCouponTypes" :key="index">
          <div class="image1" :style="{ 'background-image': 'url(/' +  coupon.img + ')'}"></div>
          <div class="image2-container">
            <div class="image2" :style="{ 'background-image': 'url(/' +  coupon.img + ')'}"></div>
          </div>
          <div class="text">
            <h2>{{coupon.name}}</h2>
            <p>{{coupon.description}}</p>
          </div>
        </a>
        <router-link class="coupons" to="/Partner" tag="a">
          <div class="Rabatt-anbieten">
            <div class="plus">
              <div class="p1"></div>
              <div class="p2"></div>
            </div>
            <div class="Rabatt-anbieten-text">
              Selber einen Rabatt aufschalten.
            </div>
          </div>
        </router-link>
        <div class="nondisplaycoupons"></div>
        <div class="nondisplaycoupons"></div>
        <div class="nondisplaycoupons"></div>
      </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import gqlCouponTypes from '@/graphql/Query/couponTypes.gql'

export default {
  name: 'GetDiscount',
  components: {
    Footer
  },
  data () {
    return {
      appUrl: process.env.VUE_APP_APP_URL,
      couponTypes: []
    }
  },
  computed: {
    validCouponTypes () {
      return this.shuffle(this.couponTypes.filter(c => c.img))
    }
  },
  methods: {
    shuffle (array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    }
  },
  apollo: {
    couponTypes: {
      query: gqlCouponTypes,
      result ({ data, loading, networkStatus }) {}
    }
  }
}
</script>

<style scoped lang="scss">
.emotionStarter {
  height: auto;
  position: relative;
  .textC {
    padding: 50px;
    position: relative;
    text-align: center;
  }

  h1 {
   margin-top: 30px;
   color: $pink !important;
  }
  h3 {
    color: $pink !important;
  }
}

.gears {
  padding: 1px;
  height: 350px;
  width: 500px;
  margin-top: 200px;
  position: relative;
  margin-left: calc(50% - (500px / 2));
  img {
    position: absolute;
  }
}

.coupons-container{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 70px;
  // max-width: 1200px;
  // margin-left: calc(50% - 600px);
  justify-content: center;
  @media only screen and (min-width: 1620px) {
    width: 1620px;
    margin-left: calc(50% - 1620px / 2);
  }
}

.nondisplaycoupons {
  display: hidden;
  width: 300px;
  height: 370px;
  margin: 40px;
}
.coupons {
  width: 300px;
  height: 370px;
  margin: 40px;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 20px 80px -25px black;
  cursor: pointer;
  transition-duration: 0.5s;
  overflow: hidden;

  .image1 {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-size: cover;
    background-position: center;
    background-image: url('/kaffee.jpg')
  }

  &:hover{
    transform: scale(1.1);
    box-shadow: 0 25px 100px -20px black;

    .image2-container{
      top: 0;
    }

    .image2{
      top: 0;
    }

    .text{
      transform: translateY(50%);
      bottom: 50%;
      text-align: center;
      height: auto;

      h2, p{
        width: calc(100% - 40px);
        white-space: normal;
        text-overflow: unset;
        line-height: 1.3em;
      }

      h2{
        margin-bottom: 10px;
      }

      p{
        margin-bottom: 0;
      }
    }
  }

  .image2-container{
    transition-duration: 0.5s;
    height: 100%;
    width: 100%;
    top: 300px;
    left: 0;
    overflow: hidden;
    position: absolute;
  }

  .image2{
    transition-duration: 0.5s;
    height: 100%;
    width: 100%;
    top: -300px;
    left: 0;
    position: absolute;
    background-size: cover;
    background-position: center;
    filter: blur(10px) brightness(70%);
    transform: scale(1.1);
  }

  .text {
    transition-duration: 0.5s;
    height: 70px;
    padding-top: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .Rabatt-anbieten {
    position: relative;
  }
  .Rabatt-anbieten > .Rabatt-anbieten-text {
    color: $pink;
    text-decoration: underline;
    text-align: center;
    position: relative;
    margin-top: 25%;
    font-size: 20px;
    padding: 0 20px;
  }
  .plus {
    width: 100px;
    margin-top: 25%;
    margin-left: calc(50% - 50px);
    height: 100px;
    .p1 {
      margin-left: calc(50px - (15px / 2));
      position: absolute;
      background: $pink;
      width: 15px;
      height: 100px;
      border-radius: 20px;
    }
    .p2 {
      margin-top: calc(50px - (15px / 2));
      position: absolute;
      background: $pink;
      height: 15px;
      width: 100px;
      border-radius: 20px;
    }
  }

  p{
    color: white;
    font-size: 17px;
    height: 20px;
    margin-top: 0;
    opacity: 1;
    margin-left: 20px;
    line-height: 1em;
    white-space: nowrap;
    width: calc(100% - 22px);
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h2{
    color: white;
    font-size: 25px;
    margin-left: 20px;
    margin-bottom: 0;
    margin-top: 5px;
    line-height: 1.2em;
    white-space: nowrap;
    width: calc(100% - 22px);
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

@media screen and (max-width: 760px) {
  .coupons-container{
    justify-content: center;
  }
}
@media screen and (max-width: 1140px) {
  .nondisplaycoupons:nth-last-of-type(-n+2) {
    display: none;
  }
}
@media screen and (max-width: 1520px) {
  .nondisplaycoupons:last-of-type {
    display: none;
  }
}
@media screen and (max-width: 700px) {
  .nondisplaycoupons {
    display: none;
  }
  .coupons{
    transform: scale(1) !important;
    box-shadow: 0 20px 80px -25px black !important;

    .image2-container{
      top: 0;
    }

    .image2{
      top: 0;
    }

    .text{
      transform: translateY(50%);
      bottom: 50%;
      text-align: center;
      height: auto;

      h2, p{
        width: calc(100% - 40px);
        white-space: normal;
        text-overflow: unset;
        line-height: 1.3em;
      }

      h2{
        margin-bottom: 10px;
      }

      p{
        margin-bottom: 0;
      }
    }
  }
  .emotionStarter {
    overflow: hidden;
    height: auto;
    .textC {
      padding: 20px;

      h1 {
        font-size: 2.4rem;
        line-height: 1.3em;
        margin-bottom: 30px;
        margin-top: 0;
      }

      h3 {
        font-size: 1.6rem;
      }
    }
  }

  .gears {
    margin-top: 20px;

    img {
      width: 100px;
    }

    .pink-gear {
      top: 65px;
      left: 65px;
    }

    .violett-gear-2 {
      top: 0;
      left: 130px;
    }
  }
}
</style>
