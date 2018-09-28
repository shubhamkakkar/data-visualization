<template>
   <div id="wrapper">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card box">
                    <div class="card-body">
                        <h5 class="card-title text-center" style="text-transform: uppercase">
                            In the match
                            <b class="text-primary">INDIA {{selectedCard.opposition}}</b>, on
                            <span class="text-danger text-block"> {{selectedCard.date}}
                            </span>
                        </h5>
                        <div class="card-text">
                            <div class="py-3">
                                <b>Match was held in</b>
                                <span class="text-danger text-block"> {{selectedCard.ground}}

                                </span>
                            </div>
                            <div class="py-3">
                                <b>Sachin's batting score was -> </b>
                                <span class="text-danger text-block"> {{selectedCard.batting_score}}
                                </span>
                            </div>     
                                <div class="progress">
                                    <div class="progress-bar bg-info"  :style="{ width: barwidth + '%' }" ></div>
                                </div>
                            
                            <div class="py-3">
                                <b>Sachin took</b>
                                <span class="text-danger text-block"> {{selectedCard.wickets}}
                                </span>
                                wickets
                            </div>
                            <div class="progress">
                                    <div class="progress-bar bg-info"  :style="{ width: wicket + '%' }" ></div>
                                </div>
                            <div class="py-3">
                                <b>
                                    Runs conceeded by Sachin ->
                                </b>
                                <span class="text-danger text-block"> {{selectedCard.runs_conceded}}</span>
                            </div>
                            <div class="progress">
                                    <div class="progress-bar bg-info"  :style="{ width: runs_conceded + '%' }" ></div>
                                </div>
                            <div class="py-3">
                                <b>Sachin took</b>    <span class="text-danger text-block"> {{selectedCard.catches}}</span> catches
                            </div>
                            <div class="progress">
                                    <div class="progress-bar bg-info"  :style="{ width: catches + '%' }" ></div>
                                </div>
                            <div class="py-3">
                                <b>Sachin did</b>
                                <span class="text-danger text-block"> {{selectedCard.stumps}}</span> stump outs
                            </div>
                            <div class="progress">
                                    <div class="progress-bar bg-info"  :style="{ width: stump + '%' }" ></div>
                                </div>
                            <div class="py-3">
                                <b>
                                    Result:
                                </b>
                                <span class="text-danger text-block"> {{selectedCard.match_result}}

                                </span>
                            </div>
                            <div class="py-3">
                                <b>
                                    Result Margin:
                                </b>
                                <span class="text-danger text-block"> {{selectedCard.result_margin}}
                                </span>
                            </div>
                        
                            <div class="py-3">
                                <b>INDIA</b>
                                <span class="text-danger text-block"> {{selectedCard.toss}}</span> the toss</div>
                            <div class="py-3">
                                <b>INDIA had</b>
                                <span class="text-danger text-block"> {{selectedCard.batting_innings}}</span> batting innings</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  computed: {
    selectedCard() {
      let match = this.$store.getters.matchToShow;
      if (match.wickets === "-") {
        match.wickets = 0;
      }
      if (match.runs_conceded === "-") {
        match.runs_conceded = 0;
      }
      return match;
    },
    barwidth(){
        return this.$store.getters.matchToShow.batting_score;
    },
    catches(){
        return this.$store.getters.matchToShow.catches;
    },
    wicket(){
        return this.$store.getters.matchToShow.wickets;
    },
    stump(){
        return this.$store.getters.matchToShow.stumps;
    },
    runs_conceded(){
        return this.$store.getters.matchToShow.runs_conceded;
    }
    
  }
};
</script>

<style scoped>
.box{
    box-shadow: 0 4px 10px #ccc;
    margin: 35px;
    margin-top: 50px;
    }

.text-block{
    font-weight: bold
}  

.text-danger{
    text-transform: uppercase
}
</style>


