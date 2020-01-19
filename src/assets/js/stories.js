/*! stories.js | Friendkit | © Css Ninja. 2019-2020 */

/* ==========================================================================
Stories functions
========================================================================== */

"use strict";

function initAutoTag() {
    $('.demo option').remove();

    $.ajax({
        url: 'assets/data/api/users/users.json',
        async: true,
        dataType: 'json',
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                var template = `
                    <option value="${data[i].user_id}">@${data[i].first_name} ${data[i].last_name}</option>
                `;

                $('.demo').append(template);

                if (i < data.length - 1) {
                    $('.demo').tokenize2({

                        // max number of tags
                        tokensMaxItems: 0,

                        // allow you to create custom tokens
                        tokensAllowCustom: false,

                        // max items in the dropdown
                        dropdownMaxItems: 6,

                        // minimum/maximum of characters required to start searching
                        searchMinLength: 0,
                        searchMaxLength: 0,

                        // specify if Tokenize2 will search from the begining of a string
                        searchFromStart: true,

                        // choose if you want your search highlighted in the result dropdown
                        searchHighlight: true,

                        // custom delimiter
                        delimiter: ',',

                        // display no results message
                        displayNoResultsMessage: false,
                        noResultsMessageText: 'No results mached "%s"',

                        // custom delimiter
                        delimiter: ',',

                        // data source
                        dataSource: 'select',

                        // waiting time between each search
                        debounce: 0,

                        // custom placeholder text
                        placeholder: false,

                        // enable sortable
                        // requires jQuery UI
                        sortable: false,

                        // tabIndex
                        tabIndex: 0,

                        // allows empty values
                        allowEmptyValues: false,

                        // z-inde
                        zIndexMargin: 500

                    });
                }
            }
        }
    })
}

$(document).ready(function () {

    initAutoTag();

    document.getElementById('story-upload').addEventListener('change', function (event) {
        var file = event.target.files[0];
        var fileReader = new FileReader();
        if (file.type.match('image')) {
            fileReader.onload = function () {
                var img = document.createElement('img');
                img.src = fileReader.result;
                document.getElementById('preview').appendChild(img);
            };
            fileReader.readAsDataURL(file);
        } else {
            fileReader.onload = function () {
                var blob = new Blob([fileReader.result], { type: file.type });
                var url = URL.createObjectURL(blob);
                var video = document.createElement('video');
                var timeupdate = function () {
                    if (snapImage()) {
                        video.removeEventListener('timeupdate', timeupdate);
                        video.pause();
                    }
                };
                video.addEventListener('loadeddata', function () {
                    if (snapImage()) {
                        video.removeEventListener('timeupdate', timeupdate);
                    }
                });
                var snapImage = function () {
                    var canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                    var image = canvas.toDataURL();
                    var success = image.length > 100000;
                    if (success) {
                        var img = document.createElement('img');
                        img.src = image;
                        document.getElementsByTagName('div')[0].appendChild(img);
                        URL.revokeObjectURL(url);
                    }
                    return success;
                };
                video.addEventListener('timeupdate', timeupdate);
                video.preload = 'metadata';
                video.src = url;
                // Load video in Safari / IE11
                video.muted = true;
                video.playsInline = true;
                video.play();
            };
            fileReader.readAsArrayBuffer(file);
        }
        var fileEl = document.getElementById('file-input');
        console.log(fileEl.files);
    });

})