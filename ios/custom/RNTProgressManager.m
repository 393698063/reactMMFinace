//
//  RNTProgressManager.m
//  reactMMFinace
//
//  Created by jorgon on 11/05/18.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RNTProgressManager.h"
#import "InvestmenProgress.h"

@interface RNTProgressManager ()

@end

@implementation RNTProgressManager
RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(progress, CGFloat);
RCT_EXPORT_VIEW_PROPERTY(ProgressString, NSString *);
//RCT_CUSTOM_VIEW_PROPERTY(progress, null, InvestmenProgress)
//{
//  [view setProgress:json animated:YES];
////  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
//}

- (UIView *)view
{
  return [[InvestmenProgress alloc] init];
}
@end
