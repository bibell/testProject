const mongoose=require('mongoose')

const employee=new mongoose.Schema({
    employeeName:'' ,
    employeeBirth:'',
    employeeGender:'',
    employeeSalary:''
})

module.exports=mongoose.model('employeeDataBase',employee)