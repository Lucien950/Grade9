window.addEventListener("scroll", event =>{
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progress = 100 * (scrollTop/scrollHeight)
  document.querySelector("#progress").style.width = progress+"%";
});
import barba from '@barba/core';
import barbaCss from '@barba/css';

// tells barba to use the css module
barba.use(barbaCss);

barba.init({
  transitions: [
    {
      name: 'my-transition',
    },
  ],
});
