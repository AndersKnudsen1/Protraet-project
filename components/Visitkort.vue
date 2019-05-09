<template id="background">
   <div  id="landing-page">
  
  <v-layout row wrap>
    <v-flex xs12 sm6 offset-sm3>
      <v-card style="margin: 25px 0px 25px 0px;">
        <v-img
          :src="require('../assets/img/Visitkort.stor.png')"
          height="500px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div style="font-family: quicksand;" class="headline"><h1 style="font-family: quicksand light; font-size: 30px;">Visitkort</h1></div>
            <span class="grey--text">Forside</span>
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
            Dette er mit eget personlige visitkort til at promovere mig selv og til at vise min visuelle identitet. 
            Derudover har visitkortet selvfølgelig også de nødvændige oplysninger for at kunne i kontakt med mig. 
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>

  <v-flex xs12 sm6 offset-sm3>
      <v-card style="margin: 25px 0px 25px 0px;">
        <v-img
          :src="require('../assets/svg/Visitkort-2.svg')"
          height="500px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div style="font-family: quicksand;" class="headline"><h1 style="font-family: quicksand light; font-size: 30px;">Visitkort</h1></div>
            <span class="grey--text">Bagside</span>
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
            Dette er mit eget personlige visitkort til at promovere mig selv og til at vise min visuelle identitet. 
            Derudover har visitkortet selvfølgelig også de nødvændige oplysninger for at kunne i kontakt med mig. 
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