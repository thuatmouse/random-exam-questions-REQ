var express = require('express');
var router = express.Router();
var path = require('path')

/* GET users listing. */
router.get('/:folderName/:filename', function(req, res, next) {
  
  let folderName = req.params.folderName
  let fileName = req.params.filename
  let dirname = path.dirname(require.main.filename)
  if (dirname.indexOf('\\bin') !== -1) dirname = dirname.replace('\\bin', '')
  if (dirname.indexOf('/bin') !== -1) dirname = dirname.replace('/bin', '')
  let fileUrl = `${dirname}/${folderName}/${fileName}`
  res.sendFile(fileUrl)
});

module.exports = router;
