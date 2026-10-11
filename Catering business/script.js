const headerMenuToggle = document.querySelector('.header__menu-toggle')
const headerMenus = document.querySelector('.header__menus');

headerMenuToggle.addEventListener('click', () => {
    headerMenus.classList.toggle('active');
})

document.querySelectorAll('.section-menus__card-rating').forEach((ratingContainer, cardIndex) => {
  const stars = ratingContainer.querySelectorAll('.bx');
  const storageKey = `preciousCaters_menu_rating_${cardIndex}`;
  let userRating = 0;

  
  const savedRating = localStorage.getItem(storageKey);
  if (savedRating) {
    userRating = parseInt(savedRating, 10);
    highlightStars(stars, userRating);
  }

  stars.forEach((star, starIndex) => {
    
    star.addEventListener('mouseover', () => {
      if (userRating === 0) highlightStars(stars, starIndex + 1);
    });

    star.addEventListener('mouseleave', () => {
      if (userRating === 0) resetStars(stars);
    });

    
    star.addEventListener('click', () => {
      userRating = starIndex + 1;
      highlightStars(stars, userRating);
      localStorage.setItem(storageKey, userRating);
    });
  });
});

function highlightStars(stars, count) {
  stars.forEach((star, idx) => {
    if (idx < count) {
      star.classList.remove('bx-star');
      star.classList.add('bxs-star');
    } else {
      star.classList.remove('bxs-star');
      star.classList.add('bx-star');
    }
  });
}

function resetStars(stars) {
  stars.forEach(star => {
    star.classList.remove('bxs-star');
    star.classList.add('bx-star');
  });
}
document.addEventListener('DOMContentLoaded', () => {
  
  const contactForm = document.getElementById('catering-contact-form');
  if (contactForm && CONFIG.FORMSPREE_ENDPOINT) {
    contactForm.action = CONFIG.FORMSPREE_ENDPOINT;
  }

  
  const primaryWhatsApp = document.getElementById('whatsapp-primary');
  if (primaryWhatsApp && CONFIG.WHATSAPP_NUMBER_PRIMARY) {
    primaryWhatsApp.href = `https://wa.me/${CONFIG.WHATSAPP_NUMBER_PRIMARY}`;
  }

  
  const secondaryWhatsApp = document.getElementById('whatsapp-secondary');
  if (secondaryWhatsApp && CONFIG.WHATSAPP_NUMBER_SECONDARY) {
    secondaryWhatsApp.href = `https://wa.me/${CONFIG.WHATSAPP_NUMBER_SECONDARY}`;
  }

  const facebookLink = document.getElementById('facebook-link');
  if (facebookLink && CONFIG.FACEBOOK_URL) {
    facebookLink.href = CONFIG.FACEBOOK_URL;
  }
});