const employeesJSON = require('./employees.json');
const managersJSON = require('./managers.json');

// Code Here
class Employee {
    constructor(name, position ,yearJoined, salary)
    {
        this.name = name;
        this.position = position;
        this.yaerJpoined = yearJoined;
        this.salary = salary;
    } 

    idBadge(){

      Employee.emloyees.filter((emp1) => {
        
        return ( "<" + emp1.position + ">" + ":  " +"<" + emp1.name + ">")});

    

    }
//2. Create a variable called `superHeroes` which will have ony employees who are developers.
    function (employees) {
        let superHeroes = [];
         for ( i =0 ; i <= employees.lenght ; i++){
            if ( employees.emp[1] === "Developer" ){

                superHeroes.push(employees.emp[1])

            }
         }
         
    }

  
}

class Maneger extends Employee {
    constructor(name, position, salary, bonusPercentage, currentYear){
        super(name , position, yaerJoined, salary);
        this.bonusPercentage = bonusPercentage;
        this.currentYear = currentYear;
     }

        salaryIncreas(increaseAmount){

        return this.salery = salary + increaseAmount; 

       }
       


       logManagerInfo =(name, yearJoined, bounusPercentage) =>{

        return ("name: " + name + "\n" + "since: " + yearJoined + "\n" + "Bonus: " + bounusPercentage );

       }


       getWorkingYears =( yaerJoined , currentYear) => {

        return (workingYears = currentYear - yaerJoined);

       }

       employees.forEach ((idBadge.emp1[1])) {
         
        return idBadge.emp1[1]; //dont understand the code!! i just made it up 
        
    };

    

    
     function(managers){
        for (i=0 ; i <= managers.length ; i++){

            if (getWorkingYears.workingYears === 11){

                return salaryIncreas(1000);
            }

        }
     };

     managers.forEach=(manager)=>{

        return logManagerInfo();
     }

    }


    const mapemployee = new Map( Object.entries(employeesJSON) );
    const mapmanager = new Map( Object.entries(managersJSON) );













}