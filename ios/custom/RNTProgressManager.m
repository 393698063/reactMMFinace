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

- (UIView *)view
{
  return [[InvestmenProgress alloc] init];
}
@end
