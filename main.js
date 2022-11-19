
let employee = {
    name: "Janet",
    title: "Teacher",
    grade: 3,
    salary: 65000
};

for(let key in employee){
    if(employee.hasOwnProperty(key)){
        console.log(`${key}: ${employee[key]}`)
    }
}