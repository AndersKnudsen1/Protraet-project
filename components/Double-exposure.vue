<template id="background">
   <div  id="landing-page">
  
  <v-layout row wrap>
    <v-flex xs12 sm4 offset-sm4>
      <v-card style="margin: 25px 0px 25px 0px;">
        <v-img
          :src="require('../assets/img/Double-exposure-1.png')"
          height="900px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div style="font-family: quicksand;" class="headline"><h1 style="font-family: quicksand light; font-size: 30px;">Double exposure</h1></div>
            <span class="grey--text">Nummer 1</span>
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
            Dette billede er blandet sammen af et billede af mit hoved og et billede jeg tog på en skiferie. Det er denne effekt man kalder double exposure.
            Dette giver lidt flere vinkler at se et billedefra og gør også at det kan have flere betydninger, end hvis det f.eks. kun var enten mit hoved eller skiferie billedet.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  
  <v-flex xs12 sm4 offset-sm4>
      <v-card style="margin: 25px 0px 25px 0px;">
        <v-img
          :src="require('../assets/img/Double-exposure-2.png')"
          height="900px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div style="font-family: quicksand;" class="headline"><h1 style="font-family: quicksand light; font-size: 30px;">Double exposure</h1></div>
            <span class="grey--text">Nummer 2</span>
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
            Dette billede er blandet sammen af et billede af mit hoved igen og  den her gang et billede jeg tog på en ferie på vulkanen Etna. Det er denne effekt man kalder double exposure.
            Dette giver lidt flere vinkler at se et billede fra og gør også at det kan have flere betydninger, end hvis det f.eks. kun var enten mit hoved eller Etna billedet.
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