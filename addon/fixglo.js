'use strict';

(function()
    {
        browser.runtime.sendMessage( {"showIcon" : true} ); // show plugin icon
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
                                                        //console.log(cssRule.style["word-break"]); //speed eater
                                                        cssRule.style["word-break"] = "unset";
                                                    }
                                                }
                                        );
                            }
                        }
                );
    }
)();

var p = undefined;
