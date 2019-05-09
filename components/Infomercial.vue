<template id="background">
   <div  id="landing-page">
  
  <v-layout row wrap>
    <v-flex xs12 sm4 offset-sm4>
      <v-card style="margin: 25px 0px 25px 0px;">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/a13kpEWmcDE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <v-card-title primary-title>
          <div>
            <div style="font-family: quicksand;" class="headline"><h1 style="font-family: quicksand light; font-size: 30px;">Video-CV</h1></div>
            <span class="grey--text">CV om mig</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text style="font-family: quicksand; font-size: 18px;" v-show="show">
            Dette video cv handler mere om mig, mine interesser og hvem jeg er som person. Det er derfor et cv der er lidt mere personligt og man kommer til at kende mig mere som menneske. 
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>

 
 
  </v-layout>
  </div>
</template>

<script>
export default {
    data () {
      var Assignment = this.$route.params
      return {
      show: false, 
      Assignment: {
        id: Assignment.id, 
        headline: Assignment.headline,
        placement: Assignment.placement, 
        description: Assignment.id,
        img: Assignment.img,
      }
      }
      
    }
  }
</script>

<style scoped>
#landing-page {
     background-image: url('../assets/svg/Triangle.svg');
     /* background-color: #8f2c2c; */
    background-position: center;
    background-repeat: no-repeat;

    position: relative;
    width: 100%;
  }
#triangle {
  background-image: url(../assets/svg/Triangle.svg);
  background-color: #FAFAFA;
  width: 100%;
  top: 300px;
}
.v-content{
  background-color: #ffffff;
}
</style>