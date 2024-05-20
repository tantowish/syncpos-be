function upload(req, res) {
  const file = req.file
  if (!file) {
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }

  res.status(200).json({
    message: 'File uploaded successfully',
    data: file.filename
  })
}

module.exports = {
  upload
};