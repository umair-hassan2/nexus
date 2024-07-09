// $(window).scroll(function(){
//     if(1 === 0){
//         $('.firstBar').addClass('gayab');
//         $(".secondBar").removeClass("gayab");
//     } else{
//         $('.firstBar').removeClass('gayab');
//         $(".secondBar").addClass("gayab");
//     }
// });
let isRotated = false;
document.getElementsByClassName("services-link")[0].addEventListener("click" , (e)=>{
    e.preventDefault();
    console.log("clicked");
    $('#dropMenu').toggleClass("displayNone");

    if (!isRotated) {
        $('#dropdownIcon').css({
            'transform': 'rotate(180deg)',
            'transition': 'transform 0.5s ease'
        });
        isRotated = true;
    } else {
        $('#dropdownIcon').css({
            'transform': 'rotate(360deg)', // Rotating back to the original position
            'transition': 'transform 0.5s ease'
        });
        isRotated = false;
    }

})

// a function to fetch pictures for slider
function fetchImages(imagePaths){
    return `
                    <div class="row clients-testimonials" data-aos="fade-up">
                    <div class="col-full">
                        <div class="testimonials">
                            <div>
                                <img src="../static/images/testimonials/one.jpeg" alt="Author image">
                            </div>
        
                            <div>
                                <img src="../static/images/testimonials/second.jpeg" alt="Author image">
                            </div>
        
                            <div>
                                <img src="../static/images/testimonials/third.jpeg" alt="Author image">
                            </div>
        
                            <div>
                                <img src="../static/images/testimonials/four.jpeg" alt="Author image">
                            </div>
        
                            <div>
                                <img src="../static/images/testimonials/five.jpeg" alt="Author image">
                            </div>
        
                            <div>
                                <img src="../static/images/testimonials/six.jpeg" alt="Author image">
                            </div>
        
                            <div>
                                <img src="../static/images/testimonials/seven.jpeg" alt="Author image">
                            </div>
        
                            <div>
                                <img src="../static/images/testimonials/eight.jpeg" alt="Author image">
                            </div>
                            
                            <div>
                                <img src="../static/images/testimonials/nine.jpeg" alt="Author image">
                            </div>
                            
                            <div>
                                <img src="../static/images/testimonials/ten.jpeg" alt="Author image">
                            </div>
                            
                            <div>
                                <img src="../static/images/testimonials/eleven.jpeg" alt="Author image">
                            </div>
                            
                            <div>
                                <img src="../static/images/testimonials/twelve.jpeg" alt="Author image">
                            </div>
                            
                            <div>
                                <img src="../static/images/testimonials/thirteen.jpeg" alt="Author image">
                            </div>
                            
                            <div>
                                <img src="../static/images/testimonials/fourteen.jpeg" alt="Author image">
                            </div>
                            
                            <div>
                                <img src="../static/images/testimonials/fifteen.jpeg" alt="Author image">
                            </div>
                            
                            <div>
                                <img src="../static/images/testimonials/sixteen.jpeg" alt="Author image">
                            </div>
                            
                            <div>
                                <img src="../static/images/testimonials/seventeen.jpeg" alt="Author image">
                            </div>
                            
                            <div>
                                <img src="../static/images/testimonials/eighteen.jpeg" alt="Author image">
                            </div>
                            
                        </div><!-- end testimonials -->
                        
                    </div> <!-- end col-full -->
                </div> <!-- end client-testimonials -->
    `;
}