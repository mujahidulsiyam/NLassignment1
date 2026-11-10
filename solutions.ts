
function multiplyValue (value:number,multiplier:number=2):number{
    return value * multiplier;
}



function processInput(value: string|number|boolean):string | number{
    if(typeof value === "string"){
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number"){
        return value*10;
    }
    else{
        if(value === true){
            return "Active";
        }
        else{
            return "Inactive";
        }
    }
}



function formatCoordinate(numbers:readonly[number,number,string]):string{
    
    return `Location: ${numbers[2]} (${numbers[0]}, ${numbers[1]})`
}




function concatenateArrays <T>(...arrays:T[][]):T[]{
    return arrays.flat()
}



    interface Course{
        title: string;
        students : number;
        isPublished :boolean;
    }

    function getPopularCourses(arr:Course[],minStudents:number):Course[]{
        return arr.filter(function(x){
            
            return x.isPublished == true && x.students >= minStudents
                
            
        }
    )
    }   









function pluckValues <T,K extends keyof T>(items: T[],key: K):T[K][]{
    return items.map(item=>item[key])
}





class Employee {
    constructor(protected name: string, private baseSalary: number){}



    getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}


class Manager extends Employee{
    constructor(name: string, baseSalary: number, private department: string){
        super(name,baseSalary)
    }

    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`
    }
}






async function validateAgeAsync(age:number):Promise<string>{
    if(age<18){
        throw new Error("Access Denied: Must be 18 or older")
    }
    await new Promise<void>(resolve =>{
        setTimeout(resolve,1000);
    });
    return "Access Granted";
}

