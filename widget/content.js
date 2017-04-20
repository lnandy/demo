$(function(){
    $('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        navigationTooltips: ['1','2','3','4'],
        'navigation': true,
        loopBottom: true
    });
    $('#last').on('click',function(){
        imgAutoChange.changeImgGoLast();
    });
    $('#next').on('click',function(){
        imgAutoChange.changeImgGoNext();
    });
});

