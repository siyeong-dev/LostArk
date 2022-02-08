'use strict';

const form = document.querySelector("form");
const Newuser = document.querySelector("input[name=new]");
const Nikname = document.querySelector("input[name=nikname]");
const id = document.querySelector("input[name=id]");
const jab = document.querySelector("select[name=jab]");
const level = document.querySelector("input[name=level]");
const guild = document.querySelector("input[name=guild]");
const server = document.querySelector("select[name=server]");
const etc = document.querySelector("input[name=etc-time]");
const ok = document.querySelector("textarea[name=ok]");
const no = document.querySelector("textarea[name=no]");
const word = document.querySelector("textarea[name=word]");
const time = document.querySelectorAll("input[name=time]");
const day = document.querySelectorAll("input[name=day]");
const collection = document.querySelectorAll("input[name=collection]");
const play = document.querySelectorAll("input[name=play]");
const party = document.querySelectorAll("input[name=party]");
const twitter = document.querySelectorAll("input[name=twitter]");
const raid1 = document.querySelectorAll("input[name=raid1]");
const raid2 = document.querySelectorAll("input[name=raid2]");
const raid3 = document.querySelectorAll("input[name=raid3]");
const raid4 = document.querySelectorAll("input[name=raid4]");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    let username = id.value;
    let userjab = jab.value;
    let userlevel = level.value;
    let userguild = guild.value;
    let userserver = server.value;
    let etc_time = etc.value;
    let userok = ok.value;
    let userno = no.value;
    let userword = word.value;
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("userjab", userjab);
    sessionStorage.setItem("userserver", userserver);
    sessionStorage.setItem("userlevel", userlevel);
    sessionStorage.setItem("userguild", userguild);
    sessionStorage.setItem("ect_time", etc_time);
    sessionStorage.setItem("userok", userok);
    sessionStorage.setItem("userno", userno);
    sessionStorage.setItem("userword", userword);

    if (Newuser.checked === true) {
        sessionStorage.setItem("newuser", "new");
    }
    if (Nikname.checked === true) {
        sessionStorage.setItem("nikname", "nikname");
    }

    for (let i = 0; i < time.length; i++) {
        let timebox = time[i];
        let timelabel = timebox.parentNode.innerText;
        if (timebox.checked === true) {
            sessionStorage.setItem(timelabel, "time");
        }
    }
    for (let j = 0; j < day.length; j++) {
        let daybox = day[j];
        let daylabel = daybox.parentNode.innerText;
        if (daybox.checked === true) {
            sessionStorage.setItem(daylabel, "day");
        }
    }
    for (let z = 0; z < collection.length; z++) {
        let collectionbox = collection[z];
        let collectionlabel = collectionbox.parentNode.innerText;
        if (collectionbox.checked === true) {
            sessionStorage.setItem(collectionlabel, "collection");
        }
    }
    for (let b = 0; b < play.length; b++) {
        let playbox = play[b];
        let playlabel = playbox.parentNode.innerText;
        if (playbox.checked === true) {
            sessionStorage.setItem(playlabel, "play");
        }
    }
    for (let c = 0; c < party.length; c++) {
        let partybox = party[c];
        let partylabel = partybox.parentNode.innerText;
        if (partybox.checked === true) {
            sessionStorage.setItem(partylabel, "party");
        }
    }
    for (let a = 0; a < twitter.length; a++) {
        let twitterbox = twitter[a];
        let twitterlabel = twitterbox.parentNode.innerText;
        if (twitterbox.checked === true) {
            sessionStorage.setItem(twitterlabel, "day");
        }
    }
    for (let ra = 0; ra < raid1.length; ra++) {
        let raid1box = raid1[ra];
        let raid1label = raid1box.parentNode.innerText;
        if (raid1box.checked === true) {
            sessionStorage.setItem("발탄" + raid1label, "발탄");
        }
    }
    for (let rb = 0; rb < raid2.length; rb++) {
        let raid2box = raid2[rb];
        let raid2label = raid2box.parentNode.innerText;
        if (raid2box.checked === true) {
            sessionStorage.setItem("비아키스" + raid2label, "비아키스");
        }
    }
    for (let rc = 0; rc < raid3.length; rc++) {
        let raid3box = raid3[rc];
        let raid3label = raid3box.parentNode.innerText;
        if (raid3box.checked === true) {
            sessionStorage.setItem("쿠쿠세이튼" + raid3label, "투투세이튼");
        }
    }
    for (let rd = 0; rd < raid4.length; rd++) {
        let raid4box = raid4[rd];
        let raid4label = raid4box.parentNode.innerText;
        if (raid4box.checked === true) {
            sessionStorage.setItem("아브렐슈드" + raid4label, "아브렐슈드");
        }
    }


    printtext(username, userjab, userserver, etc_time, userlevel, userguild, userok, userno, userword);
    printjab();
    printcheckbox();


});

function printtext(username, userjab, userserver, etc_time, userlevel, userguild, userok, userno, userword) {
    const printname = document.querySelector(".printname");
    const printjab = document.querySelector(".printjab");
    const printserver = document.querySelector(".printserver");
    const printguild = document.querySelector(".printguild");
    const printlevel = document.querySelector(".printlevel");
    const printok = document.querySelector(".printok");
    const printno = document.querySelector(".printno");
    const printwold = document.querySelector(".printwold");
    const printetc_time = document.querySelector(".etc-time");
    printname.innerText = `${username}`;
    printjab.innerText = `${userjab}`;
    printserver.innerText = `${userserver}`;
    printlevel.innerText = `${userlevel}`;
    printguild.innerText = `${userguild}`;
    printok.innerText = `${userok}`;
    printno.innerText = `${userno}`;
    printwold.innerText = `${userword}`;
    printetc_time.innerText = `${etc_time}`;
}

function printjab() {
    const jabname = document.querySelector(".jabbox .printjab");
    const jabimg = document.querySelector(".jab-img");
    if (jabname.innerText.includes("워로드") === true) {
        jabimg.classList.add("Warlord");
    } else {
        jabimg.classList.remove("Warlord");
    }
    if (jabname.innerText.includes("버서커") === true) {
        jabimg.classList.add("Berserker");
    } else {
        jabimg.classList.remove("Berserker");
    }
    if (jabname.innerText.includes("디스트로이어") === true) {
        jabimg.classList.add("Destroyer");
    } else {
        jabimg.classList.remove("Destroyer");
    }
    if (jabname.innerText.includes("홀리나이트") === true) {
        jabimg.classList.add("Holyknight");
    } else {
        jabimg.classList.remove("Holyknight");
    }
    if (jabname.innerText.includes("배틀마스터") === true) {
        jabimg.classList.add("Battle");
    } else {
        jabimg.classList.remove("Battle");
    }
    if (jabname.innerText.includes("인파이터") === true) {
        jabimg.classList.add("Infighter");
    } else {
        jabimg.classList.remove("Infighter");
    }
    if (jabname.innerText.includes("기공사") === true) {
        jabimg.classList.add("Soul");
    } else {
        jabimg.classList.remove("Soul");
    }
    if (jabname.innerText.includes("창술사") === true) {
        jabimg.classList.add("Lance");
    } else {
        jabimg.classList.remove("Lance");
    }
    if (jabname.innerText.includes("스트라이커") === true) {
        jabimg.classList.add("Striker");
    } else {
        jabimg.classList.remove("Striker");
    }
    if (jabname.innerText.includes("바드") === true) {
        jabimg.classList.add("Bard");
    } else {
        jabimg.classList.remove("Bard");
    }
    if (jabname.innerText.includes("아르타나") === true) {
        jabimg.classList.add("Arcana");
    } else {
        jabimg.classList.remove("Arcana");
    }
    if (jabname.innerText.includes("서머너") === true) {
        jabimg.classList.add("Summoner");
    } else {
        jabimg.classList.remove("Summoner");
    }
    if (jabname.innerText.includes("소서리스") === true) {
        jabimg.classList.add("Sorceress");
    } else {
        jabimg.classList.remove("Sorceress");
    }
    if (jabname.innerText.includes("데빌헌터") === true) {
        jabimg.classList.add("DevilHunter");
    } else {
        jabimg.classList.remove("DevilHunter");
    }
    if (jabname.innerText.includes("블래스터") === true) {
        jabimg.classList.add("Blaster");
    } else {
        jabimg.classList.remove("Blaster");
    }
    if (jabname.innerText.includes("호크아이") === true) {
        jabimg.classList.add("Hawk");
    } else {
        jabimg.classList.remove("Hawk");
    }
    if (jabname.innerText.includes("스카우터") === true) {
        jabimg.classList.add("Scouter");
    } else {
        jabimg.classList.remove("Scouter");
    }
    if (jabname.innerText.includes("건슬링거") === true) {
        jabimg.classList.add("Gunslinger");
    } else {
        jabimg.classList.remove("Gunslinger");
    }
    if (jabname.innerText.includes("리퍼") === true) {
        jabimg.classList.add("Reaper");
    } else {
        jabimg.classList.remove("Reaper");
    }
    if (jabname.innerText.includes("데모닉") === true) {
        jabimg.classList.add("Demonic");
    } else {
        jabimg.classList.remove("Demonic");
    }
    if (jabname.innerText.includes("블레이드") === true) {
        jabimg.classList.add("Blade");
    } else {
        jabimg.classList.remove("Blade");
    }
    if (jabname.innerText.includes("도화가") === true) {
        jabimg.classList.add("Painter");
    } else {
        jabimg.classList.remove("Painter");
    }
}

function printcheckbox() {
    if (sessionStorage.newuser != null) {
        const mococo = document.querySelector(".mococo-img");
        mococo.classList.add("mococo");
    }
    if (sessionStorage.nikname != null) {
        document.querySelector(".printinfo input[name=nikname]").checked = true;
    }
    //플레이타임
    if (sessionStorage.새벽 != null) {
        document.querySelector(".printtime input[name=daybreak]").checked = true;
    }
    if (sessionStorage.오전 != null) {
        document.querySelector(".printtime input[name=am]").checked = true;
    }
    if (sessionStorage.오후 != null) {
        document.querySelector(".printtime input[name=pm]").checked = true;
    }
    if (sessionStorage.종일 != null) {
        document.querySelector(".printtime input[name=alltime]").checked = true;
    }
    if (sessionStorage.심야 != null) {
        document.querySelector(".printtime input[name=night]").checked = true;
    }
    if (sessionStorage.불규칙 != null) {
        document.querySelector(".printtime input[name=irregular]").checked = true;
    }
    if (sessionStorage.평일 != null) {
        document.querySelector(".printtime input[name=weekday]").checked = true;
    }
    if (sessionStorage.주말 != null) {
        document.querySelector(".printtime input[name=Weekend]").checked = true;
    }
    if (sessionStorage.주중 != null) {
        document.querySelector(".printtime input[name=allday]").checked = true;
    }
    if (sessionStorage.기타시간 != null) {
        document.querySelector(".printtime input[name=etctime]").checked = true;
    }
    //콘텐츠
    if (sessionStorage.모험의서 != null) {
        document.querySelector(".printcontents input[name=adventure]").checked = true;
    }
    if (sessionStorage.모코코 != null) {
        document.querySelector(".printcontents input[name=mococo]").checked = true;
    }
    if (sessionStorage.수집형포인트 != null) {
        document.querySelector(".printcontents input[name=point]").checked = true;
    }
    if (sessionStorage.에포나 != null) {
        document.querySelector(".printcontents input[name=epona]").checked = true;
    }
    if (sessionStorage.호감도 != null) {
        document.querySelector(".printcontents input[name=like]").checked = true;
    }
    if (sessionStorage.레이드 != null) {
        document.querySelector(".printcontents input[name=raid]").checked = true;
    }
    if (sessionStorage.pvp != null) {
        document.querySelector(".printcontents input[name=pvp]").checked = true;
    }
    if (sessionStorage.큐브_회랑 != null) {
        document.querySelector(".printcontents input[name=ticket]").checked = true;
    }
    if (sessionStorage.생활 != null) {
        document.querySelector(".printcontents input[name=life]").checked = true;
    }
    //군단장 레이드
    if (sessionStorage.발탄노말 != null) {
        document.querySelector(".baltan input[name=raid1]").checked = true;
    }
    if (sessionStorage.발탄하드 != null) {
        document.querySelector(".baltan input[name=raid2]").checked = true;
    }
    if (sessionStorage.비아키스노말 != null) {
        document.querySelector(".biackiss input[name=raid1]").checked = true;
    }
    if (sessionStorage.비아키스하드 != null) {
        document.querySelector(".biackiss input[name=raid2]").checked = true;
    }
    if (sessionStorage.쿠쿠세이튼노말 != null) {
        document.querySelector(".Kouku-Sayton input[name=raid1]").checked = true;
    }
    if (sessionStorage.쿠쿠세이튼하드 != null) {
        document.querySelector(".Kouku-Sayton input[name=raid2]").checked = true;
    }
    if (sessionStorage.아브렐슈드노말 != null) {
        document.querySelector(".abrelshud input[name=raid1]").checked = true;
    }
    if (sessionStorage.아브렐슈드하드 != null) {
        document.querySelector(".abrelshud input[name=raid2]").checked = true;
    }
    //플레이 스타일
    if (sessionStorage.하드 != null) {
        document.querySelector(".printplay input[name=hard]").checked = true;
    }
    if (sessionStorage.즐겜 != null) {
        document.querySelector(".printplay input[name=light]").checked = true;
    }
    if (sessionStorage.수다 != null) {
        document.querySelector(".printplay input[name=chat]").checked = true;
    }
    if (sessionStorage.잠수 != null) {
        document.querySelector(".printplay input[name=diving]").checked = true;
    }
    if (sessionStorage.스샷 != null) {
        document.querySelector(".printplay input[name=screenshot]").checked = true;
    }
    if (sessionStorage.스토리 != null) {
        document.querySelector(".printplay input[name=story]").checked = true;
    }
    if (sessionStorage.숙제 != null) {
        document.querySelector(".printplay input[name=Work]").checked = true;
    }
    if (sessionStorage.룩덕 != null) {
        document.querySelector(".printplay input[name=look]").checked = true;
    }
    //파티 스타일
    if (sessionStorage.솔플 != null) {
        document.querySelector(".printparty input[name=solo]").checked = true;
    }
    if (sessionStorage.매칭 != null) {
        document.querySelector(".printparty input[name=matching]").checked = true;
    }
    if (sessionStorage.공팟 != null) {
        document.querySelector(".printparty input[name=free]").checked = true;
    }
    if (sessionStorage.고정 != null) {
        document.querySelector(".printparty input[name=party]").checked = true;
    }
    if (sessionStorage.지인 != null) {
        document.querySelector(".printparty input[name=friend]").checked = true;
    }
    if (sessionStorage.길드 != null) {
        document.querySelector(".printparty input[name=guild]").checked = true;
    }
    //트위터
    if (sessionStorage.아무말 != null) {
        document.querySelector(".printtwitter input[name=say]").checked = true;
    }
    if (sessionStorage.RT != null) {
        document.querySelector(".printtwitter input[name=rt]").checked = true;
    }
    if (sessionStorage.연성 != null) {
        document.querySelector(".printtwitter input[name=Creation]").checked = true;
    }
    if (sessionStorage.마음 != null) {
        document.querySelector(".printtwitter input[name=like]").checked = true;
    }
    if (sessionStorage.욕트 != null) {
        document.querySelector(".printtwitter input[name=fuck]").checked = true;
    }
    if (sessionStorage.섹트 != null) {
        document.querySelector(".printtwitter input[name=sex]").checked = true;
    }
    if (sessionStorage.일상트 != null) {
        document.querySelector(".printtwitter input[name=life]").checked = true;
    }
    if (sessionStorage.우울트 != null) {
        document.querySelector(".printtwitter input[name=mope]").checked = true;
    }


}



const imgInput = document.querySelector(".img");
//값이 변경될때 호출 되는 이벤트 리스너
imgInput.addEventListener('change', function (e) {
    console.log(e.target.files)
    const file = e.target.files[0]; //선택된 파일
    const reader = new FileReader();
    reader.readAsDataURL(file); //파일을 읽는 메서드

    reader.onload = function () {
        const imgfile = document.querySelector(".outA img");
        const img = document.createElement("img");
        if (!imgfile) {
            img.setAttribute("src", event.target.result);
            document.querySelector(".outA").appendChild(img);
        } else {
            document.querySelector(".outA").removeChild(imgfile);
            img.setAttribute("src", event.target.result);
            document.querySelector(".outA").appendChild(img);
        }
    }
})


const dawnlod = document.querySelector(".dawnlod")
dawnlod.addEventListener("click", function (event) {
    
    function saveAs(uri, fileName) {
        const link = document.createElement("a");
        link.href = uri;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    html2canvas(document.querySelector(".outA"), {
        scale: 2
    }).then(canvas => {
        saveAs(canvas.toDataURL(), makeid(5) + '.png');
    });
})

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

window.onbeforeunload = function () {
    sessionStorage.setItem("origin", window.location.href);
}
window.onload = function () {
    if (window.location.href == sessionStorage.getItem("origin")) {
        sessionStorage.clear();
    }
}

