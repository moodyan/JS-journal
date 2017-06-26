var Entry = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    var journalWords = newEntry.journalWords();
    var vowelCount = newEntry.vowelCount();
    var consonantCount = newEntry.consonantCount();
    var teaser = newEntry.getTeaser();


    $('.entry-title').text(title);
    $('.entry-body').text(body);
    $('.word-count').text(journalWords);
    $('.vowel-count').text(vowelCount);
    $('.consonant-count').text(consonantCount);
    $('.teaser').text(teaser);
  });
});
