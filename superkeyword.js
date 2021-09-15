
//super keyword

class person{
    constructor(name, age){
        this.name =  name;
        this.age = age;
    }

    func(){
        console.log("hello",this.name);
        console.log("you are ",this.age,"years old");
    }

}
class student extends person{

    constructor(name ,age ,gpa){
        super(name,age);
        this.gpa = gpa;
    }
    hello(){
        super.func();
        console.log("your gpa is",this.gpa);
    }

}
class teacher extends person{
    constructor(name ,age ,classsize){
        super(name,age);
        this.classsize = classsize;
    }
    hello(){
        super.func();
        console.log("your classsize is",this.classsize);
    }
}

let stu1 = new student("harry",18,10);
let teacher1 = new teacher("rob",45,100);

//console.log(stu1.name);
//console.log(teacher1.name);

stu1.hello();
teacher1.hello();