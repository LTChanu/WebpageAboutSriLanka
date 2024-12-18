new Vue({
    el:'#mail',
    data:{
        name:'',
        email:'',
        massage:''
    },
    methods: {
        send: function(){
            if(this.name!='' && this.email!='' && this.massage!=''){
                this.name='';
                this.email='';
                this.massage='';
                alert("Your message has been sent. Thank you!");
            }else{
                alert("Please fill all the fields.");
            }

        }
    }
    
})