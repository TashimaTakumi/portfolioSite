var openTiming;
var setOK=false;
var opening=false;

var dispNo=0;

const modalTopImgSrc = ["img/wonlife.png" , "img/ojisan.JPG" , "img/siden.png" , "img/sotsuten.jpg" , "img/recoa.png" , "img/otherworks.png"];
const modalTitleH1 = ["Won-Life","メモリアルおじさん。","函館市電Webサイト","卒展特別展示用パンフレット","recoa",""];
const abtInfo = ["　近い将来、大きな問題となることが予測されている「リハビリテーション」をテーマとして捉え、企画・制作したシステム。<br />　リハビリテーションにおける監督者の負担軽減と、実施者の意欲低下を課題として捉え、病院へのフィールドワークを繰り返し、解決に取り組んだ。<br />　本研究は現在、株式会社KDDI総合研究所様・東京女子医科大学様から共同研究のお話を頂いている。",
               "　講義テーマ「はこだての未来の景色を創る」のテーマの下、フィールドワークとして函館市を散策した際、多く見受けられた「写真撮影」に課題感を持ち、取り組んだ製品。<br />　近年流行しており、フィールドワークでも多く見受けられた「自撮り」に着目し、そのメリットは残しつつ、デメリットをなくすことを目指した。<br />　本プロダクトは最終的に、2つ上の先輩が主催する卒業展示会の特別展示ブースへの作品展示を依頼され、UXを改善後、展示を行った。",
               '　HCDの観点において<a target="_blank" href="https://www.city.hakodate.hokkaido.jp/bunya/hakodateshiden/">函館市電のWebサイト</a>を分析し、問題点として考察した点を修正したWebサイト。<br />　ユーザーが目的としている情報に、迷わずにたどり着かせることを目指し、フレームワークの作成から実装までを一貫して行った。<br />　実際に評価実験を行い、情報の探索にかかる時間が75％削減でき、t検定においても、有意な差を得ることが出来た。',
               "　2つ上の先輩方の卒業展示会の特別ブースに、制作した作品（メモリアルおじさん。）を展示させていただく際、先輩方から依頼を受けて制作した特別展示ブース用パンフレット。<br />　2つのタイプの作品があることを明示することはもちろんのこと、パンフレット自体の材質や大きさ、折り方なども含めデザインした。<br />　市民の方に向けて配布したが、「わかりやすい」や、「楽しく見れた」という感想をいただいた。",
               "　「住まい＊AIで人々を幸せにするサービス」という課題を与えられ、考案した、捨てられない思い出の品をリノベーションして次のユーザーへと繋ぐサービス。<br />　ユーザーニーズを把握するため、ペルソナを立て、そのペルソナの条件がある程度一致する人へインタビューを行いつつ、表面的な問題の本質を探った。<br />　最終発表では、1位は逃したものの、ビジネス面で評価されるとともに、ペルソナに合致した人からは「是非実現してほしいサービス」という声を頂けた。",
               ""];
const workSiteURLHref=["",,"https://tashimatakumi.github.io/SidenWeb/"]

const pointsTitleH31=["リハビリ現場における問題","「自撮り」の問題点"];
const pointsImgSrc1=["img/riha1.jpg","img/"];
const pointsTextP1=["　リハビリを評価する項目の一つであるFIMは国際的な評価基準であり、信頼性も高い一方、評価項目の多さによる監督者への負担がその普及を妨げている。<br /><br />　また、患者側においては、「患者が効果を実感出来ずに、リハビリに対する意欲を失い、それが原因で効果が更に発揮されなくなる」という、負のスパイラルが起こることが問題となっている。",
                    "　「自撮り」は、他人に撮ってもらう手法に比べ、他人に迷惑をかけず、自分の好きな角度やタイミングで写真を撮ることが出来る。<br />その一方で、自撮り棒などの道具を利用するため、距離制限があるため観光地全体を綺麗に写すことは難しく、また、撮影者が一番大きく写ってしまうというデメリットを抱えている。"];

const pointsTitleH32=["監督者側のソリューション","提案するソリューション"];
const pointsImgSrc2=["img/riha2.jpg"];
const pointsTextP2=["　リハビリ監督者の負担を減らしつつ、FIMの活用を行うため、入力したデータをDBに蓄積する機能を持つシステムを目指した。<br />　結果として、場所に縛られず、即座にDBへアクセスすることが出来るよう、タブレット端末を利用し、Webアプリケーションによって評価を行うことにした。<br />　今後は東京女子医科大学様との共同研究より、タブレットで使いやすく、より正確に速く評価入力が可能なUIの実現を目指す。",
                    "　そこで、一人で撮影でき、距離の制限がなく、好きな角度やタイミングで撮影でき、被写体が平等に写れるソリューションを提案する。<br />　本製品は、本体に接続されているケーブルをイヤホンジャックに接続し、本体付属のリモコンのボタンで台を好きな角度や高さに調整し、好きなタイミングでリモコンのシャッターボタンを押すだけで写真が撮れる、新しい撮影手法を実現するプロダクトである。"];

const pointsTitleH33=["患者側のソリューション","提案する際に気を付けた点"];
const pointsImgSrc3=["img/wonlife.png",""];
const pointsTextP3=["　今回は特に負のスパイラルに陥りやすい高齢者を対象に、その入り口である「患者のモチベーション低下」を阻止するためのシステムを考案した。<br />　対象が高齢リハビリ患者であるため、インタラクションは避け、また、病室に1人1台あり日常的に使っているTVを利用し、一方向のコミュニケーションによってリハビリの効果を実現できるようにした。",
                    "　観光客が持参していた自撮り棒よりも、本製品を利用していただくため、手軽に利用できる必要があった。そこで、スマホにアプリをインストールしたり、設定したりする必要がないソリューションを考えた。<br />　また、観光客に説明なしで使ってもらう必要があったため、わかりやすいUIを心掛けた。結果として、実際に多くの観光客の方に説明なしで利用していただくことが出来た。",
                   ""];

const listOfKindsOfWorkLi=["<li><p>UX Design</p></li> <li><p>Project Management</p></li> <li><p>Front-end Engineering</p></li>",
                          "<li><p>UX Design</p></li> <li><p>Project Management</p></li> <li><p>Product Management</p></li>",
                          "<li><p>UX Design</p></li> <li><p>UI Design</p></li> <li><p>Front-end Engineering</p></li>",
                          "<li><p>Concept Design</p></li> <li><p>Graphic Design</p></li>",
                          "<li><p>Project Management</p></li> <li><p>Concept Design</p></li>"];
const listOfUsedSkillsLi=["<li><p>JavaScript ES6</p></li> <li><p>CSS3</p></li> <li><p>HTML5</p></li> <li><p>XD</p></li>",
                         "<li><p>Processing</p></li> <li><p>Arduino</p></li> <li><p>Illustorator</p></li>",
                         "<li><p>JavaScript</p></li> <li><p>CSS3</p></li> <li><p>HTML5</p></li> <li><p>Illustorator</p></li> <li><p>Photoshop</p></li>",
                         "<li><p>Illustorator</p></li> <li><p>Photoshop</p></li>",
                         "<li><p>Prott</p></li>"];
const whenGradeInfoSpan=[3,2,3,2,3];
const whenMonthInfoP=["5月-11月 (7ヶ月間)" , "10/12-10/28 (2週間)" , "7/6-7/27 (3週間)" , "2/8-2/11 (3日間)" , "8/23-8/29 (7日間)"];
const numberOfMemberSpan=[5,5,1,2,3];
const memberBelongSpan=["同学年4コース混合" , "デザインコース生" , "単独制作" , "デザインコース生" , "インターンチーム"];


function modalOn(newDispNo){
  opening=true;

  dispNo=newDispNo;

  blackWindow.style.visibility="visible";
  blackWindow.style.opacity="0.8";

  openTiming=window.scrollTop;
  main.style.position="fixed";
  main.style.top=`${openTiming*-1}px`;
  main.style.overflowY="scroll";

  const rotater = setInterval(()=>{
    splashImg.style.transition="transform 0.5s"
    splashImg.style.transform="rotateZ(360deg)";
    setTimeout(()=>{
      splashImg.style.transition="none";
      splashImg.style.transform="";
    },0.5*1000);
    if(setOK || !opening){
      clearInterval(rotater);
    }
  },2*1000);

  setModalContents(dispNo);

  const openModal=setTimeout(()=>{
    if(opening){
      console.log("open!!");
      setOK=true;
      modalWindow.style.visibility="visible";
      modalWindow.style.opacity="1";
      modalWindow.style.width="80vw";
      modalWindow.style.height="95vh";
      modalWindow.scrollTo(0,0);
      setTimeout(()=>{
        modalContentsContainer.style.visibility="visible";
        modalContentsContainer.style.opacity="1";
        cancelButtonContainer.style.visibility="visible";
        cancelButtonContainer.style.opacity="1";
      },1*1000);
    }
  },3.5*1000);
}

function setModalContents(dispNo){
  modalTopImg.src=modalTopImgSrc[dispNo];
  modalTitle.textContent=modalTitleH1[dispNo];
  aboutInfoP.innerHTML=abtInfo[dispNo];

  if(dispNo==0 || dispNo==2){
    workSiteURLContainer.style.display="block";
    workSiteURL.href=workSiteURLHref[dispNo];
    pointsOfWork.style.marginTop="16vh";
  }else{
    workSiteURLContainer.style.display="none";
    pointsOfWork.style.marginTop="24vh";
  }

  pointsTitle1.innerHTML=pointsTitleH31[dispNo];
  pointsImg1.src=pointsImgSrc1[dispNo];
  pointsText1.innerHTML=pointsTextP1[dispNo];
  pointsTitle2.innerHTML=pointsTitleH32[dispNo];
  pointsImg2.src=pointsImgSrc2[dispNo];
  pointsText2.innerHTML=pointsTextP2[dispNo];
  pointsTitle3.innerHTML=pointsTitleH33[dispNo];
  pointsImg3.src=pointsImgSrc3[dispNo];
  pointsText3.innerHTML=pointsTextP3[dispNo];


  if(dispNo==5){
    listOfAboutInfo.style.display="none";
  }else{
    listOfAboutInfo.style.display="flex";
    listOfKindsOfWork.innerHTML=listOfKindsOfWorkLi[dispNo];
    listofUsedSkills.innerHTML=listOfUsedSkillsLi[dispNo];
    whenGradeInfo.textContent=whenGradeInfoSpan[dispNo];
    whenMonthInfo.textContent=whenMonthInfoP[dispNo];
    numberOfMember.textContent=numberOfMemberSpan[dispNo];
    memberBelong.textContent=memberBelongSpan[dispNo];
  }

  goToBeforeButton.style.visibility="visible";
  goToNextButton.style.visibility="visible";
  if(dispNo==0){
    goToBeforeButton.style.visibility="hidden";
  }else if(dispNo==5){
    goToNextButton.style.visibility="hidden"
  }
}

function goToNextOrBeforeWork(NextOrBefore){
  modalContentsContainer.style.opacity="0";
  setTimeout(()=>{
    modalContentsContainer.style.visibility="hidden";
    if(NextOrBefore=="Next"){
      setModalContents(++dispNo);
    }else if(NextOrBefore=="Before"){
      setModalContents(--dispNo);
    }
    modalWindow.scrollTo(0,0);
    setTimeout(()=>{
      modalContentsContainer.style.visibility="visible";
      modalContentsContainer.style.opacity="1";
    },1*1000);
  },0.2*1000);

}


function modalOff(){
  modalWindow.style.width="8vw";
  modalWindow.style.height="9.5vh";
  modalWindow.style.opacity="0";
  blackWindow.style.opacity="0";
  modalContentsContainer.style.opacity="0";
  cancelButtonContainer.style.opacity="0";

  setOK=false;
  opening=false;
  setTimeout(()=>{
    blackWindow.style.visibility="hidden";
    modalWindow.style.visibility="hidden";
    modalContentsContainer.style.visibility="hidden";
    cancelButtonContainer.style.visibility="hidden";
    main.style.position="absolute";
    main.style.top=0;
    main.style.overflowY="";
    window.scrollTo(0,openTiming);
  },0.5*1000);
}

window.onscroll = function(){
  scrollTop=window.pageYoffset || document.documentElement.scrollTop;
  ProfileContainerTop=ProfileContainer.getBoundingClientRect().top + scrollTop;
  if(window.scrollTop >= ProfileContainerTop){
    console.log("hey!");
    nav.style.visibility="visible";
    nav.style.opacity="1";
  }else{
    nav.style.visibility="none";
    nav.style.opacity="0";
  }
}
