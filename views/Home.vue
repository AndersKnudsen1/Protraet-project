<template>

  <div style="width:100%; background-color: #ffffff;">
    <div class="container">
      <img src="../assets/img/HelloThere.png" style="width:100%;">
      <div class="top-left">Hello there</div>
      <div class="top-right">
        <p>
          Jeg hedder Anders Knudsen og er
          <br>studerende på EASV i Esbjerg
          <br>som Multimediedesigner
        </p>
      </div>
    </div>
    <div  id="landing-page">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm8 md6 lg5>
          <v-card-text  class="px-0">
            <v-img style="top: 150px;" class="transparent" :src="require('../assets/img/Om-mig.png')"></v-img>
          </v-card-text>
        </v-flex>

        <v-flex xs12 sm8 md8 lg5>
          <v-card flat style="border-radius: 0px; left: 100px;" color="white">
            <v-card-text class="px-0">
              <h1 style="font-family: quicksand light; font-weight: 600; font-size: 45px; ">Om mig</h1>
              <p style="text-align: left; padding: 20px; font-family: quicksand; font-size: 19px;">
                Hej, mit navn er Anders Knudsen og velkommen til min Protrætside.
                <br>Jeg er født D. 24-07-1997 og er dermed 21 år gammel. Jeg studerer i Esbjerg på Ervervsakademiet Sydvest. Her studerer jeg som Multimediedesigner og er ved at afslutte mit 2. semester.
                <br>
                <br>Her på siden ser du de opgaver jeg har lavet indtil videre og også nogle projekter af eget initiativ. Mine styrker ligger i grafisk design og video redigering.
                I disse to emner har jeg de projekter jeg er mest stolt af. 
                <br>
                <br>
                Så man også kan se i mine opgaver kan jeg godt lide at lave det jeg laver lidt anderledes, og jeg forsøger tit at få lidt humor ind i mine opgaver. Jeg
                <br>
                <br>Du er meget velkommen til at kigge min protrætside igennem, for at se hvad jeg kan og hvem jeg er for en.
              </p>
              <v-card-actions>
          <v-layout style="padding-left: 18px;">
    <v-dialog v-model="dialog" width="800px">
      <template v-slot:activator="{ on }">
        <v-btn color="#003C8A" dark v-on="on">CV</v-btn>
      </template>
      <v-card>
        <v-card-title>
        </v-card-title>
        <v-img :src="require('../assets/img/CV-designet.png')"> </v-img>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark color="#003C8A" @click="dialog = false">Luk</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
          <v-spacer></v-spacer>
        </v-card-actions>
            </v-card-text>
          </v-card>
        </v-flex>
        <spacer></spacer>
      </v-layout>
    </v-container>
  </div>
  </div>
</template>


<script>
export default {
  data () {
      return {
        dialog: false
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#landing-page {
     background-image: url('../assets/svg/Triangle.svg');
     /* background-color: #8f2c2c; */
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
  }
.transparent {
  background-color: transparent !important;
  border-color: transparent !important;

  width: 800px;
 
}

.container {
  position: relative;
  text-align: center;
  color: white;
  max-width: 100% !important;
  padding: 0px;
  margin: 0px;
  
      
     
}

.top-left {
  position: absolute;
  top: 85px;
  left: 50px;
  font-family: quicksand;
  font-size: 35px;
  text-align: left;
}
.top-right {
  position: absolute;
  top: 80px;
  right: 180px;
  font-family: quicksand;
  font-size: 18px;
  text-align: right;
}
</style>

