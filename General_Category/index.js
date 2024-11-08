module.exports=require('../decode-property-map.js')(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))