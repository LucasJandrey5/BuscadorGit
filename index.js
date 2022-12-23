//Get usuario
//https://api.github.com/users/USERNAME

//Get Repos
//https://api.github.com/users/USERNAME/repos

Alpine.data("index", () => {
  return {
    name: "",
    getGitData(name) {
      fetch("https://api.github.com/users/" + name)
        .then((res) => {
          return res.json();
        })
        .then((e) => {
          this.current_user = e;
        });
    },
    getGitRepos(name) {
      fetch("https://api.github.com/users/" + name + "/repos")
        .then((res) => {
          return res.json();
        })
        .then((e) => {
          this.current_repos = e;
        });
    },
    current_user: null,
    current_repos: null,
    init() {
      this.$watch("current_user", () => {
        this.getGitRepos(this.name);
      });
    },
  };
});

Alpine.start();
