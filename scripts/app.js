$(document).ready(function(){

/***  Main page  ***/

  $('#fullpage').fullpage({
  				sectionsColor: ['#F5F7F4', '#E74723', '#FFF', '#E74723', '#2E2925', '#FFF'],
  				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '6thpage', 'lastPage'],
  				menu: '#menu',



          //Design
          controlArrows: true,
          verticalCentered: true,
          resize : false,

    //Scrolling
          css3: true,
          scrollingSpeed: 700,
          autoScrolling: true,
          fitToSection: true,
          fitToSectionDelay: 1000,
          scrollBar: false,
          easing: 'easeInOutCubic',
          easingcss3: 'ease',
          loopBottom: false,
          loopTop: false,
          loopHorizontal: true,
          continuousVertical: false,
          normalScrollElements: '#element1, .element2',
          scrollOverflow: false,
          touchSensitivity: 15,
          normalScrollElementTouchThreshold: 5,

     //Accessibility
          keyboardScrolling: true,
          animateAnchor: true,
          recordHistory: true,

      //Design
          controlArrows: true,
          verticalCentered: true,
          resize : false,

          paddingTop: '3em',
          paddingBottom: '10px',
          fixedElements: '#header, .footer',
          responsiveWidth: 0,
          responsiveHeight: 0,

          //Custom selectors
          sectionSelector: '.section',
          slideSelector: '.slide',

          //events
          onLeave: function(index, nextIndex, direction){},
          afterLoad: function(anchorLink, index){},
          afterRender: function(){},
          afterResize: function(){},
          afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
          onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  			});

        /*** Contact page ***/

          $('#galaxy, #failure, #success').hide();

          $('#tryagain').on('click', function(){
            $('#contactForm').show();
            $('#failure').hide();
          });


          $('#returnHome').on('click', function(){
            $('#contactForm').show();
            $('#success').hide();
            location.hash = "#firstPage";
            $('#name').val("");
            $('#email').val("");
            $('#message').val("");
          });


          $('#submit').on('click', function(){
            if($('#galaxy').val()===''){
              Email();
            }

          });

          function Email(){
            var email = $('#email').val(), name=$('#name').val(), message=$('#message').val();

            if(email!=='' && name!=='' && message!==''){

              $.ajax({
              type: "POST",
              url: "https://mandrillapp.com/api/1.0/messages/send.json",
              data: {
                'key': 'rQmxUG8b5POqzbzo5QvSoA',
                'message': {
                  'from_email': email,
                  'to': [
                      {
                        'email': 'team@nationalyoungiescamp.com.au',
                        'name': 'NYC Team',
                        'type': 'to'
                      }
                    ],
                  'autotext': 'true',
                  'subject': 'Enquiry from ' + name,
                  'html': message
                }
              }
             }).done(function(response) {
                $('#contactForm').hide();
                $('#success').show();
             }).fail(function(){
                $('#contactForm').hide();
                $('#failure').show();
              });
            }
          }


/**** map ****/



});
