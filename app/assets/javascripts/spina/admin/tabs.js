// Generated by CoffeeScript 2.5.0
(function() {
  $(document).on('click', '.tabs li a[href^="#"]', function() {
    var link, tabs;
    link = $(this);
    tabs = link.parents('.tabs');
    
    // Remove active
    $('.tab-content').removeClass('active');
    tabs.find('li').removeClass('active');
    // Add active
    link.parent('li').addClass('active');
    $(link.attr('href')).addClass('active');
    return false;
  });

}).call(this);