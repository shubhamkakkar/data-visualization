export const showcase =  {
    methods: {
        showcase(index) {
          this.$store.state.enableToShow = true
          const match = {
            batting_score: this.data_Arr[index].batting_score,
            wickets: this.data_Arr[index].wickets,
            runs_conceded: this.data_Arr[index].runs_conceded,
            catches: this.data_Arr[index].catches,
            stumps: this.data_Arr[index].stumps,
            opposition: this.data_Arr[index].opposition,
            ground: this.data_Arr[index].ground,
            date: this.data_Arr[index].date,
            match_result: this.data_Arr[index].match_result,
            result_margin: this.data_Arr[index].result_margin,
            toss: this.data_Arr[index].toss,
            batting_innings: this.data_Arr[index].batting_innings
          };
          this.$store.dispatch("SelectedCardOFIndex", match);
          //   console.log(match)
          
        
        }
      }
}