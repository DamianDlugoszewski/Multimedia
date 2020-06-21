//Przesunięcia animacje

myID1 = document.getElementById("myID1");
myID2 = document.getElementById("myID2");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 300) {
        myID1.className = "Martin show2";
    } else {
        myID1.className = "Martin hide2";
    }
	if (y >= 900) {
        myID2.className = "GoT show1";
    } else {
        myID2.className = "GoT hide1";
    }
	
};

window.addEventListener("scroll", myScrollFunc);



var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 400) {
        myID4.className = "Stoneheart show1";
	} else {
        myID4.className = "Stoneheart hide1";
    }
	if (y >= 800) {
        myID5.className = "West show2";
	} else {
        myID5.className = "West hide2";
    }
	if (y >= 1300) {
        myID6.className = "Jeyne show1";
	} else {
        myID6.className = "Jeyne hide1";
    }
	if (y >= 1800) {
        myID7.className = "Stannis show2";
	} else {
        myID7.className = "Stannis hide2";
    }
	if (y >= 2300) {
        myID8.className = "Mance show1";
	} else {
        myID8.className = "Mance hide1";
    }
	if (y >= 2700) {
        myID9.className = "Zimnoreki show2";
	} else {
        myID9.className = "Zimnoreki hide2";
    }
	if (y >= 3200) {
        myID10.className = "Jaime show1";
	} else {
        myID10.className = "Jaime hide1";
    }
	if (y >= 3700) {
        myID11.className = "Jon show2";
	} else {
        myID11.className = "Jon hide2";
    }
	if (y >= 4200) {
        myID12.className = "Aegon show1";
	} else {
        myID12.className = "Aegon hide1";
    }
	if (y >= 4600) {
        myID13.className = "Quentyn show2";
	} else {
        myID13.className = "Quentyn hide2";
    }
	if (y >= 5100) {
        myID14.className = "Arianne show1";
	} else {
        myID14.className = "Arianne hide1";
    }
	if (y >= 5600) {
        myID15.className = "Barristan show2";
	} else {
        myID15.className = "Barristan hide2";
    }
	if (y >= 6000) {
        myID16.className = "Aeron show1";
	} else {
        myID16.className = "Aeron hide1";
    }
	if (y >= 6500) {
        myID17.className = "Euron show2";
	} else {
        myID17.className = "Euron hide2";
    }
	if (y >= 6800) {
        myID18.className = "Victarion show1";
	} else {
        myID18.className = "Victarion hide1";
    }
};

window.addEventListener("scroll", myScrollFunc);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}