# Web Worker

# About
- JavaScript は シングルスレッド で動く言語であるため並列で処理を行うことができないが、WebWorker を使うことで並列で実行できるようになる
- Worker を起動することで処理を別の スレッド に写すことができる

# なぜ必要か
- 画像の処理や高度なアニメーションなどの計算量の多い処理はメインスレッドを占有し、他の処理の実行が遅れてしまう
- 別のスレッドで実行することで メインスレッド を空けることができるので処理が止まったりすることがない([off-the-main-thread](https://yosuke-furukawa.hatenablog.com/entry/2019/12/31/050438))

# ライブラリー
- WebWorker を使って開発されていて面白そうなものの一つが [worker-dom](https://github.com/ampproject/worker-dom)である
- preact を実行する [demo](https://github.com/ampproject/worker-dom/tree/master/demo/preact-todomvc) も公開されている 
