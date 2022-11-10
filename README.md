# nestjs_simple_oauth
OAuth認証のお試し実装


# 準備
* rootディレクトリに、.envを作成し、下記の変数を追加してください。
`GOOGLE_CLIENT_ID={GoogleAPIクライアントID}
GOOGLE_SECRET={GoogleAPIシークレット}
FORTYTWO_CLIENT_ID={42クライアントID}
FORTYTWO_SECRET={42APIシークレット}`

* 下記コマンドを実行
yarn install && yarn build && yarn run start:dev

* 下記URLにアクセスし、Googleアカウントを選択→ユーザー情報が取得できます
http://localhost:3000/google

* 下記URLにアクセスし、42アカウントを選択（確認中）
http://localhost:3000/auth42


# 参考
* googleアカウントのログイン
https://dev.to/imichaelowolabi/how-to-implement-login-with-google-in-nest-js-2aoa

* 42APIと戯れる
https://zenn.dev/dai65527/scraps/24f88d25be0cc0
