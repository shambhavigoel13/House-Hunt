
function checkPassword(form) { 
 //to validate name
 var regex = /^[a-zA-Z]+$/;
    if(regex.test(form.yourname.value) == false){
   alert("Name must be in alphabets only");
   form.yourname.focus();
   return false;
    }
    
                password1 = form.password1.value; 
                password2 = form.password2.value; 
  
                // If password not entered 
                if (password1 == '') 
                    alert ("Please enter Password"); 
                      
                // If confirm password not entered 
                else if (password2 == '') 
                    alert ("Please enter confirm password"); 
                      
                // If Not same return False.     
                else if (password1 != password2) { 
                    alert ("\nPassword did not match: Please try again...") 
                    return false; 
                } 
  
                // If same return True. 
                else{
				
                    alert("Password Match: Welcome to House hunt!") 
                    return true; 
                } 
				
            } 
		


