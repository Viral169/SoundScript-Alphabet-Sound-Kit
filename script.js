let data = {
  A: {
    name: "a",
    sound: "sounds/a.mp3",
  },
  B: {
    name: "b",
    sound: "sounds/b.mp3",
  },
  C: {
    name: "c",
    sound: "sounds/c.mp3",
  },
  D: {
    name: "d",
    sound: "sounds/d.mp3",
  },
  E: {
    name: "e",
    sound: "sounds/e.mp3",
  },
  F: {
    name: "f",
    sound: "sounds/f.mp3",
  },
  G: {
    name: "g",
    sound: "sounds/g.mp3",
  },
  H: {
    name: "h",
    sound: "sounds/h.mp3",
  },
  I: {
    name: "i",
    sound: "sounds/i.mp3",
  },
  J: {
    name: "j",
    sound: "sounds/j.mp3",
  },
  K: {
    name: "k",
    sound: "sounds/k.mp3",
  },
  L: {
    name: "l",
    sound: "sounds/l.mp3",
  },

  M: {
    name: "m",
    sound: "sounds/m.mp3",
  },
  N: {
    name: "n",
    sound: "sounds/n.mp3",
  },
  O: {
    name: "o",
    sound: "sounds/o.mp3",
  },
  P: {
    name: "p",
    sound: "sounds/p.mp3",
  },
  Q: {
    name: "q",
    sound: "sounds/q.mp3",
  },
  R: {
    name: "r",
    sound: "sounds/r.mp3",
  },
  S: {
    name: "s",
    sound: "sounds/s.mp3",
  },
  T: {
    name: "t",
    sound: "sounds/t.mp3",
  },
  U: {
    name: "u",
    sound: "sounds/u.mp3",
  },
  V: {
    name: "v",
    sound: "sounds/v.mp3",
  },
  W: {
    name: "w",
    sound: "sounds/w.mp3",
  },

  X: {
    name: "x",
    sound: "sounds/x.mp3",
  },
  Y: {
    name: "y",
    sound: "sounds/y.mp3",
  },
  Z: {
    name: "z",
    sound: "sounds/z.mp3",
  },
};

let drumkit = document.querySelector(".drumkit");
function card() {
  for (key in data) {
    let drumelement = document.createElement("div");
    drumelement.classList.add("element", data[key].name);
    drumkit.appendChild(drumelement);
    let h2 = document.createElement("h2");
    h2.innerText = key;
    drumelement.appendChild(h2);
    // let span = document.createElement("span");
    // span.innerText = data[key].name;
    // drumelement.appendChild(span);

    drumelement.addEventListener("click", function (event) {
      let key = event.currentTarget.querySelector("h2").innerText;
      playDrum(key.toUpperCase());
    });
  }
}

function playDrum(key) {
  if (data.hasOwnProperty(key)) {
    let drumelement = document.querySelector(`.element.${data[key].name}`);
    drumelement.classList.add("active");

    //audio
    let audio = new Audio();
    audio.src = data[key].sound;
    audio.play();
    audio.addEventListener("timeupdate", function () {
      if (audio.currentTime >= audio.duration / 32) {
        drumelement.classList.remove("active");
        audio.removeEventListener("timeupdate", arguments.callee);
      }
    });
  }
}

document.addEventListener("keydown", function (event) {
  let e = event.key;
  playDrum(e.toUpperCase());
});
card();
