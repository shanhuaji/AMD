
require(["./"+"test"+"/"+'test1'],function(d){
    console.log(d)
})



define([], function() {
    return{
        show(){
            return "测试模块"
        }
    }
});