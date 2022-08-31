import axios from 'axios';

export async function createUser(email, password) {
  const response = await axios
    .post('/api/auth/signup', {
      email: email,
      password: password,
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

  return response;
}
