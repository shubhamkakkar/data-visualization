<template>
  <div id="wrapper-details">
    <div class="container px-2" style="background: white; border-radius: 5px;">
        <div class="row">
            <h4 class="col-sm-12 my-5 text-center text-primary">
                Filter Options :
            </h4>
            <div class="col-sm-3 m-auto" v-for="(ref, index,  key) in checkBoxOptions" :key="key">
                <button :value=ref.value :name=ref.key @click="passIndex(index, ref.value)"
                 class="btn btn-block btn-primary primary-boxShadow mx-2 my-3">
                    {{ ref.key }}
                </button>
            </div>
        </div>
        <div class="row">
          <button @click="hideAll" class="btn btn-danger margin_auto_dif_top danger-boxShadow">
                Hide All
          </button>
        </div>
        <div class="row">
            <a href="#wrapper-details" class="btn btn-danger danger-boxShadow mb-3" v-if="TopbtnEnable"
            style="top: 82%; right: 20px; position: fixed; z-index: 10">
                Top
            </a>
        </div>
    </div>
    <modal v-if="modal_bool" class="my-5" />
    <Opposition class="animated fadeIn my-5" v-if="opposition" />
    <full-description  class="mt-5" v-if="enableToShow" id="fakeModal" style="background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);" />  
    
 </div>
</template>

<script>
import { data_ArrMixin } from "@/components/data.js";
import { showcase } from '@/components/showcase.js'
import FullDescription from '@/components/filterCards/FullDescription.vue';
import Opposition from '@/components/filterCards/opposition.vue';
import Modal from "@/components/filterCards/further_filter/further_filter_modal/modal.vue"

export default {
  mixins: [data_ArrMixin, showcase],
  computed: {
    checkBoxOptions() {
      return this.$store.getters.checkBoxOptions;
    },
    enableToShow(){
      return this.$store.state.enableToShow
    },
    Opposition(){
      return this.$store.state.opposition
    }
  },
  data(){
    return{
      modal_bool : false,
      opposition : false,
      TopbtnEnable: false
    }
  },
  methods: {
    passIndex(index, value) {
      this.$store.state.selectedFilter = index;
      if(value != "oppositionAll"){
        this.opposition = false
        this.modal_bool = true
      }
      else{
        this.modal_bool = false
        this.opposition = true
      }
        this.TopbtnEnable = true
        this.$store.state.enableToShow = false
    },
    hideAll(){
      this.modal_bool = false
        this.opposition = false
        this.TopbtnEnable = false
        this.$store.state.enableToShow = false
    }
  },
  components: {
    FullDescription,
    Modal,
    Opposition
  }
};
</script>
<style scoped>

.margin_auto_dif_top{
  margin: auto;
  margin-top: 3.5% !important;
}

.btn-primary{
  color: white;
  box-shadow: 2px 2px 10px royalblue;
  background-color: royalblue
}

.btn-primary:hover{
  background-color: rgb(38, 89, 220);
  box-shadow: 2px 4px 10px  rgb(38, 89, 220);
}

.danger-boxShadow{
  box-shadow: 2px 2px 10px #DC3545;
}

</style>
