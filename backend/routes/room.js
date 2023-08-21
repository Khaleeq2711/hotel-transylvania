function Login() {
  function sendRequest(parameter,e) {

    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const suite = document.getElementById(parameter)?.textContent;
    console.log(suite);
    const postData = {
      password: pass,
      email: email,
      suite: suite
    };
    



    fetch('http://localhost:3000/api/signup/bookroom', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(response => {
        console.log(response.status)
        if (response.status == 202) {
          alert('Your Email is not Registered..') 
        }
        else if (response.status == 203) {
          alert('Your Password is Incorrect..')
        }
        else if (response.status == 201) {
          alert('Room Booked Successfully.. !')
          window.location.href = '/offers'; 

        }
      })
      // .then(data => {
      //     console.log(data); // Response from the API
      // })
      .catch(error => {
        console.error('Error:', error);
   });

  }



<>
<button onClick={(e) => sendRequest('1-h', e)}></button>


<button onMouseOver={GetDataReq}  onMouseOut={ClearReq} type="signup"></button>

</>

}