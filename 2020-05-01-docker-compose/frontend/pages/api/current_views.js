export default function handler(_req, res) {
  fetch("http://localhost:4000/total_views")
    .then((response) => {
      console.log(response);
      res.status(200).json({ data: response.json() });
    })
    .catch(res.status(200).json({ data: { current_views: 1000 } }));
}
