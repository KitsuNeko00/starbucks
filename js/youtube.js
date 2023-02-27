// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "An6LvWQuj_8",
    // 최초 재생할 유튜브 영상 ID (유튜브 링크 주소에 v= 다음 부분)
    playerVars: {
      autoplay: true,
      // 영상 자동 재생 유무
      loop: true,
      // 영상 반복 재생 유무
      playlist: "An6LvWQuj_8",
      // 반복 재생 유무의 값이 ture일 경우 다시 반복해서 재생할 유튜브 영상의 id를 목록으로 제공해줘야 함
    },
    // playerVars는 영상을 재생하기 위한 여러가지 변수들
    events: {
      onReady: function (event) {
        event.target.mute();
        // 음소거
      },
    },
  });
}
