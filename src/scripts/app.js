const stars = document.querySelectorAll('.card__star');
const teamCards = document.querySelectorAll('.team-card--container');
//const showBios = document.querySelectorAll('.team-card__display-btn');
//click event on a star
//check how many stars are affected by the click
//check our direction: descending or ascending:
//      if clicked star + 1 is filled we are descending
//      else if star is full we are descending
//      else we are ascending
//if ascending: 
//      all stars before clicked should be filled
//      clicked:
//          if empty should become half else should become full
//if descending:
//      if any of the stars after clicked are full or half they should become empty and return
//      else clicked should become half 

// showBios.forEach((showBio) => {
//     showBio.addEventListener('click', () => {
//         let displayBtnLine = showBio.querySelector('.display-btn__line');
//         displayBtnLine.classList.toggle('clicked');
//         console.log(displayBtnLine)
//     });
// });

teamCards.forEach((teamCard) => {
    let showBio = teamCard.querySelector('.team-card__display-btn');
    showBio.addEventListener('click', () => {
        let displayBtnLine = showBio.querySelector('.display-btn__line');
        displayBtnLine.classList.toggle('clicked');

        let bio = teamCard.querySelector('.team-card__bio');
        bio.classList.toggle('bio__show');
    });
});

stars.forEach((star, index) => {
    star.addEventListener('click', () => highlightStars(index));
});


function highlightStars(index){
    if(stars[index].classList.contains('fas') && (stars[index].nextElementSibling == null ||
        !stars[index].nextElementSibling.classList.contains('fas'))){
            if(stars[index].classList.contains('fas') && stars[index].classList.contains('fa-star')){               
                stars[index].classList = 'fas fa-star-half-alt card__star';
                console.log('make half going down');
            }
            else if(stars[index].classList.contains('fa-star-half-alt')) {
                console.log('going down make empty')
                stars[index].classList = 'far fa-star card__star';
                index--;
            }      
    }
    highlightPreviousStars(index); 
}

function highlightPreviousStars(index){
    stars.forEach((star, starIndex) => {
        if(starIndex <= index){
            star.classList.remove('far');
            star.classList.add('fas');
        }
        else{
            star.classList.remove('fas');
            star.classList.add('far');
        }
    });
}






// stars.forEach(star => {
//     switch(star.id){
//         case 'star_1':
//             break;
//     }
// });

// stars.forEach(star => {
//     star.addEventListener('click', ()=>{
//        let isAdding = true;
//        if(isAdding){
//         if(star.classList.contains('fas') && star.classList.contains('fa-star')){
//             star.classList.remove('fa-star');
//             star.classList.add('fa-star-half-alt');
//         }
//         else if(star.classList.contains('fa-star-half-alt')){
            
//         }
//        }
//     });
// });