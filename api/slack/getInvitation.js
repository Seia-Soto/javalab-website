const fetch = require('isomorphic-unfetch')

module.exports = async (req, res) => {
  await fetch('https://temp.cheonghyun.com/slack/submit.php', {
    method: 'POST',
    headers: {
      via: 'Seia-Soto; comduck-web',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: req.body.email
    })
  })

  res.status(200)
  res.end()
}
