# 農村觀光發展引導小助手

這是一個純靜態網站，可以直接上傳到 GitHub Pages，也可以用 VS Code 自行編輯。網站目前不需要後端伺服器，也不需要 API 金鑰。

## 檔案結構

- `index.html`：網站內容與頁面區塊
- `styles.css`：視覺設計、動畫、響應式版面
- `script.js`：快速查詢與回應產生邏輯

## 用 VS Code 編輯

1. 用 VS Code 開啟整個 `rural-tourism-site` 資料夾。
2. 修改 `index.html` 可以改文字與區塊。
3. 修改 `styles.css` 可以改顏色、字級、動畫與版面。
4. 修改 `script.js` 可以改查詢選項、追問句庫與產生規則。
5. 直接用瀏覽器開啟 `index.html` 即可預覽。

建議安裝 VS Code 的 Live Server 擴充套件，右鍵 `index.html` 後選擇 `Open with Live Server`，會比較接近正式網站的瀏覽方式。

## 上傳到 GitHub Pages

1. 在 GitHub 建立一個新 repository。
2. 把這個資料夾內的所有檔案上傳到 repository 根目錄。
3. 進入 repository 的 `Settings`。
4. 找到 `Pages`。
5. 在 `Build and deployment` 選擇 `Deploy from a branch`。
6. Branch 選擇 `main`，資料夾選擇 `/root`。
7. 儲存後等待 GitHub 產生網址。

## 常見修改位置

- 首頁標題：`index.html` 裡的 `<h1>`
- 一鍵查詢按鈕：`index.html` 裡含有 `data-prompt` 的按鈕
- 查詢模式：`index.html` 裡的 `<select id="focus">`
- 回應句庫：`script.js` 裡的 `taskBank`
- 品牌色：`styles.css` 裡的 `#ff174d` 和 `#00e5ff`

## 注意

目前的「AI 協助建議」是前端規則式產生器，優點是可以離線使用、上傳 GitHub Pages 後立刻可用。如果之後要串接真正的 AI API，可以在 `script.js` 裡把 `buildResponse()` 改成呼叫後端 API。
