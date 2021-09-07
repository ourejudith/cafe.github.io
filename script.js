const vid = document.querySelectorAll('.vid');
for (let i = 0; i < vid.length; i++) {
    vid[i].addEventListener('mouseenter', function(e) {
        vid[i].play()
    })
    vid[i].addEventListener('mouseout', function(e) {
        vid[i].pause()
    })
}

function imgSlider(anything) {
    document.querySelector('.coffee').src = anything;
}

function toggleNav() {
    const navToggle = document.querySelector('.toggle');
    const navigation =
        document.querySelector('.navigation')
    navToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}