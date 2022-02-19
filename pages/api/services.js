import axios from "axios"

export default async function YourBackend(req, res) {
  if (req.method == 'GET') {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then(response => {
      return new Promise((resolve, reject) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        res.end(JSON.stringify(response.data));
        resolve();
      })
    })
  }
}