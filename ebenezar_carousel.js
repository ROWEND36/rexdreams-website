<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html>

<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />

  <title>Carousel Test</title>

  <style type="text/css" media="all">
    body {
      margin: 0;
    }

    .carousel_item {
      top: 100%;
      opacity: 0;
      position: absolute;
      color: white;
      font-family: "Helvetica Nue", Roboto, "sans-serif";
      font-size: 3em;
      text-align: center;
      font-weight: 300;
      width: 100%;
      display: table;
      height: 100%;
      transition: top 2s, opacity 2s;
    }


    .middle {
      display: table-cell;
      vertical-align: middle;
    }

    .carousel_container {
      position: relative;
      width: 100%;
      height: 80vh;
      margin-top: 10vh;
      margin-bottom: 10vh;
      overflow: hidden;
    }

    #home_pane {
      top: 0;
      opacity: 1;
      background-color: black;
    }

    #pane1 {
      background-color: purple;
    }

    #pane2 {
      background-color: #FFD411;
    }

    #pane3 {
      background-color: #2196F3;
    }
  </style>

</head>

<body>
  <div class="carousel_container">
    <div id='home_pane' class='carousel_item'>
      <div class="middle">
        <p>Welcome To Rex Dreams</p>
      </div>
    </div>
    <div id='pane1' class='carousel_item'>
      Pane 1
    </div>
    <div id='pane2' class='carousel_item'>
      Pane 2
    </div>
    <div id="pane3" class='carousel_item'>
      Pane 3
    </div>
  </div>
  <script type="text/javascript" charset="utf-8">
    const panes = [home_pane, pane1, pane2, pane3];
    const showPane = (el) => {
      if (state == STATE_SLIDING_DOWN_OUT) {
        cancelEvent();
      }
      detectEvent(el);
      el.style.top = 0;
      el.style.opacity = 1;
      state = STATE_SLIDING_UP_INTO;
    }
    const hidePane = (el) => {
      if (state == STATE_SLIDING_UP_INTO) {
        cancelEvent();
      }
      detectEvent(el);
      el.style.top = "100%";
      el.style.opacity = 0;
      state = STATE_SLIDING_DOWN_OUT;
    }
    var fallbackTimeout, trackEl;
    const detectEvent = (el) => {
      if (fallbackTimeout) {
        console.error('Bad State');
        cancelEvent();
      }
      trackEl = el;
      el.addEventListener('transitionend', updateSlide);
      fallbackTimeout = setTimeout(updateSlide, 2000);
    }
    const updateSlide = () => {
      const el = trackEl;
      cancelEvent();
      if (state == STATE_SLIDING_DOWN_OUT) {
        el.style.top = "100%";
        el.style.opacity = 0;
        if (slideInView == 0)
          state = STATE_DEFAULT;
        else state = STATE_IN_PLACE;
      } else {
        el.style.top = 0;
        el.style.opacity = 1;
        slideInView++;
        if (slideInView == panes.length - 1) state = STATE_LAST_SLIDE;
        else state = STATE_IN_PLACE;
      }
    }
    const cancelEvent = () => {
      trackEl.removeEventListener('transitionend', updateSlide);
      clearTimeout(fallbackTimeout);
      trackEl = null;
      fallbackTimeout = null;
    }
    const onTouchStart = (e) => {
      onMouseDown(e.touches[0]);
    }
    const onTouchEnd = (e) => {
      onMouseUp(e.touches[0]);
    }
    const onTouchMove = (e) => {
      onMouseMove(e.touches[0]);
    }
    var isPressed, isScrollingUp, isScrollingDown, lastX, lastY, lastT, startY;
    const onMouseUp = (e) => {
      isPressed = false;
    }
    const onMouseDown = (e) => {
      lastY = -1;
      isPressed = true;
    }

    const update = (x, y) => {
      if (lastY < 0) {
        lastY = y;
        startY = y;
        lastX = x;
        lastT = new Date().getTime();
        return [0, 0];
      } else {
        let deltaY = y - lastY;
        let oldT = lastT;
        lastT = new Date().getTime();
        lastY = y;
        console.log(y + "uuuuuu" + startY + " " + state)
        return [1000 * deltaY / (lastT - oldT), Math.abs(lastY - startY)];
      }
    }
    const STATE_DEFAULT = 0;
    const STATE_SLIDING_UP_INTO = 1;
    const STATE_IN_PLACE = 2;
    const STATE_LAST_SLIDE = 3;
    const STATE_SLIDING_DOWN_OUT = 4;
    var state = STATE_DEFAULT;
    var slideInView = 0;
    const onMouseMove = (e) => {
      const [velocity, distance] = update(e.clientX, e.clientY);
      var swipedUp, swipedDown;
      if (distance < 15) return console.log(velocity + ' failed distance ' + distance);
      if (velocity > 256) swipedDown = true;
      else if (velocity < 256) swipedUp = true;
      else return console.log('failed velocity');
      if (swipedDown) {
        if (state == STATE_SLIDING_UP_INTO) {
          hidePane(panes[slideInView + 1])
        } else if (distance > 50 &&
          (state == STATE_IN_PLACE ||
            state == STATE_LAST_SLIDE)) {
          hidePane(panes[slideInView]);
          slideInView--;
        }
      } else {
        /*swiped up*/
        if (state == STATE_SLIDING_DOWN_OUT || (distance > 50 && (state == STATE_IN_PLACE || state == STATE_DEFAULT))) {
          showPane(panes[slideInView + 1]);
        }
      }
    }
    carousel_container = document.getElementsByClassName('carousel_container')[0];
    carousel_container.addEventListener('touchstart', onTouchStart);
    carousel_container.addEventListener('mousedown', onMouseDown);
    carousel_container.addEventListener('touchmove', onTouchMove);
    carousel_container.addEventListener('mousemove', onMouseMove);
    carousel_container.addEventListener('touchend', onTouchEnd);
    carousel_container.addEventListener('mouseup', onMouseUp);
  </script>
</body>
</html>