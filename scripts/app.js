const app = {
  init: function () {
    form.init();
    grid.init();
    color.init();
  },
};

document.addEventListener("DOMContentLoaded", app.init());
