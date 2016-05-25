var octopus = {
  getBio: function() {
    return model.bio.get();
  },

  getWork: function() {
    return model.work.get();
  },

  getProjects: function() {
    return model.projects.get();
  },

  getEducation: function() {
    return model.education.get();
  }
};
