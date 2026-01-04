document.addEventListener('DOMContentLoaded', function(){

const welcomeModal = document.getElementById('welcomeModal');
const closeWelcomeBtn = document.getElementById('closeWelcomeBtn');
    welcomeModal.style.display = 'block';

function closeWelcomeModal(){
    welcomeModal.style.display = 'none';
}

    closeWelcomeBtn.addEventListener('click', closeWelcomeModal);
    welcomeModal.addEventListener('click', function(e) {
        if (e.target === welcomeModal){
            closeWelcomeModal();
        }
    });
    
const imageModal = document.getElementById('imageModal');
const closeImageBtn = imageModal.querySelector('.close-btn');
const cards = document.querySelectorAll('.popup-card');

function closeImageModal(){
    imageModal.style.display = 'none';
        
const existingCard = imageModal.querySelector('.modal-content-card');
        if (existingCard){
            existingCard.remove();
        }
        document.body.classList.remove('modal-open');
    }

cards.forEach(card =>{
    card.addEventListener('click', function(){
            
const existingCard = imageModal.querySelector('.modal-content-card');
        if (existingCard){
                existingCard.remove();
        }

const clonedCard = this.cloneNode(true); 
        clonedCard.classList.remove('card', 'card1', 'card2', 'popup-card'); 
        clonedCard.classList.add('modal-content-card'); 
        imageModal.appendChild(clonedCard);
        imageModal.style.display = 'block';
        document.body.classList.add('modal-open');
    });
});

    closeImageBtn.addEventListener('click', closeImageModal);
    imageModal.addEventListener('click', function(e){
        if (e.target === imageModal){
            closeImageModal();
        }
    });

const videoModal = document.getElementById('videoModal');
const closeVideoBtn = videoModal.querySelector('.close-btn');
const videoTriggers = document.querySelectorAll('.popup-video-card');

function closeVideoModal(){
    videoModal.style.display = 'none';
        
const existingCard = videoModal.querySelector('.modal-content-video-card');
    if (existingCard){
             
const videoElement = existingCard.querySelector('video');
    if(videoElement){
        videoElement.pause();
        videoElement.src = ""; 
    }
        existingCard.remove();
    }
        document.body.classList.remove('modal-open');
    }

videoTriggers.forEach(trigger =>{
    trigger.addEventListener('click', function(){

const existingCard = videoModal.querySelector('.modal-content-video-card');
    if (existingCard){
        existingCard.remove();
    }

const clonedCard = this.cloneNode(true); 
    clonedCard.classList.remove('grid1', 'popup-video-card'); 
    clonedCard.classList.add('modal-content-video-card'); 
        
const videoElement = clonedCard.querySelector('video');
            
    if (videoElement){
                
const originalVideo = this.querySelector('video');
    if (originalVideo){
        originalVideo.pause();
    }
                
videoElement.setAttribute('controls', true); 
videoElement.load();
videoElement.play(); 
    }

videoModal.appendChild(clonedCard);
videoModal.style.display = 'block';
document.body.classList.add('modal-open');
    });
});

closeVideoBtn.addEventListener('click', closeVideoModal);
videoModal.addEventListener('click', function(e){
    if (e.target === videoModal){
            closeVideoModal();
    }
});

    document.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){
        if (imageModal.style.display === 'block'){
            closeImageModal();
        }
        if (videoModal.style.display === 'block'){
            closeVideoModal();
        }
    }
    });
});