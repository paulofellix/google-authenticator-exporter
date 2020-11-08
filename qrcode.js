const authenticator = require('authenticator')
const qrcode = require('qrcode-terminal')
const json = require('./accounts.json')

for (const n in json) {
  console.log(`第${(parseInt(n) + 1)}个`)
  const r = authenticator.generateTotpUri(json[n].totpSecret, json[n].name.replace(json[n].issuer + ':', ''), json[n].issuer, 'SHA1', 6)
  console.log(r)
  qrcode.generate(r, { small: true })
}
