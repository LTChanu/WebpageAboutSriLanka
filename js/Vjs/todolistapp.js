const names={
    data(){
        return{
            webtaskList:[],
            onetask:'',
            color:'',
            btn:'Add',
            ind:''
        }
    },
    methods: {
        addTask: function(){
            if(this.btn == "Add"){
                if(this.onetask != ''){
                    this.webtaskList.push(this.onetask);
                    this.onetask='';
                }
            }else if(this.btn == "Update"){
                if(this.onetask != ''){
                    this.webtaskList[this.ind]=this.onetask;
                    this.onetask='';
                }  
            }
            this.btn="Add";
        },

        removeTask: function(index){
            this.webtaskList.splice(index, 1);
            this.btn="Add";
        },

        updateTask: function(index){
            this.onetask=this.webtaskList[index];
            this.btn='Update';
            this.ind=index;
        }
    },
    created(){
        // this.addTask();
    }
}
Vue.createApp(names).mount('#webtodo')