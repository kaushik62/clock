function clock() {
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let dayNames = ['Sun,', 'Mon,', 'Tue,', 'Wed,', 'Thr,', 'Fri,', 'Sat,'];

    let today = new Date();

    document.querySelector('.date').innerHTML = (dayNames[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear());


    
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let session = h < 11 ? 'AM' : 'PM';
    
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    // let time = h + " : " + m + " : " + s + " " + session;

    document.querySelector('#hour').innerHTML = h + ':';
    document.querySelector('#minutes').innerHTML = m + ':';
    document.querySelector('#seconds').innerHTML = s;
}


let inter = setInterval(clock, 1000);