<template>
<div  id="landing-page">
           
    <div id="triangle">
      <v-container grid-list-sm>
        <v-layout row wrap>
          <v-flex xs12 class="mb-2">
            <h1 class="Titel">Opgaver</h1>
   
          </v-flex>
          <v-flex xs12 sm8 md6 lg4 class="mb-2"  v-for="(assignment, index) in Assignments" :key="index">
            <v-card class="ma-1">
              <v-img 
              class="white--text" 
              height="200px" 
           >
              <v-card-media v-bind:src="assignment.imgLink" />
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title>
                <div>
                  <span>{{assignment.description}}</span>
                  <br>
                </div>
              </v-card-title>
              <v-card-actions class="pa-3">

                <v-spacer></v-spacer>
                
             <router-link style="text-decoration: none;" id="header-link" v-bind:to="{ name: 'assign',
                   params: { 
                      id: assignment.id, 
                      headline: assignment.headline,
                      placement: assignment.placement, 
                      description: assignment.id,
                      imgLink: assignment.img,}}">

                      <v-btn  flat color="orange">Vis</v-btn>
                      
                      </router-link>
                      
              </v-card-actions>
            </v-card>
          </v-flex>
         
          
   
        </v-layout>
        <v-layout row wrap>
          
        </v-layout>
      </v-container>
    </div>
  </div>


</template>

<script>
export default {
 data() {
    return {
      Assignments: [
        {id:1, headline: 'Double exposure', placement: 'Number one', description: 'To billeder der bliver blandet til et af ofte et hoved og et landskab', imgLink:require("../assets/img/Double-exposure-1.png")},
        {id:2, headline: 'Minimalistisk Profilbillede',placement: 'Number two', description: 'Et profilbillede jeg bruger på nogle sociale medier', imgLink: require("../assets/img/Artistisk-profilbillede-mørkegrøn.png")},
        {id:3, headline: 'Infographic',placement: 'Number three', description: 'En fjollet infographic om mælk med opdigtede grafer, fakta og diagrammer', imgLink:require("../assets/img/Infographic-poster.png")},
        {id:4, headline: 'Visitkort',placement: 'Number four', description: 'Mit personlige visitkort, som også viser min visuelle identitet', imgLink:require("../assets/img/Visitkort.stor.png")},
        {id:5, headline: 'Video CV',placement: 'Number five', description: 'Et video cv om mig, der er anderledes og mere spændende end et normalt cv', imgLink:require("../assets/img/Video-CV.png")},
        {id:6, headline: 'Infomercial',placement: 'Number six', description: 'Infomercial documentary om Profil Optik', imgLink:require("../assets/img/Infomercial.png")}
      ]
    }
  },
};
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
.Titel {
  font-family: quicksand light;
}
.hvis {
  align-content: left ;
}

#billede{
  contain: content;
  width: 200px;
}
.headline {
  background-color: #F68B1E;
  padding: 5px;
  border-radius: 3px;
  font-family: quicksand light;
}
.mb-2{
  font-family: quicksand ;
  font-size: 17px;
}
</style>