const Clarifai = require('clarifai'); 

const app = new Clarifai.App({
    apiKey: 'fa36c442fc2545afa28038abb2355337'
  })

const handleApiCall = (req, res) => {
    app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
        res.json(data);
    })
    .catch(err => res.status(400).json(err))
}
  

const handleImage = (req, res, db) => {
    db('users').where('id', '=', req.body.id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0]);
    })
    .catch(err => res.status(400).json('Unable to get entries.'))    
}

module.exports = {
    handleImage: handleImage,
    handleApiCall: handleApiCall
}