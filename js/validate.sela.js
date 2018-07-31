           // Form validation code will come here.
           

           function validate()
           {
            console.log("We this");
           
              if( document.myForm.Fullname.value == "" )
              {
                 alert( "Please provide your name!" );
                 document.myForm.Name.focus() ;
                 return false;
              }else{
                var val = document.myForm.Fullname.value;
                var matches = val.match(/\d+/g);
                if (matches != null) {
                    alert('Please Numbers are not allowed in the Name');
                }else{
                    // alert('not number'); 
                }
              }
              
              if( document.myForm.BinType.value == "-1" )
              {
                 alert( "Please provide your Bin type!" );
                 return false;
              }

              if( document.myForm.ServiceType.value == "-1" )
              {
                 alert( "Please provide your Service type!" );
                 return false;
              }

              if( document.myForm.Business.value == "-1" )
              {
                 alert( "Please provide your Business!" );
                 return false;
              }

              if( document.myForm.Location.value == "-1" )
              {
                 alert( "Please provide your Location!" );
                 return false;
              }

              if( document.myForm.Contact.value == "" )
              {
                 alert( "Please provide your Contact!" );
                 document.myForm.Name.focus() ;
                 return false;
              }else{
                var val = document.myForm.Contact.value;
                var matches = val.match(/\d+/g);
                if (matches != null) {
                    // alert('Please Numbers are not allowed in the Name');
                }else{
                    alert('Please Texts are not allowed in your Contact'); 
                }
              }

              if( document.myForm.TransId.value == "" )
              {
                 alert( "Please provide your Transaction ID!" );
                 document.myForm.Name.focus() ;
                 return false;
              }


              return( true );
           }

           function validateEmail()
            {
                var emailID = document.myForm.EMail.value;
                atpos = emailID.indexOf("@");
                dotpos = emailID.lastIndexOf(".");
                
                if (atpos < 1 || ( dotpos - atpos < 2 )) 
                {
                    alert("Please enter correct email ID")
                    document.myForm.EMail.focus() ;
                    return false;
                }
                return( true );
            }


            function isNumeric(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }

            function disable_commercial_true(){
                document.getElementById("business").disabled = true;
            }

            function disable_commercial_false(){
                document.getElementById("business").disabled = false;
            }

            function foo(select) {
                var id_value = select.options[select.selectedIndex].getAttribute("myid");
                
                if(id_value == 1){
                    disable_commercial_true();
                    
                }else{
                    disable_commercial_false();
                }
            }