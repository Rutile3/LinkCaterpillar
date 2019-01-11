// - global -------------------------------------------------------------------
let screen_canvas, info;
let run = true;
let fps = 1000 / 30;
const mouse = new Point();
let ctx;// canvas2d コンテキスト格納用
let player_shots = [];

// - main ---------------------------------------------------------------------
window.onload = function () {

    // スクリーンの初期化
    screen_canvas = document.getElementById('screen');
    screen_canvas.width  = 512;
    screen_canvas.height = 512;

    // 2dコンテキスト
    ctx = screen_canvas.getContext('2d');

    // イベントの登録
    screen_canvas.addEventListener('mousedown', mouseDown, true);
    screen_canvas.addEventListener('mousemove', mouseMove, true);
    window.addEventListener('keydown', keyDown, true);

    // エレメント関連
    info = document.getElementById('info');

    // 自機の初期化
    let player_char = new PlyerChar(10, 'rgba(126, 126, 126, 0.75)');

    // ループ処理を呼び出す
    (function () {
        // HTMLを更新
        info.innerHTML = mouse.x + ' : ' + mouse.y;

        player_char.calc();
        player_shots.forEach(player_shot => {
            player_shot.calc();
        });

        // screenクリア
        ctx.clearRect(0, 0, screen_canvas.width, screen_canvas.height);

        player_char.drow();
        ctx.beginPath();
        player_shots.forEach(player_shot => {
            player_shot.drow()
        });

        // 毎回フラグを取り消しておく
        mouse.down = false;
        // フラグにより再帰呼び出し
        if (run) { setTimeout(arguments.callee, fps); }
    })();
};

// - event --------------------------------------------------------------------
function keyDown(event) {
    // キーコードを取得
    let ck = event.keyCode;

    // Escキーが押されていたらフラグを降ろす
    if (ck === 27) { run = false; }
}

function mouseDown(event) {
    mouse.down = true;
}

function mouseMove(event) {
    // マウスカーソル座標の更新
    mouse.x = event.clientX - screen_canvas.offsetLeft;
    mouse.y = event.clientY - screen_canvas.offsetTop;
}