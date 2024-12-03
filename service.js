document.querySelectorAll('.service-title').forEach(title =>{
    title.addEventListener('click',() =>{
        const content =title.nextElementSibling;
        content.style.display=content.style.display === 'none' ? 'block':'none';
    });
});

const scrollToTopBtn = document.getElementById('scrollToTop');
window.onscroll = () => {
    scrollToTopBtn.style.display = window.scrollY > 100 ? 'block' : 'none';
};
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});