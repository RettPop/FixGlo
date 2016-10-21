'use strict';

/*
Each time a tab is updated, reset the page action for that tab.
*/
//chrome.tabs.onUpdated.addListener((id, changeInfo, tab) => {
//	chrome.pageAction.show(tab.id);
//    });


fixGlo();
function fixGlo(preHandler)
{
    try
    {
	for (var idsh=0; idsh < document.styleSheets.length; idsh++)
	{
	    try
	    {
		for (var idx=1; idx <= document.styleSheets[idsh].cssRules.length; idx++)
		{
		    if( document.styleSheets[idsh].cssRules !== undefined
			    && document.styleSheets[idsh].cssRules[idx].style !== undefined
			    && document.styleSheets[idsh].cssRules[idx].style["word-break"] !== undefined )
		    {
			console.log(document.styleSheets[idsh].cssRules[idx].style["word-break"]);
			document.styleSheets[idsh].cssRules[idx].style["word-break"] = "unset";
		    }
		}
	    }
	    catch(e) {
	    }
	}
    }
    catch(e) {
    }
}

