$(function(){$("#contactForm input,#contactForm textarea").jqBootstrapValidation({preventSubmit:!0,submitError:function(a,b,c){},submitSuccess:function(a,b){$("#btnSubmit").attr("disabled",!0),b.preventDefault();var c=$("input#name").val(),d=$("input#email").val(),e=$("input#phone").val(),f=$("textarea#message").val(),g=c;g.indexOf(" ")>=0&&(g=c.split(" ").slice(0,-1).join(" ")),$.ajax({url:"././mail/contact_me.php",type:"POST",data:{name:c,phone:e,email:d,message:f},cache:!1,success:function(){$("#btnSubmit").attr("disabled",!1),$("#success").html("<div class='alert alert-success'>"),$("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-success").append("<strong>Your message has been sent. </strong>"),$("#success > .alert-success").append("</div>"),$("#contactForm").trigger("reset")},error:function(){$("#success").html("<div class='alert alert-danger'>"),$("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-danger").append("<strong>Sorry "+g+", it seems that my mail server is not responding. Please try again later!"),$("#success > .alert-danger").append("</div>"),$("#contactForm").trigger("reset")}})},filter:function(){return $(this).is(":visible")}}),$('a[data-toggle="tab"]').click(function(a){a.preventDefault(),$(this).tab("show")})}),$("#name").focus(function(){$("#success").html("")});