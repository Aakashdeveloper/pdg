/*
	Approch: OOJS prototype pattern with singleton.
  Why Prototype: Earlier thought was using funcational programming but using this prototype OOJS pattern due to sharing singale instance conusming less memory and easy to handle at one centeralize repository (Memory point).
  Singleton: Instead using body element multiple times created single instace with box container.
  
  Why Above approch: Showing understanding of difference JS pattern.
  MODELS: Properties schema -- Box instance properies idea is what properties are available when reusing same box instance for redrawing.
  
  Object Instance
  1. Box
  	a. Getter/Setter reusability instance properties with defualt value and later for redrawing setting available properties as per schema.
    b. createBox function return instance of the box where we can add to any container.
    b. Why DIV box: Easy to render and supported in multiple browsers, we would have also used Canvas/SVG approch for lightweight. Canvas/SVG can be suited well if we have complex graphcis drawing.
  2. Main -- Element handling and layout building
  	a. Building dynamic stage and box container with singleton approch. 
    b. Dynamically creating and registering events for elements e.g buttons
    c. Sending data to server with box instance (JSON collection)
*/

(function(window){

	// Defining Box Model Info
	var MODELS = {
  	dimension: {
    	width: 0,
      height: 0
    },
    position: {
    	top: 0,
      left: 0
    },
    style: {
    	background: '',
      border: {
      	color: '',
      	width: 0,
        type: ''
      },
      position: 'absolute'
    },
    max_pixel: 100
  }
  
  //Box Object contains all the info getter and setter
  // Mapping style/dimension/postion and delay info of the box
	function Box(){
  	//Generating random pixel for Box height/width/top/left
    this.getRandomPixel = function(offset) {
      return Math.floor((Math.random() * MODELS.max_pixel) + 1 + (offset || 0)) + "px";
    }
    
    //Generating random box background color
    this.getRandomColor = function() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    
    //Assing default valueu to box dimension 
  	this._dimension = Object.assign({},MODELS.dimension, {
    	width: this.getRandomPixel(),
      height: this.getRandomPixel()
    });
    //Assing default valueu to box postion 
    this._position = Object.assign({},MODELS.position, {
    	top: this.getRandomPixel(100),
      left: this.getRandomPixel(100)
    });
    
    //Assing default valueu to box style 
    this._style = Object.assign({}, MODELS.style, {
    	background: this.getRandomColor(),
      border: {
      	color: this.getRandomColor(),
        type: 'solid',
        width: 1
      }
    });
    
    //Sequence delay redrawing boxes
    this._delay = 0;
  }
  
  //Creating box getter/setter for properties delay/style/dimension/position
  Box.prototype = {
  
  	get delay() {
   		return this._delay;
   	},
   	set delay(value) {
   		this._delay = value
   	},
  	get style() {
   		return this._style;
   	},
   	set style(value) {
   		this._style = value
   	},
    get position() {
   		return this._position;
   	},
   	set position(value) {
   		this._position = value
   	},
    get dimension() {
   		return this._dimension;
   	},
   	set dimension(value) {
   		this._dimension = value
   	},
    initBox(){
  		return document.createElement("div");
  	},
    positionAndStyleBox(element){ 
      var style = Object.assign({}, 
        this.position, 
        this.dimension, 
        this.style, {
        	border: this.style.border.width +'px ' + this.style.border.type +' '+this.style.border.color
        }
      )
      for(var k in style) {
      	element.style[k] = style[k]
      }
      return element;
  	},
    //Creating box 
    createBox(){
      return this.positionAndStyleBox(this.initBox());
    }
  }
	//Adding box container to stage
  function addToStage(element){
  	document.body.appendChild(element);
  }
  
  /*
  Main Object responsible for laying and interactivity for
  Adding/Redrading with delay build (Preparing JSon object for 	reusability and submitting report to server
  */
  
  function Main(){
  	this._mainContainer = null;
    this._boxContainer = null;
    this._boxInstanceCollection = [];
    this.trackBoxDelay = Date.now();
  }
  
  //Box Instance colleciton getter (JSON object)
  Main.prototype.getBoxInstanceCollection = function(){
  	return this._boxInstanceCollection;
  }
  
  //Box Instance colleciton setter (JSON object)
  Main.prototype.addBoxIntoCollection = function(instance){
  	var boxInfo = {
    	style: instance.style,
      position: instance.position,
      dimension: instance.dimension,
      delay: (Date.now() - this.trackBoxDelay)
    }
  	this._boxInstanceCollection.push(boxInfo);
  }
  
  //Start the application
  Main.prototype.start = function() {
  	this.buildUI();
  }
  //Adding box to stage
  Main.prototype.addBoxToStage = function(element){
  	this.getBoxContainer().append(element.createBox());
  }
  
  //Register listeners for buttons e.g. Build redraw report
  Main.prototype.registerListener = function(element) {
  	var ref = this;
    element.addEventListener("click", function(e) {
      switch(e.currentTarget.id) {
        case "BUILD": 
          var box = new Box();
          ref.addBoxIntoCollection(box);
          ref.addBoxToStage(box);
          break;
        case "REPORT": 
          ref.sendBoxCollectionInfoToServer()
          	.then(function(res) {
            	console.log(res)
            })
            .catch(function(err){
            	console.log(err)
            });
          break;
        default:
          console.log("Action not Found !!!");
      }
    });
  }
  
  //Creating buttons dynamically paramters button_label and button_id
  Main.prototype.createButton = function(button_label, button_id) {
    var button = document.createElement("button");
    button.setAttribute("id", button_id);
    var textNode = document.createTextNode(button_label); 
    button.appendChild(textNode);
    this.registerListener(button);   
    
    return button;
  }
  
  //Sending data to Server box colleciton JSON object
  Main.prototype.sendBoxCollectionInfoToServer = function(){
 		//var SERVER_URL =  "https://reqres.in/api/users?page=2"; //Dummy testing url
  	var SERVER_URL = "https://adspsp.com/999/1/";
    var ref = this;
    return new Promise(function(resolve, reject) {
    		var xhttp = new XMLHttpRequest();
    		xhttp.onload = function() {
          if ((this.status >= 200 && this.status < 300) || this.status === 304) {
            resolve({
              data: xhttp.responseText
            })
          }
          else {
          	reject({
              error: true,
              message: "Data Not Found !!!"
            });
          }
        };
      xhttp.onerror = function(error) {
        alert("Coonection to Api Failed!!!");
      }
      xhttp.open("GET", SERVER_URL, true);
      xhttp.setRequestHeader( 'Access-Control-Allow-Origin', '*');
      xhttp.setRequestHeader( 'Content-Type', 'application/json' );
      xhttp.withCredentials = false;
      
      var all_boxes = Object.assign([], ref.getBoxInstanceCollection());
     
      //Check if any box on the stage
      if(all_boxes.length == 0)
      {
				reject({
        	error: true,
          message: "Please add Boxes to send report!!!"
        });
      }
      else{
      	 alert(JSON.stringify(all_boxes))
         //This is commented due to API url is not working..
      	//xhttp.send("payload="+all_boxes);
      }      
    });
    
  }
  //Building UI for stage
  Main.prototype.buildUI = function() {
  	var container = this.getMainContainer();
    var build = this.createButton("Build", "BUILD");
    var report = this.createButton("Report", "REPORT");
    
    container.appendChild(build);
    container.appendChild(report);
  }
  
  //Getting main box container where all the boxes will reside
  Main.prototype.getBoxContainer = function(){
  	if(this._boxContainer == null){
    	 this._boxContainer = document.createElement("div");
       this._boxContainer.setAttribute("id", "box-container");     
       this.getMainContainer().appendChild(this._boxContainer);
       
    }
    return document.getElementById("box-container");
  }
  
  //Main body container
  Main.prototype.getMainContainer = function(){
  	if(this._mainContainer == null)
    	this._mainContainer = document.body;
      
    return this._mainContainer;
  }
  
  var main = new Main();
  //Starting the application
  main.start();
 

})(window);