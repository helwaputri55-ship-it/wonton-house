# Wonton House

Mini website pemesanan Wonton untuk tugas Analisis & Pengujian Sistem.

## Fitur

- Pilih menu Wonton
- Masukkan jumlah pesanan
- Pilih level pedas
- Pilih metode pembayaran
- Hitung total pesanan
- Reset pesanan

## Teknologi

- HTML
- CSS
- JavaScript

## Cara Menjalankan

Buka file `index.html` menggunakan browser.

## Catatan Pengujian

Program ini merupakan versi awal yang digunakan untuk proses pengujian.

Ditemukan beberapa fault pada program, yaitu:

1. Biaya level pedas belum masuk ke subtotal.
2. Diskon belum sesuai dengan aturan promo, yaitu lebih dari 5 porsi mendapat diskon 10%.
3. Jumlah 0 masih dapat diproses.

Fault tersebut kemudian dianalisis menggunakan metode Root Cause Analysis (RCA).

## Struktur File

- `index.html` → halaman utama
- `style.css` → tampilan website
- `script.js` → fungsi dan perhitungan program
