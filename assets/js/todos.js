//Check off specific to-dos by clicking

//Because we need this function to work for future
//lis, we need to use .on() instead of .click()
// $("li").click(function(){
// 	$(this).toggleClass("completed");
// });

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

	// by adding class "completed" to our css file we have eliminated
	//all of the code used below :D
	// //if li is grey
	// if ($(this).css("color") === "rgb(128, 128, 128)"){
	// 	//turn li black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// }
	// //else
	// else{
	// 	//turn li grey
	// 	$(this).css({
	// 		color: "grey",
	// 		textDecoration: "line-through"
	// 	});
	// }

	//Click on X to delete To-Do
	$("ul").on("click", "span", function(event){
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		});
		event.stopPropagation();
	});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//creat a new li and add to ul
		$("ul").append("<li><span><i class ='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});