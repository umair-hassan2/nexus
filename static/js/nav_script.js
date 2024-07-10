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
    let fullImagePaths = ``;
    for(let i = 0;i < imagePaths.length;i++){
        fullImagePaths += `
            <div>
                <img src="../static/images/${imagePaths[i]}" alt="Author image">
            </div>
        `;
    }
    return fullImagePaths;
}