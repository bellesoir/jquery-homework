$('body').on('click', function(){
    $('nav').on('click', function(){
        $('nav').animate({
            width: 110,
            height: 120
        });
        $('body').animate({
            paddingTop: 120
        });
    });

    $('nav').on('mouseover', function(){
        $('nav').animate({
            width: '100%',
            height: 30
        });
        $('body').animate({
            paddingTop: 30
        });
    });

    $('h1').on('click', function(){
        $('h1').animate({
            fontSize: '6em'
        });
    });

    $('p').on('mouseout', function(){
        $(this).fadeOut(500, function(){
            $(this).fadeIn(500);
        });
    });

    $('form h2').on('mouseover', function(){
        $(this).slideUp(1000, function(){
            $(this).slideDown(2000);
        });
    });

    $('.button h2').on('mouseover', function(){
        if ($('.button h2').css('left') == '-300px' ){
            $('.button h2').animate({
                left: 300
            });
        } else {
            $('.button h2').animate({
                left: -300
            });
        }
    });

    $('#submit').on('click', function(){
        $('form').animate({
            opacity: 0.25
        }, 5000, function(){
            $('form').animate({
                opacity: .75
            }, 2000, function(){
                $('form').fadeOut(2000);
            });
        });
    });

    $('img').on('dblclick', function(){
            $('.cute').toggle();
            $('.scary').toggle();
    });

    $('h3').on('click', function(){
        $('h3').animate({
            fontSize: '3em',
            top: -400
        }, 3000);
        $('h3').fadeOut(3000, function(){
            $('h3').css('font-size', '1.5em');
            $('h3').css('top', '0');
            $('h3').show();
        });
    });

    //flashes 'danger' and starts fading out all elements
    $('#the-button').on('click', function(){
        $('#danger').show();
        $('#danger').animate({
            backgroundColor: 'rgb(249, 245, 0)',
            color: 'red'
        }, 200, function(){
                $('#danger').animate({
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    color: 'black'
                },200, function(){
                        $('#danger').animate({
                            backgroundColor: 'rgb(249, 245, 0)',
                            color: 'red'
                        },200, function(){
                            $('#danger').animate({
                                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                                color: 'black'
                            },200, function(){
                                $('#danger').hide(function(){
                                    $('#the-button').hide();
                                       $('h2').fadeOut(1000);
                                       $('h3').fadeOut(2000);
                                       $('p').fadeOut(3000);
                                       $('.cute').hide();
                                       $('.scary').show();
                                       $('.scary').fadeOut(9000);
                                       $('form').fadeOut(4000);
                                       $('nav').fadeOut(6000);
                                       $('h1').animate({
                                           color: 'white',
                                           top: 250
                                       },9000);
                                       $('h1').fadeOut(9000);
                                       $('body').animate({
                                           backgroundColor: 'black'
                                       }, 12000);
                                       $('body').fadeOut(10000, function(){
                                           alert('Hard Drive Wipe Initiated');
                                           alert('Just Kidding! You just couldn\'t resist pushing that button, could you?')
                                       });
                                });
                            });
                        });
                });
        });

    });
});
