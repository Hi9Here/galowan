/**
 * Angular App to drive the Home page.
 * Below is a list of custom directives which
 * make up the Page
 */

var app = angular.module('landingpage', []);

app.directive('navBlock', function() {
    return {
        restrict: 'E',
        templateUrl: 'Angular Blocks/nav-block.html'
    };
});


app.directive('headingBlock', function() {
    return {
        restrict: 'E',
        templateUrl: 'Angular Blocks/heading-block.html'
    };
});

app.directive('aboutBlock', function() {
    return {
        restrict: 'E',
        templateUrl: 'Angular Blocks/about-block.html'
    };
});

app.directive('sleepBlock', function() {
    return {
        restrict: 'E',
        templateUrl: 'Angular Blocks/sleep-block.html'
    };
});

app.directive('eatBlock', function() {
    return {
        restrict: 'E',
        templateUrl: 'Angular Blocks/eat-block.html'
    };
});

app.directive('meetBlock', function() {
    return {
        restrict: 'E',
        templateUrl: 'Angular Blocks/meet-block.html'
    };
});

app.directive('sliderBlock', function() {
    return {
        restrict: 'E',
        templateUrl: 'Angular Blocks/slider-block.html'
    };
});

app.directive('playBlock', function() {
    return {
        restrict: 'E',
        templateUrl: 'Angular Blocks/play-block.html'
    };
});

app.directive('testimonialsBlock', function() {
    return {
        restrict: 'E',
        templateUrl: 'Angular Blocks/testimonials-block.html'
    };
});


app.directive('contactBlock', function() {
    return {
        restrict: 'E',
        templateUrl: 'Angular Blocks/contact-block.html'
    };
});

app.directive('footerBlock', function() {
    return {
        restrict: 'E',
        templateUrl: 'Angular Blocks/footer-block.html'
    };
});

app.directive('bookBlock', function() {
    return {
        restrict: 'E',
        templateUrl: 'Angular Blocks/book-block.html'
    };
});

app.directive('textBlock', function() {
    return {
        restrict: 'E',
        templateUrl: 'Angular Blocks/text-block.html'
    };
});

app.directive('photographerBlock', function() {
    return {
        restrict: 'E',
        templateUrl: 'Angular Blocks/photographer-block.html'
    };
});
