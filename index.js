function init() {
    console.log("Hello");
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        console.log(data);
        alert(data.ip);
        
    });
}
init();