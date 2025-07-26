import axios from 'axios';

useEffect(() => {
  axios.get('http://localhost:5000/api/projects')
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
}, []);
