Poject ContactManager

SUBJECT: PROGRAMMING

MEMBERS:

-SOLANGE ACONDA

-KHULOOD AL-SELWI
Description:
The Contact Manager App is an application designed to manage contacts efficiently. 
It allows users to add, search, and delete contacts, as well as to assign and manage contact groups. 
The application features a web interface built with HTML, CSS, and JavaScript.
The application uses Electron to provide a desktop environment and SQLite3 for database management

Requirements
Functional Requirements

    1) Add Contact: Allows adding a new contact by entering name, phone number, email, and an optional group.
    2) Delete Contact: Allows deleting a specific contact.
    3) Search Contact: Allows searching contacts by name.
    4) Show Total Contacts: Displays the total number of contacts stored.
    5) Manage Groups: Allows adding contacts to a group and removing them from a group.
    6) Display Contact List: Shows a list of all stored contacts with the option to delete contacts.

 Non-Functional Requirements

 1) Speed
 The app should add, delete and edit contacts quickly, in less than 2 seconds.
 Searching for a contact should take less than 1 second, even if you have up to 1,000 contacts.
 2) Ability:
 The app should work well even if you have up to 10,000 contacts.
 3) Security:
 Your contact information should be protected by encryption, both when stored and transmitted.
 4) Compatibility:
 The app should work on current versions of Windows such as Windows 10 and Windows 11.
 The interface should look good on different screen sizes.
 5) Easy to use:
 The app should be easy to use, even for people who are not familiar with it.
 Error messages should be clear and help resolve problems.
 6) Maintenance:
 The application code must be well written and documented to facilitate its maintenance and future improvements.
 There should be automated testing to make sure everything works correctly after making changes.
 7) Availability:
 The application should be available and working whenever it is run in the terminal, without unexpected crashes.


    Usage:

    Add Contacts: Fill in the name, phone number, email, and group (optional), then click "Add" to add a contact.
    Delete Contacts: Click the "Delete" button next to the contact you want to remove.
    Search Contacts: Use the search field to filter contacts by name.
    Manage Groups: Select a contact and use the buttons to add or remove them from a group.

    Project Structure:

    main.js: The main file that initializes and runs the Electron application.
    index.html: The main page with the user interface.
    style.css: The stylesheet for the user interface.
    script.js: JavaScript file containing the application logic.
    database.js: SQLite database configuration.

   Technologies Used:

    Electron: Provides the desktop application framework.
    SQLite3: Manages the local database for storing contact information.

   License

   This project is licensed under the ISC License. 
