const textarea = document.querySelector("#teacherQuestion");
const focus = document.querySelector("#focus");
const answer = document.querySelector("#answer");
const statusEl = document.querySelector("#status");

const openings = {
  opening: "我們先從觀察開始，不急著找標準答案。",
  evidence: "這裡先當想法小偵探，把看法和網頁句子連起來。",
  literacy: "這題可以用資料放大鏡，多想一面。",
  iteration: "這個點子已經有雛形，可以再升級。",
};

const taskBank = {
  opening: [
    "你在網頁中看到哪個地方最有趣？",
    "請用自己的話說說看，不用一次說完整。",
    "你覺得這段內容和農村觀光有什麼關係？",
  ],
  evidence: [
    "你為什麼會這樣覺得呢？",
    "請回到網頁找一句支持你想法的句子。",
    "如果同學不同意，你會用哪個線索說明？",
  ],
  literacy: [
    "網頁說這樣做對農村很好，可能有沒有缺點？",
    "遊客變多時，居民、環境或交通可能遇到什麼麻煩？",
    "網頁沒有寫出來的地方，我們可以提出哪個小疑問？",
  ],
  iteration: [
    "如果遇到下雨天，你的計畫可以怎麼調整？",
    "如果人太多或預算不夠，你會先保留哪個重點？",
    "你可以加上一個保護居民或環境的做法嗎？",
  ],
};

function buildResponse(input, mode) {
  const studentContext = input.trim() || "學生還沒有說出想法";
  const tasks = taskBank[mode].map((task, index) => `   ${index + 1}. ${task}`).join("\n");

  return `${openings[mode]}

學生目前的狀況：${studentContext}

你可以這樣協助同學：
1. 先肯定他的觀察，再請他說理由。
2. 請他回到網頁找一句支持想法的句子。
3. 用下面三個小任務帶他往前走：
${tasks}

提醒：先不要直接告訴學生答案，讓他自己找線索。等他回答後，再請他把原本想法改得更完整。`;
}

document.querySelector("#generate").addEventListener("click", () => {
  statusEl.textContent = "GENERATED";
  answer.textContent = buildResponse(textarea.value, focus.value);
});

document.querySelector("#copy").addEventListener("click", async () => {
  await navigator.clipboard.writeText(answer.textContent);
  statusEl.textContent = "COPIED";
});

document.querySelectorAll("[data-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    textarea.value = button.dataset.prompt;
    answer.textContent = buildResponse(textarea.value, focus.value);
    statusEl.textContent = "QUICK";
    document.querySelector("#query").scrollIntoView({ behavior: "smooth" });
  });
});
