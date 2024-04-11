// Add your code here
function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    };
  
    return fetch('http://localhost:3000/users', configObj)
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        document.body.innerHTML += `<p>New user ID: ${id}</p>`;
      })
      .catch(error => {
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }

  submitData('John Doe', 'johndoe@example.com');
  