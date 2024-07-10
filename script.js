function calculate()
{
    let sen = document.getElementById('input');
    let text = sen.value.trim();
    let words = text.split(/\s+/);
    let res = document.getElementById('result').textContent = words.length;
    res.innerHTML = result;
}
