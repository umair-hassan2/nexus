const GENIUS_BLOG_PLAN_ID = "price_1PbLvCRpdWCgKVCA5ULIgTQQ";
const SPOTIFY_PLAN_ID = "price_1PbLwhRpdWCgKVCAPUUPCgQI";
const SOUND_CLOUD_ID = "price_1PbLxCRpdWCgKVCA5J9Q5Q8Q";
const YOUTUBE_PLAN_ID = "price_1PbLzCRpdWCgKVCA5J9Q5Q8Q";
const GOLD_PLAN_ID = "price_1PbLzCRpdWCgKVCA5J9Q5Q8Q";
const PLATINUM_PLAN_ID = "price_1PbM0CRpdWCgKVCA5J9Q5Q8Q";
const DIAMOND_PLAN_ID = "price_1PbM1CRpdWCgKVCA5J9Q5Q8Q";
const NEXUSS_PLAN_ID = "price_1PbM2CRpdWCgKVCA5J9Q5Q8Q";

const stripe = Stripe("pk_test_51PbJAlRpdWCgKVCA9srthb9mwm18EQq0y2foHE9zM9wKTsn5vgicHatUQFRJ9X3d4cODH99VuIOfYzNNTp516ygi00aNtM6ax2");

async function getStripeSession(productId){
    const response = await fetch("./create-checkout-session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            productId: productId
        })
    });
    return response.json();
}

async function redirectToCheckout(productId){
    const { sessionId } = await getStripeSession(productId);
    const { error } = await stripe.redirectToCheckout({
        sessionId
    });
    if(error){
        console.error(error);
    }
}

document.getElementById("genius-blog-button").addEventListener("click", function(){
    console.log("genius blog button clicked")
    redirectToCheckout(GENIUS_BLOG_PLAN_ID);
});

document.getElementById("spotify-plan-button").addEventListener("click", function(){
    console.log("spotify plan button clicked")
    redirectToCheckout(SPOTIFY_PLAN_ID);
});

document.getElementById("sound-cloud-plan-button").addEventListener("click", function(){
    console.log("sound cloud plan button clicked")
    redirectToCheckout(SOUND_CLOUD_PLAN_ID);
});

document.getElementById("youtube-plan-button").addEventListener("click", function(){
    console.log("youtube plan button clicked")
    redirectToCheckout(YOUTUBE_PLAN_ID);
});

document.getElementById("gold-plan-button").addEventListener("click", function(){    
    console.log("gold plan button clicked")
    redirectToCheckout(GOLD_PLAN_ID);
});

document.getElementById("platinum-plan-button").addEventListener("click", function(){
    console.log("platinum plan button clicked")
    redirectToCheckout(PLATINUM_PLAN_ID);
});

document.getElementById("diamond-plan-button").addEventListener("click", function(){
    console.log("diamond plan button clicked")
    redirectToCheckout(DIAMOND_PLAN_ID);
});

document.getElementById("nexuss-plan-button").addEventListener("click", function(){
    console.log("nexuss plan button clicked")
    redirectToCheckout(NEXUSS_PLAN_ID);
});