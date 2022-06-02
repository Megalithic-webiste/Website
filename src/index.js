import "./index.css";

const q1 = document.getElementsByClassName("q1")[0];
const q2 = document.getElementsByClassName("q2")[0];
const q3 = document.getElementsByClassName("q3")[0];
const q4 = document.getElementsByClassName("q4")[0];
const ans1 = document.getElementsByClassName("ans1")[0];
const ans2 = document.getElementsByClassName("ans2")[0];
const ans3 = document.getElementsByClassName("ans3")[0];
const ans4 = document.getElementsByClassName("ans4")[0];
const up1 = document.getElementsByClassName("up1")[0];
const up2 = document.getElementsByClassName("up2")[0];
const up3 = document.getElementsByClassName("up3")[0];
const up4 = document.getElementsByClassName("up4")[0];
const down1 = document.getElementsByClassName("down1")[0];
const down2 = document.getElementsByClassName("down2")[0];
const down3 = document.getElementsByClassName("down3")[0];
const down4 = document.getElementsByClassName("down4")[0];

const faq_list = [
  {
    question: q1,
    answer: ans1,
    up_arrow: up1,
    down_arrow: down1,
    open: true,
  },
  {
    question: q2,
    answer: ans2,
    up_arrow: up2,
    down_arrow: down2,
    open: false,
  },
  {
    question: q3,
    answer: ans3,
    up_arrow: up3,
    down_arrow: down3,
    open: false,
  },
  {
    question: q4,
    answer: ans4,
    up_arrow: up4,
    down_arrow: down4,
    open: false,
  },
];

for (let i = 0; i < faq_list.length; i++) {
  faq_list[i].down_arrow.addEventListener("click", function () {
    for (let j = 0; j < faq_list.length; j++) {
      if (faq_list[j].open === true) {
        faq_list[j].up_arrow.classList.add("hidden");
        faq_list[j].down_arrow.classList.remove("hidden");
        faq_list[j].answer.classList.add("hidden");
        faq_list[j].open = false;
        if (j !== faq_list.length - 1) {
          faq_list[j + 1].question.classList.remove("object20");
          faq_list[j + 1].question.classList.add("object24");
        }
      }
    }
    faq_list[i].up_arrow.classList.remove("hidden");
    faq_list[i].down_arrow.classList.add("hidden");
    faq_list[i].answer.classList.remove("hidden");
    faq_list[i].open = true;
    if (i < faq_list.length - 1) {
      faq_list[i + 1].question.classList.add("object20");
      faq_list[i + 1].question.classList.remove("object24");
    }
  });
}
