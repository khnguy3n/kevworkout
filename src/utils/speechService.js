class SpeechService {
  MAX_VOLUME = 100;

  constructor() {
    if (SpeechService.instance) {
      return SpeechService.instance;
    }

    SpeechService.instance = this;
  }

  speak(message) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.volume = this.MAX_VOLUME;
    utterance.text = message;
    window.speechSynthesis.speak(utterance);
  }
}
const speechService = new SpeechService();
Object.freeze(speechService);

export default speechService;
