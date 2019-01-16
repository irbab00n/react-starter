module.exports = [
  {
    pictures: [
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/particles-app_home.jpg', description: 'The Particles.js library allows you to create any sized container you would like to populate with floating particles.'},
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/particles-app_section.jpg', description: 'Using viewport dimensions for content containers allows the content to adapt to every kind of screen size'},
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/particles-app_mobile.jpg', description: 'All mobile responsiveness is a combination of framework agnostic JavaScript paired with strategic usage of CSS classes to create a more alive experience'},
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/particles-app_mobile_menu.jpg', description: 'One of the coolest features I have created for this application is the dynamic simulated scrolling navigation targets that responds to the number of content sections'}
    ],
    title: 'Particles',
    link: 'http://particles-app-tc.herokuapp.com',
    repo: 'https://github.com/irbab00n/particles-app',
    contributors: ['Thomas Cosby'],
    stack: [
      'js',
      'node',
      'express',
      'heroku'
    ],
    description: 'After an introduction to Three.js and WebGL, I came across Particles.js.  It\'s a simple library that you can use to quickly create an interactive feature in your web application.  It inspired me to try building a small web app that would also be a practice in creating mobile responsive layouts through CSS classes.  In the process, I had an idea to create a dynamic simulated scroll target menu that will change depending on the number of content sections you build into your website.',
    overview: 'For this project, I integrated the Particles.js library with my own custom JavaScript code to create a very simple user interface'
  },
  {
    pictures: [
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/note-app_home.jpg', description: 'The Note-app!  This allows you to create small convenient colorized tab notes!'},
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/note-app_add.jpg', description: 'Add a new note!'},
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/note-app_edit.jpg', description: 'If you make a mistake, no sweat! Go back and edit the note!'},
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/note-app_delete_hover.jpg', description: 'Last but not least, if you want to delete a note'},
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/note-app_delete.jpg', description: 'We want to make sure you\'re serious before you do'}
    ],
    title: 'Note-app',
    link: 'http://note-app-tc.herokuapp.com',
    repo: 'https://github.com/irbab00n/note-app',
    contributors: ['Thomas Cosby'],
    stack: [
      'react',
      'node',
      'express',
      'webpack',
      'heroku'
    ],
    description: 'This application allowed me to practice building a responsive grid layout containing reusable note card components that you can change and update.  This was also a great exercise to practice building functionality into a form to enrich the user experience.  One example is being able to prevent a blank card from being created by detecting whether the user has added a title and/or note body has any content added.  It was a great experience also working with in-line CSS-in-JS styling to create event-based animations to trigger.',
    overview: 'My take on the note-taking/making app built in React featuring CSS-in-JS styling'
  },
  {
    pictures: [
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/portfolio_design.jpg', description: 'Designs for the Links slide - Before... '},
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/portfolio_design_after.jpg', description: '...After!  I have always enjoyed the process of going from frames / drawings to fully constructed components'},
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/portfolio_design2.jpg', description: 'Designs for the Tabs that encapsulate this carousel of images'},
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/portfolio_project_tabs.jpg', description: 'The project tabs in their most recently published glory'},
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/portfolio_projects_component.jpg', description: 'A fully functioning Carousel component that is completely custom built'},
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/portfolio_fleshed.jpg', description: 'I have created an animated background for the jumbotron component that has clouds that animate outwards as the user scrolls the page'}  
    ],
    title: 'cosbytes.com',
    link: 'https://cosbytes.com',
    repo: 'https://github.com/irbab00n/cosbytes',
    contributors: ['Thomas Cosby'],
    stack: [
      'react',
      'node',
      'express',
      'react-router',
      'sass',
      'webpack',
      'aws'
    ],
    description: 'Everything that you have seen so far has been composed of components I have created myself.  As a labor of love, my portfolio has been one of the best resources for my continually developing front-end skills.  I have combined the most popular JS front-end framework, React, with a technique known as CSS-in-JS to create a highly interactive and performant user experience.  It is packed full of unique features, inluding a custom built simulated scrolling navigation.  This project has inspired me to create a CSS-in-JS animation builder for React!',
    overview: 'This website has served as not only a display center for who I am, but also what I am capable of as a software engineer'
  },
  {
    pictures: [
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/trainerFinder_search.jpg', description: 'This is the main search page for the application.  Guests and Trainees alike could browse trainers'},   
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/trainerFinder_profile.jpg', description: 'This is the view of a trainers profile from the perspective of a guest'},
      {link: 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/trainerFinder_signup.jpg', description: 'Our application featured a multi-tier user system that was determined by how a user signed up at this stage'}   
    ],
    title: 'TrainerFinder',
    link: 'http://trainerfinder.herokuapp.com',
    repo: 'https://github.com/nucleobase/nucleobase',
    contributors: ['Thomas Cosby', 'Gui Choupeaux', 'Chao Zeng', 'Andy Lien'],
    stack: [
      'react',
      'node',
      'express',
      'react-router',
      'postgres',
      'webpack',
      'heroku'
    ],
    description: 'TrainerFinder was my Hack Reactor Thesis project.  The main challenge of our thesis was to use a starter repo designed to simulate an in-progress codebase and build our product on top of it.  I converted the server-side rendering into a React client that featured multi-tier user types to create a platform for personal trainers to create and manage their clients, appointments, and payments.  My team and I also designed a system for clients to rate and review trainers to provide more visualization to potential customers.',
    overview: 'A platform for personal trainers to operate their businesses and meet clients'
  }
];
