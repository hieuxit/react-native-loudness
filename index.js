import {
  NativeModules,
  NativeEventEmitter,
} from 'react-native';

const eventEmitter = new NativeEventEmitter(NativeModules.RNLoudness);

let addListener = (eventName, method) => {
  return eventEmitter.addListener(eventName, (event) => method(event));
}

let start = (fileName) => {
  if (fileName){
    NativeModules.RNLoudness.start(fileName);
  } else {
    NativeModules.RNLoudness.start(null);
  }
}

let stop = NativeModules.RNLoudness.stop;

let getLoudness = NativeModules.RNLoudness.getLoudness;

export default {
  start,
  stop,
  getLoudness,
  addListener
};
