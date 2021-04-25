function clickofferpasted() {
  console.log('clickremoteoffer');
  document.getElementById('buttonofferpasted').disabled = true;
  peerConnection = createPeerConnection(lasticecandidate);
  peerConnection.ondatachannel = handledatachannel;
  textelement = document.getElementById('textoffer');
  textelement.readOnly = true;
  offerId = textelement.value;
  fetch("https://webtrc-register-master.iisaev.workers.dev/getOffer", {
    method: "post",
    body: JSON.stringify({
      id : offerId
    })
  })
      .then((data) => data.json())
      .then((data) => {
        setRemotePromise = peerConnection.setRemoteDescription(data);
        setRemotePromise.then(setRemoteDone, setRemoteFailed);
  })
}

function setRemoteDone() {
  console.log('setRemoteDone');
  createAnswerPromise = peerConnection.createAnswer();
  createAnswerPromise.then(createAnswerDone, createAnswerFailed);
}

function setRemoteFailed(reason) {
  console.log('setRemoteFailed');
  console.log(reason);
}

function createAnswerDone(answer) {
  console.log('createAnswerDone');
  setLocalPromise = peerConnection.setLocalDescription(answer);
  setLocalPromise.then(setLocalDone, setLocalFailed);
  document.getElementById('spananswer').classList.toggle('invisible');
}

function createAnswerFailed(reason) {
  console.log('createAnswerFailed');
  console.log(reason);
}

function setLocalDone() {
  console.log('setLocalDone');
}

function setLocalFailed(reason) {
  console.log('setLocalFailed');
  console.log(reason);
}

function lasticecandidate() {
  console.log('lasticecandidate');
  textelement = document.getElementById('textanswer');
  answer = peerConnection.localDescription
  fetch("https://webtrc-register-master.iisaev.workers.dev/makeAnswer", {
    method: "post",
    body: JSON.stringify(answer)
  })
      .then(data => data.json())
      .then(data => {
        textelement.value = data.id;
      })
}

function handledatachannel(event) {
  console.log('handledatachannel');
  dataChannel = event.channel;
  dataChannel.onopen = datachannelopen;
  dataChannel.onmessage = datachannelmessage;
}
