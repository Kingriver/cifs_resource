function validate(){if(!(0<(e=$("#employer_telphone")).length))var e=$("#job_employer_telphone");return/^1\d{10}$/.test(e.val())?(e.parent().find(".notice").addClass("hidden"),!0):(e.focus(),e.parent().find(".notice span").html("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7"),e.parent().find(".notice").removeClass("hidden").show(),!1)}$(document).on("click","#get-v-code",function(e){e.preventDefault();var t=$("#get-v-code"),o=$("#token_code");if(validate()){t.addClass("disabled").html("30s\u540e\u83b7\u53d6"),o.removeAttr("disabled");var a=30,n=setInterval(function(){0===--a?(t.html("\u83b7\u53d6\u9a8c\u8bc1\u7801").removeClass("disabled"),clearInterval(n)):t.html(a+"s\u540e\u83b7\u53d6")},1e3);if(!(0<(l=$("#employer_telphone")).length))var l=$("#job_employer_telphone");var d=l.val();$.ajax({method:"POST",url:"/securitycode/send",data:{phone:d},dataType:"script"})}}),$(document).on("focusout","#token_code",function(){var e=$(this).val().trim(),t=$("#job_employer_telphone").val(),o=$("#job_employer_telphone").data("is-phone-checked"),a=/\d{4}/.test(e);o||a&&$.ajax({type:"POST",url:"/securitycode/validate",dataType:"script",data:{telphone:t,token_code:e}})});