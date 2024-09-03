$(function () {
    $('.page-scroll').on('click', function(e){
    
        //ambil isi href
        var tujuan = $(this).attr('href');
        
        //tangkap elemen yg diklik
        var elemenTujuan =$(tujuan);
        
        
        //animasi scroll
        $('html, body').animate({
            scrollTop: elemenTujuan.offset().top -300
        }, 700);
        
        e.preventDefault();
    });
});