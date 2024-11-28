function changeBackgroundColor() {
  const color = [
    "#EBD9CB",
    "#F9F6F1",
    "#DBE2EC",
    "#F7F0EA",
    "#D2D3D5",
    "#F5F4F0",
    "#F6E1DC",
  ];
  const randomColor = color[Math.floor(Math.random() * color.length)];
  const button = document.getElementById("change");
  document.body.style.backgroundColor = randomColor;
  button.style.background = randomColor;
}

document.getElementById("download-btn").addEventListener("click", function () {
  // 選擇要轉換為 PDF 的整個頁面
  const element = document.getElementById("resume");
  const printStyles = document.createElement("style");
  printStyles.innerHTML = `
        #resume {
          padding-top:0;
        }
        .intro blockquote {
          font-size: 20px;
        }
        .intro .content {
          font-size: 16px;
        }
        .info p{
          margin-top:20px;
        }
        .education, .experience {
          margin: 30px 50px;
        }
        .experience .work {
          margin: 20px 0;
        }  
        .description{
          margin-left:20px;
        }
        .experience span {
          margin-top:5px;
        }
        button, nav,.link {
          display: none;
        }
    `;
  document.head.appendChild(printStyles);
  // 配置 html2pdf 選項
  const opt = {
    margin: 0.5,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 3 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  // 將頁面轉換為 PDF 並觸發下載
  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .then(function () {
      // PDF 生成完成後，移除打印樣式
      document.head.removeChild(printStyles);
    });
});
