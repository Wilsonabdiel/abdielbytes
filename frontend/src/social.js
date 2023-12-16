


const SocialLinks = props => {
    return (
      React.createElement("div", { className: "social" }, 
      React.createElement("a", {
        href: "https://twitter.com/abdielbytes",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's Twitter profile" },
  
      ' ', 
      React.createElement("i", { className: "fab fa-twitter" })), 
  
      React.createElement("a", {
        id: "profile-link",
        href: "https://github.com/Wilsonabdiel",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's GitHub Profile" },
  
      ' ', 
      React.createElement("i", { className: "fab fa-github" })), 
  
      // React.createElement("a", {
      //   href: "https://codepen.io/yagoestevez",
      //   target: "_blank",
      //   rel: "noopener noreferrer",
      //   title: "Link to author's Codepen Profile" },
  
      // ' ', 
      // React.createElement("i", { className: "fab fa-codepen" }))));
  
      ));
  
  };
  
  