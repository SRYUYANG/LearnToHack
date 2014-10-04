Parse.initialize("i3dGLONpG57AMgPVqquOKQQPJaFy64sYs8ObWxwQ", "AfaEsQlF2BE0Fk3ikOPsjThDXBYXmt3LznVeSoGr");

var Participant = Parse.Object.extend("Participant");
var participant = new Participant();

document.getElementById("sign-up").onclick = function() {
    var fName = document.getElementById("lth-reg-Fname").value;
    var lName = document.getElementById("lth-reg-Lname").value;
    var uniqueName = document.getElementById("lth-reg-Uname").value;
    var gender = document.getElementById("lth-reg-gender").value;
    var grade = document.getElementById("lth-reg-grade").value;
    var major = document.getElementById("lth-reg-major").value;
    
    participant.set("FirstName", fName);
    participant.set("LastName", lName);
    participant.set("UniqueName", uniqueName);
    participant.set("Gender", gender);
    participant.set("Grade", grade);
    participant.set("Major", major);
    
    participant.save(null, {
  success: function(participant) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + participant.id);
  },
  error: function(participant, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + participant.message);
  }
});
};