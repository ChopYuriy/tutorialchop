
var person = null;
if (confirm('Ви впевнені?')) {
    person = prompt('Введіть імя');
    alert('Привіт' + ' ' + person);
} else {
    alert('Ви відмінили');
}