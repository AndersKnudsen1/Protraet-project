<template id="background">
   <div  id="landing-page">
  
  <v-layout row wrap>
    <v-flex xs12 sm4 offset-sm4>
      <v-card style="margin: 25px 0px 25px 0px;">
        <v-img
          :src="require('../assets/img/Artistisk-profilbillede-mørkegrøn.png')"
          height="900px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div style="font-family: quicksand;" class="headline"><h1 style="font-family: quicksand light; font-size: 30px;">Minimalistisk profilbillede</h1></div>
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
            Dette profilbillede var en idé, hvor jeg fik inspiration af en gruppe der kalder sig selv for Funhaus. 
            En gruppe der i starten af deres videoer har et billede uden de store detaljer på deres "navneskilte", med billede til for at vise hvem der er med i den specifikke video og hvad de hedder.
            Da jeg selv godt kan lide designet har jeg lavet en version med flere forskellige baggrundsfarver.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  
  <v-flex xs12 sm4 offset-sm4>
      <v-card style="margin: 25px 0px 25px 0px;">
        <v-img
          :src="require('../assets/img/Artistisk-profilbillede-mørkerød.png')"
          height="900px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div style="font-family: quicksand;" class="headline"><h1 style="font-family: quicksand light; font-size: 30px;">Minimalistisk profilbillede</h1></div>
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
            Dette profilbillede var en idé, hvor jeg fik inspiration af en gruppe der kalder sig selv for Funhaus. 
            En gruppe der i starten af deres videoer har et billede uden de store detaljer på deres "navneskilte", med billede til for at vise hvem der er med i den specifikke video og hvad de hedder.
            Da jeg selv godt kan lide designet har jeg lavet en version med flere forskellige baggrundsfarver.
            </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
    <v-flex xs12 sm4 offset-sm4>
      <v-card style="margin: 25px 0px 25px 0px;">
        <v-img
          :src="require('../assets/img/Artistisk-profilbillede-mørkeblå.png')"
          height="900px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div style="font-family: quicksand;" class="headline"><h1 style="font-family: quicksand light; font-size: 30px;">Minimalistisk profilbillede</h1></div>
            <span class="grey--text">Nummer 3</span>
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
            Dette profilbillede var en idé, hvor jeg fik inspiration af en gruppe der kalder sig selv for Funhaus. 
            En gruppe der i starten af deres videoer har et billede uden de store detaljer på deres "navneskilte", med billede til for at vise hvem der er med i den specifikke video og hvad de hedder.
            Da jeg selv godt kan lide designet har jeg lavet en version med flere forskellige baggrundsfarver.
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