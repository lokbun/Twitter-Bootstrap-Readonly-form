// Twitter Bootstrap Readonly form
// Rob Allison 2012
// Use how you like

(function( $ ){

  $.fn.readOnly = function() {
  	
  	var readOnlyForm = this;

  	//Hide the saveButton(s)
  	$('.readOnlySave').hide();

  	//Show the edit button
  	$('.editReadOnly').show();

  	//Loop through each '.controls'
  	readOnlyForm.find('.controls').each(function(){

  		//Avoid calling $(this) all the time
  		var me = $(this);

  		//Hide everything inside
  		$(this).children().hide();
  		
  		var myVal;

  		//Elements to search for
  		var textInputs = 		$('[type="text"]',me);
  		var passwordInputs = 	$('[type="password"]',me);
  		var selects = 			$('select',me);
  		var checkboxInputs = 	$('[type="checkbox"]',me);
  		var radioInputs = 		$('[type="radio"]',me);
  		var textareas = 		$('textarea',me);

  		//If it's a text input
  		if(textInputs.length){
  			myVal = textInputs.val();
  		} else if(passwordInputs.length){
  			myVal = "*******";
  		} else if(selects.length){
  			myVal = selects.find('option:selected').html();
  		} else if(checkboxInputs.length){
  			if(checkboxInputs.is(':checked')){
  				myVal = "<i class='icon-ok'>";
  			} else {
  				myVal = "<i class='icon-remove'>";
  			}
  		} else if(radioInputs.length){
  			myVal = $('[type="radio"]:checked',me).parent().text();
  		} else if(textareas.length){
  			myVal = textareas.val();
  		}

  		myVal = $.trim(myVal);
  		myVal = (myVal ? myVal : "---")
  		$(this).append('<span class="readOnlyCont muted">'+myVal+'</span>');

  	});
	
	//Add click listener to edit buttton(s)
	readOnlyForm.find('.editReadOnly').click(function(){

		//Show save button(s)
		$('.readOnlySave').show();
		
		//Hide myself
		$(this).hide();

		readOnlyForm.find('.readOnlyCont').remove();

		//Loop through each '.controls'
		readOnlyForm.find('.controls').each(function(){
			$(this).children().show();
		});

	});

  };
})( jQuery );