// Business Logic for Journal ---------
function Journal() {
  this.entries = {};
  this.currentId = 0;
}

Journal.prototype.addEntry = function(entry) {
  entry.id = this.assignId();
  this.entries[entry.entryTitle] = entry;
};

Journal.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Journal.prototype.findEntry = function(id) {
  if (this.entries[id] != undefined) {
    return this.entries[id];
  }
  return false;
};

// Business Logic for Entry ---------
function Entry(title, body) {
  this.entryTitle = title;
  this.entryBody = body;
}

let myJournal = new Journal();
let entry1 = new Entry("Entry1 Title (user inputed)", "Entry1 Body (user inputed)");
let entry2 = new Entry("Entry2 Title (user inputed)", "Entry2 Body (user inputed)");
myJournal.addEntry(entry1);
myJournal.addEntry(entry2);

// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// };