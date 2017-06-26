function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.journalWords = function () {
  var output = [];
  output = this.body.split(" ");
  return output.length;
};

Entry.prototype.vowelCount = function () {
  var output = [];
  output = this.body.match(/[aeiou]/gi).length;
  return output;
};

Entry.prototype.consonantCount = function () {
  var output = [];
  output = this.body.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
  return output;
};
Entry.prototype.getTeaser = function () {
  var output = [];
  output = this.body;
  if (output.length > 8) {
    output = this.body.split(' ');
    output = output.slice(0, 8);
  } else {
  return output;
  }
  return output.join(' ') + ('...');
};

exports.journalModule = Entry;
