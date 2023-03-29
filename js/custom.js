$(document).ready(function () {
  // $("#hamburger").click(function() {
  //    $(this).toggleClass("active");
  //    $(".sidenav").toggleClass("active-nav");
  // })

  $("#hamburger").click(function () {
    $(".sidenav").toggleClass("active-nav");
  });

  $("#showsidenav").click(function () {
    $(".sidenav").toggleClass("active-nav");
  });

  $(".nav-item").click(function () {
    // $(this).children(".dropdown-menus").toggleClass("'active-drop'");
    $(this).siblings(".fal").toggleClass("active-fal");
  });

  function checkWidth() {
    var windowSize = $(window).width();
    if (windowSize > 974) {
      $("#navigration .dropdown > .nav-link")
        .removeClass("enabled")
        .addClass("disabled");
      $("#navigration .dropdown-2 > .dropdown-item")
        .removeClass("enabled")
        .addClass("disabled");
    } else {
      $("#navigration .dropdown > .nav-link")
        .removeClass("disabled")
        .addClass("enabled");
      $("#navigration .dropdown-2 > .dropdown-item")
        .removeClass("disabled")
        .addClass("enabled");
    }
  }
  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);

  $(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > 10) {
      $("#navigration").css({
        background: "#222429",
      });
    } else {
      $("#navigration").css({
        background: "none",
      });
    }
  });

  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });

  var owl = $("#homeSection .owl-carousel");
  owl.owlCarousel({
    animateOut: "fadeOut",
    loop: true,
    nav: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  // PORTFOLIO SECTION
  var mixer = mixitup("#portfolio");
  $(".indicator > span").click(function () {
    $(".indicator > span").removeClass("active");
    $(this).addClass("active");
  });

  // $('#portfolio').magnificPopup({
  //    type:'image',
  //    delegate: ".img-box > a",
  //    gallery: { enabled: true }
  // });

  var owl2 = $("#testimonialSection .owl-carousel");
  owl2.owlCarousel({
    animateOut: "fadeOut",
    loop: true,
    nav: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

  var owl3 = $("#specialFeature .owl-carousel");
  owl3.owlCarousel({
    animateOut: "fadeOut",
    loop: true,
    nav: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });

  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });
  wow.init();

  $(".popup-with-zoom-anim").magnificPopup({
    type: "inline",

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: "auto",

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: "my-mfp-zoom-in",
  });

  /*-- SCROLL UP --*/
  $(".scroll-up").fadeOut();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-up").fadeIn();
    } else {
      $(".scroll-up").fadeOut();
    }
  });

  $(".scroll-up").click(function () {
    $("html").animate({ scrollTop: 0 }, 1000);
    return false;
  });
});

// SETTING UP CAREERS
let xhr = new XMLHttpRequest();

let file = "../json/career.json";

xhr.open("GET", file, true);
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);
    let jobs = data;

    const table = document.querySelector("#careers");

    jobs.forEach((job) => {
      const tr = document.createElement("tr");

      const th = document.createElement("th");
      th.setAttribute("scope", "row");
      th.textContent = job.jobId;

      const td_1 = document.createElement("td");
      th.setAttribute("colspan", "2");
      const div = document.createElement("div");
      const h4 = document.createElement("h4");
      h4.textContent = job.jobName;
      const p = document.createElement("p");
      p.textContent = job.jobCity + "," + job.jobCountry;

      const td_2 = document.createElement("td");
      th.setAttribute("colspan", "10");
      const div_2 = document.createElement("div");
      const p_2_1 = document.createElement("p");
      p_2_1.setAttribute("class", "desc");
      p_2_1.textContent = "Description";
      const div_2_1 = document.createElement("div");
      div_2_1.setAttribute("class", "description");

      const div_2_1_p1 = document.createElement("p");
      div_2_1_p1.textContent =
        "We are looking for " +
        job.jobName +
        " for our " +
        job.jobCity +
        " Office";

      const div_2_1_p2 = document.createElement("p");
      div_2_1_p2.textContent = job.jobExperience;

      const div_2_1_p3 = document.createElement("p");
      div_2_1_p3.textContent = job.jobEducation;

      const td_3 = document.createElement("td");
      const a = document.createElement("a");
      a.setAttribute("href", job.jobApplyUrl);
      a.setAttribute("class", "btn layer-btn");
      a.setAttribute("target", "_blank");
      a.textContent = "APPLY NOW";

      td_3.append(a);

      td_2.append(div_2);
      div_2.append(p_2_1);
      div_2.append(div_2_1);

      div_2_1.appendChild(div_2_1_p1);
      div_2_1.appendChild(div_2_1_p2);
      div_2_1.appendChild(div_2_1_p3);

      td_1.append(div);
      div.append(h4);
      div.append(p);

      tr.append(th);
      tr.append(td_1);
      tr.append(td_2);
      tr.append(td_3);
      table.append(tr);
    });
  }
};
