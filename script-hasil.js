document.addEventListener('DOMContentLoaded', function () {
    const scheduleTable = document.getElementById('schedule-table');
    const schedules = JSON.parse(localStorage.getItem('schedules')) || [];

    schedules.forEach((schedule, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${schedule.tanggal}</td>
            <td>${schedule.jam}</td> <!-- Format 11:10 - 12:10 -->
            <td>${schedule.peserta}</td>
            <td>${schedule.rincian}</td>
            <td>
                <button class="mark-complete" data-index="${index}">✔</button>
            </td>
        `;

        scheduleTable.appendChild(row);
    });

    scheduleTable.addEventListener('click', function (e) {
        if (e.target.classList.contains('mark-complete')) {
            const index = e.target.getAttribute('data-index');
            schedules.splice(index, 1); // Hapus jadwal
            localStorage.setItem('schedules', JSON.stringify(schedules));
            alert('Kegiatan ditandai sebagai selesai!');
            location.reload(); // Refresh halaman
        }
    });
});

