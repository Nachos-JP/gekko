const windowControl = require("./windowControl");

module.exports = {
  add: function(){
    for(const action of Object.keys(this)){
      if(this[action].hasOwnProperty("add")){
        this[action].add();
      }
    }
  },
  windowMinBtn: {
    add: function(){
      const targetElement = document.getElementById("window-min-btn");
      targetElement.onclick = () => windowControl.minimize();
    }
  },
  windowMaxBtn: {
    add: function(){
      const targetElement = document.getElementById("window-max-btn");
      targetElement.onclick = () => windowControl.maximize();
    }
  },
  windowRestoreBtn: {
    add: function(){
      const targetElement = document.getElementById("window-restore-btn");
      targetElement.onclick = () => windowControl.restore();
    }
  },
  windowCloseBtn: {
    add: function(){
      const targetElement = document.getElementById("window-close-btn");
      targetElement.onclick = () => windowControl.close();
    }
  }
};