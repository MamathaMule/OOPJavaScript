
class Student {
constructor(name, rollNo, marks) {
this.name = name;
this.rollNo = rollNo;
this.marks = marks;

}

}

class UI {

addStudentToList(student) {

        const list = document.getElementById('student-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        
        <td>${student.name}</td>
        <td>${student.rollNo}</td>
        <td>${student.marks}</td>
        <td><a href="" class="delete">X</a></td>

        `;
console.log(row);
list.appendChild(row);

    
}

showAlert(message, className){

            const div = document.createElement('div');

            //Add className

            div.className = `alert ${className}`;
            
            div.appendChild(document.createTextNode(message));
            
            const container = document.querySelector('.container');
            
            //Get Form
            
            const form = document.querySelector('#student-form');
            
            //Insert alert
            
            container.insertBefore(div, form);
            
            // Timeout after 3 sec
        
            setTimeout(function(){
            
                document.querySelector('.alert').remove();
            }, 3000);
            

}
deleteStudent(target) {

    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();

    }
}

clearFields(){

    document.getElementById('name').value = '';
    document.getElementById('rollNo').value = '';
    document.getElementById('marks').value = '';

}

}

//Event Listening

document.getElementById('student-form').addEventListener('submit',function(e){
    
    //Get form values
    
    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('rollNo').value;
    const marks = document.getElementById('marks').value;
    
    //Instantiate 
    const student = new Student(name, rollNo, marks);

    //Instantiate UI
    const ui = new UI();
    
    //Validate
    if(name === '' || rollNo === '' || marks === '') {
    
        //Error alert
    
        ui.showAlert('please fill in all fields', 'error');
    }
    else{
    
    //Add Student to list
    
    ui.addStudentToList(student);
    
    //show success
    
    ui.showAlert('Student Details Added Successfully', 'success');
    
    // Clear Fields
    
    ui.clearFields();
       
    }
    
    e.preventDefault();
    })
    
    //Event listening for delete 
    document.getElementById('student-list').addEventListener('click', function(e){

    //Instantiate UL
    const ui = new UI();

    // Delete Student
    ui.deleteStudent(e.target);
    
    //Show Message
    
    ui.showAlert('Student Details Removed!', 'success');
    
    
    e.preventDefault();
    });
