

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const speechRecognition = () => {
  // eslint-disable-next-line no-undef
  const recognition  = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = 'pt-br';

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

      console.log(e);
  });

  recognition.addEventListener('end', recognition.start);

  recognition.start();
};

export default speechRecognition;