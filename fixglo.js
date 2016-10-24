'use strict';

/*
Each time a tab is updated, reset the page action for that tab.
*/
fixGlo();

browser.runtime.sendMessage({
  type: "notify-attached-tab",
});



function fixGlo()
{
    [].slice.call(document.styleSheets)
            .map(   function(styleSheet)
                    {
                        // processing only Globallogic' sheets
                        if (   styleSheet.href.match(/globallogic/gi)
                            && styleSheet.cssRules )
                        {
                            [].slice.call(styleSheet.cssRules)
                                    .map(   function (cssRule)
                                            {
                                                if(     cssRule.style !== undefined
                                                    && cssRule.style["word-break"] !== undefined )
                                                {
                                                    //console.log(cssRule.style["word-break"]); //speedwaster
                                                    cssRule.style["word-break"] = "unset";
                                                }
                                            }
                                    );
                        }
                    }
            );
}
