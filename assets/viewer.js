(() => {
  const container = document.querySelector('#animation');
  const toggle = document.querySelector('#toggle');
  const restart = document.querySelector('#restart');
  const source = document.querySelector('#source');
  const speed = document.querySelector('#speed');
  const status = document.querySelector('#status');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let animation;
  let playing = !reduceMotion;

  function load() {
    if (!window.lottie) {
      status.textContent = 'Lottie runtime unavailable';
      toggle.disabled = restart.disabled = true;
      return;
    }
    if (animation) animation.destroy();
    status.textContent = 'Loading…';
    animation = window.lottie.loadAnimation({container,renderer:'svg',loop:true,autoplay:!reduceMotion,path:source.value});
    animation.setSpeed(Number(speed.value));
    playing = !reduceMotion;
    toggle.textContent = playing ? 'Pause' : 'Play';
    animation.addEventListener('DOMLoaded', () => { status.textContent = reduceMotion ? 'Ready · reduced motion' : 'Playing'; });
    animation.addEventListener('data_failed', () => { status.textContent = 'Could not load animation data'; });
  }

  toggle.addEventListener('click', () => {
    if (!animation) return;
    playing = !playing;
    playing ? animation.play() : animation.pause();
    toggle.textContent = playing ? 'Pause' : 'Play';
    status.textContent = playing ? 'Playing' : 'Paused';
  });
  restart.addEventListener('click', () => { if(animation){ animation.goToAndPlay(0,true); playing=true; toggle.textContent='Pause'; status.textContent='Playing'; } });
  source.addEventListener('change', load);
  speed.addEventListener('change', () => { if(animation) animation.setSpeed(Number(speed.value)); });
  load();
})();
