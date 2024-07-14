const GENIUS_BLOG_PLAN_ID = "price_1PbLvCRpdWCgKVCA5ULIgTQQ";
const SPOTIFY_PLAN_ID = "price_1PbLwhRpdWCgKVCAPUUPCgQI";
const SOUND_CLOUD_PLAN_ID = "price_1Pc98mRpdWCgKVCA4EZ2XnWB";
const YOUTUBE_PLAN_ID = "price_1Pc99iRpdWCgKVCAfxADl9WP";
const GOLD_PLAN_ID = "price_1Pc9A6RpdWCgKVCAQVyPAux6";
const PLATINUM_PLAN_ID = "price_1Pc9APRpdWCgKVCAx8hXzPCj";
const DIAMOND_PLAN_ID = "price_1Pc9B8RpdWCgKVCAjBXMQ42B";
const NEXUSS_PLAN_ID = "price_1Pc9AgRpdWCgKVCA9JMfoDDV";

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
    console.log(`session id = ${sessionId}`);
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