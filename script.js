jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
 
  $( "#myform" ).validate({
      rules: {
        fname: {
        required: true,
        rangelength: [3, 10]
      },
      email: {
        required: true,
        email: true
    },
    age: {
        required: true,
        number: true
    },
    },

    messages: {
        name: "فیلد نام وارد کن ",
        email: { required:"فیلد ایمیل را وارد کن",
                   email:"ایمیل را درست وارد کن"
    },
        age: {
            required: "فیلد سن را وارد کن",
            number: "داده را بصورت عددی وارد کن"
        },
    }
  });

 
function functionValid(){
var test =$("#myform").valid();
console.log(test);

if (test === true){
    var frm = $('#myform');
    
    frm.submit(function (e) {
    $.ajax({
        url: 'https://api.noaeincloud.ir/api/sample',
        data:frm.serialize(),
        type: 'GET',
        dataType: 'JSON',
        beforeSend: function() {
      
        },
        success: function(xhr, response) {
            
            swal({
                title: "it is registered !",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!",
              });
        },
        error: function(xhr, status, error) {
          
            swal ( xhr.message ,  "Something went wrong!" ,  "error" )
        },
     
      });
    
})
}

}
