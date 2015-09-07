var appid = "552d7395-f507-4f15-8f2d-f9ffd8f75ee7";
// The ID that other users will identify you by (your username)
var endpointId;
// Create the client object using the App ID
var client = respoke.createClient({
    appId: appid,
    developmentMode: true
});
// "connect" event fired after successful connection to Respoke
client.listen('connect', function() {
    $("#status").html("Welcome \"" + endpointId + "\"");
});
// Listen for incoming messages
client.listen('message', function(evt) {
    $("#messages").append(
        "<li>" + evt.message.message + "</li>"
    );
});
// Connect to Respoke when the user clicks "connect"
$("#doLogin").click(function() {
    $("#status").html("Connecting...");
    endpointId = $("#endpoint").val();
    client.connect({
        endpointId: endpointId // your username is the endpoint
    });
});
// Send message
$("#sendMessage").click(function() {
    // Get the recipients name
    var remote = $("#remoteId").val();
    // Make an endpoint for that recipient
    var endpoint = client.getEndpoint({
        id: remote
    });
    // Grab the text to send
    var messageText = $("#textToSend").val();
    // Send it
    endpoint.sendMessage({
        message: messageText
    });
    // Show yourself the message
    $("#messages").append(
        "<li>" + messageText + "</li>"
    );
    // Clear the text you just sent
    $("#textToSend").val('');
});
