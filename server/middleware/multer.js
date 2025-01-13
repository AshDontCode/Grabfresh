import multer from 'multer'

const storage = multer.memoryStorage()

const upload = multer({ storage : storage })

console.log('upload middleware called')

export default upload