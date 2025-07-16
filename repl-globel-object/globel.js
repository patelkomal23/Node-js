const obj={
    name:"komal",
    sname:"patel",
    age:"23",
    fun:function(){
        console.log("My Name is" , this.name);
        console.log("My sname is" , this.sname);
        console.log("My age is" , this.age);
        
    }
}
module.exports = obj;