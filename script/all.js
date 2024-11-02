function chk_log() {
    const userAgent = navigator.userAgent;
    console.log(userAgent);
    const key = userAgent;

    var value = localStorage.getItem(key);
    if (value !== null) {
        console.log(`Key "${key}" tồn tại với giá trị: ${value}`);
        if (value === '1') {
            console.log("Log In!");
        } else {
            console.log("Log Out!");
        }

    } else {
        console.log(`Key "${key}" không tồn tại trong localStorage.`);
        localStorage.setItem(key, 0);
    }
}

// localStorage.setItem(key, 1);

