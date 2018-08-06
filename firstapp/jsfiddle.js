/**
	Creating a closure for executing the code
  
  My Understanding of problem - 
  Problem basically consisted of creating a UI layout with boxes
  and the main trick point was to find a way to record the whole 
  screen interaction of creating the boxes so that it can be later used
  for playback purposes.
  
  Logic for data format of box - 
  Each box will have structural properties as per below
  structure to defined the geometry of the box and a delay
  in creating that box so as to use that information to playback
  the exact order.
  Array of boxes will be sent and the boxes will be created in the same
  order as the array.
  Box Format - 
  {
  	height,
    width,
    position,
    top,
    background,
    border :{
      color,
      width,
      type
    }
  }
  
  Note - The API that was given was returning a 504 Gateway timeout error
  
*/
(function(window) {
  var serverUrl = "https://adspsp.com/999/1/";
  //Array to hold information about the activities on screen
  var elementInfos = [];
  //Start Time of user interaction. It is used to record the delay b/w each click.
  var start = Date.now();
  /**
  	Get the main container where the boxes will be appended
  */
  var getMainContainer = function() {
    return document.body;
  }
  /**
  	Generate a random Pixel value. offset for offseting the 
    value by a certain amount
  */
  var getRandomPixelParameter = function(offset) {
    //Used offset to disable overlapping of buttons and report
    return Math.floor((Math.random() * 100) + 1 + (offset || 0)) + "px";
  }
  /**
  	Generate a random dimension object which describes the
    whole box
  */
  var getRandomDimensions = function() {
    return {
      height: getRandomPixelParameter(),
      width: getRandomPixelParameter(),
      left: getRandomPixelParameter(100),
      top: getRandomPixelParameter(100),
      background: '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
      border: {
        width: 1,
        color: 'red',
        type: 'solid'
      },
      position: "absolute"
    }
  };
  /**
  	Construct the box based on passed dimensions
  */
  var constructBox = function(dimensions) {
    if (!dimensions) {
      return;
    }
    var element = document.createElement("div");
    element.style.position = dimensions.position;
    element.style.background = dimensions.background;
    element.style.border = dimensions.border.width + " px " + dimensions.border.type + " " + dimensions.border.color;
    element.style.width = dimensions.width;
    element.style.height = dimensions.height;
    element.style.left = dimensions.left;
    element.style.top = dimensions.top;
    return element;
  };
  /**
  	Send Screen report to server
  */
  var sendReport = function(data) {
    if (elementInfos.length == 0) {
      alert("Please click the build button to generate the box first");
      return;
    }
    var dataString = JSON.stringify(data);
    var url = serverUrl;
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', url, true);
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function() {
        var data = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
          resolve(data);
        } else {
          reject(data);
        }
      }
      //For handling the 504 error i encountered
      xhr.onerror = function(err) {
        alert("There was an error connecting to the API");
      }
      xhr.send(dataString);
    });
  }
  /**
  	on Build button click
  */
  var onClickBuild = function() {
    var end = Date.now();
    //Calculate the delay b/w click
    var difference = end - start;
    //reset start to end
    start = end;
    var mainContainer = getMainContainer();
    var dimensions = getRandomDimensions();
    mainContainer.appendChild(constructBox(dimensions));
    //Append delay to the box info
    dimensions.delay = difference;
    elementInfos.push(dimensions);
  }
  /**
  	on Report button click
  */
  var onClickReport = function() {
    var mainContainer = getMainContainer();
    sendReport(elementInfos).then(function(data) {
      console.log(data);
      alert("Data Saved successfully");
    }).catch(function(e) {
      console.log(e);
      alert("Error while saving the data");
    });
  }
  /**
  	Create UI Button
  */
  var createButton = function(text) {
    var button = document.createElement("button");
    button.type = "button";
    button.innerText = text;
    return button;
  }
  /**
  	Create the whole UI
  */
  var createUI = function() {
    var mainContainer = getMainContainer();
    var buildButton = createButton("Build");
    buildButton.onclick = onClickBuild;
    var reportButton = createButton("Report");
    reportButton.onclick = onClickReport;
    mainContainer.appendChild(buildButton);
    mainContainer.appendChild(reportButton);
  };
  createUI();
})(window)
