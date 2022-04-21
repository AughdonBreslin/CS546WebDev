(function ($) {
  // Does not like require() for some reason
  function checkIsProper (val, varType, variableName) {
    if(!val) throw `Error: ${variableName || 'Variable'} is not defined.`;
    // Check parameter type is correct (also checks if its defined)
    if (typeof val != varType) throw `Error: ${variableName || 'provided variable'} must be a ${varType}.`;
  
    // Also required to catch NaNs since theyre technically type 'number'
    if (varType == 'number' && isNaN(val)) throw `Error: ${variableName || 'provided variable'} must not be NaN.`;
    
    // For strings, check if trimmed string is empty
    if(varType == 'string' && val.trim().length < 1) throw (1 == 1)
     ? `Error: Trimmed ${variableName || 'provided variable'} cannot be empty.`
     : `Error: Trimmed ${variableName || 'provided variable'} must be at least ${length} characters long.`;
  };
  function checkArray(array, elemType, arrName) {
    if(!Array.isArray(array)) throw `Error: ${arrName} must be an array.`;
    if(array.length == 0) throw `Error: ${arrName} must not be empty.`;
    for (const elem of array) {
        checkIsProper(elem, elemType, `Within ${arrName}, ${elem}`);
    }
  };

  // Let's start writing AJAX calls!

  // Initialize variables
  var show = $('#show'),
      homeLink = $('#homeLink'),
      showList = $('#showList');

  // 1. Page Load:
  var requestConfig = {
    method: 'GET',
    url: 'http://api.tvmaze.com/shows'
  };

  $.ajax(requestConfig).then(function (responseMessage) {
    
    // Hide irrelevant stuff
    show.hide();
    homeLink.hide();
    showList.hide();

    // Clear showList
    showList.empty();

    // Make list
    $.each(responseMessage, function () {
      showList.append(`<li>
                       <a class='shows' href='${this._links.self.href}'>${this.name}</a>
                       </li>`);
    });
    showList.show();

    // Click on link
    $(`a.shows`).on('click', function (event) {
      event.preventDefault();
      clicked(event.target.href);
    });
  });

  // 2. Search Form Submission:
  var form = $('#searchForm'),
      searchTerm = $('#search_term');
  form.submit(function (event) {
    event.preventDefault();
    try {
      // Check if theres an input
      checkIsProper(searchTerm.val(), 'string', 'Search term');
      // Now search based on input
      var requestConfig = {
        method: 'GET',
        url: 'http://api.tvmaze.com/search/shows?q=' + searchTerm.val()
      };
      $.ajax(requestConfig).then(function (responseMessage) {
        // Hide irrelevant stuff
        show.hide();
        showList.hide();
        // Clear showList
        showList.empty();
        // Make list
        $.each(responseMessage, function () {
          showList.append(`<li>
                            <a class='shows' href='${this.show._links.self.href}'>${this.show.name}</a>
                           </li>`);
        });
        showList.show();
        homeLink.show();

        // Click on link
        $(`a.shows`).on('click', function (event) {
          event.preventDefault();
          clicked(event.target.href);
        });
      });
    } catch(e) {
      alert(e);
    }
  });

  // 3. Link Clicked:
  function clicked(link) {
    // When clicked, hide stuff
    showList.hide();
    show.empty();

    // Make sure the home link is showing
    homeLink.show();

    var requestConfig = {
      method: 'GET',
      url: link
    };
    $.ajax(requestConfig).then(function (responseMessage) {
      // Check and show name
      try { checkIsProper(responseMessage.name, 'string', 'Show name'); }
      catch(e) { responseMessage.name = 'N/A'; }
      show.append(`<h1>${responseMessage.name}</h1>`);

      // Check and show image
      if(!responseMessage.image || !responseMessage.image.medium)
        responseMessage.image = {medium: '/public/default/notfound.png'};
      show.append(`<img src=${responseMessage.image.medium} alt='showImage'>`);

      // Check language, genres, rating, network, summary
      try { checkIsProper(responseMessage.language, 'string', 'Language'); }
      catch(e) { responseMessage.language = 'N/A'; }

      try { checkArray(responseMessage.genres, 'string', 'Genres'); }
      catch(e) { responseMessage.genres = ['N/A']; }

      if(!responseMessage.rating || !responseMessage.rating.average)
        responseMessage.rating = {average: 'N/A'};
      
      if(!responseMessage.network || !responseMessage.network.name)
        responseMessage.network = {name: 'N/A'};

      try { checkIsProper(responseMessage.summary, 'string', 'Summary'); }
      catch(e) { responseMessage.summary = 'N/A'; }

      //Show above in definition list
      show.append(
        `<dl>
           <dt>Language</dt>
           <dd>${responseMessage.language}</dd>
           <dt>Genres</dt>
           <ul>${responseMessage.genres.map((genre) => `<li>${genre}</li>`).join('')}</ul>
           <dt>Average Rating</dt>
           <dd>${responseMessage.rating.average}</dd>
           <dt>Network</dt>
           <dd>${responseMessage.network.name}</dd>
           <dt>Summary</dt>
           <dd>${responseMessage.summary}</dd>
         </dl>`
      );
    });
    show.show();
  }
})(window.jQuery);
