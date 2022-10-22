
const btn = document.getElementById('cBtn');
const link = document.getElementById('link').textContent;

btn.addEventListener('click', function handleClick() {
    btn.textContent = 'Copied';

    navigator.clipboard.writeText(link);
    console.log("Copied the text: " + link);
});

window.addEventListener('resize', function () {
    var mobileWidth = (window.innerWidth > 0) ?
        window.innerWidth :
        screen.width;
    var viewport = (mobileWidth > 360) ?
        'width=device-width, initial-scale=1.0' :
        'width=1200';
    $("meta[name=viewport]").attr('content', viewport);
});