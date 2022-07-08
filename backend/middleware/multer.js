const multer = require('multer')
const path = require('path')
const fs = require('fs')

const root = path.dirname(__dirname)
const public = path.join(root, 'public')
const images = path.join(public, 'images')
const catalog = path.join(images, 'catalog')

//  Multer Storage
const storage = multer.diskStorage({
  destination: (req, files, cb) => {
    const dir = req.body.make.split(' ').join('').toLowerCase()
    const uploadDir = path.join(catalog, dir)

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true })
    }

    cb(null, uploadDir)
  },
  filename: (req, file, cb) => {
    const year = req.body.year
    const model = req.body.model.split(' ').join('').toLowerCase()
    const randomNumber = Math.round(Math.random() * 1e9)
    const extension = path.extname(file.originalname.toLowerCase())
    const uploadFilename = model + year + randomNumber + extension

    // Filename
    cb(null, uploadFilename)
  },
})
const upload = multer({ storage: storage })

module.exports = upload
