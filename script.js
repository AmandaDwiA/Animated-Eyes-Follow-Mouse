// Dapatkan semua elemen pupil yang memiliki kelas '.eye'
const pupils = document.querySelectorAll('.eye');

// Tambahkan event listener untuk mendeteksi pergerakan mouse di seluruh dokumen
document.addEventListener('mousemove', (e) => {
    // Koordinat kursor mouse
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Iterasi melalui setiap pupil
    pupils.forEach(pupil => {
        // Dapatkan posisi pupil di layar
        const { left, top, width, height } = pupil.getBoundingClientRect();
        
        // Hitung koordinat pusat pupil
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // --- Perhitungan Sudut (Matematika) ---
        // atan2() mengembalikan sudut dalam radian antara titik (centerX, centerY) dan (mouseX, mouseY).
        // Kita hitung sudut relatif terhadap pusat mata.
        // Sudut 0 radian (0 derajat) berada di sumbu X positif (ke kanan).
        const radian = Math.atan2(mouseY - centerY, mouseX - centerX);
        
        // Konversi radian ke derajat
        const deg = radian * (180 / Math.PI);

        // Tambahkan 90 derajat karena posisi awal CSS kita (transform-origin) 
        // mengasumsikan rotasi dimulai dari vertikal (ke atas). 
        // Sudut ini mengarahkan pupil ke kursor.
        const rotationAngle = deg + 90;

        // Terapkan rotasi ke pupil menggunakan properti CSS transform
        // Pupil akan berputar dan 'menunjuk' ke arah kursor mouse
        pupil.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
    });
});