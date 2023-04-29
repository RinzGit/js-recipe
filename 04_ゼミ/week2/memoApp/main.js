const memoInput = document.getElementById("memo-input")
const inputButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

inputButton.onclick = function () {
  // 入力欄の値（テキスト）をとりだして、 text にいれる
  const text = memoInput.value

  // card を作成
  const card = document.createElement("div")

  // todo を作成
  card.textContent = text
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"
  deleteButton.onclick = function () {
    card.remove()
    deleteButton.remove()
  }

  // todo を card の中に追加する
  memoContainer.append(card)
  memoContainer.append(deleteButton)

  // 入力欄を空にする
  memoInput.value = ""
}
