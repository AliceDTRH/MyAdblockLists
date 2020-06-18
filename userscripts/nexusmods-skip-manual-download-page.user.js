// ==UserScript==
// @name         Skip manual download page
// @namespace    github/AliceDTRH
// @source       https://github.com/AliceDTRH/MyAdblockLists
// @supportURL   https://github.com/AliceDTRH/MyAdblockLists/issues
// @updateURL    https://github.com/AliceDTRH/MyAdblockLists/blob/master/userscripts/nexusmods-skip-manual-download-page.user.js
// @version      0.1
// @description  This userscript skips the manual download page that ask you to upgrade your account before downloading on Nexus Mods.
// @author       AliceDTRH
// @match        https://www.nexusmods.com/*/mods/*?tab=files&file_id=*&nmm=1
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    $('#slowDownloadButton').click();
    // Your code here...
})();
