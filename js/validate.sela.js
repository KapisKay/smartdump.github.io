           // Form validation code will come here.
           

           function validate()
           {
            console.log("We this");
           
              if( document.myForm.Fullname.value == "" )
              {
                 alert( "Please provide your name!" );
                 document.myForm.Name.focus() ;
                 return false;
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