const fs = require('fs');

// Đọc file proxies.txt
fs.readFile('proxy.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Tách các dòng trong file
  const proxies = data.split('\n');

  // Thêm "http://" vào đầu mỗi proxy
  const updatedProxies = proxies.map(proxy => {
    return `http://${proxy.trim()}`;
  });

  // Ghi lại kết quả vào file mới
  fs.writeFile('local_proxies.txt', updatedProxies.join('\n'), (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('File updated successfully!');
    }
  });
});
