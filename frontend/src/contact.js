const Contact = props => {
    return (
      React.createElement("section", { id: "contact" }, 
      React.createElement("div", { className: "container" }, 
      React.createElement("div", { className: "heading-wrapper" }, 
      React.createElement("div", { className: "heading" }, 
      React.createElement("p", { className: "title" }, "Want to ", 
      React.createElement("br", null), "contact me?"), 
  
  
      React.createElement("p", { className: "separator" }), 
      React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
      '', 
      React.createElement("span", { className: "mail" }, "wilsonabdiel86", 
  
      React.createElement("i", { className: "fas fa-at at" }), "gmail", 
  
      React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")), 
  
  
  
  
  
      React.createElement(SocialLinks, null)), 
  
      React.createElement("form", { id: "contact-form", action: "https://formsubmit.co/493fc4bf038a46bcf37e4b1ef70a8377", method:"POST" }, 
      React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), 
      React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), 
      React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), 
      React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));
  
  
  
  
  };
  
  
  