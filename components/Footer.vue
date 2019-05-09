<template>
  <v-footer
  style="background-color:#003C8A !important"
    height="auto"
  >
    <v-card style="background-color:#003C8A !important"
      class="flex"
      flat
      tile
    >
      <v-card-title color="#003C8A">
        <strong  class=" white--text subheading">Kontakt mig her via sociale medier eller e-mail: andersk@live.dk</strong>

        <v-spacer></v-spacer>

        <v-btn 
      
      v-for="icon in icons"
      :key="icon"
      class="mx-3"
      light
      icon
    >
      <a :href="icon.url" :target="icon.target"><v-icon size="35px">{{ icon.name }}</v-icon></a>
    </v-btn>
      </v-card-title>

      
    </v-card>
  </v-footer>
</template>

<!-- https://www.facebook.com/anders.knudsen.399
     https://twitter.com/Sredna_Nesdunk
     https://www.instagram.com/sredna_nesdunk/
     https://www.linkedin.com/in/anders-knudsen-09413117a/-->

<script>
  export default {
    data: () => ({
      icons: [
        {
            name:'fab fa-facebook',
            url: 'https://www.facebook.com/anders.knudsen.399',
            target: '_blank'
        },
        {
            name:'fab fa-twitter',
            url: 'https://twitter.com/Sredna_Nesdunk',
            target: '_blank'
        },
        {
            name:'fab fa-linkedin',
            url: 'https://www.linkedin.com/in/anders-knudsen-09413117a/',
            target: '_blank'
        },
        {
            name:'fab fa-instagram',
            url: 'https://www.instagram.com/sredna_nesdunk/',
            target: '_blank'
        }
      ]
    })
  }
</script>

<style  scoped>
.fa-facebook::before {
    color: white;
    decoration: none;
}
.fa-twitter::before {
    color: white;
}
.fa-linkedin::before {
    color: white;
}
.fa-instagram::before {
    color: white;
}
</style>