# 📖 Panduan Update Portfolio — Baca Ini Dulu!

Panduan lengkap untuk update konten, deploy ke Netlify, dan maintain website lo.
> Tidak perlu paham coding. Semua update konten cukup edit file teks biasa.

---

## 🗂️ File yang Perlu Lo Tau

```
portfolio/
├── data/
│   ├── site.json         ← Info pribadi lo (nama, bio, kontak, skills, experience)
│   └── projects.json     ← Semua portfolio/case study lo
├── public/
│   └── favicon.ico       ← Ganti file ini untuk update favicon
└── HOW_TO_UPDATE.md      ← File ini
```

---

## ✏️ 1. Update Info Pribadi (`data/site.json`)

Buka file `data/site.json`, ganti value-nya sesuai info lo:

```json
{
  "name": "Nama Lo",
  "title": "Performance Marketing & SEO Specialist",
  "tagline": "Tagline singkat lo di sini...",
  "bio": "Bio panjang lo di sini...",
  "location": "Jakarta, Indonesia",
  "email": "hello@domainlo.com",
  "phone": "+62 812 xxxx xxxx",
  "linkedin": "https://linkedin.com/in/usernamelo",
  "instagram": "https://instagram.com/usernamelo",
  "twitter": "https://twitter.com/usernamelo"
}
```

### Update Stats (angka-angka di homepage):
```json
"stats": [
  { "value": "4+", "label": "Years Experience" },
  { "value": "30+", "label": "Projects Completed" },
  { "value": "15+", "label": "Brands Worked With" },
  { "value": "4x", "label": "Average ROAS Delivered" }
]
```

### Update Experience:
```json
"experience": [
  {
    "role": "Nama Posisi Lo",
    "company": "Nama Perusahaan",
    "period": "2023 – Present",
    "description": "Deskripsi singkat jobdesc lo."
  }
]
```

---

## 📁 2. Tambah Project Baru (`data/projects.json`)

File ini berisi array (daftar) semua project lo. Untuk **tambah project baru**, copy block di bawah dan paste di awal array (sebelum `[` pertama):

```json
{
  "id": "nama-project-unik",
  "title": "Judul Project Lo",
  "category": "Performance Marketing",
  "year": "2025",
  "tags": ["Meta Ads", "Google Ads", "ROAS"],
  "thumbnail": "/images/nama-project.jpg",
  "summary": "Satu kalimat ringkasan hasil yang dicapai.",
  "results": [
    { "metric": "4.5x", "value": "4.5x", "label": "Return on Ad Spend" },
    { "metric": "+200%", "value": "200%", "label": "Revenue Growth" },
    { "metric": "Rp 1B", "value": "1B", "label": "Ad Spend Managed" }
  ],
  "description": "Deskripsi lengkap project lo. Ceritain konteks, apa yang lo lakuin, dan hasilnya.",
  "tools": ["Meta Business Suite", "Google Ads", "Looker Studio"]
}
```

### ⚠️ Rules penting:
- **`id`**: harus unik, pakai huruf kecil dan tanda `-` (contoh: `"tokopedia-2025"`)
- **`category`**: harus salah satu dari:
  - `"Performance Marketing"`
  - `"SEO"`
  - `"Web Development"`
  - `"Marketing Technology"`
- **`metric`** di results: ini yang tampil gede-gede (contoh: `"4.5x"`, `"+180%"`, `"#1 Rank"`)

### Untuk **hapus project**: hapus seluruh block `{ ... }` beserta koma di akhirnya.
### Untuk **edit project**: langsung ganti text di dalam tanda kutip `"..."`.

---

## 🖼️ 3. Tambah Gambar Project

1. Simpan gambar lo ke folder `public/images/`
2. Nama file pakai huruf kecil tanpa spasi (contoh: `tokopedia-campaign.jpg`)
3. Di `projects.json`, set `"thumbnail": "/images/tokopedia-campaign.jpg"`

> **Tips:** Ukuran ideal gambar thumbnail = **800x600px** atau rasio **4:3**

---

## 🌐 4. Favicon (Ikon Tab Browser)

1. Buat favicon di **[favicon.io](https://favicon.io)** — gratis dan gampang
2. Download hasil-nya
3. Copy file `favicon.ico` ke folder `public/`
4. (Opsional) Copy juga `favicon-32x32.png` dan `favicon-16x16.png` ke `public/`

---

## 🚀 5. Deploy ke Netlify (Pertama Kali)

### Step 1: Upload ke GitHub
1. Buat akun di [github.com](https://github.com) kalau belum punya
2. Buat repository baru (klik tombol `+` → `New repository`)
3. Upload semua file portfolio ini ke repository tersebut

### Step 2: Connect ke Netlify
1. Buka [netlify.com](https://netlify.com) → Sign up gratis
2. Klik **"Add new site"** → **"Import an existing project"**
3. Pilih **GitHub** → pilih repository lo
4. Di **Build settings**:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
5. Klik **Deploy site**

### Step 3: Custom Domain
1. Di Netlify dashboard → **Domain settings**
2. Klik **Add custom domain**
3. Ikuti instruksi untuk connect domain lo

---

## 📬 6. Aktifkan Contact Form (Netlify Forms — Gratis!)

Netlify punya form handling gratis tanpa perlu backend. Caranya:

1. Buka file `pages/contact.js`
2. Cari bagian `<ContactForm />`
3. Ganti function `ContactForm` dengan versi Netlify Forms:

```jsx
function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="flex flex-col gap-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>Don't fill this out: <input name="bot-field" /></label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="section-label block mb-2">Name</label>
          <input type="text" name="name" required placeholder="Your name"
            className="w-full bg-warm border border-border px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-ink transition-colors" />
        </div>
        <div>
          <label className="section-label block mb-2">Email</label>
          <input type="email" name="email" required placeholder="your@email.com"
            className="w-full bg-warm border border-border px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-ink transition-colors" />
        </div>
      </div>

      <div>
        <label className="section-label block mb-2">Service</label>
        <select name="service" className="w-full bg-warm border border-border px-4 py-3 text-sm text-ink focus:outline-none focus:border-ink transition-colors appearance-none cursor-pointer">
          <option value="">Select a service...</option>
          <option value="performance">Performance Marketing</option>
          <option value="seo">SEO</option>
          <option value="webdev">Web Development</option>
          <option value="martech">Marketing Technology</option>
          <option value="other">Other / Multiple</option>
        </select>
      </div>

      <div>
        <label className="section-label block mb-2">Message</label>
        <textarea name="message" rows={5} required placeholder="Tell me about your project..."
          className="w-full bg-warm border border-border px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-ink transition-colors resize-none" />
      </div>

      <button type="submit"
        className="w-full py-4 bg-ink text-paper text-sm tracking-wide hover:bg-accent transition-colors duration-200">
        Send Message →
      </button>
    </form>
  )
}
```

Setelah deploy ulang, form submissions akan masuk ke **Netlify dashboard → Forms**.

---

## 🔄 7. Update Setelah Deploy (Workflow Sehari-hari)

Setiap kali lo mau update konten:

1. Edit file `data/projects.json` atau `data/site.json` di komputer
2. Upload/push perubahan ke GitHub
3. **Netlify otomatis re-deploy** dalam ~1-2 menit
4. Selesai! Website lo langsung update.

> **Pro tip:** Kalau lo pakai GitHub di browser (github.com), lo bisa langsung edit file JSON di sana tanpa perlu software apapun.

---

## 🆘 Troubleshooting

| Problem | Solusi |
|---------|--------|
| Website error setelah edit JSON | Pastikan tidak ada koma di akhir item terakhir dalam array/object |
| Gambar tidak muncul | Pastikan nama file sama persis (case-sensitive) |
| Netlify build gagal | Cek apakah semua tanda `{`, `}`, `[`, `]` di JSON sudah berpasangan |
| Form tidak berfungsi | Pastikan sudah ganti dengan Netlify Forms version (lihat section 6) |

---

## 📞 JSON Validator

Kalau ragu JSON lo valid atau tidak, paste isi file ke:
**[jsonlint.com](https://jsonlint.com)** — gratis, langsung ketahuan kalau ada error.

---

*Portfolio ini dibuat dengan Next.js + Tailwind CSS. Deployed via Netlify.*
