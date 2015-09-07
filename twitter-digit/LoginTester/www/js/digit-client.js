document.getElementById('digit-sdk').onload = function() {

  Digits.init({
      consumerKey: 'QXRCyCsbFtYm0jeLOzHLilDgm'
    }).done(function() {
      println("Digits is initialized")
        // Digits.getLoginStatus()
        //   .done(onLoginStatus)
        //   .fail(onLoginStatusFailure);
    })
    .fail(function() {
      println("Digits failed to initialize")
    })

};

function login() {
  println('SDK Start Login flow');

  Digits.logIn()
    .done(onLogin)
    .fail(onLoginFailure);
}

function onLoginStatus(loginStatusResponse) {
  println('Login status: ', loginStatusResponse);
}

function onLogin(loginResponse) {
  println('oAuthEcho Headers: ', loginResponse);

  var oAuthHeaders = loginResponse.oauth_echo_headers;
  var verifyData = {
    authHeader: oAuthHeaders['X-Verify-Credentials-Authorization'],
    apiUrl: oAuthHeaders['X-Auth-Service-Provider']
  };

  $.post('/verify', verifyData)
    .done(function(){ window.reload(); });
}

function openDigits() {
  var digits = new DigitsCordova('QXRCyCsbFtYm0jeLOzHLilDgm'); //Replace with your own consumerKey
  digits.open()
    .successCallback(function(loginResponse) {
      var oAuthHeaders = loginResponse.oauth_echo_headers;
      var verifyData = {
        authHeader: oAuthHeaders['X-Verify-Credentials-Authorization'],
        apiUrl: oAuthHeaders['X-Auth-Service-Provider']
      };

      $.post('/verify', verifyData)
        .done(function() {
          window.reload();
        });
    }).failCallback(function(error) {
      //error
    }).errorCallback(function(error) {
      //error
    })
}

function println(text, response) {
  var message = document.createElement('p');
  message.innerText = text;

  if (response) {
    var code = document.createElement('code');
    code.innerText = typeof response == 'string' ? response : JSON.stringify(response);
    message.appendChild(code);
  }

  document.body.appendChild(message);
}
