function calc(){

    let opt1 = document.getElementById('num1').value;
    let opt2 = document.getElementById('num2').value;
    let opt3 = document.getElementById('opt').value;

    if(opt3=="+"){
      var res = parseInt(opt1)+ parseInt(opt2);
    } else if(opt3=="-"){
        var res = parseInt(opt1)- parseInt(opt2);
    }else if(opt3=="*"){
        var res = parseInt(opt1)* parseInt(opt2);
       
    }else{
        var res = parseInt(opt1)/ parseInt(opt2);
    }
    document.getElementById('result').value = res;
    
}



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
  
