
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


function calc(){

  var opt1 = document.getElementById('validationCustom01').value;
  var opt2 = document.getElementById('validationCustom02').value;
  var opt3 = document.getElementById('opt').value;


   if(opt3=="+"){
    var res = parseInt(opt1)+ parseInt(opt2);
     
   } else if(opt3=="-"){
     var res = parseInt(opt1)- parseInt(opt2);
    
   }else if(opt3 =="*"){
     var res = parseInt(opt1)* parseInt(opt2);
    
   }else if(opt3 =="/"){
     var res = parseInt(opt1)/ parseInt(opt2);
    
   }
    document.getElementById('res').value = res;

    if(opt1 === '' || opt2 === '' || opt3 == ''){
        document.getElementsByClassName('alert-success')[0].innerHTML ="Empty Filed!Please Input Valid Number";
    
    }else if(isNaN(opt1)  || isNaN(opt2)){
        document.getElementsByClassName('alert-success')[0].innerHTML ="Not a Number!Please Input Valid Number";

    }
      
   } 
  
  
