/*globals window*/
(function () {
    'use strict';
    angular.module('sbjkaApp.controllers', [])

        .controller('NavController', [ '$http', '$location', '$anchorScroll', function ($http, $location, $anchorScroll) {
            var win = window,
                doc = document,
                nav = this;

            nav.links = [];

            $http.get('js/data/nav-links.json', { cache: true }).success(function (data) {
                nav.links = data;
            });

            nav.isCurrent = function (thePage) {
                return $location.path() === thePage;
            };

            nav.mobitoggle = function (resetFlag) {
                var delayFlag,
                    tgt = doc.getElementById('header'),
                    isOpen = 'mobi-open';

                if (resetFlag) {
                    tgt.classList.remove(isOpen);
                    return;
                }

                if (!delayFlag) {
                    $anchorScroll();
                    delayFlag = true;
                    setTimeout(function () { delayFlag = false; }, 300);

                    if (tgt.classList.contains(isOpen)) {
                        tgt.classList.remove(isOpen);
                    } else {
                        tgt.classList.add(isOpen);
                    }
                }
            };

            doc.getElementById('menu-toggle').addEventListener('click', function () {
                nav.mobitoggle(false);
            }, false);

            doc.getElementById('navlinks').addEventListener('click', function () {
                if (doc.getElementById('header').classList.contains('mobi-open')) {
                    nav.mobitoggle(false);
                }
            }, false);

            win.addEventListener('resize', function () {
                if (win.innerWidth > 479) {
                    nav.mobitoggle(true);
                }
            }, false);
        }])

        .controller('KataController', [ '$http', function ($http) {
            var doc = document,
                kataList = this;

            kataList.kata = [];

            $http.get('js/data/kata.json', { cache: true }).success(function (data) {
                kataList.kata = data;
            });

            doc.getElementById('kata').addEventListener('click', function (e) {
                var tgt = e.target,
                    vidWrapper = doc.getElementById('vid-wrapper'),
                    vid = doc.getElementById('vid');

                e.preventDefault();

                if (tgt.hasAttribute('data-vid')) {
                    doc.getElementById('modal-header').textContent = e.target.textContent;
                    vid.setAttribute('src', 'http://www.youtube.com/embed/' + tgt.getAttribute('data-vid') + '?rel=0');
                    vidWrapper.classList.add('show');
                    doc.getElementById('modal').classList.add('show');
                } else if (tgt.hasAttribute('data-diag')) {
                    window.open('img/kata/lrg/' + tgt.getAttribute('data-diag') + '.png');
                }

                e.stopPropagation();
            });
        }])

        .controller('ModalController', function () {
            var modal = this;

            modal.close = function () {
                document.getElementById('modal').classList.remove('show');
                document.getElementById('vid').removeAttribute('src');
            };

        });
}());