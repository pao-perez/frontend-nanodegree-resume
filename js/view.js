var view = {
  init: function() {
    this.initBio();
    this.initWork();
    this.initProjects();
    this.initEducation();

    this.initGoogleMap();
  },

  initBio: function() {
    this.HTMLheaderName = '<h1 id="name">%data%</h1>';
    this.HTMLheaderRole = '<span>%data%</span><hr>';

    this.HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
    this.HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
    this.HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
    this.HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
    this.HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
    this.HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
    this.HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

    this.HTMLbioPic = '<img src="%data%" class="biopic">';
    this.HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

    this.HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
    this.HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

    this.displayBio();
  },

  displayBio: function() {
    var bioObj = octopus.getBio();

    var formattedName = this.HTMLheaderName.replace('%data%', bioObj.name);
    var formattedRole = this.HTMLheaderRole.replace('%data%', bioObj.role);
    var formattedMobile = this.HTMLmobile.replace('%data%', bioObj.contacts.mobile);
    var formattedEmail = this.HTMLemail.replace('%data%', bioObj.contacts.email);
    var formattedGithub = this.HTMLgithub.replace('%data%', bioObj.contacts.github);
    var formattedTwitter = this.HTMLtwitter.replace('%data%', bioObj.contacts.twitter);
    var formattedLocation = this.HTMLlocation.replace('%data%', bioObj.contacts.location);
    var formattedBioPic = this.HTMLbioPic.replace('%data%', bioObj.biopic);
    var formattedWelcomeMessage = this.HTMLwelcomeMsg.replace('%data%', bioObj.welcomeMessage);
    $('#header').append(formattedName + formattedRole + formattedMobile + formattedEmail + formattedGithub +
      formattedTwitter + formattedLocation + formattedBioPic + formattedWelcomeMessage);

      var skillsLength = bioObj.skills.length;
      if (skillsLength > 0) {
        $('#header').append(this.HTMLskillsStart);

        var formattedSkills;
        for (var x = 0; x < skillsLength; x++) {
          formattedSkills = this.HTMLskills.replace('%data%', bioObj.skills[x]);
          $('#skills').append(formattedSkills);
        }
      }
    },

    initWork: function() {
      this.HTMLworkStart = '<div class="work-entry"></div>';
      this.HTMLworkEmployer = '<a href="#">%data%';
      this.HTMLworkTitle = ' - %data%</a>';
      this.HTMLworkDates = '<div class="date-text">%data%</div>';
      this.HTMLworkLocation = '<div class="location-text">%data%</div>';
      this.HTMLworkDescription = '<p><br>%data%</p>';

      this.displayWork();
    },

    displayWork: function() {
      var that = this;
      var workObj = octopus.getWork();

      var formattedEmployer;
      var formattedTitle;
      var formattedLocation;
      var formattedDates;
      var formattedDescription;

      workObj.jobs.forEach(function(val) {
        $('#workExperience').append(that.HTMLworkStart);

        formattedEmployer = that.HTMLworkEmployer.replace('%data%', val.employer);
        formattedTitle = that.HTMLworkTitle.replace('%data%', val.title);
        formattedLocation = that.HTMLworkLocation.replace('%data%', val.location);
        formattedDates = that.HTMLworkDates.replace('%data%', val.dates);
        formattedDescription = that.HTMLworkDescription.replace('%data%', val.description);

        $('.work-entry:last').append(formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription);
      });
    },

    initProjects: function() {
      this.HTMLprojectStart = '<div class="project-entry"></div>';
      this.HTMLprojectTitle = '<a href="#">%data%</a>';
      this.HTMLprojectDates = '<div class="date-text">%data%</div>';
      this.HTMLprojectDescription = '<p><br>%data%</p>';
      this.HTMLprojectImage = '<img src="%data%">';

      this.displayProjects();
    },

    displayProjects: function() {
      var that = this;
      var projObj = octopus.getProjects();

      var formattedTitle;
      var formattedDates;
      var formattedDescription;
      var formattedImages;

      projObj.projects.forEach(function(val) {
        $('#projects').append(that.HTMLprojectStart);

        formattedTitle = that.HTMLprojectTitle.replace('%data%', val.title);
        formattedDates = that.HTMLprojectDates.replace('%data%', val.dates);
        formattedDescription = that.HTMLprojectDescription.replace('%data%', val.description);

        $('.project-entry:last').append(formattedTitle + formattedDates + formattedDescription);

        var formattedImages;
        for (var x = 0; x < val.images.length; x++) {
          formattedImages = that.HTMLprojectImage.replace('%data%', val.images[x]);
            $('.project-entry:last').append(formattedImages);
          }
      });
    },

    initEducation: function() {
      this.HTMLschoolStart = '<div class="education-entry"></div>';
      this.HTMLschoolName = '<a href="#">%data%';
      this.HTMLschoolDegree = ' -- %data%</a>';
      this.HTMLschoolDates = '<div class="date-text">%data%</div>';
      this.HTMLschoolLocation = '<div class="location-text">%data%</div>';
      this.HTMLschoolMajor = '<em><br>Major: %data%</em>';

      this.HTMLonlineClasses = '<h3>Online Classes</h3>';
      this.HTMLonlineCoursesStart = '<div class="online-entry"></div>';
      this.HTMLonlineTitle = '<a href="#">%data%';
      this.HTMLonlineSchool = ' - %data%</a>';
      this.HTMLonlineDates = '<div class="date-text">%data%</div>';
      this.HTMLonlineURL = '<br><a href="#">%data%</a>';

      this.displayEducation();
    },

    displayEducation: function() {
      var that = this;
      var educationObj = octopus.getEducation();

      var formattedSchool;
      var formattedDegree;
      var formattedDates;
      var formattedLocation;
      var formattedDescription;

      $('#education').append(this.HTMLschoolStart);
      educationObj.schools.forEach(function(val) {
        formattedSchool = that.HTMLschoolName.replace('%data%', val.name);
        formattedDegree = that.HTMLschoolDegree.replace('%data%', val.degree);
        formattedDates = that.HTMLschoolDates.replace('%data%', val.dates);
        formattedLocation = that.HTMLschoolLocation.replace('%data%', val.location);
        $('.education-entry:last').append(formattedSchool + formattedDegree + formattedDates + formattedLocation);

        var formattedMajors;
        for (var x = 0; x < val.majors.length; x++) {
          formattedMajors = that.HTMLschoolMajor.replace('%data%', val.majors[x]);
          $('.education-entry:last').append(formattedMajors);
        }
      });

      $('#education').append(this.HTMLonlineClasses);
      $('#education').append(this.HTMLonlineCoursesStart);
      educationObj.onlineCourses.forEach(function(val) {
        formattedTitle = that.HTMLonlineTitle.replace('%data%', val.title);
        formattedSchool = that.HTMLonlineSchool.replace('%data%', val.school);
        formattedDate = that.HTMLonlineDates.replace('%data%', val.date);
        formattedURL = that.HTMLonlineURL.replace('%data%', val.url);

        $('.online-entry:last').append(formattedTitle + formattedSchool + formattedDate + formattedURL);
      });
    },

    initGoogleMap: function() {
      this.googleMap = '<div id="map"></div>';

      this.displayGoogleMap();
    },

    displayGoogleMap: function() {
      $("#mapDiv").append(this.googleMap);
    }

};

view.init();
