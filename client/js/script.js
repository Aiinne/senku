function startlog(){
    var net1 = document.getElementById('username').value + document.getElementById('password').value;
    var net2 = ('DiceX') + ('Tanaka');
    if (net1 == net2) {
      var logakses = document.getElementById('akses').innerHTML;
      alert('Login Successfully')
      window.open('/docs');
    } else {
      var logakses = document.getElementById('akses').innerHTML;
      alert('Login Failed')
    }
  };