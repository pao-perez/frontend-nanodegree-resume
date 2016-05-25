var model = {
  bio: {
    'name': 'Pao Perez',
    'role': 'Software Developer',
    'contacts': {
      'mobile': '09179999999',
      'email': 'pao.perez@test.com',
      'github': 'pao-perez',
      'twitter': 'no-twitter',
      'location': 'Pasig City'
    },
    'biopic': 'images/fry.jpg',
    'welcomeMessage': 'Hi There!',
    'skills': [
      'java',
      'bash',
      'javascript',
      'google-fu'
    ],

    get: function() {
      return model.bio;
    }
  },

  work: {
    'jobs': [
      {
        'employer': 'ABC',
        'title': 'Java Developer',
        'location': 'Pasig City',
        'dates': '11-2015 - Present',
        'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        'employer': 'DEF',
        'title': 'Google Apps Developer',
        'location': 'Makati City',
        'dates': '06-2015 - 11-2015',
        'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        'employer': 'XYZ',
        'title': 'Jr. Software Engineer',
        'location': 'Quezon City',
        'dates': '03-2014 - 04-2015',
        'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      }
    ],

    get: function() {
      return model.work;
    }
  },

  projects: {
    'projects': [
      {
        'title': 'Resume',
        'dates': '03-2016 - 03-2016',
        'description': 'Learning basic JavaScript syntax.',
        'images': [
          'http://placekitten.com/395/200',
          'http://placekitten.com/395/200'
        ]
      },
      {
        'title': 'Portfolio',
        'dates': '03-2016 - 03-2016',
        'description': 'A playground for learning how to write HTML and CSS from a front-end developer\'s point of view following Udacity\'s awesome tutorial.',
        'images': [
          'http://placekitten.com/395/200',
          'http://placekitten.com/395/200'
        ]
      }
    ],

    get: function() {
      return model.projects;
    }
  },

  education: {
    'schools': [
      {
        'name': 'ABC',
        'location': 'Makati City',
        'degree': 'BS',
        'majors': [
          'CS',
        ],
        'dates': 2014,
        'url': 'www.abc.com'
      },
      {
        'name': 'DEF',
        'location': 'Makati City',
        'degree': 'BA',
        'majors': [
          'MA'
        ],
        'dates': 2010,
        'url': 'www.def.com'
      }
    ],
    'onlineCourses': [
      {
        'title': 'Intro to Html & Css',
        'school': 'Udacity',
        'date': 2016,
        'url': 'https://www.udacity.com/course/viewer#!/c-ud304'
      },
      {
        'title': 'JavaScript Basics',
        'school': 'Udacity',
        'date': 2016,
        'url': 'https://www.udacity.com/course/viewer#!/c-ud804'
      }
    ],

    get: function() {
      return model.education;
    }
  },

};
