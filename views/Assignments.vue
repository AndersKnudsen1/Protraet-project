<template>
  <div id="landing-page">
    
      
        <v-container grid-list-sm>
          <v-layout row wrap>
            <v-flex xs12 class="mb-2">
              <h1 class="Titel">Opgaver</h1>
            </v-flex>
            <v-flex xs12 sm8 md6 lg4 class="mb-2">
              <v-card class="ma-1">
                <v-img
                  class="white--text"
                  height="200px"
                  :src="require('../assets/img/Double-exposure-1.png')"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">Double exposure</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <br>
                    <span >To billeder der er blandet sammen til et</span>
                    <br>
                  </div>
                </v-card-title>
                <v-card-actions class="pa-3">
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog1" width="800px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="#003C8A" dark v-on="on">Vis</v-btn>
                    </template>
                    <v-card>
                      <v-card-title></v-card-title>
                      <v-img :src="require('../assets/img/Double-exposure-1.png')"></v-img>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn dark color="#003C8A" @click="dialog1 = false">Luk</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs12 sm8 md6 lg4 class="mb-2">
              <v-card class="ma-1">
                <v-img
                  class="white--text"
                  height="200px"
                  :src="require('../assets/img/Artistisk-profilbillede-mørkegrøn.png')"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">Minimalistik profilbillede</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <br>
                    <span>Et profilbillede jeg bruger på nogle socialemedier</span>
                    <br>
                  </div>
                </v-card-title>
                <v-card-actions class="pa-3">

                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog2" width="800px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="#003C8A" dark v-on="on">Vis</v-btn>
                    </template>
                    <v-card>
                      <v-card-title></v-card-title>
                      <v-img :src="require('../assets/img/Artistisk-profilbillede-mørkegrøn.png')"></v-img>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn dark color="#003C8A" @click="dialog2 = false">Luk</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs12 sm8 md6 lg4 class="mb-2">
              <v-card class="ma-1">
                <v-img
                  class="white--text"
                  height="200px"
                  :src="require('../assets/img/Infographic-card.png')"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">Infographic</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <br>
                    <span>Et profilbillede jeg bruger på nogle socialemedier</span>
                    <br>
                  </div>
                </v-card-title>
                <v-card-actions class="pa-3">
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog3" width="800px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="#003C8A" dark v-on="on">Vis</v-btn>
                    </template>
                    <v-card>
                      <v-card-title></v-card-title>
                      <v-img :src="require('../assets/img/Infographic-poster.png')"></v-img>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn dark color="#003C8A" @click="dialog3 = false">Luk</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12 sm8 md6 lg4 class="mb-2">
              <v-card class="ma-1">
                <v-img
                  class="white--text"
                  height="200px"
                  :src="require('../assets/img/Visitkort.stor.png')"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">Visitkort</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <br>
                    <span>Mit personlige visitkort</span>
                    <br>
                  </div>
                </v-card-title>
                <v-card-actions class="pa-3">
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog4" width="800px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="#003C8A" dark v-on="on">Vis</v-btn>
                    </template>
                    <v-card>
                      <v-card-title></v-card-title>
                      <v-img :src="require('../assets/img/Visitkort.stor.png')"></v-img>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn dark color="#003C8A" @click="dialog4 = false">Luk</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs12 sm8 md6 lg4 class="mb-2">
              <v-card class="ma-1">
                <v-img
                  class="white--text"
                  height="200px"
                  :src="require('../assets/img/Video-CV.png')"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">Video CV</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <br>
                    <span>Et video cv om selve mig og hvad jeg kommer fra</span>
                    <br>
                  </div>
                </v-card-title>
                <v-card-actions class="pa-3">
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog5" width="800px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="#003C8A" dark v-on="on">Vis</v-btn>
                    </template>
                    <v-card>
                      <v-card-title></v-card-title>
                      <iframe
                        width="800"
                        height="515"
                        src="https://www.youtube.com/embed/Faar8EgiNw8"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn dark color="#003C8A" @click="dialog5 = false">Luk</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12 sm8 md6 lg4 class="mb-2">
              <v-card class="ma-1">
                <v-img
                  class="white--text"
                  height="200px"
                  :src="require('../assets/img/Infomercial-card.jpg')"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">Profil optik infomercial</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <br>
                    <span>En infomercial documentary om profil optik</span>
                    <br>
                  </div>
                </v-card-title>
                <v-card-actions class="pa-3">
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog6" width="800px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="#003C8A" dark v-on="on">Vis</v-btn>
                    </template>
                    <v-card>
                      <v-card-title></v-card-title>
                      <iframe
                        width="800"
                        height="515"
                        src="https://www.youtube.com/embed/a13kpEWmcDE"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn dark color="#003C8A" @click="dialog6 = false">Luk</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout row wrap></v-layout>
        </v-container>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false
    };
  }
};
</script>

<style scoped>
#landing-page {
  background-image: url("../assets/svg/Triangle.svg");
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
  align-content: left;
}
#triangle {
  padding: 100px 0px 150px 0px;
  background-image: url(../assets/svg/Triangle.svg);
  background-color: white;
  width: 100%;
}
#billede {
  contain: content;
  width: 200px;
}
.headline {
  background-color: #f68b1e;
  padding: 5px;
  border-radius: 3px;
}
</style>