$(window).on('resize',imageGrid);
$(window).load(imageGrid);

$('.sidebar-nav').children().click(function() {
    imageGrid();
});

function imageGrid() {
    var $vw = $('.wrapper').height();
    var $imageEach = $('.image-grid-each');
    var image = $('.image-grid-each img');
    
        // slice every 3 images to make a row.
        if ($vw > 400)  {
            for (var i = 0; i < $imageEach.length; i += 3) {
                $imageEach.slice(i, i+3).wrapAll("<div class='image-grid-slice'></div>");
            }
        }
        //adjust the margin according to screen size.
        if ($vw < 700) {
            $($imageEach).css('margin','10px 5px');
        }
        else if ($vw > 700) {
            $($imageEach).css('margin','20px 10px');
        }
    }


    // $('.image-grid-each').each(function(i){
    //     var $object_bottom = $(this).offset().top + $(this).height();
    //     var $object_right = $(this).offset().left + $(this).width();
    //     var $object_top = $(this).offset().top;
    //
    //     if($vw < $object_bottom){
    //         $(this).css({
    //
    //         });
    //     }
    //     console.log($object_right);
    // });
