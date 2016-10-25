"use strict";

browser.runtime.onMessage.addListener(function(msg, sender)
                                    {
                                        // display plugin icon
                                        if( msg.showIcon == true ) {
                                            chrome.pageAction.show(sender.tab.id);
                                        }
                                    });
