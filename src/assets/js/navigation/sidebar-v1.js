/*! sidebar-v1.js | Friendkit | © Css Ninja. 2019-2020 */

/* ==========================================================================
Sidebar v1 js file
========================================================================== */

"use strict";

function openSidebarV1() {
    $('.sidebar-v1-trigger').find('.icon-box-toggle').addClass('active');
    $('.sidebar-v1, .view-wrapper, .toolbar-v1-fixed-wrap').removeClass('is-fold');
}

function closeSidebarV1() {
    $('.sidebar-v1-trigger').find('.icon-box-toggle').removeClass('active');
    $('.sidebar-v1, .view-wrapper, .toolbar-v1-fixed-wrap').addClass('is-fold');
}

function initSidebarV1() {
    $('.sidebar-v1-trigger').on('click', function(){
        $('.sidebar-v1-trigger').find('.icon-box-toggle').toggleClass('active');
        $('.sidebar-v1, .view-wrapper, .toolbar-v1-fixed-wrap').toggleClass('is-fold');
    });

    $('#sidebar-v1-close').on('click', function(){
        $('.sidebar-v1-trigger .icon-box-toggle').toggleClass('active');
        $('.sidebar-v1, .view-wrapper, .toolbar-v1-fixed-wrap').toggleClass('is-fold');
    });

    if ($('*[data-open-sidebar]').length) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            if (window.matchMedia("(orientation: landscape)").matches) {
                openSidebarV1();
            }
        }
    }

    if ($('*[data-page-title]').length) {
        var title = $('[data-page-title]').attr('data-page-title');
        $('.toolbar-v1 h1').html(title);
    }

    $(window).on('resize', function(){
        if (window.matchMedia("(max-width: 768px)").matches) {
            if (window.matchMedia("(orientation: portrait)").matches) {
                closeSidebarV1();
            }
        }

        else {
            if (window.matchMedia("(orientation: landscape)").matches) {
                openSidebarV1();
            }
        }
    });

    $(window).on('scroll', function(){
        var height = $(window).scrollTop();
        if (height > 80) {
            $(".toolbar-v1-fixed-wrap").addClass('is-active');
        } else {
            $(".toolbar-v1-fixed-wrap").removeClass('is-active');
        }
    })
}

