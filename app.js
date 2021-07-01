
const menuBtn = document.querySelector('.header__menu');
const closeBtn = document.querySelector('.mobile-close');
const mobileMenu = document.querySelector('.mobile-menu');
const menuItem = document.querySelector('.menu-list');

// ------------FUNCTION DECLARATIONS FOR MOBILE MENU-------------
const openMenu = () => {
    mobileMenu.style.display = 'block';
    menuBtn.style.display = 'none';
}

const closeMenu = () => {
    mobileMenu.style.display = 'none';
    menuBtn.style.display = 'block';
}

// ------------FUNCTION CALLS FOR MOBILE MENU-----------
menuBtn.addEventListener('click', () => {
    openMenu()
})

closeBtn.addEventListener('click', () => {
    closeMenu()
})

menuItem.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'A') {
        closeMenu();
      }
})

// -------CODE TO LOAD PAGE DYNAMICALLY---------
const speakerList = document.querySelector('.speaker__cards');
const speakerTemplate = document.querySelector('.speaker__template');

const myData = [{
    speakerImg: 'images/profilepic/pexels-andrea-piacquadio-3789888.jpg',
    speakerName: 'Martin Roon',
    speakerTitle: 'Author',
    speakerDesc: 'Martin Roon shares captivating stories of a powerful God with churches, conferences, prisons, and other venues around the country, year-round.',
  },
  {
    speakerImg: 'images/profilepic/pexels-thyrone-paas-1722198.jpg',
    speakerName: 'Charles Depass',
    speakerTitle: 'Bishop',
    speakerDesc: 'A missionary sent to spread the Lords holy word and his teachings.',
  },
  {
    speakerImg: 'images/profilepic/pexels-andrea-piacquadio-762020.jpg',
    speakerName: 'Maya Havanu',
    speakerTitle: 'Lecturer at Harvard',
    speakerDesc: 'A missionary sent to spread the Lords holy word and his teachings.',
  },
  {
    speakerImg: 'images/profilepic/pexels-yulia-rozanova-3555630.jpg',
    speakerName: 'Yamish Irea',
    speakerTitle: 'Motivational Speaker',
    speakerDesc: 'A missionary sent to spread the Lords holy word and his teachings.',
  }
]

const createSpeakerCard = (speakerData) => {
    const clone = speakerTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector('.speaker__pic').src = speakerData.speakerImg;
    clone.querySelector('.speaker__name').innerText = speakerData.speakerName;
    clone.querySelector('.speaker__qual').innerText = speakerData.speakerTitle;
    clone.querySelector('.speaker__desc').innerText = speakerData.speakerDesc;


    speakerList.appendChild(clone);
}

const setup = () => {
    myData.forEach((data) => {
        createSpeakerCard(data);
    })
}

setup();