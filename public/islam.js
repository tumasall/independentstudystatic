(function(){
      var words = [
          'Globalization',
          'Westernization',
          ], i = 0;
      setInterval(function(){
          $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 2000);

  })();
