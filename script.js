// 彈跳視窗顯示與隱藏
const sidebar = document.querySelector('.sidebar');
const overlay = document.createElement('div');
const menuButton = document.querySelector('.menu-btn');
const closeButton = document.querySelector('.close-btn');

// 建立遮罩元素
overlay.classList.add('overlay');
document.body.appendChild(overlay);

menuButton.addEventListener('click', () => {
    sidebar.style.left = '0'; // 彈跳視窗展開
    overlay.classList.add('active'); // 顯示遮罩
    document.body.classList.add('dimmed'); // 彈跳視窗以外區域透明
});

closeButton.addEventListener('click', () => {
    sidebar.style.left = '-100%'; // 彈跳視窗收回
    overlay.classList.remove('active'); // 隱藏遮罩
    document.body.classList.remove('dimmed'); // 恢復正常透明度
});

overlay.addEventListener('click', () => {
    sidebar.style.left = '-100%'; // 彈跳視窗收回
    overlay.classList.remove('active'); // 隱藏遮罩
    document.body.classList.remove('dimmed'); // 恢復正常透明度
});
