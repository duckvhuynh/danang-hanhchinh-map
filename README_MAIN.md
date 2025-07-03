# Bản đồ Trung tâm Hành chính Đà Nẵng

Ứng dụng web bản đồ tương tác hiển thị phạm vi phục vụ của các trung tâm hành chính tại Đà Nẵng và các huyện cũ thuộc Quảng Nam.

## 🎯 Mục tiêu

Xây dựng bản đồ web tương tác giúp visualize phạm vi phục vụ của các trung tâm hành chính tại Đà Nẵng sau sáp nhập, giúp nhận diện:
- Các vùng phủ sóng
- Vùng chồng lấn
- Vùng trống thiếu dịch vụ

## 🗺️ Các lớp dữ liệu

### Layer A: Trung tâm Hành chính cấp Huyện
- **22 trung tâm** (17 huyện cũ Quảng Nam + 5 quận Đà Nẵng)
- **Bán kính phục vụ**: 7km
- **Màu sắc**: Xanh dương

### Layer B: Trung tâm Xã mới
- **93 trung tâm** xã sau sáp nhập
- **Bán kính phục vụ**: 5km
- **Màu sắc**: Xanh lá

### Layer C: Trung tâm Xã cũ
- Các xã cũ (trừ Tam Hải, Tân Hiệp nếu đã có trong A/B)
- **Bán kính phục vụ**: 5km
- **Màu sắc**: Cam

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 18+
- npm hoặc yarn
- Google Maps API Key

### Cài đặt
```bash
# Clone repository
git clone <repository-url>
cd danang-hanhchinh-map

# Cài đặt dependencies
npm install

# Tạo file .env từ template
cp .env.example .env
```

### Cấu hình Google Maps API
1. Lấy API key từ [Google Cloud Console](https://developers.google.com/maps/documentation/javascript/get-api-key)
2. Thêm API key vào file `.env`:
```
VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

### Chạy ứng dụng
```bash
# Development mode
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Công nghệ sử dụng

- **Frontend**: React 19 + TypeScript + Vite
- **UI Components**: Shadcn/ui + Tailwind CSS
- **Bản đồ**: @vis.gl/react-google-maps
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## 📱 Tính năng hiện tại

- ✅ Bản đồ Google Maps toàn màn hình
- ✅ Giao diện tiếng Việt
- ✅ Panel điều khiển với các lớp dữ liệu
- ✅ Toggle bật/tắt từng lớp
- ✅ Responsive design
- ✅ Tập trung vào khu vực Đà Nẵng

## 🔮 Tính năng sắp tới

- [ ] Hiển thị các điểm trung tâm hành chính
- [ ] Vẽ vòng tròn bán kính phục vụ
- [ ] Hiển thị vùng chồng lấn
- [ ] Hiển thị vùng trống
- [ ] Thêm vòng tròn thủ công
- [ ] Tooltip thông tin chi tiết
- [ ] Export PDF/hình ảnh
- [ ] Chia sẻ liên kết

## 📦 Cấu trúc project

```
src/
├── components/
│   ├── DaNangMap.tsx      # Component bản đồ chính
│   ├── LayerControl.tsx   # Panel điều khiển
│   ├── geometry/          # Các component hình học
│   └── ui/               # UI components (Shadcn)
├── hooks/                # Custom hooks
├── lib/                  # Utilities
└── types/               # TypeScript types
```

## 🤝 Đóng góp

Dự án này được phát triển để hỗ trợ UBND TP. Đà Nẵng trong việc đánh giá phân bố và phạm vi phục vụ của các trung tâm hành chính sau sáp nhập.

## 📄 License

[MIT License](LICENSE)
