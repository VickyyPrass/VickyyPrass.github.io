// SCROLLING
$(document).ready(function() {
    // tambah efek  smooth scrolling ke semua link
    $("a").on("click", function(e) {
        if (this.hash !== "") {
            // Menghentikan aksi default tag a
            e.preventDefault();
            // mengambil tag a yang mempunyai #
            const hash = this.hash;

            // menambahkan animate untuk scroll smooth
            $("html,body").animate({
                    scrollTop: $(hash).offset().top - 50,
                },
                1250,
                "swing"
            );
        } // End if
    });

    $(window).scroll(function() {
        let scroll = $(this).scrollTop();

        // jumbotron
        $(".jumbotron img").css({
            transform: "translate(0," + -scroll / 4.5 + "%)",
        });
        $(".jumbotron h1").css({
            transform: "translate(0," + scroll / 3.5 + "%)",
        });
        $(".jumbotron p").css({
            transform: "translate(0," + scroll / 1.3 + "%)",
        });

        // portfolio
        // if (scroll > $(".portfolio").offset().top - 350) {
        //     $(".portfolio .thumbnail").each(function(i) {
        //         setTimeout(function() {
        //             $(".portfolio .thumbnail").eq(i).addClass("show");
        //         }, 500 * i);
        //     });
        // }
    });


});


// ABOUT
/* $(window).on("load", function() {
    
    $(".pLeft").addClass("pShow");
    $(".pRight").addClass("pShow");
}); */