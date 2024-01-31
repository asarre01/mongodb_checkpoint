// Create a database called "contact"
use contact;

// Create a collection called "contactList"
db.createCollection("contactList");

// Insert these documents in "contactList"
db.contactList.insertMany([
    {
        lastName: "Ben Lahmer",
        firstName: "Fares",
        email: "fares@gmail.com",
        age: 26
    },
    {
        lastName: "Kefi",
        firstName: "Seif",
        email: "kefi@gmail.com",
        age: 15
    },
    {
        lastName: "Fatnassi",
        firstName: "Sarra",
        email: "sarra.f@gmail.com",
        age: 40
    },
    {
        lastName: "Ben Yahia",
        firstName: "Rym",
        email: "",
        age: 4
    },
    {
        lastName: "Cherif",
        firstName: "Sami",
        email: "",
        age: 3
    }
]);

// Display all of the contacts list
db.contactList.find();

// Display all the information about only one person using his ID.
db.contactList.find({_id: ObjectId('65ba34b894d8f039fb02c859')}); 

// Display all the contacts with an age >18.
db.contactList.find({age: {$gt : 18}});

// Display all the contacts with an age>18 and name containing "ah".
db.contactList.find({
    age: {$gt: 18},
    lastName: {$regex: /ah/i}
});

// Change the contact's first name from "Kefi Seif" to "Kefi Anis".
db.contactList.update({firstName: "Seif"}, {$set: {firstName: "Anis"}});

// Delete the contacts that are aged under 5.
db.contactList.remove({age: {$lt : 5}});

// Display all of the contacts list.
db.contactList.find();
