(function() {

  /* infinite scroll */

  (function() {
    // variables
    var containerId     = '#infinite-container';
    var itemClass       = '.infinite-item';
    var paginationClass = '#pagination';
    var nextClass       = '.next';
    var offsetPx        = 500;
    var throttleMs      = 150;
    var maxPages        = -1; // -1 to disable

    // skip if no pagination or last page
    var next = $(paginationClass).find(nextClass);
    if (!next || !next.is('a')) { return; }

    var timeout, disabled;
    var _window      = $(window);
    var container    = $(containerId);
    var pagination   = $(paginationClass);
    var fetchedPages = 0;

    var inView = function() {
      var windowBottom = _window.scrollTop() + _window.height();
      return (container.offset().top + container.outerHeight()) <= (windowBottom + offsetPx);
    };

    var appendArticles = function() {
      if (maxPages !== -1 && (fetchedPages + 1) >= maxPages) {
        disabled = true;
        return;
      }
      disabled = true;
      $.ajax({
        url: $(paginationClass).find(nextClass).attr('href'),
        method: 'get'
      }).done(function(resp) {
        fetchedPages++;
        var doc = $(resp);
        var remoteItems = doc.find(containerId).find(itemClass);
        var remotePagination = doc.find(paginationClass);
        container.append(remoteItems);
        pagination.html(remotePagination.html());
        if (pagination.find(nextClass).is('a')) {
          disabled = false;
        }
      });
    };

    $(window).on('scroll', function() {
      // skip if throttled or ajax active
      if (timeout || disabled) { return; }
      timeout = setTimeout(function() {
        timeout = null;
        if (inView()) { appendArticles(); }
      }, throttleMs);
    });

    pagination.hide();
  })();

})();
