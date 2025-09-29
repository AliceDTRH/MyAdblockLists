// ==UserScript==
// @name         Skip manual download page
// @namespace    github/AliceDTRH
// @source       https://github.com/AliceDTRH/MyAdblockLists
// @supportURL   https://github.com/AliceDTRH/MyAdblockLists/issues/new/choose
// @updateURL    https://github.com/AliceDTRH/MyAdblockLists/raw/master/userscripts/nexusmods-skip-manual-download-page.user.js
// @downloadURL  https://github.com/AliceDTRH/MyAdblockLists/raw/master/userscripts/nexusmods-skip-manual-download-page.user.js
// @version      0.4
// @description  This userscript skips the manual download page that ask you to upgrade your account before downloading on Nexus Mods.
// @author       AliceDTRH
// @match        https://www.nexusmods.com/*/mods/*?tab=files&file_id=*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    var shadowRoot = document.querySelector('mod-file-download').shadowRoot
    var slowDownloadButton = shadowRoot.querySelector('button')

    if(slowDownloadButton != null) {
        console.info("[nexusmods-skip-manual-download-page.user.js]","Clicking download button."); slowDownloadButton.click();
    } else {
        console.info("[nexusmods-skip-manual-download-page.user.js]","Did not find download button.");
    }
})();
