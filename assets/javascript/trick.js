// ***** กดปุ่มแล้วขยับ *****
$('.class ปุ่มที่ใช้กด').on("click", function () {
    $('.class ที่ต้องการให้ขยับ').toggleClass('class css ที่เพิ่มเข้ามา');
});


// ***** ความสูง = ขนานหน้าจอ *****
$(document).ready(function () {
    $('.class ที่ต้องการให้สูง').css('min-height', $(document).innerHeight() + "px");
});

// ***** วาดกราฟ ***** 
// ***** html <canvas id="myChart"></canvas> *****
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'polarArea',
    // The data for our dataset
    data: {
        labels: ['เจ้าหน้าที่', 'นิสิต', 'อาจารย์'],
        datasets: [{
            label: 'ตารางจำนวนประชากร',
            backgroundColor: ['#e95144', '#26b1f6', '#ffac01'],
            data: ['50', '20', '15']
        }],

    },
    // Configuration options go here
    options: {}
});