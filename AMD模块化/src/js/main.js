

require.config({
    paths:{
        'jquery':"https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min",
    }
});

require(['jquery'],function($){
    
    let mod = $("#homepage").attr('currentmod');
    console.log(mod)
    if(mod){
       require(["./"+mod+"/"+mod],function(date){
            console.log(mod)
            console.log(date.show())
        })
    }
})