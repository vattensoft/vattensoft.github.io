var homeAnimate = function () {
  //waypoint
  var home = $('section[data-section="home"]')
  if (home.length > 0) {

    home.waypoint(function (direction) {

      if (direction === 'down' && !$(this.element).hasClass('animated')) {


        setTimeout(function () {
          $('section[data-section="home"] .to-animate').each(function (k) {
            var el = $(this);

            setTimeout(function () {
              el.addClass('fadeInUp animated');
            }, k * 200, 'easeInOutExpo');

          });
        }, 200);


        setTimeout(function () {
          home.find('.to-animate-2').each(function (k) {
            var el = $(this);

            setTimeout(function () {
              el.addClass('bounceIn animated');
            }, k * 200, 'easeInOutExpo');

          });
        }, 700);

        $(this.element).addClass('animated');

      }
    }, { offset: '80%' });

  }
}

var serviceAnimate = function () {
  //waypoint
  var service = $('section[data-section="service"]')
  if (service.length > 0) {

    service.waypoint(function (direction) {

      if (direction === 'down' && !$(this.element).hasClass('animated')) {


        setTimeout(function () {
          $('section[data-section="service"] .to-animate').each(function (k) {
            var el = $(this);

            setTimeout(function () {
              el.addClass('fadeInUp animated');
            }, k * 200, 'easeInOutExpo');

          });
        }, 200);


        setTimeout(function () {
          service.find('.to-animate-2').each(function (k) {
            var el = $(this);

            setTimeout(function () {
              el.addClass('bounceIn animated');
            }, k * 200, 'easeInOutExpo');

          });
        }, 700);

        $(this.element).addClass('animated');

      }
    }, { offset: '80%' });

  }
}

var projectAnimate = function () {
  //waypoint
  var project = $('section[data-section="project"]')
  if (project.length > 0) {

    project.waypoint(function (direction) {

      if (direction === 'down' && !$(this.element).hasClass('animated')) {


        setTimeout(function () {
          $('section[data-section="project"] .to-animate').each(function (k) {
            var el = $(this);

            setTimeout(function () {
              el.addClass('fadeInUp animated');
            }, k * 100, 'easeInOutExpo');

          });
        }, 200);


        setTimeout(function () {
          project.find('.to-animate-2').each(function (k) {
            var el = $(this);

            setTimeout(function () {
              el.addClass('bounceIn animated');
            }, k * 100, 'easeInOutExpo');

          });
        }, 700);

        $(this.element).addClass('animated');

      }
    }, { offset: '80%' });

  }
}

var teamAnimate = function () {
  //waypoint
  var team = $('section[data-section="team"]')
  if (team.length > 0) {

    team.waypoint(function (direction) {

      if (direction === 'down' && !$(this.element).hasClass('animated')) {


        setTimeout(function () {
          $('section[data-section="team"] .to-animate').each(function (k) {
            var el = $(this);

            setTimeout(function () {
              el.addClass('fadeInUp animated');
            }, k * 200, 'easeInOutExpo');

          });
        }, 200);


        setTimeout(function () {
          team.find('.to-animate-2').each(function (k) {
            var el = $(this);

            setTimeout(function () {
              el.addClass('bounceIn animated');
            }, k * 200, 'easeInOutExpo');

          });
        }, 700);

        $(this.element).addClass('animated');

      }
    }, { offset: '80%' });

  }
}

var footerAnimate = function () {
  //waypoint
  var footer = $('section[data-section="footer"]')
  if (footer.length > 0) {

    footer.waypoint(function (direction) {

      if (direction === 'down' && !$(this.element).hasClass('animated')) {


        setTimeout(function () {
          $('section[data-section="footer"] .to-animate').each(function (k) {
            var el = $(this);

            setTimeout(function () {
              el.addClass('fadeInUp animated');
            }, k * 200, 'easeInOutExpo');

          });
        }, 200);


        setTimeout(function () {
          footer.find('.to-animate-2').each(function (k) {
            var el = $(this);

            setTimeout(function () {
              el.addClass('bounceIn animated');
            }, k * 200, 'easeInOutExpo');

          });
        }, 700);

        $(this.element).addClass('animated');

      }
    }, { offset: '80%' });

  }
}

  ; $(function () {
    $('nav a[href*="#"]:not([href="#"])').click(function () {
      $('nav ul li[class*="active"]').removeClass('active');
      $(this).parent().addClass('active');
      //Mobile navbar collapse hide when click
      $('.navbar-collapse.in').collapse('hide');
      //animate
      var target = $(this.hash);
      $('html, body').animate({
        scrollTop: target.offset().top - 60
      }, 1000);
      return false;
    });
    $('.vatten-counter').countTo();

    homeAnimate();
    serviceAnimate();
    projectAnimate();
    teamAnimate();
    footerAnimate();

  });