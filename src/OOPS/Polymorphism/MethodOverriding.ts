
/*method overriding =>  when a child class provides its own implementation of a method 
that is already available and defined in parent class */

//parent class
class Student{

    getDetails(): void 
    {
        console.log("this method is for student details");
    }
}

//child class

class TenthClass extends Student
{
    override getDetails(): void
    {
        console.log("this method is for tenth class student details");
    }
}

// const student = new Student();
// student.getDetails();
const tenth = new TenthClass();
tenth.getDetails();