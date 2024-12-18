document.getElementById('schedule-form').addEventListener('submit', function (e) {
    e.preventDefault();


    const tanggal = document.getElementById('tanggal').value;
    const jamMulai = document.getElementById('jam-mulai').value;
    const jamSelesai = document.getElementById('jam-selesai').value;
    const peserta = document.getElementById('peserta').value;
    const rincian = document.getElementById('rincian').value;

    // Gabungkan waktu mulai dan selesai dalam format "11:10 - 12:10"
    const jam = `${jamMulai} - ${jamSelesai}`;

    const newSchedule = {
        tanggal,
        jam,
        peserta,
        rincian
    };

    // Simpan jadwal ke localStorage
    const schedules = JSON.parse(localStorage.getItem('schedules')) || [];
    schedules.push(newSchedule);
    localStorage.setItem('schedules', JSON.stringify(schedules));

    alert('Jadwal berhasil ditambahkan!');
    this.reset(); // Reset form
});
