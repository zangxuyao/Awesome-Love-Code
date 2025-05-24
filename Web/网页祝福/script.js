// 初始化页面交互
function init() {
    // 欢迎页面按钮事件监听
    const enterBtn = document.querySelector('.enter-btn');
    const welcomeScreen = document.querySelector('.welcome-screen');
    const mainContent = document.querySelector('.main-content');
    const audio = document.getElementById('birthday-music');

    if (enterBtn && welcomeScreen && mainContent && audio) {
        enterBtn.addEventListener('click', () => {
            welcomeScreen.style.display = 'none';
            mainContent.style.display = 'block';
            audio.src = '所念皆星河.aac'; // 设置用户指定的音乐文件
            audio.play();
        });
    }

    // 点燃蜡烛按钮事件监听
    const playBtn = document.getElementById('play-pause-btn');
    if (playBtn && audio) {
        playBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playBtn.textContent = '熄灭蜡烛';
            } else {
                audio.pause();
                playBtn.textContent = '点燃蜡烛';
            }
        });
    }
}

// 页面加载完成后执行初始化
window.addEventListener('DOMContentLoaded', init);