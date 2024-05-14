
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNAlipayAllSpec.h"

@interface AlipayAll : NSObject <NativeAlipayAllSpec>
#else
#import <React/RCTBridgeModule.h>

@interface AlipayAll : NSObject <RCTBridgeModule>
#endif

@end
