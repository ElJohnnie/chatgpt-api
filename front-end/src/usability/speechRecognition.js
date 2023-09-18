

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const speechRecognition = (useParam) => {
  // eslint-disable-next-line no-undef
  const recognition  = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = 'pt-br';

  console.log(recognition);
  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
      console.log('entrou aqui');
      console.log(e.results);
  });

  recognition.addEventListener('end', recognition.start);

  recognition.stop();
};

export default speechRecognition;