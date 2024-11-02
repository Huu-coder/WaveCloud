const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Tạo thư mục 'music' nếu chưa tồn tại
const musicDir = path.join(__dirname, 'music');
if (!fs.existsSync(musicDir)) {
    fs.mkdirSync(musicDir);
}

// Mảng chứa các loại tệp hợp lệ
const validMimeTypes = ['audio/mpeg', 'audio/wav', 'audio/flac', 'audio/ogg'];

// Cấu hình lưu trữ cho multer với kiểm tra tệp
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, musicDir); // Lưu tệp vào thư mục 'music'
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Sử dụng tên tệp gốc
    }
});

// Kiểm tra tệp trước khi tải lên
const fileFilter = (req, file, cb) => {
    if (validMimeTypes.includes(file.mimetype)) {
        cb(null, true); // Cho phép tệp
    } else {
        cb(new Error('Invalid file type. Only .mp3, .wav, .flac, and .ogg are allowed!'), false); // Từ chối tệp
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// Middleware để phục vụ tệp tĩnh (static files)
app.use(express.static(__dirname)); // Cung cấp tệp tĩnh từ thư mục hiện tại

// Điểm cuối để xử lý tải lên tệp
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('Tệp đã được tải lên thành công: ' + req.file.originalname);
});

// Khởi động máy chủ
app.listen(PORT, () => {
    console.log(`Máy chủ đang chạy tại http://localhost:${PORT}`);
});
