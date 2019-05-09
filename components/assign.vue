<template>
<div  id="landing-page">
 <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card style="margin: 25px 0px 25px 0px;">
        <v-img
        height="800px"
        >
          <v-card-media v-bind:src="assignment.imgLink" />
          
        </v-img>
        

        <v-card-title primary-title>
          <div>
            <div style="font-family: quicksand;" class="headline">{{Assignment.headline}}</div>
            
          </div>
        </v-card-title>

        
      </v-card>
    </v-flex>
    
  </v-layout>
  </div>
</template>

<script>
export default {
    data () {
      var assignment = this.$route.params
      return {
      show: false, 
      Assignment: {
        id: assignment.id, 
        headline: assignment.headline,
        placement: assignment.placement, 
        description: assignment.id,
        img: assignment.img,
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
</style>