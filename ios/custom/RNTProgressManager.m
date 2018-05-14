//
//  RNTProgressManager.m
//  reactMMFinace
//
//  Created by jorgon on 11/05/18.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RNTProgressManager.h"
#import "InvestmenProgress.h"


@interface RCTConvert (InvestmenProgress)
+ (NSString *)progressConvert:(id)json;
@end

@implementation RCTConvert (InvestmenProgress)

+ (NSString *)progressConvert:(id)json{
  return json[@"name"];
}
@end

@interface RNTProgressManager ()

@end

@implementation RNTProgressManager
RCT_EXPORT_MODULE()
/*
 The first thing we can do to make this component
 more usable is to bridge over some native properties
 */
RCT_EXPORT_VIEW_PROPERTY(progress, CGFloat)
//
RCT_EXPORT_VIEW_PROPERTY(ProgressString, NSString *)

/*
   this is more complicated than the simple BOOL case we had before
 */
RCT_CUSTOM_VIEW_PROPERTY(progressState, progressConvert, InvestmenProgress)
{
  [view setProgressState:json ? [RCTConvert progressConvert:json] : defaultView.progressState];
}

- (UIView *)view
{
  return [[InvestmenProgress alloc] init];
}
@end
