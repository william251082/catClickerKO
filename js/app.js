var ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/bigtallguy/434164568');

	this. incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);

	this.catLevel = ko.computed(function() {
		var clicks = this.incrementCounter();
		if (clicks <= 10) {
      return 'Newborn';
    } else if (clicks >= 40) {
      return 'Infant';
    } else {
      return 'Teen';
    }
  }, this);
}

	/* means
		var count = 0;
		count++;
		*/
	};

}

ko.applyBindings(new ViewModel());

/*
function AppViewModel() {
    // ... leave firstName and lastName unchanged ...
 
    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);
} */

