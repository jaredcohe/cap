// this runs on page load
$("#bookmarkletTriggerId").bind("click", bmlNoDropbox);

function bmlNoDropbox(event) {
  var  head = document.head || document.getElementsByTagName( "head" )[0] || document.documentElement,
       tag = document.createElement('script');
  
  tag.async = true;
  tag.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js";
  tag.onload = function(){
      console.log('jquery loaded');
      //jQuery.getScript(dropboxPath);
      
      var searchArray = ["%",'like this'];
      var targetTextArray = ['#body'];

      for (var i = 0; i < targetTextArray.length; i++)
      {
        var targetText = $(targetTextArray[i]).html();
    		console.log('OooooooooOOOO, I love Jared!');

        for (var j = 0; j < searchArray.length; j++)
        {
          var searchTerm = searchArray[j];
          var highlightStartTag = "<font style='color:black; background-color:#AFFACE;'>";
          var highlightEndTag = "</font>";
          var newText = "";
          var k = -1;
          var lcSearchTerm = searchTerm.toLowerCase();
          var lcTargetText = targetText.toLowerCase();

          while (targetText.length > 0)
            {
            k = lcTargetText.indexOf(lcSearchTerm, k+1);
            if (k < 0)
              {
                newText += targetText;
                targetText = "";
              } else
              {
                if (targetText.lastIndexOf('>', k) >= targetText.lastIndexOf('<', k))
                  {
                    newText += targetText.substring(0, k) + highlightStartTag + targetText.substr(k, searchTerm.length) + highlightEndTag;
                    targetText = targetText.substr(k + searchTerm.length);
                    lcTargetText = targetText.toLowerCase();
                    k = -1;
                  }
              } //end else
            } //end while
          targetText = newText;

        } //end j loop
        $(targetTextArray[i]).html(targetText); // replace the text
      } //end i loop
  }
  head.insertBefore( tag, head.firstChild );
}

