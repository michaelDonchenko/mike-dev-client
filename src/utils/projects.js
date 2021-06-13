import olgaJewelry from '../images/olgaJewelry.PNG'
import mikesBlog from '../images/mikesBlog.PNG'
import travelApp from '../images/travelApp.PNG'
import animalsApp from '../images/animalsAdoption.PNG'

const projects = [
  {
    projectTitle: 'Animals adoption site',
    projectText:
      'This website was mede with PERN stack postrgresql with sequlize for database, redux toolkit for state management, and nodejs with react as front and back. The main features here are a lot of filtering and sorting options on the adoption page, you can basically filter the posts by any parameter. Full auth system based on JWT and cookies, working admin dashboard with posts histroy and change/delete functions.',
    img: animalsApp,
    demoLink: 'https://animals-adoption.netlify.app/',
    githubLink: 'https://github.com/michaelDonchenko/Animals-adoption-client',
  },
  {
    projectTitle: 'Travel app',
    projectText:
      'Website created with MERN stack and redux toolkit for state management. Full auth system with jwt and cookies, register login and forgot password with email reset link, non registered user can view all markers and places on the map. Logged in users are able to add thier own markers on the map and add photos/rating/comments to other people markers. Only admin user can delete markers witch will delete all related info to the marker.',
    img: travelApp,
    demoLink: 'https://mike-travel.netlify.app',
    githubLink: 'https://github.com/michaelDonchenko/travel-app-client',
  },
  {
    projectTitle: 'Social media blog',
    projectText:
      'Social media blog ,a blog site with full User dashboard configuration, Auth system with emails verification , jwt authentication , forgot username/password functionality, blogs system, search, likes and a lot more.',
    img: mikesBlog,
    demoLink: 'https://mikes-blog01.netlify.app',
    githubLink: 'https://github.com/michaelDonchenko/blogApp-client',
  },
  {
    projectTitle: 'Jewelry ecommerce',
    projectText:
      'A website I have made for a client using MERN stack, Fully working admin panel with categories and products CRUD , payment system with paypal, orders system , firebase authentication , googlelogin , registration with emails, forgot password , infinite scaling storage for pictures with a firebase storage system.',
    img: olgaJewelry,
    demoLink: 'https://o-d-jewelry.com/',
    githubLink: 'https://github.com/michaelDonchenko/olga-jewelry-client',
  },
]

export default projects
