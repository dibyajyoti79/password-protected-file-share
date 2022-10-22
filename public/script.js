
const btn = document.getElementById('cBtn');
const link = document.getElementById('link').textContent;

btn.addEventListener('click', function handleClick() {
    btn.textContent = 'Copied';

    navigator.clipboard.writeText(link);
    console.log("Copied the text: " + link);
});

