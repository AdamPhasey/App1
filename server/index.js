import express from 'express';

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", async (req, res) => {
    const response = await fetch('https://environment.data.gov.uk/flood-monitoring/id/stations/F1906')
    const data = await response.json()
    res.json(data)
    }
)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

