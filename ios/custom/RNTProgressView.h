//
//  RNTProgressView.h
//  reactMMFinace
//
//  Created by jorgon on 12/05/18.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "InvestmenProgress.h"
#import <React/RCTComponent.h>

@interface RNTProgressView : InvestmenProgress
@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;
@end
