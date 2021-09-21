var input = document.getElementById("js-input");
var button = document.getElementById("js-btn");
var textarea = document.getElementById("js-area");
var arr = ['Kitob o\'qoish', 'Uy ishlari', 'Choyxona', 'Ro\'zg\'or tashvishi']

textarea.textContent = arr;

button.addEventListener('click', function (e) {
    

    if (input.value == ''){
        alert('CREATE A TEXT!!!!!')
    }else {

        arr.push(input.value);
        textarea.textContent = arr;
        input.value = ''
    }
    

    console.log(arr);
})