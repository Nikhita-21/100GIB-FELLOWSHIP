//linked ti new.html
class Forms{
   // constructor()//when classs satrted it gets started automatically
    //{
    //    console.log('constructor started');
    //}
    constructor(fname,sub)
    {
            this.fname=fname;
            this.sub=sub;
    }
    submit()
    {
        console.log(this.fname+':submitted the:'+this.sub);
    }
    canceled(){
        console.log(this.fname+':cancelled the:'+this.sub);
        alert(this.fname+' canceled '+this.sub);
    }
    data(fname,sub){
        this.fname=fname;
        this.sub=sub;
    }
}
let form=new Forms('lali','maths');
//let form=new Forms();
//form.data('nikhita','js');
form.submit();
form.canceled();
