// ==UserScript==
// @name MainMetaLink
// @description Adds the main link back to mSO, right where it belongs.
// @namespace Undo (This is to avoid conflicts with userscripts that share a name)
// @author Undo
// @license GNU GPL v3 (http://www.gnu.org/copyleft/gpl.html)
// @include http://stackoverflow.com/*
// @include http://serverfault.com/*
// @include http://superuser.com/*
// @include http://meta.stackoverflow.com/*
// @include http://meta.serverfault.com/*
// @include http://meta.superuser.com/*
// @include http://stackapps.com/*
// @include http://*.stackexchange.com/*
// @include http://askubuntu.com/*
// @include http://meta.askubuntu.com/*
// @include http://answers.onstartups.com/*
// @include http://meta.answers.onstartups.com/*
// @include http://mathoverflow.net/*
// @include http://meta.mathoverflow.net/*
// @include http://discuss.area51.stackexchange.com/*
// @exclude http://chat./


// ==/UserScript==
function with_jquery(f) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "(" + f.toString() + ")(jQuery)";
    document.body.appendChild(script);
};



with_jquery(function($) {
	if ( document.location.host.indexOf("area51.") == -1 ) {
		if ( document.location.host.indexOf("meta.") == 0 ) {
			$(".topbar-menu-links").prepend("<a href='http://chat." + document.location.host.slice(5) + "'>chat</a>");
			$(".topbar-menu-links").prepend("<a href='http://" + document.location.host.slice(5) + "'>main</a>");
		} else {
			$(".topbar-menu-links").prepend("<a href='http://chat." + document.location.host + "'>chat</a>");
			$(".topbar-menu-links").prepend("<a href='http://meta." + document.location.host + "'>meta</a>");
		}
	} else {
		$(".topbar-menu-links").prepend("<a href='http://chat.stackexchange.com'>chat</a>");
		if ( document.location.host.indexOf("discuss.") == 0 ) {
			$(".topbar-menu-links").prepend("<a href='http://" + document.location.host.slice(8) + "'>main</a>");
		} else {
			$(".topbar-menu-links").prepend("<a href='http://discuss." + document.location.host + "'>discuss</a>");
		}
	}
});