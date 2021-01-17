const handleProfile = (req, res, db) => {
    db.select('*').from('users').where({
        id: req.params.id
    }).then(user => {
        if(user.length > 0) {
            res.json(user[0]);
        }
        else {
            res.status(400).json('User not found.')
        }
    })
    .catch(err => res.status(400).json('User not found.'))
}

module.exports - {
    handleProfile: handleProfile
}