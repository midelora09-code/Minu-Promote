// =========================================
// WHATSAPP INTEGRATION & ORDER HANDLER
// =========================================
const WHATSAPP_NUMBER = "919091824475";

function orderPackage(packageName, price) {
    let message = "";

    if (packageName === 'Permanent Partner') {
        message = `Hi Minu Promote, I am interested in becoming a Permanent Partner (₹7,999/month). Please share the details!`;
    } else if (price === 'custom') {
        message = `Hi Minu Promote, I would like to inquire about your video editing and promotional services.`;
    } else {
        message = `Hi Minu Promote, I want to order the "${packageName}" for ₹${price}. Please guide me on the next steps!`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// =========================================
// HEADER SHADOW ON SCROLL
// =========================================
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 30) {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.6)';
    } else {
        header.style.boxShadow = 'none';
    }
});
