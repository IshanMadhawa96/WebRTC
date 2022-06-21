
function hasUserMedia() {
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia);
  }
  
  if (hasUserMedia()) {
      /*
        The deprecated Navigator.getUserMedia() 
        method prompts the user for permission to use up to one video input device 
        (such as a camera or shared screen) and up to one audio input device          
        (such as a microphone) as the source for a MediaStream.
        https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia
    */
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia  || navigator.oGetUserMedia;
  
    var constraints = {
      video: {
        mandatory: {
          minWidth: 640,
          minHeight: 480
        }
      },
      audio: true
    };
  
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // The user is using a mobile device, lower our minimum resolution
      constraints = {
        video: {
          mandatory: {
            minWidth: 480,
            minHeight: 320,
            maxWidth: 1024,
            maxHeight: 768
          }
        },
        audio: true
      };
    }
   
    /*
      In JavaScript, JavaScript Lambda usually refers to an anonymous function. 
      That is a function that is not named and is typically used as a value supplied to
      another function in order to pass behavior as a value.
     */
     /*
        In JavaScript, JavaScript Lambda usually refers to an anonymous function. 
        That is a function that is not named and is typically used as a value supplied to 
        another function in order to pass behavior as a value.
     */
    navigator.getUserMedia(constraints, function (stream) {
      var video = document.querySelector('video');
      video.srcObject = stream;
    }, function (error) {
      console.log("Raised an error when capturing:", error);
    });
  } else {
    alert("Sorry, your browser does not support getUserMedia.");
  }
  