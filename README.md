# Latihan Media: Gambar, Video, Audio

Proyek sederhana HTML + Bootstrap + jQuery yang menampilkan tiga kotak (gambar, video, audio) dengan tombol untuk menampilkan teks dan alert.

## Fitur
- Tampilan 3 kotak berdampingan (flex).
- Tombol:
  - Gambar → menulis teks ke #teks-gambar dan menampilkan alert.
  - Video  → menulis teks ke #teks-video dan menampilkan alert.
  - Audio  → menulis teks ke #teks-sound dan menampilkan alert.
- Background image via CSS.

## Struktur Folder
- index.html
- assets/
  - css/style.css
  - js/script.js
  - img/
    - unja1.png
    - video.mp4
    - sound.mp3
    - bg.jpg

## Prasyarat
- Browser modern.
- VS Code.

## Cara Menjalankan
- Buka langsung: double-click index.html.
- Live Server (disarankan): klik “Go Live” di VS Code.
- Atau via Python (PowerShell/CMD):
  - python -m http.server 5500
  - Buka http://localhost:5500

## Penggunaan
1. Buka halaman.
2. Klik tombol pada tiap kotak:
   - Gambar → fungsi `gambar()`
   - Video  → fungsi `video()`
   - Audio  → fungsi `sound()`

## Catatan Penting
- Urutan script: pastikan jQuery tersedia sebelum kode yang memakai `$` saat DOM ready. Aman jika fungsi dipanggil saat klik.
- Path gambar CSS bersifat relatif dari file CSS:
  - Di style.css gunakan: `background-image: url("../media/bg.jpg");`
- Bootstrap bisa menimpa margin/padding default. Letakkan style.css setelah CSS Bootstrap, atau gunakan `!important` bila perlu.

## Troubleshooting
- Background tidak muncul:
  - Pastikan file `assets/media/bg.jpg` ada.
  - Gunakan `url("../media/bg.jpg")` (relatif dari assets/css).
  - Jalankan via server bila path absolut tidak bekerja.
- Margin tidak bekerja:
  - Bootstrap mengatur ulang margin body → letakkan style.css setelah Bootstrap atau pakai `!important`.
- `$ is not defined`:
  - Pastikan jQuery dimuat sebelum script yang memakai `$`.
- Video tidak berubah saat ganti sumber:
  - Setelah ganti `src` pada `<source>`, panggil `videoEl.load()`.

## Lisensi
Bebas digunakan untuk belajar.