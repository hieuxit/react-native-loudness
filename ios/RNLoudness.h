#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif
#import <React/RCTEventEmitter.h>
#import <AVFoundation/AVFoundation.h>


@interface RNLoudness : RCTEventEmitter <RCTBridgeModule>{
    AVAudioRecorder* recorder;
    NSURL* tmpDirURL;
    NSURL* saveDirURL;
    NSTimer* timer;
}

@end
