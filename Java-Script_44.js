

var f_event = document.getElementById("firstname"); 
f_event.onblur = function dutta1()
{
	var f_name = document.getElementById("firstname").value; 
	var f_name_input = document.getElementById("firstname");
	var f_icon = document.getElementById("f_worning"); 

	if(f_name == "")
	{
		f_name_input.style.border = "red solid 1px";
		f_icon.style.display = "block";
	}
}


