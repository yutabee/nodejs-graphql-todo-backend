# Node.js/Typescript/GraphQL/Prismaでバックエンドの実装手順
## 1. **プロジェクトの初期設定**  
まずはプロジェクトのディレクトリを作成し、その中に移動します。次に、Node.jsのプロジェクトを初期化します。

    ```bash
    mkdir nodejs-graphql-todo-backend
    cd nodejs-graphql-todo-backend
    npm init -y
    ```

## 2. **TypeScriptの設定**  
TypeScriptとその型定義をプロジェクトにインストールします。

    ```bash
    npm install --save-dev typescript @types/node
    ```

    tsconfig.jsonファイルを作成し、TypeScriptの設定を記述します。

    ```json
    {
      "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true
      },
      "include": ["src/**/*.ts"],
      "exclude": ["node_modules"]
    }
    ```

## 3. **依存パッケージのインストール**  
Express, GraphQL, Apollo Serverなどの必要なパッケージとそれらの型定義をインストールします。

    ```bash
    npm install express apollo-server-express graphql express-graphql graphql-tools
    npm install --save-dev @types/express @types/express-graphql
    ```

## 4. **Prismaのセットアップ**  
Prisma CLIとPrisma Clientをグローバルにインストールします。

    ```bash
    npm install -g prisma
    npm install --save-dev @prisma/client
    ```

    Prismaを初期化し、データベースと接続します。

    ```bash
    prisma init
    ```

    .envファイルを編集し、データベースのURLを設定します。そして、Prismaスキーマファイル（schema.prisma）を作成・編集します。

## 5. **GraphQLスキーマとリゾルバの作成**  
GraphQLスキーマ（schema.ts）とリゾルバ（resolvers.ts）を作成します。これらはクライアントからのクエリをどのように解決するかを定義します。

## 6. **サーバーの作成**  
Expressサーバーを作成し、GraphQLのエンドポイントを設定します（index.ts）。

## 7. **スクリプトの追加**  
package.jsonに以下のスクリプトを追加します。これにより、TypeScriptをコンパイルし、アプリケーションを実行できます。

    ```json
    "scripts": {
      "build": "tsc",
      "start": "node dist/index.js",
      "dev": "ts-node src/index.ts"
    }
    ```

## 実行
```bash
npx ts-node src/index.ts
```