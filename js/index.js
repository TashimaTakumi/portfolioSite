var openTiming;
var setOK=false;
var opening=false;

var dispNo=0;

const modalTopImgSrc = ["img/wonlife.png" , "img/ojisan.JPG" , "img/siden.png" , "img/sotsuten.jpg" , "img/recoa.png" , "img/otherworks.png"];
const modalTitleH1 = ["Won-Life","メモリアルおじさん。","函館市電Webサイト","卒展特別展示用パンフレット","recoa",""];
const abtInfo = ["　近い将来、大きな問題となることが予測されている「リハビリテーション」をテーマとして捉え、企画・制作したシステム。<br />　リハビリテーションにおける監督者の負担軽減と、実施者の意欲低下を課題として捉え、病院へのフィールドワークを繰り返し、解決に取り組んだ。<br />　本研究は現在、株式会社KDDI総合研究所様・東京女子医科大学様から共同研究のお話を頂いている。",
               "　講義テーマ「はこだての未来の景色を創る」のテーマの下、フィールドワークとして函館市を散策した際、多く見受けられた「写真撮影」に課題感を持ち、取り組んだ製品。<br />　近年流行しており、フィールドワークでも多く見受けられた「自撮り」に着目し、そのメリットは残しつつ、デメリットをなくすことを目指した。<br />　本プロダクトは最終的に、2つ上の先輩が主催する卒業展示会の特別展示ブースへの作品展示を依頼され、UXを改善後、展示を行った。",
               '　HCDの観点において<a target="_blank" href="https://www.city.hakodate.hokkaido.jp/bunya/hakodateshiden/">函館市電のWebサイト</a>を分析し、問題点として考察した点を修正したWebサイト。<br />　ユーザーが目的としている情報に、迷わずにたどり着かせることを目指し、フレームワークの作成から実装までを一貫して行った。<br />　実際に評価実験を行い、情報の探索にかかる時間が75％削減でき、t検定においても、有意な差を得ることが出来た。',
               "　2つ上の先輩方の卒業展覧会の特別ブースに、制作した作品（メモリアルおじさん。）を展示させていただく際、先輩方から依頼を受けて制作した特別展示ブース用パンフレット。<br />　テキストや画像などの各要素の配置はもちろんのこと、パンフレット自体の材質や大きさ、折り方なども含めデザインした。<br />　市民の方に向けて配布したが、「わかりやすい」や、「楽しく見れた」という感想をいただいた。",
               "　夏のインターンシップにて「住まい＊AIで人々を幸せにするサービス」という課題を与えられ、考案した、捨てられない思い出の品をリノベーションして次のユーザーへと繋ぐサービス。<br />　ユーザーニーズを把握するため、ペルソナを立て、そのペルソナの条件がある程度一致する人へインタビューを行いつつ、表面的な問題の本質を探った。<br />　最終発表会では、1位は逃したものの、ビジネス面で評価されるとともに、ペルソナに合致した人からは「是非実現してほしいサービス」という声を頂けた。",
               ""];
const workSiteURLHref=["https://tashimatakumi.github.io/FunMedical/","https://www.youtube.com/watch?v=4co9j3zYrLc&feature=youtu.be","https://tashimatakumi.github.io/SidenWeb/"]

const pointsTitleH31=["リハビリ現場における問題","「自撮り」の問題点","従来サイトの考察","制作にあたって","ペルソナの選定"];
const pointsImgSrc1=["img/riha1.jpg","img/ojisan2.jpg","img/siden2.PNG","img/sotsuten2.jpg","img/recoa1.PNG"];
const pointsTextP1=["　リハビリを評価する項目の一つであるFIMは国際的な評価基準であり、信頼性も高い一方、評価項目の多さによる監督者への負担がその普及を妨げている。<br />　また、患者側においては、「患者が効果を実感出来ずに、リハビリに対する意欲を失い、それが原因で効果が更に発揮されなくなる」という、負のスパイラルが起こることが問題となっている。",
                    "　「自撮り」は、他人に撮ってもらう手法に比べ、他人に迷惑をかけず、自分の好きな角度やタイミングで写真を撮ることが出来る。<br />　その一方で、自撮り棒などの道具を利用するため、距離制限があるため観光地全体を綺麗に写すことは難しく、また、撮影者が一番大きく写ってしまうというデメリットを抱えている。",
                    "　あらかじめほしい情報を考え従来サイトを参照すると、必要な情報にたどり着くことが困難なことがわかる。<br />　この理由として、サイトを訪れる際に多くのユーザーが求めてくるであろう情報が、深い階層下にあったり、ページの端の狭い領域に置かれていたりすることが挙げられると考察した。",
                    '　本パンフレットの制作にあたり、制作 メンバーとともにパンフレットの重視する点を議論した。結果として、卒業展覧会自体は市民の方々に告知していたが、特別展示ブースについては告知していなかったため、"ついで"で観覧していただくために、「情報の伝わりやすさ」を第1に考えることに決定した。',
                    "　サービスを提案するにあたり、「すべての人を少しだけ幸せにする」よりは、「本当に助けを必要としている人を救いたい」というグループの意向があったため、ペルソナは深刻な悩みを持っている人物を考えた。この時、存在し得ないペルソナでは意味がないので、市場調査などを行い、データに基づいて決定した。"];

const pointsTitleH32=["監督者側のソリューション","提案するソリューション","問題点改善方法","折り方・情報配置の工夫","提案するソリューション"];
const pointsImgSrc2=["img/wonlife2.png","img/ojisan3.jpg","img/siden3.png","img/panf2.jpg","img/recoa2.PNG"];
const pointsTextP2=["　リハビリ監督者の負担を減らしつつ、FIMの活用を行うため、入力したデータをDBに蓄積する機能を持つシステムを目指した。<br />　結果として、場所に縛られず、即座にDBへアクセスすることが出来るよう、タブレット端末とWebアプリケーションの組み合わせによって評価を行うことにした。<br />　今後は東京女子医科大学様との共同研究より、タブレットで使いやすく、より正確に速く評価入力が可能なUIの実現を目指す。",
                    "　従来の撮影手法の問題点を解決し、一人で撮影でき、距離の制限がなく、好きな角度やタイミングで撮影でき、被写体が平等に写れるソリューションを考案した。<br />　本製品は、本体に接続されているケーブルをイヤホンジャックに接続し、本体付属のリモコンのボタンで台を好きな角度や高さに調整し、好きなタイミングでリモコンのシャッターボタンを押すだけで写真が撮れる、新しい撮影手法を実現するプロダクトである。",
                    "　従来サイトの全ての情報を網羅した上で情報探索時間を削減するため、適切な情報のグループ化と階層化、ラベリングを行った。<br />　また、それぞれのグループを情報を届けたいユーザーごとにグルーピングし、ラベリングすることでユーザー自身が対象を自覚し、必要な情報をより早く発見できるようにした。",
                    "　折り方については、観覧者は他の展覧会のパンフレットを持っていることを想定し、邪魔にならないよう4つ折りにした。<br />　また、表紙を見たのち、開くと2つの展示物のカテゴリーの説明が一覧できる形にした。さらに開くと、開いた側のカテゴリーの作品が一覧できるようになっている。また、すべてのページにおいて写真を第1に置くことで、興味があるかないかを判断できるようにしてある。",
                    "　思い出が深い家具を整理出来ずにいる人（以下Aさん）と、自分好みの家具を安く手に入れたい人（以下Bさん）をつなぐサービスを提案した。<br />　本サービスは、Aさんの整理したいが、大切に使ってほしい家具を、デザイナーがBさんの要望を受けてリノベーションし、販売するCtoBtoCサービスである。<br />　1年目の利益は2,736,000円見込まれている。"];

const pointsTitleH33=["患者側のソリューション","工夫点と結果","評価実験","色やフォントの工夫","留意した点と結果"];
const pointsImgSrc3=["img/wonlife.png","img/ojisan4.JPG","img/siden4.PNG","img/sotsuten.jpg","img/recoa4.PNG"];
const pointsTextP3=["　今回は特に負のスパイラルに陥りやすい高齢者を対象に、その入り口である「患者のモチベーション低下」を阻止するためのシステムを考案した。<br />　対象が高齢リハビリ患者であるため、インタラクションは避け、また、病室に1人1台あり日常的に使っているTVを利用し、一方向のコミュニケーションによってリハビリの効果を実現できるようにした。",
                   "　提案に際し、問題点を解決することはもちろんのこと、実際に従来の撮影手法よりも使っていただくために、容易に利用できる形で実現する点に留意した。また、説明をせずとも利用していただけることにも注力した。<br />　結果として、実際に函館市西部地区にて展示を行った際、自撮り棒を持参していた観光客でさえ、本製品を利用し写真撮影を行っている風景が見受けられた。",
                   "　制作したWebサイトと従来のWebサイトについて、評価実験を行った。対象は同じ課題に取り組んでいた学生7名であったため、情報の探索時間という点において非常に不利な条件ではあったが、有意な差を確認できた。<br />　また、イベントについても新たに知ってもらうことに成功した。",
                   "　色については、各作品カテゴリーの単独展示会時に利用していた色をそのまま利用することで、様々な展示会の総集編だということが伝わるように心掛けた。<br />　また、フォントについてはタイトルには明朝体を使いゆったりとした印象を、本文にはゴシック体を使い読みやすさを確保した。",
                   "　サービスを考案するにあたり、サービスの実現可能性について留意した。いくら人を幸せにできるサービスだとしても、実現性がなければ意味がないと考えたためだ。<br />　結果として、インターン先のCEOから実現可能性について高い評価を頂き、ペルソナに近い人々からは「ぜひ実現してほしい」という声を頂くことが出来た。"];

const howToMadeDescriptionImgSrc1=["img/beforeWonlife.PNG","img/hotRoad.jpg","img/siden2.PNG","img/sotsuten2.jpg","img/recoa1.PNG"];
const howToMadeDescriptionH31Text=["チームテーマの決定と要件定義","チームテーマの決定","従来サイトの分析","方向性・コンセプトの決定","ペルソナの決定"];
const howToMadeDescriptionP1Text=["　チーム全体で、各々が関心のあるテーマについて、調査を行い、現場に潜んでいる問題を探した。<br />　その結果、当グループでは「センシングによるリハビリテーションの進捗の可視化と、それに伴う患者のモチベーションの向上」をテーマとし、活動を行うこととなった。",
                                  "　企画から実際に形に起こすまでの期間が2週間と非常に短かったため、先にテーマを決め、設計していくことにした。<br />　函館市の西部地区で行う、展示会の開催時期が11月ということを考え、人が自然に集まることで暖かくなる製品「Hot Road」を考案した。",
                                  "　従来のWebサイトの要素をすべて書き出し、どこに何があるのかを探ることによって、従来サイトの分析を行った。<br />　その結果、情報の階層の乱れや、リンク切れ、情報グループ化目的の不統一などによって、ユーザーがほしい情報にたどり着くまでにかかる時間が大きすぎると考察した。",
                                  "　方向性・コンセプトを定めるため、共同制作者と一緒に今回の展示会の目的を考えた。出てきた要素をまとめるためにKJ法を利用し、整理を行った。<br />　結果として、「大学全体の活動を表現する」ことが目的であると分析し、それに伴った方向性のパンフレットの制作を行うことにした。",
                                  "　与えられたテーマ「住まい*AIで人々を幸せにするサービス」について考えるため、ペルソナを立てることにした。本当に助けを必要としている人を救いたい」というグループの意向があったため、深刻な悩みを持っているペルソナを設定した。"];
const howToMadeDescriptionImgSrc2=["img/riha4.jpg","img/ojisan6.jpg","img/siden3.png","img/sotsuten.jpg","img/interview.jpg"];
const howToMadeDescriptionH32Text=["フィールドワークの実施と成果","フィールドワークの実施と成果","新サイトのデザイン決定","コンセプト実現方法の考案","インタビュー・調査の実施"];
const howToMadeDescriptionP2Text=["　チームテーマの決定と要件定義が完了したため、実際に函館市内の病院の中で、特にリハビリテーションが有名である「高橋病院」様でフィールドワークを実施させていただいた。<br />　その結果、私たちが考えていた「センシングによるリハビリ状況の可視化」という解決方法は、現場から求められていないことがわかった。",
                                  "　テーマ決定後、場所の確保や実際の環境の調査のために、函館市の西部地区でフィールドワークを行った。<br />　その結果、この時期にしか使えない作品を作るよりも、年中起こっている問題である「写真撮影」に注目した意見が多くなり、テーマの考え直しを行うことになった。",
                                  "　従来サイトの考察を受け、情報探索時間を削減することのできるサイトデザインを心掛け、新サイトのデザインを行った。この際、役所のWebであることから、ユーザーのタイプによって使いやすさが異なったり、これまで存在してた情報が抜けたりしないよう注意しながらデザインを行った。",
                                  "　コンセプトの実現を行うため、パンフレットの作製に必要な要素の書き出しを行った。例えば、「パンフレットの折り方」や、「要素の置き方」、「色使い」などである。<br />　これらを、一つ一つ丁寧にコンセプトと照らし合わせながら決めていくことで、全体がコンセプトからブレないようにデザインを行っていった。",
                                  "　ペルソナの設定後、論文調査や研究調査、インターンシップ先企業様の社員の方々の中でペルソナに近い人へのインタビューを行った。<br />　それらの結果をもとに、ペルソナを微調整することにより、実在性の確保とより鮮明なニーズの発見に努めた。"];
const howToMadeDescriptionImgSrc3=["img/wonlife.png","img/ojisan5.JPG","img/siden4.PNG","img/panf2.jpg","img/recoa2.PNG"];
const howToMadeDescriptionH33Text=["システムの要件再定義と開発","企画と制作、展示と改善","従来サイトと新サイトの比較","担当の決定とデザイン","コンセプトとUIの作成"];
const howToMadeDescriptionP3Text=["　フィールドワークの結果を受けて、システムの要件の再定義を行った。<br />　前案では、リハビリのセンシングを行うことは止め、現場で利用されている指標であるFIMを利用し、療法士の負担軽減と、リハビリを行う当事者のモチベーションの向上を目指すこととした。<br />開発の際には、XDによるデザインと、HTML,CSS,Javascriptによるコーディングを行った。",
                                  "　フィールドワークの結果を受けて、企画を練り直した結果、従来の撮影手法の問題点をすべて解決した新しい撮影手法の提案を目指すことになった。<br />　Illustoratorによりデザインを行い、ArduinoやProcessingにより開発を行った。<br />　11月上旬に函館市の赤レンガ倉庫にて展示を行い、ユーザーからフィードバックを頂き、UI/UXの改善を行った。",
                                  "　新サイトをHTML,CSS,Javascriptによって作成した後、従来サイトとの比較テストを行った。<br />　比較において、被験者はあらかじめ自身の立場と探したい情報を頭に入れたうえで、実験に参加した。測定した内容は、情報探索時間である。<br />　結果として、対象が同じ課題に取り組んでいた学生であったため、不利であったにもかかわらず、情報の探索時間を75％削減することに成功した。",
                                  "　実際に書き起こしを行うに際し、担当を分担することにした。しかし、それによりデザインのテイストが狂ってしまったら、コンセプトに準じた意味がなくなってしまう。<br />　そこで、これを避けるため、デザイン担当部分を交換し、修正することでレビューとし、デザインテイストをそろえながらクオリティを高めることに成功した。",
                                  "　ペルソナの課題を解決できるサービスのコンセプトとUIの設計を行った。<br />　この際、Prottを利用し、実際のUXも想像できるようにデザインした。"];


const listOfKindsOfWorkLi=["<li><p>UX Design</p></li> <li><p>Project Management</p></li> <li><p>Front-end Engineering</p></li>",
                          "<li><p>UX Design</p></li> <li><p>Project Management</p></li> <li><p>Product Management</p></li>",
                          "<li><p>UX Design</p></li> <li><p>UI Design</p></li> <li><p>Front-end Engineering</p></li>",
                          "<li><p>Concept Design</p></li> <li><p>Graphic Design</p></li>",
                          "<li><p>Project Management</p></li> <li><p>Concept Design</p></li>"];
const listOfUsedSkillsLi=["<li><p>JavaScript ES7</p></li> <li><p>CSS3</p></li> <li><p>HTML5</p></li> <li><p>XD</p></li>",
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

  openTiming='scrollingElement' in document ? document.scrollingElement.scrollTop : document.documentElement.scrollTop;
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
      modalWindow.scrollTop=0;
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

  if(dispNo==0 | dispNo==1 | dispNo==2){
    workSiteURLContainer.style.display="block";
    workSiteURL.href=workSiteURLHref[dispNo];
    pointsOfWork.style.marginTop="16vh";
    if(dispNo==1){
      workSiteText.textContent="結果を撮影した動画はこちら";
    }else if(dispNo==2){
      workSiteText.textContent="制作したサイトはこちら";
    }else {
      workSiteText.textContent="制作したアプリはこちら";
    }
  }else{
    workSiteURLContainer.style.display="none";
    pointsOfWork.style.marginTop="24vh";
  }


  if(dispNo==5){
    pointsOfWork.style.display="none";
    forOtherWorks.style.display="flex";
    howToMade.style.display="none";

  }else{
    pointsOfWork.style.display="flex";
    forOtherWorks.style.display="none";

    howToMade.style.display="block";

    howToMadeDescriptionImg1.src=howToMadeDescriptionImgSrc1[dispNo];
    howToMadeDescriptionH31.textContent=howToMadeDescriptionH31Text[dispNo];
    howToMadeDescriptionP1.innerHTML=howToMadeDescriptionP1Text[dispNo];
    howToMadeDescriptionImg2.src=howToMadeDescriptionImgSrc2[dispNo];
    howToMadeDescriptionH32.textContent=howToMadeDescriptionH32Text[dispNo];
    howToMadeDescriptionP2.innerHTML=howToMadeDescriptionP2Text[dispNo];
    howToMadeDescriptionImg3.src=howToMadeDescriptionImgSrc3[dispNo];
    howToMadeDescriptionH33.textContent=howToMadeDescriptionH33Text[dispNo];
    howToMadeDescriptionP3.innerHTML=howToMadeDescriptionP3Text[dispNo];

    pointsTitle1.innerHTML=pointsTitleH31[dispNo];
    pointsImg1.src=pointsImgSrc1[dispNo];
    pointsText1.innerHTML=pointsTextP1[dispNo];
    pointsTitle2.innerHTML=pointsTitleH32[dispNo];
    pointsImg2.src=pointsImgSrc2[dispNo];
    pointsText2.innerHTML=pointsTextP2[dispNo];
    pointsTitle3.innerHTML=pointsTitleH33[dispNo];
    pointsImg3.src=pointsImgSrc3[dispNo];
    pointsText3.innerHTML=pointsTextP3[dispNo];
  }


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
    modalWindow.scrollTop=0;
    setTimeout(()=>{
      modalContentsContainer.style.visibility="visible";
      modalContentsContainer.style.opacity="1";
    },1*1000);
  },0.2*1000);

}

function biggerImgOpen(){
  biggerImg.src=event.target.src;

  biggerImgWindow.style.visibility="visible";
  biggerImgWindow.style.opacity="1";

  blackWindow.style.zIndex="103";
  cancelButtonContainer.style.zIndex="105";
  blackWindow.onclick=new Function("biggerImgClose()");
  cancelButtonContainer.onclick=new Function("biggerImgClose()");
}
function biggerImgClose(){
  biggerImgWindow.style.opacity="0";
  blackWindow.style.zIndex="100";
  cancelButtonContainer.style.zIndex="102";
  setTimeout(()=>{
    biggerImgWindow.style.visibility="hidden";
    blackWindow.onclick=new Function("modalOff()");
    cancelButtonContainer.onclick=new Function("modalOff()");
  },0.8*1000);
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
  console.log(window.pageYoffset);
  console.log(document.documentElement.scrollTop);
  let nowScrollTop=window.pageYoffset || document.documentElement.scrollTop;
  ProfileContainerTop=ProfileContainer.getBoundingClientRect().top + nowScrollTop;
  if(nowScrollTop >= ProfileContainerTop){
    console.log("hey!");
    nav.style.visibility="visible";
    nav.style.opacity="1";
  }else{
    nav.style.opacity="0";
    setTimeout(()=>{
      nav.style.visibility="hidden";
    },0.5*1000);
  }
}
