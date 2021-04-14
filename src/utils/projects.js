import shopList from '../images/shopList.PNG'
import olgaJewelry from '../images/olgaJewelry.PNG'
import mikesBlog from '../images/mikesBlog.PNG'

const projects = [
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
