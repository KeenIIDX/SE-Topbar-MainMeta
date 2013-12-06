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
// @grant none


// ==/UserScript==
function with_jquery(f) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "(" + f.toString() + ")(jQuery)";
    document.body.appendChild(script);
};


with_jquery(function($) {
	var chatLink = $('.related-links > a:contains("chat")');
	$(".topbar-menu-links").prepend(chatLink);
	
	var twinSite = $('.current-site .site-link:not(".current-site-link, [href*="careers"]")');
	var twinSiteUrl = twinSite.attr('href');
	var twinSiteText = twinSite.text();
	
	var hasMeta = twinSiteText.indexOf("Meta") > -1 ? true : false;
	var hasDiscussions = twinSiteText.indexOf("Discussions") > -1 ? true : false;
	var mainOrMeta = hasMeta || hasDiscussions ? "meta" : "main";
	
	$(".topbar-menu-links")
		.prepend($('<a>')
			.attr('href', twinSiteUrl)
			.html(mainOrMeta));
});