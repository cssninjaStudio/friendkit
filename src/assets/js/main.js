/*! main.js | Friendkit | © Css Ninja. 2019-2020 */

/* ==========================================================================
Main js file
========================================================================== */

"use strict";

//Set environment variable (Used for development)

/* 
    Possible values:
    1. development
    2. customization
*/

var env = 'development';

//Pageloader
initPageloader();

$(document).ready(function(){

    if (env === 'development') {
		//Demo images
        changeDemoHrefs();

        //Demo hrefs
        changeDemoImages();
    }

    //Lazy Load
    const el = document.querySelectorAll('[data-lazy-load]');
    const observer = lozad(el, {
        loaded: function(el) {
            // Custom implementation on a loaded element
            el.parentNode.classList.add('loaded');
        }
	});
	
    observer.observe();

    //Demo links
    $('.demo-link a').on('click', function(e){
        e.preventDefault();
        var theme = $(this).closest('.demo-link').attr('data-theme');
        window.localStorage.setItem('theme', theme);
        var href = $(this).attr('href');
        
        window.open(href);
    });
    
    //Toggle Dark mode
    toggleTheme(); 

    //Code highlight init
    $('.highlight-block code').each(function (i, block) {
        hljs.highlightBlock(block);
    });
    
    //Init navbar
    initNavbar();

    //Mobile menu toggle
    initResponsiveMenu();

    //Navbar dropdown
    initNavDropdowns();

    //Navbar Cart
    initNavbarCart();

    //Common Dropdown
    initDropdowns();

    //Sidebars
    initSidebar();

    //Tabs
    initTabs();

    //Modals
    initModals();

    //Subnavbar search
    initSubSearch();

    //Attribute background images
    initBgImages();

    //Feather icons initialization
    feather.replace();

    //Emojis
    ////initEmojis();
    initEmojiPicker();

    initLightboxEmojis();

    //Video Embed
    initVideoEmbed();

    //Load More
    initLoadMore();

    //Init tooltips
    initTooltips();

    //Init Like Button
    initLikeButton();

    //Init Simple Popover
    initSimplePopover();

    //Share modal demo
    initShareModal();

    //Init Plus Menu
    initPlusMenu();

    //Init Tipuedrop
    $('#tipue_drop_input').tipuedrop();

});



//Toast Service
var toasts = {}

toasts.service = {
    info: function (title, icon, message, position, t) {
        iziToast.show({
            class: 'toast',
            icon: icon,
            title: title,
            message: message,
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#0062ff',
            progressBarColor: '#bc7aff',
            position: position,
            transitionIn: 'fadeInDown',
            close: false,
            timeout: t,
            zindex: 99999,
        });
    },
    success: function (title, icon, message, position, t) {
        iziToast.show({
            class: 'toast',
            icon: icon,
            title: title,
            message: message,
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#0062ff',
            progressBarColor: '#fafafa',
            position: position,
            transitionIn: 'fadeInDown',
            close: false,
            timeout: t,
            zindex: 99999,
        });
    },
    error: function (title, icon, message, position, t) {
        iziToast.show({
            class: 'toast',
            icon: icon,
            title: title,
            message: message,
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#ff533d',
            progressBarColor: '#fff',
            position: position,
            transitionIn: 'fadeInDown',
            close: false,
            timeout: t,
            zindex: 99999,
        });
    }
}